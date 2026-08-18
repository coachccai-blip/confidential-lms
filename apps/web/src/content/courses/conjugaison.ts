import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_conjugaison';

export const conjugaisonCourse: Course = {
  id: ID,
  slug: 'conjugaison',
  level: 'B1',
  accentFrom: '#38bdf8',
  accentTo: '#1d4ed8',
  status: 'published',
  title: t('Conjugaison : les temps qui comptent', 'Conjugation: the tenses that matter', '动词变位：真正重要的时态'),
  subtitle: t('2 modules · 4 leçons · 1 quiz noté', '2 modules · 4 lessons · 1 graded quiz', '2 个单元 · 4 节课 · 1 次评分测验'),
  description: t(
    'Le français compte une vingtaine de temps ; six suffisent à parler et à écrire correctement. Ce parcours installe le récit au passé, la projection dans l’avenir et le subjonctif, avec les tableaux et les contrastes qui font la différence.',
    'French has around twenty tenses; six are enough to speak and write correctly. This path builds past narration, projection into the future and the subjunctive, with the tables and contrasts that make the difference.',
    '法语约有二十种时态，但六种就足以正确表达。本课程讲解过去叙述、未来展望与虚拟式，并配以真正有用的表格与对比。',
  ),
  tags: [t('Conjugaison', 'Conjugation', '动词变位'), t('Niveau B1', 'Level B1', 'B1 级别')],
  modules: [
    {
      id: 'mod_conj_1',
      courseId: ID,
      title: t('Raconter au passé', 'Telling a story in the past', '用过去时讲述'),
      summary: t('Le trio imparfait / passé composé / plus-que-parfait.', 'The trio imperfect / passé composé / pluperfect.', '未完成过去时 / 复合过去时 / 愈过去时三重奏。'),
      lessons: [
        {
          id: 'les_conj_1',
          moduleId: 'mod_conj_1',
          kind: 'text',
          durationMin: 13,
          title: t('Imparfait ou passé composé ? Le décor et l’événement', 'Imperfect or passé composé? Backdrop versus event', '未完成过去时还是复合过去时？背景与事件'),
          summary: t(
            'Une seule question à se poser, et le bon temps s’impose de lui-même.',
            'One single question to ask, and the right tense follows on its own.',
            '只需自问一个问题，正确的时态便自然浮现。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'C’est la difficulté numéro un des apprenants, et elle n’a rien à voir avec la mémoire des formes : les deux temps se forment facilement. La difficulté est un choix de point de vue. L’[[imparfait|imparfait]] plante un décor ; le [[passe-compose|passé composé]] fait avancer l’histoire.',
                'This is learners’ number-one difficulty, and it has nothing to do with remembering forms: both tenses are easy to build. The difficulty is a choice of viewpoint. The [[imparfait|imperfect]] sets a scene; the [[passe-compose|passé composé]] moves the story forward.',
                '这是学习者的头号难点，却与记忆词形无关：两个时态都很好构成。难点在于视角的选择。[[imparfait|未完成过去时]]铺设背景，[[passe-compose|复合过去时]]推动情节。',
              ),
            },
            { type: 'figure', figureId: 'ligne-temps', caption: t('Les temps du passé sur une ligne du temps.', 'Past tenses on a timeline.', '时间轴上的各过去时态。') },
            {
              type: 'table',
              headers: [
                t('On emploie…', 'You use…', '使用……'),
                t('quand…', 'when…', '当……'),
                t('mots déclencheurs', 'trigger words', '提示词'),
                t('exemple', 'example', '例句'),
              ],
              rows: [
                [t('l’imparfait', 'the imperfect', '未完成过去时'), t('on décrit, on explique le contexte', 'you describe or explain the context', '描写或说明背景'), t('souvent, tous les jours, autrefois, pendant que', 'souvent, tous les jours, autrefois, pendant que', 'souvent, tous les jours, autrefois, pendant que'), t('Il faisait froid et la rue était déserte.', 'Il faisait froid et la rue était déserte.', 'Il faisait froid et la rue était déserte.')],
                [t('le passé composé', 'the passé composé', '复合过去时'), t('un fait daté fait avancer le récit', 'a dated fact moves the story on', '有确切时间的事件推动叙述'), t('soudain, hier, à 8 h, trois fois', 'soudain, hier, à 8 h, trois fois', 'soudain, hier, à 8 h, trois fois'), t('Soudain, quelqu’un a frappé.', 'Soudain, quelqu’un a frappé.', 'Soudain, quelqu’un a frappé.')],
                [t('les deux ensemble', 'both together', '两者并用'), t('un événement interrompt un décor', 'an event interrupts a backdrop', '事件打断背景'), t('pendant que… soudain', 'pendant que… soudain', 'pendant que… soudain'), t('Je dormais quand le téléphone a sonné.', 'Je dormais quand le téléphone a sonné.', 'Je dormais quand le téléphone a sonné.')],
              ],
            },
            {
              type: 'conjugation',
              emoji: '🔄',
              title: t('Formation de l’imparfait : un radical, six terminaisons', 'Building the imperfect: one stem, six endings', '未完成过去时的构成：一个词干，六个词尾'),
              note: t(
                'Le [[radical|radical]] se prend sur la forme « nous » du présent : nous finiss-ons → je finiss-ais. Une seule exception dans toute la langue : être (j’étais).',
                'The [[radical|stem]] comes from the “nous” form of the present: nous finiss-ons → je finiss-ais. Only one exception in the whole language: être (j’étais).',
                '[[radical|词干]]取自现在时“nous”形式：nous finiss-ons → je finiss-ais。整个语言中只有一个例外：être（j’étais）。',
              ),
              columns: [t('parler', 'parler', 'parler'), t('finir', 'finir', 'finir'), t('prendre', 'prendre', 'prendre'), t('être', 'être', 'être')],
              rows: [
                { pronoun: 'je', forms: ['parlais', 'finissais', 'prenais', 'étais'] },
                { pronoun: 'tu', forms: ['parlais', 'finissais', 'prenais', 'étais'] },
                { pronoun: 'il / elle', forms: ['parlait', 'finissait', 'prenait', 'était'] },
                { pronoun: 'nous', forms: ['parlions', 'finissions', 'prenions', 'étions'] },
                { pronoun: 'vous', forms: ['parliez', 'finissiez', 'preniez', 'étiez'] },
                { pronoun: 'ils / elles', forms: ['parlaient', 'finissaient', 'prenaient', 'étaient'] },
              ],
            },
            { type: 'heading', emoji: '🔹', text: t('Le même fait, deux lectures', 'The same fact, two readings', '同一事实，两种解读') },
            {
              type: 'examples',
              emoji: '🕰️',
              title: t('Le choix du temps change le sens', 'The choice of tense changes the meaning', '时态的选择改变意义'),
              items: [
                { fr: 'Quand j’étais étudiant, je travaillais le week-end.', gloss: t('Habitude passée, répétée.', 'A repeated past habit.', '过去反复发生的习惯。') },
                { fr: 'Quand j’étais étudiant, j’ai travaillé six mois à Lyon.', gloss: t('Une période délimitée, un fait unique.', 'A bounded period, a single fact.', '一段有界的时间，一次性事实。') },
                { fr: 'Il voulait partir.', gloss: t('Intention, sans issue précisée.', 'An intention, with no stated outcome.', '意图，未说明结果。') },
                { fr: 'Il a voulu partir.', gloss: t('Il a essayé — et souvent, cela a échoué.', 'He tried — and often, it failed.', '他尝试了——而且往往没有成功。') },
              ],
            },
            {
              type: 'interactive',
              emoji: '⏳',
              title: t('Quatre plans, quatre temps', 'Four shots, four tenses', '四个镜头，四种时态'),
              hint: t(
                'Situez le fait par rapport au récit : le temps s’impose de lui-même.',
                'Place the fact relative to the narrative: the tense follows on its own.',
                '把事实相对于叙述定位，时态便自然确定。',
              ),
              widget: {
                kind: 'timeline',
                points: [
                  {
                    id: 'anterior',
                    label: t('Avant le récit', 'Before the story', '叙述之前'),
                    headline: t('plus-que-parfait', 'pluperfect', '愈过去时'),
                    example: 'Il avait déjà mangé quand je suis arrivé.',
                    gloss: t('Un fait antérieur à un autre fait passé. C’est le seul temps qui empile deux passés.', 'A fact anterior to another past fact. The only tense that stacks two pasts.', '先于另一过去事件的事实。唯一叠加两个过去的时态。'),
                  },
                  {
                    id: 'backdrop',
                    label: t('Pendant, en fond', 'During, in the background', '其间，作为背景'),
                    headline: t('imparfait', 'imparfait', '未完成过去时'),
                    example: 'Il pleuvait, la rue était vide.',
                    gloss: t('Le décor, l’habitude, l’action en cours : rien de tout cela ne fait avancer le récit.', 'Setting, habit, ongoing action: none of it moves the story on.', '背景、习惯、正在进行的动作：这些都不推进叙述。'),
                  },
                  {
                    id: 'event',
                    label: t('L’événement', 'The event', '事件'),
                    headline: t('passé composé', 'passé composé', '复合过去时'),
                    example: 'Soudain, le téléphone a sonné.',
                    gloss: t('Ce qui arrive et fait avancer l’histoire d’une case. À l’écrit littéraire, le passé simple prend sa place.', 'What happens and moves the story one step on. In literary writing, the passé simple takes its place.', '发生并把故事推进一步的事。在文学书面语中，由简单过去时取代。'),
                  },
                  {
                    id: 'after',
                    label: t('Après, vu du passé', 'After, seen from the past', '从过去看的之后'),
                    headline: t('conditionnel présent', 'present conditional', '条件式现在时'),
                    example: 'Il a dit qu’il viendrait.',
                    gloss: t('Le futur dans le passé. Ce n’est pas une hypothèse : c’est la concordance des temps.', 'The future in the past. Not a hypothesis: this is sequence of tenses.', '过去将来。这不是假设，而是时态呼应。'),
                  },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'info',
              emoji: '🎬',
              title: t('Le test du film', 'The film test', '电影测试法'),
              text: t(
                'Imaginez votre récit comme un film. Ce qui serait un décor, une musique de fond ou une explication en voix off va à l’imparfait. Ce qui serait une action visible à l’écran va au passé composé.',
                'Picture your story as a film. Anything that would be scenery, background music or a voice-over explanation goes in the imperfect. Anything that would be an action visible on screen goes in the passé composé.',
                '把你的叙述想象成一部电影。凡是布景、背景音乐或画外音解说，用未完成过去时；凡是画面上可见的动作，用复合过去时。',
              ),
            },
          ],
        },
        {
          id: 'les_conj_2',
          moduleId: 'mod_conj_1',
          kind: 'text',
          durationMin: 10,
          title: t('Plus-que-parfait et concordance des temps', 'Pluperfect and sequence of tenses', '愈过去时与时态呼应'),
          summary: t(
            'Exprimer l’antériorité et rapporter des paroles sans se tromper de temps.',
            'Expressing anteriority and reporting speech without picking the wrong tense.',
            '表达先时性，并在转述话语时选对时态。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'Le [[plus-que-parfait|plus-que-parfait]] sert à une seule chose, mais elle est indispensable au récit : signaler qu’une action a eu lieu **avant** une autre action déjà passée. Il se forme avec l’auxiliaire à l’imparfait suivi du [[participe-passe|participe passé]].',
                'The [[plus-que-parfait|pluperfect]] does only one job, but it is essential to narration: showing that an action happened **before** another already-past action. It is formed with the auxiliary in the imperfect plus the [[participe-passe|past participle]].',
                '[[plus-que-parfait|愈过去时]]只有一个用途，但在叙述中不可或缺：表明某个动作发生在另一个已过去的动作**之前**。构成方式是助动词的未完成过去时加[[participe-passe|过去分词]]。',
              ),
            },
            {
              type: 'conjugation',
              emoji: '🔄',
              title: t('Plus-que-parfait : auxiliaire à l’imparfait + participe', 'Pluperfect: auxiliary in the imperfect + participle', '愈过去时：助动词未完成过去时 + 分词'),
              columns: [t('avec avoir', 'with avoir', '用 avoir'), t('avec être', 'with être', '用 être'), t('pronominal', 'reflexive', '自反动词')],
              rows: [
                { pronoun: 'je / j’', forms: ['avais compris', 'étais parti(e)', 'm’étais levé(e)'] },
                { pronoun: 'tu', forms: ['avais compris', 'étais parti(e)', 't’étais levé(e)'] },
                { pronoun: 'il / elle', forms: ['avait compris', 'était parti(e)', 's’était levé(e)'] },
                { pronoun: 'nous', forms: ['avions compris', 'étions parti(e)s', 'nous étions levé(e)s'] },
                { pronoun: 'vous', forms: ['aviez compris', 'étiez parti(e)s', 'vous étiez levé(e)s'] },
                { pronoun: 'ils / elles', forms: ['avaient compris', 'étaient parti(e)s', 's’étaient levé(e)s'] },
              ],
            },
            {
              type: 'examples',
              emoji: '💬',
              title: t('Marquer l’antériorité', 'Marking anteriority', '标示先时性'),
              items: [
                { fr: 'Quand je suis arrivé, la réunion avait déjà commencé.', gloss: t('La réunion précède mon arrivée.', 'The meeting comes before my arrival.', '会议发生在我到达之前。') },
                { fr: 'Il m’a rendu le livre que je lui avais prêté.', gloss: t('Le prêt précède la restitution.', 'The loan comes before the return.', '借出发生在归还之前。') },
                { fr: 'Si j’avais su, je serais venu plus tôt.', gloss: t('Regret : plus-que-parfait + [[conditionnel|conditionnel]] passé.', 'Regret: pluperfect + past [[conditionnel|conditional]].', '表示遗憾：愈过去时 + [[conditionnel|条件式]]过去时。') },
              ],
            },
            { type: 'heading', emoji: '🔹', text: t('Le discours rapporté au passé', 'Reported speech in the past', '过去时中的转述') },
            {
              type: 'paragraph',
              text: t(
                'Quand le verbe introducteur est au passé (« il a dit que… »), les temps de la [[subordonnee|subordonnée]] reculent d’un cran. C’est la [[concordance|concordance des temps]], et c’est un point systématiquement évalué à l’écrit du B2.',
                'When the introducing verb is in the past (“il a dit que…”), the tenses in the [[subordonnee|subordinate clause]] shift back one step. This is the [[concordance|sequence of tenses]], and it is systematically assessed in the B2 writing paper.',
                '当引导动词为过去时（“il a dit que…”）时，[[subordonnee|从句]]中的时态要后退一档。这就是[[concordance|时态呼应]]，也是 B2 写作中必考的内容。',
              ),
            },
            {
              type: 'table',
              emoji: '📊',
              caption: t('Le décalage à appliquer', 'The shift to apply', '需要应用的时态推移'),
              headers: [t('Discours direct', 'Direct speech', '直接引语'), t('Discours rapporté au passé', 'Reported in the past', '过去时转述')],
              rows: [
                [t('présent : « Je pars. »', 'present: “Je pars.”', '现在时：“Je pars.”'), t('imparfait : il a dit qu’il partait.', 'imperfect: il a dit qu’il partait.', '未完成过去时：il a dit qu’il partait.')],
                [t('passé composé : « J’ai fini. »', 'passé composé: “J’ai fini.”', '复合过去时：“J’ai fini.”'), t('plus-que-parfait : il a dit qu’il avait fini.', 'pluperfect: il a dit qu’il avait fini.', '愈过去时：il a dit qu’il avait fini.')],
                [t('futur : « Je viendrai. »', 'future: “Je viendrai.”', '简单将来时：“Je viendrai.”'), t('conditionnel : il a dit qu’il viendrait.', 'conditional: il a dit qu’il viendrait.', '条件式：il a dit qu’il viendrait.')],
                [t('impératif : « Viens ! »', 'imperative: “Viens !”', '命令式：“Viens !”'), t('de + infinitif : il m’a dit de venir.', 'de + infinitive: il m’a dit de venir.', 'de + 不定式：il m’a dit de venir.')],
              ],
            },
            {
              type: 'callout',
              tone: 'warning',
              emoji: '🕰️',
              title: t('Les marqueurs de temps changent aussi', 'Time markers change too', '时间标记也要相应改变'),
              text: t(
                'On ne se contente pas de reculer les verbes : hier devient la veille, demain devient le lendemain, maintenant devient alors, ici devient là. Oublier ce déplacement rend le texte incohérent même si les temps sont justes.',
                'You do not merely shift the verbs: hier becomes la veille, demain becomes le lendemain, maintenant becomes alors, ici becomes là. Forgetting this shift makes the text incoherent even when the tenses are right.',
                '不能只后移动词：hier 变为 la veille，demain 变为 le lendemain，maintenant 变为 alors，ici 变为 là。忽略这一变化，即使时态正确，文章仍会前后矛盾。',
              ),
            },
          ],
        },
      ],
    },
    {
      id: 'mod_conj_2',
      courseId: ID,
      title: t('Se projeter et nuancer', 'Projecting and qualifying', '展望与细化'),
      summary: t('Futur, conditionnel et subjonctif : sortir du réel.', 'Future, conditional and subjunctive: leaving the factual.', '将来时、条件式与虚拟式：走出现实陈述。'),
      lessons: [
        {
          id: 'les_conj_3',
          moduleId: 'mod_conj_2',
          kind: 'text',
          durationMin: 11,
          title: t('Futur simple, futur proche, conditionnel', 'Simple future, near future, conditional', '简单将来时、最近将来时、条件式'),
          summary: t(
            'Trois formes proches, trois usages nettement distincts.',
            'Three similar forms, three clearly distinct uses.',
            '三种形式相近，用法却截然不同。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'Le futur simple et le [[conditionnel|conditionnel]] partagent le même [[radical|radical]] — l’infinitif — et ne diffèrent que par la [[terminaison|terminaison]]. Les apprendre ensemble divise l’effort par deux.',
                'The simple future and the [[conditionnel|conditional]] share the same [[radical|stem]] — the infinitive — and differ only in the [[terminaison|ending]]. Learning them together halves the effort.',
                '简单将来时与[[conditionnel|条件式]]共用同一个[[radical|词干]]——不定式，仅[[terminaison|词尾]]不同。一起学习可减半工作量。',
              ),
            },
            {
              type: 'conjugation',
              emoji: '🔄',
              title: t('Un radical commun, deux séries de terminaisons', 'One shared stem, two sets of endings', '共同词干，两套词尾'),
              note: t(
                'Les terminaisons du conditionnel sont exactement celles de l’imparfait. Radicaux irréguliers à mémoriser : être → ser-, avoir → aur-, aller → ir-, faire → fer-, pouvoir → pourr-, vouloir → voudr-, devoir → devr-, venir → viendr-.',
                'The conditional endings are exactly those of the imperfect. Irregular stems to memorise: être → ser-, avoir → aur-, aller → ir-, faire → fer-, pouvoir → pourr-, vouloir → voudr-, devoir → devr-, venir → viendr-.',
                '条件式的词尾与未完成过去时完全相同。需记忆的不规则词干：être → ser-、avoir → aur-、aller → ir-、faire → fer-、pouvoir → pourr-、vouloir → voudr-、devoir → devr-、venir → viendr-。',
              ),
              columns: [t('futur simple', 'simple future', '简单将来时'), t('conditionnel présent', 'present conditional', '现在条件式')],
              rows: [
                { pronoun: 'je', forms: ['parlerai', 'parlerais'] },
                { pronoun: 'tu', forms: ['parleras', 'parlerais'] },
                { pronoun: 'il / elle', forms: ['parlera', 'parlerait'] },
                { pronoun: 'nous', forms: ['parlerons', 'parlerions'] },
                { pronoun: 'vous', forms: ['parlerez', 'parleriez'] },
                { pronoun: 'ils / elles', forms: ['parleront', 'parleraient'] },
              ],
            },
            {
              type: 'keyvalues',
              emoji: '🗂️',
              title: t('Qui fait quoi', 'Who does what', '各司其职'),
              entries: [
                { label: t('Futur proche', 'Near future', '最近将来时'), value: t('aller + infinitif. Événement imminent ou certain : « Il va pleuvoir. » Domine à l’oral.', 'aller + infinitive. Imminent or certain event: “Il va pleuvoir.” Dominant in speech.', 'aller + 不定式。即将或必然发生：“Il va pleuvoir.”，口语中最常用。') },
                { label: t('Futur simple', 'Simple future', '简单将来时'), value: t('Prévision, promesse, programme. Préféré à l’écrit : « Le rapport sera publié en mai. »', 'Prediction, promise, schedule. Preferred in writing: “Le rapport sera publié en mai.”', '预测、承诺、安排。书面语首选：“Le rapport sera publié en mai.”') },
                { label: t('Conditionnel présent', 'Present conditional', '现在条件式'), value: t('Politesse, hypothèse, souhait, information non confirmée : « Il y aurait vingt blessés. »', 'Politeness, hypothesis, wish, unconfirmed information: “Il y aurait vingt blessés.”', '礼貌、假设、愿望、未证实信息：“Il y aurait vingt blessés.”') },
                { label: t('Conditionnel passé', 'Past conditional', '过去条件式'), value: t('Regret ou reproche : « J’aurais dû partir plus tôt. »', 'Regret or reproach: “J’aurais dû partir plus tôt.”', '遗憾或责备：“J’aurais dû partir plus tôt.”') },
              ],
            },
            {
              type: 'examples',
              emoji: '🔬',
              title: t('Les trois systèmes hypothétiques', 'The three conditional systems', '三种假设句型'),
              items: [
                { fr: 'Si j’ai le temps, je viendrai.', gloss: t('Hypothèse réalisable : si + présent, futur.', 'Achievable hypothesis: si + present, future.', '可实现的假设：si + 现在时，主句将来时。') },
                { fr: 'Si j’avais le temps, je viendrais.', gloss: t('Hypothèse peu probable : si + imparfait, conditionnel présent.', 'Unlikely hypothesis: si + imperfect, present conditional.', '不太可能的假设：si + 未完成过去时，主句现在条件式。') },
                { fr: 'Si j’avais eu le temps, je serais venu.', gloss: t('Hypothèse impossible, passée : si + plus-que-parfait, conditionnel passé.', 'Impossible, past hypothesis: si + pluperfect, past conditional.', '已无法实现的过去假设：si + 愈过去时，主句过去条件式。') },
                { fr: 'Si j’aurais le temps, je viendrais.', gloss: t('Faute grave : jamais de conditionnel après « si ».', 'Serious error: never a conditional after “si”.', '严重错误：“si”之后绝不用条件式。'), incorrect: true },
              ],
            },
          ],
        },
        {
          id: 'les_conj_4',
          moduleId: 'mod_conj_2',
          kind: 'text',
          durationMin: 12,
          title: t('Le subjonctif présent : quand, pourquoi, comment', 'The present subjunctive: when, why, how', '现在虚拟式：何时、为何、如何'),
          summary: t(
            'Un mode qui n’a rien d’intimidant dès qu’on connaît la liste des déclencheurs.',
            'A mood that stops being intimidating once you know the list of triggers.',
            '只要掌握触发词清单，这个语式便不再令人生畏。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'Le [[subjonctif|subjonctif]] n’exprime pas un temps mais un regard : celui de la subjectivité. L’indicatif présente les faits comme réels ; le subjonctif les présente comme voulus, redoutés, souhaités ou mis en doute. On ne le choisit presque jamais librement : c’est l’expression qui précède qui l’impose.',
                'The [[subjonctif|subjunctive]] does not express a time but a stance: subjectivity. The indicative presents facts as real; the subjunctive presents them as wished for, feared, hoped or doubted. You almost never choose it freely: the expression before it imposes it.',
                '[[subjonctif|虚拟式]]表达的不是时间，而是一种主观视角。直陈式把事实呈现为真实存在；虚拟式则将其呈现为被期望、被担忧、被希望或被怀疑的。它几乎从不由你自由选择：由前面的表达强制决定。',
              ),
            },
            { type: 'figure', figureId: 'modes-temps', caption: t('Les quatre modes du verbe français et ce qu’ils expriment.', 'The four moods of the French verb and what they express.', '法语动词的四种语式及其表达功能。') },
            {
              type: 'conjugation',
              emoji: '🔄',
              title: t('Formation : radical de « ils » au présent + terminaisons', 'Formation: “ils” stem of the present + endings', '构成：现在时“ils”词干 + 词尾'),
              note: t(
                'ils finiss-ent → que je finisse. Sept verbes seulement sont irréguliers : être, avoir, aller, faire, pouvoir, savoir, vouloir. Les apprendre suffit pour tout le B1 et le B2.',
                'ils finiss-ent → que je finisse. Only seven verbs are irregular: être, avoir, aller, faire, pouvoir, savoir, vouloir. Learning them covers all of B1 and B2.',
                'ils finiss-ent → que je finisse。只有七个动词不规则：être、avoir、aller、faire、pouvoir、savoir、vouloir。掌握它们即可应对全部 B1 和 B2。',
              ),
              columns: [t('parler', 'parler', 'parler'), t('finir', 'finir', 'finir'), t('être', 'être', 'être'), t('avoir', 'avoir', 'avoir'), t('aller', 'aller', 'aller')],
              rows: [
                { pronoun: 'que je', forms: ['parle', 'finisse', 'sois', 'aie', 'aille'] },
                { pronoun: 'que tu', forms: ['parles', 'finisses', 'sois', 'aies', 'ailles'] },
                { pronoun: 'qu’il / elle', forms: ['parle', 'finisse', 'soit', 'ait', 'aille'] },
                { pronoun: 'que nous', forms: ['parlions', 'finissions', 'soyons', 'ayons', 'allions'] },
                { pronoun: 'que vous', forms: ['parliez', 'finissiez', 'soyez', 'ayez', 'alliez'] },
                { pronoun: 'qu’ils / elles', forms: ['parlent', 'finissent', 'soient', 'aient', 'aillent'] },
              ],
            },
            { type: 'heading', emoji: '🔹', text: t('Les quatre familles de déclencheurs', 'The four families of triggers', '四类触发表达') },
            {
              type: 'list',
              items: [
                t(
                  '**La volonté et l’obligation** : il faut que, je veux que, j’exige que, il est nécessaire que.',
                  '**Will and obligation**: il faut que, je veux que, j’exige que, il est nécessaire que.',
                  '**意愿与义务**：il faut que、je veux que、j’exige que、il est nécessaire que。',
                ),
                t(
                  '**Le sentiment** : je suis content que, j’ai peur que, il est dommage que, je regrette que.',
                  '**Emotion**: je suis content que, j’ai peur que, il est dommage que, je regrette que.',
                  '**情感**：je suis content que、j’ai peur que、il est dommage que、je regrette que。',
                ),
                t(
                  '**Le doute et la possibilité** : il est possible que, je doute que, il se peut que, je ne pense pas que.',
                  '**Doubt and possibility**: il est possible que, je doute que, il se peut que, je ne pense pas que.',
                  '**怀疑与可能性**：il est possible que、je doute que、il se peut que、je ne pense pas que。',
                ),
                t(
                  '**Certaines conjonctions** : bien que, pour que, avant que, jusqu’à ce que, à condition que.',
                  '**Certain conjunctions**: bien que, pour que, avant que, jusqu’à ce que, à condition que.',
                  '**某些连词**：bien que、pour que、avant que、jusqu’à ce que、à condition que。',
                ),
              ],
            },
            {
              type: 'callout',
              tone: 'danger',
              emoji: '🪤',
              title: t('Le contraste qui piège tout le monde', 'The contrast that traps everyone', '人人都会踩的对比陷阱'),
              text: t(
                '« Je pense qu’il **vient** » (indicatif : le fait est posé comme réel) mais « Je ne pense pas qu’il **vienne** » (subjonctif : la négation introduit le doute). De même, « espérer que » est suivi de l’indicatif, alors que « souhaiter que » appelle le subjonctif.',
                '“Je pense qu’il **vient**” (indicative: the fact is presented as real) but “Je ne pense pas qu’il **vienne**” (subjunctive: the negation introduces doubt). Likewise, “espérer que” takes the indicative, whereas “souhaiter que” calls for the subjunctive.',
                '“Je pense qu’il **vient**”（直陈式：事实被视为真实），但“Je ne pense pas qu’il **vienne**”（虚拟式：否定引入怀疑）。同样，“espérer que”后接直陈式，而“souhaiter que”要求虚拟式。',
              ),
            },
            {
              type: 'examples',
              emoji: '🔄',
              title: t('Le subjonctif en situation', 'The subjunctive in context', '语境中的虚拟式'),
              items: [
                { fr: 'Il faut que vous soyez présents à neuf heures.', gloss: t('Obligation → subjonctif obligatoire.', 'Obligation → compulsory subjunctive.', '义务 → 必须用虚拟式。') },
                { fr: 'Je suis ravi que tu aies réussi ton examen.', gloss: t('Sentiment → subjonctif.', 'Emotion → subjunctive.', '情感 → 虚拟式。') },
                { fr: 'Bien qu’il pleuve, la manifestation est maintenue.', gloss: t('[[concession|Concession]] → subjonctif.', '[[concession|Concession]] → subjunctive.', '[[concession|让步]] → 虚拟式。') },
                { fr: 'J’espère que tu viennes.', gloss: t('Faux : « espérer que » veut l’indicatif → tu viendras.', 'Wrong: “espérer que” takes the indicative → tu viendras.', '错误：“espérer que”要求直陈式 → tu viendras。'), incorrect: true },
              ],
            },
            {
              type: 'callout',
              tone: 'success',
              emoji: '✅',
              title: t('Stratégie d’évitement légitime', 'A legitimate avoidance strategy', '正当的规避策略'),
              text: t(
                'À l’oral, si le subjonctif ne vient pas, changez de construction : « Il faut que tu partes » devient « Tu dois partir ». C’est correct, naturel, et cela vaut mieux qu’une forme fautive. À l’écrit en revanche, le subjonctif est attendu et rapporte des points.',
                'In speech, if the subjunctive will not come, change the construction: “Il faut que tu partes” becomes “Tu dois partir”. That is correct, natural, and better than a wrong form. In writing, however, the subjunctive is expected and earns marks.',
                '口语中若一时想不出虚拟式，可改变句式：“Il faut que tu partes”改为“Tu dois partir”。这样既正确又自然，好过用错形式。但在书面表达中，虚拟式是被期待的，并能得分。',
              ),
            },
          ],
        },
      ],
    },
    {
      id: 'mod_conj_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Huit questions sur les temps et les modes étudiés.', 'Eight questions on the tenses and moods covered.', '八道题，检验所学时态与语式。'),
      lessons: [
        {
          id: 'les_conj_q',
          moduleId: 'mod_conj_q',
          kind: 'quiz',
          durationMin: 8,
          quizId: 'qz_conjugaison',
          title: t('Quiz — Conjugaison', 'Quiz — Conjugation', '测验 — 动词变位'),
          summary: t('8 questions sur le passé, le futur, le conditionnel et le subjonctif.', '8 questions on past, future, conditional and subjunctive.', '8 道题，涵盖过去时、将来时、条件式与虚拟式。'),
        },
      ],
    },
  ],
};
