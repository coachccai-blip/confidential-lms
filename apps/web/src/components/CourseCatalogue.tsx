import { Link } from 'react-router-dom';
import { computeCourseProgress, type Course } from '@lms/core';
import { CATEGORY_ORDER, courses } from '../content';
import { useApp } from '../state/app-context';
import { D, formatDuration, useI18n } from '../i18n';
import { ProgressBar } from './Progress';
import { IconAward, IconClock } from './Icons';

function courseMinutes(course: Course): number {
  return course.modules.flatMap((module) => module.lessons).reduce((sum, lesson) => sum + lesson.durationMin, 0);
}

/** Le catalogue complet, groupé par catégorie. */
export function CourseCatalogue() {
  const { state } = useApp();
  const { l, locale } = useI18n();

  return (
    <div className="stack stack--loose">
      {CATEGORY_ORDER.map((category) => {
        const inCategory = courses.filter((course) => course.category === category);
        if (inCategory.length === 0) return null;

        return (
          <section key={category}>
            <div style={{ marginBottom: 'var(--space-4)' }}>
              <h3>{l(D.categories[category])}</h3>
              <p className="muted" style={{ fontSize: '0.83rem', marginTop: 2 }}>
                {l(D.categoryHints[category])}
              </p>
            </div>

            <div className="grid grid--3">
              {inCategory.map((course) => {
                const progress = computeCourseProgress(course, state.progress);
                return (
                  <Link className="course-card" to={`/app/cours/${course.slug}`} key={course.id}>
                    <div
                      className="course-card__cover"
                      style={{ background: `linear-gradient(135deg, ${course.accentFrom}, ${course.accentTo})` }}
                    >
                      <span className="course-card__level">{course.level}</span>
                    </div>
                    <div className="course-card__body">
                      <div className="wrap">
                        {course.tags.map((tag, index) => (
                          <span className="badge" key={index}>
                            {l(tag)}
                          </span>
                        ))}
                      </div>
                      <span className="course-card__title">{l(course.title)}</span>
                      <span className="course-card__desc">{l(course.description)}</span>
                      <ProgressBar value={progress.percentage} thin />
                      <div className="course-card__foot">
                        <span className="row" style={{ gap: 6 }}>
                          <IconClock size={13} />
                          {formatDuration(courseMinutes(course), locale)}
                        </span>
                        {progress.finished ? (
                          <span className="badge badge--success">
                            <IconAward size={12} /> {l(D.course.finished)}
                          </span>
                        ) : (
                          <span className="muted tabnum">{progress.percentage}%</span>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
