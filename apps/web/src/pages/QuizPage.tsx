import { useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import {
  DEFAULT_FIRST_NAME,
  attemptsLeft,
  createId,
  gradeQuiz,
  personalise,
  pickVariant,
  type LocalizedText,
  type QuizAttempt,
  type QuizResult,
} from '@lms/core';
import { Emphasis } from '../components/Emphasis';
import { AppShell } from '../components/AppShell';
import { ProgressBar } from '../components/Progress';
import { getCourseBySlug, getQuiz } from '../content';
import { Shield, useProtectedScreen } from '../protection';
import { useApp } from '../state/app-context';
import { D, useI18n } from '../i18n';
import { useFeedback } from '../feedback/useFeedback';
import {
  IconAlert,
  IconAward,
  IconCheck,
  IconChevronRight,
  IconClock,
  IconInfo,
  IconMinus,
  IconShieldCheck,
  IconX,
} from '../components/Icons';

export function QuizPage() {
  const { slug, quizId } = useParams();
  const { user, state, pushToast, recordAttempt, completeLesson } = useApp();
  const { l, formatNumber, formatDate } = useI18n();
  const { play, celebrate } = useFeedback();
  const firstName = user?.firstName?.trim() || DEFAULT_FIRST_NAME;
  /** Resout `{prenom}` dans les trois langues avant affichage. */
  const personaliseText = (text: LocalizedText): LocalizedText => ({
    fr: personalise(text.fr, firstName),
    en: personalise(text.en, firstName),
    zh: personalise(text.zh, firstName),
  });
  const KIND_LABEL = {
    single: l(D.quiz.kindSingle),
    multiple: l(D.quiz.kindMultiple),
    boolean: l(D.quiz.kindBoolean),
  } as const;
  const course = getCourseBySlug(slug);
  const quiz = getQuiz(quizId ?? '');

  const [responses, setResponses] = useState<Record<string, readonly string[]>>({});
  const [result, setResult] = useState<QuizResult | null>(null);
  const [startedAt] = useState(() => new Date().toISOString());

  const { shieldReason } = useProtectedScreen();

  const history = useMemo(
    () => state.attempts.filter((attempt) => attempt.quizId === quizId),
    [state.attempts, quizId],
  );

  if (!course || course.status !== 'published') return <Navigate to="/app" replace />;
  if (!quiz) return <Navigate to={`/app/cours/${course.slug}`} replace />;

  const lesson = course.modules.flatMap((module) => module.lessons).find((item) => item.quizId === quiz.id);
  const left = attemptsLeft(quiz, state.attempts);
  const answeredCount = quiz.questions.filter((question) => (responses[question.id] ?? []).length > 0).length;
  const locked = result !== null;

  function toggleAnswer(questionId: string, answerId: string, multiple: boolean) {
    if (locked) return;
    setResponses((current) => {
      const previous = current[questionId] ?? [];
      if (!multiple) return { ...current, [questionId]: [answerId] };
      return {
        ...current,
        [questionId]: previous.includes(answerId)
          ? previous.filter((id) => id !== answerId)
          : [...previous, answerId],
      };
    });
  }

  function submit() {
    if (!quiz) return;
    const graded = gradeQuiz(quiz, responses);
    const attempt: QuizAttempt = {
      id: createId('att'),
      quizId: quiz.id,
      startedAt,
      submittedAt: new Date().toISOString(),
      score: graded.score,
      maxScore: graded.maxScore,
      percentage: graded.percentage,
      passed: graded.passed,
      responses,
    };
    setResult(graded);
    recordAttempt(attempt, l(quiz.title));
    if (lesson) completeLesson(lesson.id, l(lesson.title));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Le résultat remonte en haut de page : la gerbe part de là.
    if (graded.passed) celebrate(graded.percentage === 100 ? 'levelUp' : 'success', { x: 0.5, y: 0.3 });
    else play('error');
    pushToast({
      tone: graded.passed ? 'success' : 'warning',
      title: graded.passed ? D.quiz.toastPassed : D.quiz.toastFailed,
      text: D.quiz.toastScore(graded.percentage, quiz.passingScore),
    });
  }

  function retry() {
    setResponses({});
    setResult(null);
    window.scrollTo({ top: 0 });
  }

  const exhausted = left <= 0 && !result;

  return (
    <AppShell
      title={l(quiz.title)}
      crumb={l(course.title)}
      actions={
        user?.role === 'admin' ? (
          <span className="badge badge--success">
            <IconShieldCheck size={12} /> {l(D.common.protected)}
          </span>
        ) : undefined
      }
    >
      <Shield reason={shieldReason} />

      <div className="quiz protected">
        <header className="pagehead pagehead--reader">
          <div className="pagehead__text">
            <span className="pagehead__eyebrow">{l(D.common.quiz)}</span>
            <h1>{l(quiz.title)}</h1>
            <p>{l(quiz.description)}</p>
            <div className="quiz__rules" style={{ marginTop: 'var(--space-5)' }}>
              <span className="badge">
                <IconAward size={12} /> {l(D.quiz.passing(quiz.passingScore))}
              </span>
              <span className="badge">
                <IconClock size={12} /> {l(D.quiz.questions(quiz.questions.length))}
              </span>
              <span className="badge">
                {quiz.maxAttempts === 0
                  ? l(D.quiz.attemptsUnlimited)
                  : l(D.quiz.attemptsLeft(Number.isFinite(left) ? left : quiz.maxAttempts, quiz.maxAttempts))}
              </span>
              <span className="badge">{quiz.partialCredit ? l(D.quiz.partialOn) : l(D.quiz.partialOff)}</span>
            </div>
            {!result ? (
              <p className="quiz__coach">
                {l(personaliseText(pickVariant(D.coach.quizIntro, quiz.id) ?? D.coach.quizIntro[0]))}
              </p>
            ) : null}
          </div>
        </header>

        {result ? (
          <section className={result.passed ? 'result result--passed' : 'result result--failed'}>
            <div
              className="result__glow"
              style={{
                background: result.passed
                  ? 'linear-gradient(120deg, #3ecf8e, #17845a)'
                  : `linear-gradient(120deg, ${course.accentFrom}, ${course.accentTo})`,
              }}
            />
            <span className={result.passed ? 'badge badge--success' : 'badge badge--warning'}>
              {result.passed ? l(D.quiz.passed) : l(D.quiz.failed)}
            </span>
            <div className="result__score">{result.percentage}%</div>
            <p className="result__label">
              {l(
                result.passed
                  ? D.coach.quizPassed(firstName, result.percentage)
                  : D.coach.quizFailed(firstName, result.percentage),
              )}
            </p>
            <p className="result__label result__label--sub">
              {result.passed
                ? l(D.quiz.passedText(result.correctCount, result.total))
                : l(D.quiz.failedText(quiz.passingScore))}
            </p>
            <div className="result__stats">
              <span className="result__stat">
                <span>
                  {formatNumber(result.score)} / {result.maxScore}
                </span>
                <span>{l(D.quiz.statPoints)}</span>
              </span>
              <span className="result__stat">
                <span>
                  {result.correctCount} / {result.total}
                </span>
                <span>{l(D.quiz.statCorrect)}</span>
              </span>
              <span className="result__stat">
                <span>{Number.isFinite(left) ? Math.max(0, left) : '∞'}</span>
                <span>{l(D.quiz.statAttempts)}</span>
              </span>
            </div>
            <div className="row" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
              {left > 0 ? (
                <button type="button" className="btn btn--secondary" onClick={retry}>
                  {l(D.quiz.retry)}
                </button>
              ) : null}
              <Link className="btn btn--primary" to={`/app/cours/${course.slug}`}>
                {l(D.lesson.backToSyllabus)} <IconChevronRight size={15} />
              </Link>
            </div>
          </section>
        ) : exhausted ? (
          <section className="empty">
            <IconAlert size={22} />
            <strong style={{ color: 'var(--text)' }}>{l(D.quiz.exhausted)}</strong>
            <span>{l(D.quiz.exhaustedText(quiz.maxAttempts))}</span>
            <Link className="btn btn--secondary" to={`/app/cours/${course.slug}`}>
              {l(D.lesson.backToSyllabus)}
            </Link>
          </section>
        ) : (
          <div className="quiz__progress">
            <span className="muted tabnum" style={{ fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
              {l(D.quiz.answered(answeredCount, quiz.questions.length))}
            </span>
            <ProgressBar value={(answeredCount / quiz.questions.length) * 100} thin />
            <button
              type="button"
              className="btn btn--primary"
              disabled={answeredCount < quiz.questions.length}
              onClick={submit}
            >
              {l(D.quiz.submit)}
            </button>
          </div>
        )}

        {!exhausted || result
          ? quiz.questions.map((question, index) => {
              const graded = result?.questions.find((item) => item.questionId === question.id);
              const selected = responses[question.id] ?? [];
              const multiple = question.kind === 'multiple';

              return (
                <article
                  className={
                    graded ? (graded.correct ? 'question question--correct' : 'question question--wrong') : 'question'
                  }
                  key={question.id}
                  id={`q-${question.id}`}
                >
                  <div className="question__head">
                    <span className="question__num">{index + 1}</span>
                    <div style={{ minWidth: 0 }}>
                      <div className="question__prompt">{l(question.prompt)}</div>
                      <div className="question__meta">
                        <span>{KIND_LABEL[question.kind]}</span>
                        <span>{l(D.quiz.points(question.points))}</span>
                        {graded ? (
                          <span className={graded.correct ? 'severity severity--info' : 'severity severity--critical'}>
                            {formatNumber(graded.earned)} / {graded.possible}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div className="options" role={multiple ? 'group' : 'radiogroup'}>
                    {question.answers.map((answer) => {
                      const isSelected = selected.includes(answer.id);
                      const isCorrect = answer.correct;
                      let className = 'option';
                      if (graded) {
                        className += ' option--locked';
                        if (isSelected && isCorrect) className += ' option--correct';
                        else if (isSelected && !isCorrect) className += ' option--incorrect';
                        else if (!isSelected && isCorrect) className += ' option--missed';
                      } else if (isSelected) {
                        className += ' option--selected';
                      }

                      return (
                        <button
                          type="button"
                          className={className}
                          key={answer.id}
                          onClick={() => {
                            toggleAnswer(question.id, answer.id, multiple);
                            play('select');
                          }}
                          aria-pressed={isSelected}
                          disabled={locked}
                        >
                          <span className={multiple ? 'option__box' : 'option__box option__box--radio'}>
                            {graded && !isSelected && isCorrect ? (
                              <IconMinus size={11} />
                            ) : graded && isSelected && !isCorrect ? (
                              <IconX size={11} />
                            ) : (
                              <IconCheck size={11} />
                            )}
                          </span>
                          <span>{l(answer.text)}</span>
                        </button>
                      );
                    })}
                  </div>

                  {graded ? (
                    <div className="explanation">
                      <span className="explanation__icon">
                        <IconInfo size={16} />
                      </span>
                      <span>
                        <strong>{l(D.quiz.correction)} </strong>
                        <Emphasis text={l(question.explanation)} />
                      </span>
                    </div>
                  ) : null}
                </article>
              );
            })
          : null}

        {!result && !exhausted ? (
          <button
            type="button"
            className="btn btn--primary btn--lg"
            disabled={answeredCount < quiz.questions.length}
            onClick={submit}
          >
            {l(D.quiz.submitCount(answeredCount, quiz.questions.length))}
          </button>
        ) : null}

        {history.length > 0 ? (
          <section className="card card--flush">
            <div className="card__header">
              <h3>{l(D.quiz.history)}</h3>
              <span className="card__hint">{l(D.quiz.historyCount(history.length))}</span>
            </div>
            {history.map((attempt, index) => (
              <div className="attempt-row" key={attempt.id}>
                <span className="muted tabnum" style={{ width: 28 }}>
                  #{history.length - index}
                </span>
                <span className={attempt.passed ? 'badge badge--success' : 'badge badge--danger'}>
                  {attempt.percentage}%
                </span>
                <span className="muted">{l(D.quiz.pointsOf(formatNumber(attempt.score), attempt.maxScore))}</span>
                <span className="muted" style={{ marginLeft: 'auto', fontSize: '0.78rem' }}>
                  {formatDate(attempt.submittedAt)}
                </span>
              </div>
            ))}
          </section>
        ) : null}
      </div>
    </AppShell>
  );
}
