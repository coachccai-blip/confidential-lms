import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_a2_raconter';

export const a2RaconterCourse: Course = {
  id: ID,
  slug: 'a2-raconter',
  level: 'A2',
  accentFrom: '#67e8f9',
  accentTo: '#0891b2',
  status: 'published',
  title: t('Raconter au passé : composé et imparfait', 'Telling the past: passé composé and imparfait', '讲述过去：复合过去时与未完成过去时'),
  subtitle: t('3 leçons · 1 quiz noté', '3 lessons · 1 graded quiz', '3 节课 · 1 次评分测验'),
  description: t(
    'Le premier grand récit : former le passé composé, choisir l’auxiliaire, opposer l’imparfait au passé composé et enchaîner les événements.',
    'Your first real narrative: forming the passé composé, choosing the auxiliary, contrasting imparfait with passé composé and chaining events.',
    '第一次真正的叙述：构成复合过去时、选择助动词、区分未完成过去时与复合过去时，并串联事件。',
  ),
  tags: [t('Conjugaison', 'Conjugation', '动词变位'), t('Récit', 'Narration', '叙述')],
  modules: [
    {
      id: 'mod_a2ra_1',
      courseId: ID,
      title: t('Les deux temps du récit', 'The two narrative tenses', '叙述的两种时态'),
      summary: t(
        'Former le passé composé, maîtriser l’imparfait, puis les faire dialoguer.',
        'Forming the passé composé, mastering the imparfait, then making them work together.',
        '构成复合过去时、掌握未完成过去时，然后让两者协作。',
      ),
      lessons: [
        {
          id: 'les_a2ra_1',
          moduleId: 'mod_a2ra_1',
          kind: 'text',
          durationMin: 12,
          title: t('Le passé composé : avoir ou être ?', 'The passé composé: avoir or être?', '复合过去时：用 avoir 还是 être？'),
          summary: t(
            'Deux auxiliaires, une liste de quatorze verbes, et les règles d’accord du participe.',
            'Two auxiliaries, a list of fourteen verbs, and the participle agreement rules.',
            '两个助动词、一份十四个动词的清单，以及分词配合规则。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'Le passé composé se forme en deux morceaux : un **auxiliaire** au présent (avoir ou être) et le **participe passé** du verbe. « J’ai mangé », « je suis parti ». Toute la difficulté tient dans le choix de l’auxiliaire.',
                'The passé composé is built from two parts: an **auxiliary** in the present (avoir or être) and the **past participle** of the verb. “J’ai mangé”, “je suis parti”. The whole difficulty lies in choosing the auxiliary.',
                '复合过去时由两部分构成：现在时的**助动词**（avoir 或 être）加上动词的**过去分词**。“J’ai mangé”“je suis parti”。全部难点都在于助动词的选择。',
              ),
            },
            {
              type: 'table',
              caption: t('Former le participe passé', 'Forming the past participle', '构成过去分词'),
              headers: [t('Groupe', 'Group', '类别'), t('Infinitif', 'Infinitive', '不定式'), t('Participe', 'Participle', '过去分词')],
              rows: [
                [t('Verbes en -er', '-er verbs', '-er 动词'), t('parler, manger, aller', 'parler, manger, aller', 'parler、manger、aller'), t('parlé, mangé, allé — toujours en -é', 'parlé, mangé, allé — always in -é', 'parlé、mangé、allé —— 一律以 -é 结尾')],
                [t('Verbes en -ir', '-ir verbs', '-ir 动词'), t('finir, choisir, partir', 'finir, choisir, partir', 'finir、choisir、partir'), t('fini, choisi, parti — souvent en -i', 'fini, choisi, parti — often in -i', 'fini、choisi、parti —— 多以 -i 结尾')],
                [t('Irréguliers fréquents', 'Frequent irregulars', '常见不规则'), t('être, avoir, faire, prendre', 'être, avoir, faire, prendre', 'être、avoir、faire、prendre'), t('été, eu, fait, pris — à mémoriser', 'été, eu, fait, pris — to memorise', 'été、eu、fait、pris —— 需强记')],
                [t('Autres irréguliers', 'Other irregulars', '其他不规则'), t('voir, vouloir, pouvoir, écrire', 'voir, vouloir, pouvoir, écrire', 'voir、vouloir、pouvoir、écrire'), t('vu, voulu, pu, écrit', 'vu, voulu, pu, écrit', 'vu、voulu、pu、écrit')],
              ],
            },
            { type: 'heading', text: t('Les quatorze verbes qui prennent être', 'The fourteen verbs that take être', '使用 être 的十四个动词') },
            {
              type: 'paragraph',
              text: t(
                'La grande majorité des verbes se conjugue avec **avoir**. Une petite liste de verbes de **déplacement et de changement d’état** utilise **être** — plus tous les verbes pronominaux. Retenez-les par paires de contraires : c’est beaucoup plus rapide.',
                'The vast majority of verbs use **avoir**. A short list of verbs of **movement and change of state** uses **être** — plus all reflexive verbs. Learn them in pairs of opposites: it is far quicker.',
                '绝大多数动词用 **avoir**。少数表示**位移和状态变化**的动词用 **être**，此外所有自反动词也用 être。按反义词成对记忆，效率高得多。',
              ),
            },
            {
              type: 'keyvalues',
              title: t('À apprendre par paires', 'Learn them in pairs', '成对记忆'),
              entries: [
                { label: t('aller / venir', 'aller / venir', 'aller / venir'), value: t('je suis allé, je suis venu — et leurs dérivés : revenir, devenir', 'je suis allé, je suis venu — and their derivatives: revenir, devenir', 'je suis allé、je suis venu —— 及其派生词：revenir、devenir') },
                { label: t('arriver / partir', 'arriver / partir', 'arriver / partir'), value: t('elle est arrivée, elle est partie', 'elle est arrivée, elle est partie', 'elle est arrivée、elle est partie') },
                { label: t('entrer / sortir', 'entrer / sortir', 'entrer / sortir'), value: t('nous sommes entrés, nous sommes sortis', 'nous sommes entrés, nous sommes sortis', 'nous sommes entrés、nous sommes sortis') },
                { label: t('monter / descendre', 'monter / descendre', 'monter / descendre'), value: t('ils sont montés, ils sont descendus', 'ils sont montés, ils sont descendus', 'ils sont montés、ils sont descendus') },
                { label: t('naître / mourir', 'naître / mourir', 'naître / mourir'), value: t('elle est née en 1990, il est mort en 2020', 'elle est née en 1990, il est mort en 2020', 'elle est née en 1990、il est mort en 2020') },
                { label: t('rester / tomber / passer', 'rester / tomber / passer', 'rester / tomber / passer'), value: t('je suis resté, tu es tombé, on est passés', 'je suis resté, tu es tombé, on est passés', 'je suis resté、tu es tombé、on est passés') },
              ],
            },
            {
              type: 'callout',
              tone: 'warning',
              title: t('Avec être, le participe s’accorde', 'With être, the participle agrees', '用 être 时分词要配合'),
              text: t(
                'Avec **être**, le participe s’accorde avec le sujet comme un adjectif : « elle est partie », « elles sont parties ». Avec **avoir**, il ne s’accorde jamais avec le sujet : « elle a mangé », jamais « elle a mangée ».',
                'With **être**, the participle agrees with the subject like an adjective: “elle est partie”, “elles sont parties”. With **avoir** it never agrees with the subject: “elle a mangé”, never “elle a mangée”.',
                '用 **être** 时，分词像形容词一样与主语配合：“elle est partie”“elles sont parties”。用 **avoir** 时，分词绝不与主语配合：应说 “elle a mangé”，绝不能写 “elle a mangée”。',
              ),
            },
            {
              type: 'examples',
              title: t('Passé composé en situation', 'Passé composé in context', '复合过去时的实际运用'),
              items: [
                { fr: 'Hier, j’ai visité le musée du Louvre.', gloss: t('Action ponctuelle, terminée, avec avoir.', 'A single completed action, with avoir.', '一次性完成的动作，用 avoir。') },
                { fr: 'Marie est arrivée à huit heures.', gloss: t('Verbe de déplacement : être + accord au féminin.', 'Verb of movement: être + feminine agreement.', '位移动词：être + 阴性配合。') },
                { fr: 'Nous nous sommes levés tôt.', gloss: t('Verbe pronominal : toujours être.', 'Reflexive verb: always être.', '自反动词：一律用 être。') },
                { fr: 'Marie a arrivée à huit heures.', gloss: t('Deux erreurs : mauvais auxiliaire et accord impossible.', 'Two errors: wrong auxiliary and an impossible agreement.', '两处错误：助动词用错，且配合不成立。'), incorrect: true },
              ],
            },
          ],
        },
        {
          id: 'les_a2ra_2',
          moduleId: 'mod_a2ra_1',
          kind: 'text',
          durationMin: 11,
          title: t('L’imparfait : le décor du récit', 'The imparfait: the backdrop of the story', '未完成过去时：叙述的背景'),
          summary: t(
            'Une formation entièrement régulière, et trois emplois à distinguer.',
            'A completely regular formation, and three uses to tell apart.',
            '构成完全规则，三种用法需加以区分。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'L’imparfait est le temps le plus régulier du français : on prend la forme **nous** du présent, on retire **-ons**, on ajoute les terminaisons. Un seul verbe échappe à la règle : être (j’étais).',
                'The imparfait is the most regular tense in French: take the **nous** form of the present, remove **-ons**, add the endings. Only one verb escapes the rule: être (j’étais).',
                '未完成过去时是法语中最规则的时态：取现在时的 **nous** 形式，去掉 **-ons**，再加词尾。只有一个动词例外：être（j’étais）。',
              ),
            },
            {
              type: 'conjugation',
              title: t('L’imparfait de trois verbes', 'The imparfait of three verbs', '三个动词的未完成过去时'),
              note: t(
                'Radical de « nous » au présent : nous parl**ons** → parl-, nous finiss**ons** → finiss-, nous fais**ons** → fais-. Terminaisons : -ais, -ais, -ait, -ions, -iez, -aient.',
                'Stem from the present “nous” form: nous parl**ons** → parl-, nous finiss**ons** → finiss-, nous fais**ons** → fais-. Endings: -ais, -ais, -ait, -ions, -iez, -aient.',
                '词干取自现在时 “nous” 形式：nous parl**ons** → parl-、nous finiss**ons** → finiss-、nous fais**ons** → fais-。词尾：-ais、-ais、-ait、-ions、-iez、-aient。',
              ),
              columns: [t('parler', 'parler', 'parler'), t('finir', 'finir', 'finir'), t('être', 'être', 'être')],
              rows: [
                { pronoun: 'je / j’', forms: ['parlais', 'finissais', 'étais'] },
                { pronoun: 'tu', forms: ['parlais', 'finissais', 'étais'] },
                { pronoun: 'il / elle / on', forms: ['parlait', 'finissait', 'était'] },
                { pronoun: 'nous', forms: ['parlions', 'finissions', 'étions'] },
                { pronoun: 'vous', forms: ['parliez', 'finissiez', 'étiez'] },
                { pronoun: 'ils / elles', forms: ['parlaient', 'finissaient', 'étaient'] },
              ],
            },
            {
              type: 'keyvalues',
              title: t('Trois emplois de l’imparfait', 'Three uses of the imparfait', '未完成过去时的三种用法'),
              entries: [
                { label: t('La description', 'Description', '描写'), value: t('Le décor, le temps qu’il faisait, l’état des choses : « Il faisait froid, la rue était vide. »', 'Setting, weather, state of things: “Il faisait froid, la rue était vide.”', '场景、天气、事物状态：“Il faisait froid, la rue était vide.”') },
                { label: t('L’habitude', 'Habit', '习惯'), value: t('Ce qui se répétait : « Chaque été, nous allions chez ma grand-mère. »', 'What used to happen: “Chaque été, nous allions chez ma grand-mère.”', '反复发生的事：“Chaque été, nous allions chez ma grand-mère.”') },
                { label: t('L’action en cours', 'Ongoing action', '正在进行的动作'), value: t('Ce qui était en train de se passer quand autre chose est arrivé : « Je dormais quand le téléphone a sonné. »', 'What was going on when something else happened: “Je dormais quand le téléphone a sonné.”', '另一件事发生时正在进行的动作：“Je dormais quand le téléphone a sonné.”') },
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              title: t('Le piège du -i- à « nous » et « vous »', 'The -i- trap at “nous” and “vous”', '“nous” 与 “vous” 的 -i- 陷阱'),
              text: t(
                'Pour les verbes dont le radical finit déjà par i, on écrit deux i : « nous étudiions », « vous riiez ». C’est correct, même si c’est surprenant à l’œil.',
                'For verbs whose stem already ends in i, you write two i’s: “nous étudiions”, “vous riiez”. It is correct, even if it looks surprising.',
                '若词干本身已以 i 结尾，则要写两个 i：“nous étudiions”“vous riiez”。虽然看着奇怪，但是正确的。',
              ),
            },
          ],
        },
        {
          id: 'les_a2ra_3',
          moduleId: 'mod_a2ra_1',
          kind: 'text',
          durationMin: 12,
          title: t('Choisir entre les deux et enchaîner', 'Choosing between the two and chaining events', '在两者间选择并串联事件'),
          summary: t(
            'La règle du décor et de l’événement, les marqueurs de temps, et un récit modèle.',
            'The backdrop-versus-event rule, time markers, and a model narrative.',
            '背景与事件的判断规则、时间标记词，以及一篇范文。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'La question n’est jamais « quel temps est correct ? » mais « quel point de vue je choisis ? ». Le passé composé fait **avancer** l’histoire ; l’imparfait la **suspend** pour décrire. Les deux sont possibles sur le même fait, avec un sens différent.',
                'The question is never “which tense is correct?” but “which viewpoint am I choosing?”. The passé composé **moves** the story forward; the imparfait **pauses** it to describe. Both are possible for the same fact, with different meanings.',
                '问题从来不是“哪个时态正确”，而是“我选择哪种视角”。复合过去时**推进**故事；未完成过去时则**暂停**故事以进行描写。同一事实两者皆可用，只是意义不同。',
              ),
            },
            {
              type: 'table',
              caption: t('Décor ou événement', 'Backdrop or event', '背景还是事件'),
              headers: [t('Question', 'Question', '提问'), t('Imparfait', 'Imparfait', '未完成过去时'), t('Passé composé', 'Passé composé', '复合过去时')],
              rows: [
                [t('Rôle dans le récit', 'Role in the story', '在叙述中的作用'), t('le décor, l’arrière-plan', 'the setting, the background', '背景、衬托'), t('l’événement, ce qui arrive', 'the event, what happens', '事件、所发生的事')],
                [t('Limites de temps', 'Time boundaries', '时间界限'), t('floues, non précisées', 'blurred, unspecified', '模糊、未指明'), t('nettes, l’action est bornée', 'clear-cut, the action is bounded', '清晰，动作有起止')],
                [t('Répétition', 'Repetition', '重复'), t('habituelle, indéfinie', 'habitual, indefinite', '习惯性、次数不定'), t('comptée : « trois fois »', 'counted: “trois fois”', '有具体次数：“trois fois”')],
                [t('Marqueurs typiques', 'Typical markers', '典型标记词'), t('toujours, souvent, tous les jours, autrefois', 'toujours, souvent, tous les jours, autrefois', 'toujours、souvent、tous les jours、autrefois'), t('soudain, tout à coup, hier, un jour, en 2019', 'soudain, tout à coup, hier, un jour, en 2019', 'soudain、tout à coup、hier、un jour、en 2019')],
              ],
            },
            {
              type: 'examples',
              title: t('Le même verbe, deux sens', 'The same verb, two meanings', '同一动词，两种意思'),
              items: [
                { fr: 'Quand j’étais petit, j’allais à la mer chaque été.', gloss: t('Imparfait deux fois : état durable + habitude.', 'Imparfait twice: lasting state + habit.', '两次未完成过去时：持续状态 + 习惯。') },
                { fr: 'Je regardais un film quand tu as appelé.', gloss: t('Le décor à l’imparfait, l’événement au passé composé.', 'Backdrop in the imparfait, event in the passé composé.', '背景用未完成过去时，事件用复合过去时。') },
                { fr: 'Il a plu toute la journée.', gloss: t('Action bornée par « toute la journée » : passé composé.', 'Action bounded by “toute la journée”: passé composé.', '被 “toute la journée” 限定了范围：用复合过去时。') },
                { fr: 'J’ai su la vérité. / Je savais la vérité.', gloss: t('« J’ai su » = j’ai appris à ce moment-là ; « je savais » = je la connaissais déjà.', '“J’ai su” = I found out at that moment; “je savais” = I already knew it.', '“J’ai su” 指那一刻得知；“je savais” 指早已知道。') },
              ],
            },
            { type: 'heading', text: t('Un récit modèle', 'A model narrative', '一篇范文') },
            {
              type: 'quote',
              text: t(
                'Il était sept heures du soir et la gare était presque vide. J’attendais mon train depuis vingt minutes. Soudain, une femme s’est approchée et m’a demandé l’heure. Je lui ai répondu, elle m’a remercié, puis elle est partie sans se retourner. C’est seulement après que j’ai compris : elle avait mon parapluie à la main.',
                'It was seven in the evening and the station was almost empty. I had been waiting for my train for twenty minutes. Suddenly a woman came up and asked me the time. I answered, she thanked me, then she left without looking back. Only afterwards did I understand: she had my umbrella in her hand.',
                '当时是晚上七点，车站几乎空无一人。我已经等火车等了二十分钟。突然，一个女人走过来问我几点。我回答了她，她道了谢，然后头也不回地走了。事后我才明白：她手里拿着我的伞。',
              ),
              source: t('Récit type — décor à l’imparfait, événements au passé composé', 'Model narrative — backdrop in the imparfait, events in the passé composé', '范文 —— 背景用未完成过去时，事件用复合过去时'),
            },
            {
              type: 'callout',
              tone: 'success',
              title: t('Une méthode simple pour choisir', 'A simple method for choosing', '选择时态的简单方法'),
              text: t(
                'Demandez-vous : « est-ce que je pourrais mettre cette phrase dans un film, comme une image fixe ? » Si oui, imparfait. « Est-ce que ça fait avancer l’histoire d’une case ? » Si oui, passé composé.',
                'Ask yourself: “could I film this sentence as a still image?” If yes, imparfait. “Does it move the story forward one step?” If yes, passé composé.',
                '问自己：“这句话能不能拍成一张静止画面？”若能，用未完成过去时。“它是否把故事往前推了一步？”若是，用复合过去时。',
              ),
            },
          ],
        },
      ],
    },
    {
      id: 'mod_a2ra_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Six questions sur le passé composé et l’imparfait.', 'Six questions on the passé composé and the imparfait.', '六道题，考查复合过去时与未完成过去时。'),
      lessons: [
        {
          id: 'les_a2ra_q',
          moduleId: 'mod_a2ra_q',
          kind: 'quiz',
          durationMin: 7,
          quizId: 'qz_a2_raconter',
          title: t('Quiz — Raconter au passé', 'Quiz — Telling the past', '测验 — 讲述过去'),
          summary: t('6 questions sur les temps du récit.', '6 questions on the narrative tenses.', '6 道题，考查叙述时态。'),
        },
      ],
    },
  ],
};
