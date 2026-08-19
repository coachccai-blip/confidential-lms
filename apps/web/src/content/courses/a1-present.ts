import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_a1_present';

export const a1PresentCourse: Course = {
  id: ID,
  slug: 'a1-present',
  level: 'A1',
  accentFrom: '#7dd3fc',
  accentTo: '#0284c7',
  status: 'published',
  title: t('Le présent des verbes du quotidien', 'The present tense of everyday verbs', '日常动词的现在时'),
  subtitle: t('3 leçons · 1 quiz noté', '3 lessons · 1 graded quiz', '3 节课 · 1 次评分测验'),
  description: t(
    'Être, avoir, les verbes en -er, puis aller, faire et venir. Avec ces quelques verbes au présent, on parle déjà du matin au soir — et même du futur proche.',
    'Être, avoir, the -er verbs, then aller, faire and venir. With these few verbs in the present you can already talk from morning to night — and even about the near future.',
    'Être、avoir、-er 结尾动词，以及 aller、faire、venir。掌握这几个动词的现在时，就能从早聊到晚——甚至谈论近期将来。',
  ),
  tags: [t('Conjugaison', 'Conjugation', '动词变位'), t('Débutant', 'Beginner', '初级')],
  modules: [
    {
      id: 'mod_a1pr_1',
      courseId: ID,
      title: t('Les verbes indispensables', 'The essential verbs', '不可或缺的动词'),
      summary: t(
        'Deux auxiliaires, une famille régulière, trois irréguliers très fréquents.',
        'Two auxiliaries, one regular family, three very frequent irregulars.',
        '两个助动词、一类规则动词、三个高频不规则动词。',
      ),
      lessons: [
        {
          id: 'les_a1pr_1',
          moduleId: 'mod_a1pr_1',
          kind: 'text',
          durationMin: 10,
          title: t('Être et avoir : les deux piliers', 'Être and avoir: the two pillars', 'Être 与 avoir：两大支柱'),
          summary: t(
            'Les deux verbes les plus fréquents de la langue, et le piège de « avoir » pour l’âge et la faim.',
            'The two most frequent verbs in the language, and the trap of “avoir” for age and hunger.',
            '法语中最常用的两个动词，以及用 “avoir” 表达年龄和饥饿的陷阱。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                '**Être** et **avoir** représentent à eux seuls près d’un verbe conjugué sur cinq dans un texte français courant. Ils sont irréguliers, donc il n’y a rien à comprendre : il faut les savoir par cœur, comme une table de multiplication.',
                '**Être** and **avoir** alone account for nearly one conjugated verb in five in an ordinary French text. They are irregular, so there is nothing to work out: you simply have to know them by heart, like a times table.',
                '在普通法语文本中，**être** 和 **avoir** 两个词就占了将近五分之一的变位动词。它们是不规则的，因此没什么道理可讲：必须像乘法表一样背下来。',
              ),
            },
            {
              type: 'conjugation',
              emoji: '🔄',
              title: t('Être et avoir au présent', 'Être and avoir in the present', 'Être 与 avoir 的现在时'),
              note: t(
                'Remarquez que « ils sont » et « ils ont » se distinguent uniquement par la liaison : [ilsɔ̃] contre [ilzɔ̃]. C’est la première opposition de sons à travailler.',
                'Note that “ils sont” and “ils ont” differ only by the liaison: [ilsɔ̃] versus [ilzɔ̃]. This is the first sound contrast to practise.',
                '注意 “ils sont” 与 “ils ont” 只靠联诵区分：[ilsɔ̃] 对 [ilzɔ̃]。这是首先要练习的语音对立。',
              ),
              columns: [t('être', 'être', 'être'), t('avoir', 'avoir', 'avoir')],
              rows: [
                { pronoun: 'je / j’', forms: ['suis', 'ai'] },
                { pronoun: 'tu', forms: ['es', 'as'] },
                { pronoun: 'il / elle / on', forms: ['est', 'a'] },
                { pronoun: 'nous', forms: ['sommes', 'avons'] },
                { pronoun: 'vous', forms: ['êtes', 'avez'] },
                { pronoun: 'ils / elles', forms: ['sont', 'ont'] },
              ],
            },
            {
              type: 'interactive',
              emoji: '🎡',
              title: t('La roue d’être', 'The wheel of être', 'Être 的转轮'),
              hint: t(
                'Cliquez une personne, {prenom}, pour voir sa forme et ce qu’il faut en retenir.',
                'Click a person, {prenom}, to see its form and what to remember about it.',
                '{prenom}，点击任一人称，查看其变位形式及要点。',
              ),
              widget: {
                kind: 'wheel',
                verb: 'être',
                persons: [
                  { pronoun: 'je', form: 'suis', phonetic: '[ʒə sɥi]', note: t('La seule forme en -is du présent d’être.', 'The only -is form in the present of être.', 'être 现在时中唯一以 -is 结尾的形式。') },
                  { pronoun: 'tu', form: 'es', phonetic: '[ty ɛ]', note: t('Deux lettres, un seul son. À l’oral, « t’es » domine largement.', 'Two letters, one sound. In speech, “t’es” is overwhelmingly common.', '两个字母，一个音。口语中 “t’es” 占绝对多数。') },
                  { pronoun: 'il / elle', form: 'est', phonetic: '[il ɛ]', note: t('Le t final est muet. « Il est » se prononce comme « il ait ».', 'The final t is silent. “Il est” sounds like “il ait”.', '词尾 t 不发音。“Il est” 与 “il ait” 同音。') },
                  { pronoun: 'nous', form: 'sommes', phonetic: '[nu sɔm]', note: t('À l’oral, on lui préfère « on est » neuf fois sur dix.', 'In speech, “on est” is preferred nine times out of ten.', '口语中十有八九用 “on est” 代替。') },
                  { pronoun: 'vous', form: 'êtes', phonetic: '[vu zɛt]', note: t('Liaison obligatoire en [z]. L’une des trois formes en -tes du français.', 'Compulsory [z] liaison. One of the three -tes forms in French.', '必须联诵为 [z]。法语中三个 -tes 形式之一。') },
                  { pronoun: 'ils / elles', form: 'sont', phonetic: '[il sɔ̃]', note: t('À distinguer de « ils ont » [il zɔ̃] : seule la liaison les sépare.', 'Not to be confused with “ils ont” [il zɔ̃]: only the liaison separates them.', '注意与 “ils ont” [il zɔ̃] 区分：二者仅靠联诵区别。') },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'warning',
              emoji: '⚠️',
              title: t('Avoir là où l’anglais et le chinois utilisent « être »', 'Avoir where English and Chinese use “be”', '英语和中文用“是”，法语却用 avoir'),
              text: t(
                'L’âge, la faim, la soif, le froid, la peur : tout cela se dit avec **avoir**. « J’ai vingt ans », jamais « je suis vingt ans ». C’est l’une des erreurs les plus tenaces des débutants.',
                'Age, hunger, thirst, cold, fear: all of these use **avoir**. “J’ai vingt ans”, never “je suis vingt ans”. This is one of the most persistent beginner mistakes.',
                '年龄、饥饿、口渴、寒冷、恐惧，全都用 **avoir**。要说 “J’ai vingt ans”，绝不能说 “je suis vingt ans”。这是初学者最顽固的错误之一。',
              ),
            },
            {
              type: 'examples',
              emoji: '💬',
              title: t('Les expressions avec avoir', 'Expressions with avoir', '含 avoir 的表达'),
              items: [
                { fr: 'J’ai trente-deux ans.', gloss: t('L’âge : toujours avoir + nombre + « ans ». Le mot « ans » ne s’omet jamais.', 'Age: always avoir + number + “ans”. The word “ans” is never dropped.', '年龄：一律用 avoir + 数字 + “ans”。“ans” 一词不可省略。') },
                { fr: 'J’ai faim, j’ai soif, j’ai froid.', gloss: t('Sensations physiques : avoir + nom, sans article.', 'Physical sensations: avoir + noun, no article.', '身体感受：avoir + 名词，不加冠词。') },
                { fr: 'Elle a raison, tu as tort.', gloss: t('Avoir raison / avoir tort = « avoir » et non « être ».', 'Avoir raison / avoir tort = “have”, not “be”.', 'Avoir raison / avoir tort 用 “有”，而非 “是”。') },
                { fr: 'Je suis vingt-cinq ans.', gloss: t('Calque de l’anglais ou du chinois : impossible en français.', 'A calque from English or Chinese: impossible in French.', '照搬英语或中文的说法：法语中不成立。'), incorrect: true },
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              emoji: '🗣️',
              title: t('« On » vaut « nous » à l’oral', '“On” means “nous” in speech', '口语中 “on” 相当于 “nous”'),
              text: t(
                'À l’oral, « on » remplace « nous » neuf fois sur dix : « on est prêts », « on a fini ». Le verbe reste à la troisième personne du singulier, comme avec « il ».',
                'In speech, “on” replaces “nous” nine times out of ten: “on est prêts”, “on a fini”. The verb stays in the third person singular, as with “il”.',
                '口语中十有八九用 “on” 代替 “nous”：“on est prêts”“on a fini”。动词仍用第三人称单数，与 “il” 相同。',
              ),
            },
          ],
        },
        {
          id: 'les_a1pr_2',
          moduleId: 'mod_a1pr_1',
          kind: 'text',
          durationMin: 11,
          title: t('Les verbes en -er : 90 % des verbes français', 'The -er verbs: 90 % of French verbs', '-er 结尾动词：占法语动词的 90 %'),
          summary: t(
            'Un seul jeu de terminaisons, quatre formes qui se prononcent pareil, et quelques ajustements d’orthographe.',
            'A single set of endings, four forms that sound identical, and a few spelling adjustments.',
            '一套词尾、四个读音相同的形式，外加几处拼写调整。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'Environ neuf verbes français sur dix se terminent par **-er** à l’infinitif et suivent tous le même modèle. Apprendre parler, c’est apprendre travailler, aimer, habiter, regarder, écouter et des milliers d’autres.',
                'About nine French verbs out of ten end in **-er** in the infinitive and all follow the same pattern. Learning parler means learning travailler, aimer, habiter, regarder, écouter and thousands of others.',
                '约十分之九的法语动词不定式以 **-er** 结尾，且都遵循同一模式。学会 parler，就等于学会了 travailler、aimer、habiter、regarder、écouter 以及成千上万个动词。',
              ),
            },
            {
              type: 'conjugation',
              emoji: '🔄',
              title: t('Parler et habiter au présent', 'Parler and habiter in the present', 'Parler 与 habiter 的现在时'),
              note: t(
                'Les terminaisons sont **-e, -es, -e, -ons, -ez, -ent**. Devant une voyelle, « je » devient « j’ » : j’habite.',
                'The endings are **-e, -es, -e, -ons, -ez, -ent**. Before a vowel, “je” becomes “j’”: j’habite.',
                '词尾是 **-e、-es、-e、-ons、-ez、-ent**。元音前 “je” 缩写为 “j’”：j’habite。',
              ),
              columns: [t('parler', 'parler', 'parler'), t('habiter', 'habiter', 'habiter')],
              rows: [
                { pronoun: 'je / j’', forms: ['parle', 'habite'] },
                { pronoun: 'tu', forms: ['parles', 'habites'] },
                { pronoun: 'il / elle / on', forms: ['parle', 'habite'] },
                { pronoun: 'nous', forms: ['parlons', 'habitons'] },
                { pronoun: 'vous', forms: ['parlez', 'habitez'] },
                { pronoun: 'ils / elles', forms: ['parlent', 'habitent'] },
              ],
            },
            {
              type: 'callout',
              tone: 'success',
              emoji: '🗣️',
              title: t('Quatre formes, une seule prononciation', 'Four forms, one pronunciation', '四种形式，一个读音'),
              text: t(
                'je parle, tu parles, il parle, ils parlent se prononcent tous **[paʁl]**. Les terminaisons -e, -es, -ent sont muettes. À l’oral, seuls « nous parlons » et « vous parlez » se distinguent : le présent est donc bien plus simple à parler qu’à écrire.',
                'je parle, tu parles, il parle, ils parlent are all pronounced **[paʁl]**. The endings -e, -es and -ent are silent. In speech only “nous parlons” and “vous parlez” stand out: the present is therefore far easier to say than to write.',
                'je parle、tu parles、il parle、ils parlent 都读作 **[paʁl]**。词尾 -e、-es、-ent 不发音。口语中只有 “nous parlons” 和 “vous parlez” 有区别：因此现在时说起来比写起来容易得多。',
              ),
            },
            { type: 'heading', emoji: '✍️', text: t('Trois ajustements d’orthographe', 'Three spelling adjustments', '三处拼写调整') },
            {
              type: 'table',
              emoji: '🔄',
              caption: t('Verbes en -er légèrement modifiés', 'Slightly modified -er verbs', '略有变化的 -er 动词'),
              headers: [t('Type', 'Type', '类型'), t('Exemple', 'Example', '例子'), t('Pourquoi', 'Why', '原因')],
              rows: [
                [t('-ger', '-ger', '-ger'), t('nous mangeons, nous voyageons', 'nous mangeons, nous voyageons', 'nous mangeons、nous voyageons'), t('on garde le **e** pour conserver le son [ʒ] devant -ons', 'the **e** is kept to preserve the [ʒ] sound before -ons', '保留 **e** 以在 -ons 前维持 [ʒ] 音')],
                [t('-cer', '-cer', '-cer'), t('nous commençons, nous plaçons', 'nous commençons, nous plaçons', 'nous commençons、nous plaçons'), t('la cédille garde le son [s]', 'the cedilla keeps the [s] sound', '软音符保持 [s] 音')],
                [t('-eler / -eter', '-eler / -eter', '-eler / -eter'), t('j’appelle, je jette', 'j’appelle, je jette', 'j’appelle、je jette'), t('consonne doublée quand la terminaison est muette', 'consonant doubled when the ending is silent', '词尾不发音时辅音双写')],
              ],
            },
            {
              type: 'examples',
              emoji: '💬',
              title: t('Le présent en situation', 'The present in context', '现在时的实际运用'),
              items: [
                { fr: 'Je travaille dans une école.', gloss: t('Une situation habituelle, sans limite de temps.', 'A habitual situation, with no time limit.', '一种习惯性状态，没有时间限制。') },
                { fr: 'Nous mangeons à midi.', gloss: t('Verbe en -ger : le e reste devant -ons.', 'A -ger verb: the e stays before -ons.', '-ger 动词：-ons 前保留 e。') },
                { fr: 'Qu’est-ce que tu regardes ?', gloss: t('Le présent sert aussi à l’action en cours, sans forme progressive.', 'The present also covers an action in progress; there is no progressive form.', '现在时也表示正在进行的动作，法语没有进行时。') },
                { fr: 'Nous mangons à midi.', gloss: t('Le e manque : le g se prononcerait [g].', 'The e is missing: the g would be pronounced [g].', '少了 e，g 就会读成 [g]。'), incorrect: true },
              ],
            },
            {
              type: 'interactive',
              emoji: '✏️',
              title: t('Les terminaisons en situation', 'The endings in context', '实战中的词尾'),
              hint: t('Quatre formes se prononcent pareil — seule l’écriture change.', 'Four forms sound the same — only the spelling changes.', '四个形式读音相同——只有拼写不同。'),
              widget: {
                kind: 'fill',
                prompt: t('Choisissez la terminaison :', 'Pick the ending:', '选出词尾：'),
                items: [
                  {
                    id: 'f1',
                    before: 'Tu',
                    after: 'français très bien.',
                    options: ['parles', 'parle', 'parlez'],
                    answer: 'parles',
                    why: t('À « tu », toujours -es. La forme se prononce comme « parle » : seule l’écriture les distingue.', 'With “tu”, always -es. It sounds like “parle”: only the spelling tells them apart.', '对 “tu” 永远用 -es。读音与 “parle” 相同：只有拼写能区分。'),
                  },
                  {
                    id: 'f2',
                    before: 'Nous',
                    after: 'à Paris depuis un an.',
                    options: ['habitons', 'habitez', 'habite'],
                    answer: 'habitons',
                    why: t('« Nous » appelle -ons, l’une des deux seules terminaisons qui s’entendent.', '“Nous” takes -ons, one of only two endings you can actually hear.', '“nous” 用 -ons，是仅有的两个能听出来的词尾之一。'),
                  },
                  {
                    id: 'f3',
                    before: 'Elles',
                    after: 'beaucoup la musique.',
                    options: ['aiment', 'aime', 'aimes'],
                    answer: 'aiment',
                    why: t('« Elles » prend -ent, entièrement muet : « aiment » se prononce comme « aime ».', '“Elles” takes -ent, fully silent: “aiment” sounds like “aime”.', '“elles” 用 -ent，完全不发音：“aiment” 读起来就是 “aime”。'),
                  },
                ],
              },
            },
          ],
        },
        {
          id: 'les_a1pr_3',
          moduleId: 'mod_a1pr_1',
          kind: 'text',
          durationMin: 10,
          title: t('Aller, faire, venir — et le futur proche', 'Aller, faire, venir — and the near future', 'Aller、faire、venir —— 以及近将来时'),
          summary: t(
            'Trois verbes irréguliers qui ouvrent le déplacement, l’activité et le passé récent.',
            'Three irregular verbs that unlock movement, activity and the recent past.',
            '三个不规则动词，打开位移、活动与最近过去的表达。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'Après être et avoir, voici les trois verbes les plus utiles du français. **Aller** sert au déplacement, **faire** à l’activité et à la météo, **venir** à l’origine. Chacun ouvre en plus une construction très employée.',
                'After être and avoir, here are the three most useful verbs in French. **Aller** is for movement, **faire** for activity and weather, **venir** for origin. Each one also unlocks a very common construction.',
                '继 être 和 avoir 之后，最有用的就是这三个动词。**aller** 表位移，**faire** 表活动与天气，**venir** 表来源。每个动词还各自引出一种极常用的结构。',
              ),
            },
            {
              type: 'conjugation',
              emoji: '🔄',
              title: t('Aller, faire, venir au présent', 'Aller, faire, venir in the present', 'Aller、faire、venir 的现在时'),
              note: t(
                '« Vous faites » et « vous dites » sont les deux seules formes en **-tes** de tout le présent français, avec « vous êtes ».',
                '“Vous faites” and “vous dites” are the only **-tes** forms in the whole French present, along with “vous êtes”.',
                '整个法语现在时中，只有 “vous faites”“vous dites” 以及 “vous êtes” 采用 **-tes** 形式。',
              ),
              columns: [t('aller', 'aller', 'aller'), t('faire', 'faire', 'faire'), t('venir', 'venir', 'venir')],
              rows: [
                { pronoun: 'je', forms: ['vais', 'fais', 'viens'] },
                { pronoun: 'tu', forms: ['vas', 'fais', 'viens'] },
                { pronoun: 'il / elle / on', forms: ['va', 'fait', 'vient'] },
                { pronoun: 'nous', forms: ['allons', 'faisons', 'venons'] },
                { pronoun: 'vous', forms: ['allez', 'faites', 'venez'] },
                { pronoun: 'ils / elles', forms: ['vont', 'font', 'viennent'] },
              ],
            },
            { type: 'heading', emoji: '🧭', text: t('Deux constructions offertes', 'Two free constructions', '附赠的两种结构') },
            {
              type: 'keyvalues',
              emoji: '🗂️',
              title: t('Le futur proche et le passé récent', 'Near future and recent past', '近将来时与最近过去时'),
              entries: [
                { label: t('aller + infinitif', 'aller + infinitive', 'aller + 不定式'), value: t('Le futur proche : « je vais partir » = je pars dans un instant. À l’oral, il remplace le futur simple la plupart du temps.', 'The near future: “je vais partir” = I am about to leave. In speech it replaces the simple future most of the time.', '近将来时：“je vais partir” 表示马上就要走。口语中多数情况下取代简单将来时。') },
                { label: t('venir de + infinitif', 'venir de + infinitive', 'venir de + 不定式'), value: t('Le passé récent : « je viens de manger » = j’ai mangé il y a quelques minutes.', 'The recent past: “je viens de manger” = I ate a few minutes ago.', '最近过去时：“je viens de manger” 表示几分钟前刚吃过。') },
                { label: t('faire + activité', 'faire + activity', 'faire + 活动'), value: t('Sports et loisirs : faire du sport, faire de la musique, faire les courses.', 'Sports and hobbies: faire du sport, faire de la musique, faire les courses.', '运动与休闲：faire du sport、faire de la musique、faire les courses。') },
                { label: t('il fait + météo', 'il fait + weather', 'il fait + 天气'), value: t('La météo impersonnelle : il fait beau, il fait froid, il fait 20 degrés.', 'Impersonal weather: il fait beau, il fait froid, il fait 20 degrés.', '无人称天气表达：il fait beau、il fait froid、il fait 20 degrés。') },
              ],
            },
            {
              type: 'interactive',
              emoji: '⏱️',
              title: t('Où se place l’action ?', 'Where does the action sit?', '动作落在哪里？'),
              hint: t(
                'Déplacez-vous sur la frise : chaque repère donne la construction attendue.',
                'Move along the timeline: each marker gives the construction expected.',
                '沿时间轴移动：每个标记给出对应的结构。',
              ),
              widget: {
                kind: 'timeline',
                points: [
                  {
                    id: 'recent',
                    label: t('Il y a un instant', 'A moment ago', '刚刚'),
                    headline: t('venir de + infinitif', 'venir de + infinitive', 'venir de + 不定式'),
                    example: 'Je viens de manger.',
                    gloss: t('Le passé récent : l’action s’est achevée il y a quelques minutes.', 'The recent past: the action finished a few minutes ago.', '最近过去时：动作在几分钟前结束。'),
                  },
                  {
                    id: 'now',
                    label: t('Maintenant', 'Right now', '此刻'),
                    headline: t('présent simple', 'simple present', '简单现在时'),
                    example: 'Je mange.',
                    gloss: t('Le français n’a pas de forme progressive : le présent couvre aussi l’action en cours.', 'French has no progressive form: the present also covers an action in progress.', '法语没有进行时：现在时同样表示正在进行的动作。'),
                  },
                  {
                    id: 'soon',
                    label: t('Dans un instant', 'In a moment', '马上'),
                    headline: t('aller + infinitif', 'aller + infinitive', 'aller + 不定式'),
                    example: 'Je vais manger.',
                    gloss: t('Le futur proche. À l’oral, il remplace le futur simple la plupart du temps.', 'The near future. In speech it replaces the simple future most of the time.', '近将来时。口语中多数情况下取代简单将来时。'),
                  },
                ],
              },
            },
            {
              type: 'examples',
              emoji: '📍',
              title: t('Aller, venir et les prépositions', 'Aller, venir and prepositions', 'Aller、venir 与介词'),
              items: [
                { fr: 'Je vais à Paris, en France.', gloss: t('« à » devant une ville, « en » devant un pays féminin.', '“à” before a city, “en” before a feminine country.', '城市前用 “à”，阴性国名前用 “en”。') },
                { fr: 'Je viens de Chine, je vais au Japon.', gloss: t('« de » pour l’origine ; « au » = à + le, pays masculin.', '“de” for origin; “au” = à + le, masculine country.', '“de” 表来源；“au” = à + le，用于阳性国名。') },
                { fr: 'On va manger, tu viens ?', gloss: t('Futur proche + invitation : la phrase la plus courante à midi.', 'Near future + invitation: the most common sentence at lunchtime.', '近将来时 + 邀请：午饭时最常听到的句子。') },
                { fr: 'Je vais à le restaurant.', gloss: t('« à le » n’existe pas : on contracte en « au ».', '“à le” does not exist: it contracts to “au”.', '“à le” 不存在：必须缩合为 “au”。'), incorrect: true },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'mod_a1pr_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Six questions sur le présent des verbes fréquents.', 'Six questions on the present tense of frequent verbs.', '六道题，考查高频动词的现在时。'),
      lessons: [
        {
          id: 'les_a1pr_q',
          moduleId: 'mod_a1pr_q',
          kind: 'quiz',
          durationMin: 6,
          quizId: 'qz_a1_present',
          title: t('Quiz — Le présent', 'Quiz — The present tense', '测验 — 现在时'),
          summary: t('6 questions sur être, avoir et les verbes courants.', '6 questions on être, avoir and common verbs.', '6 道题，考查 être、avoir 及常用动词。'),
        },
      ],
    },
  ],
};
