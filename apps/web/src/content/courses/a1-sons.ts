import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_a1_sons';

export const a1SonsCourse: Course = {
  id: ID,
  slug: 'a1-sons',
  level: 'A1',
  accentFrom: '#7dd3fc',
  accentTo: '#0284c7',
  status: 'published',
  title: t('Les sons du français', 'The sounds of French', '法语的语音'),
  subtitle: t('3 leçons · 1 quiz noté', '3 lessons · 1 graded quiz', '3 节课 · 1 次评分测验'),
  description: t(
    'Pourquoi le français ne se lit pas comme il s’écrit. Les lettres muettes, les liaisons, et les quelques sons qui n’existent ni en anglais ni en chinois.',
    'Why French is not read the way it is written. Silent letters, liaisons, and the few sounds that exist in neither English nor Chinese.',
    '为什么法语读音与拼写不一致。不发音的字母、联诵，以及英语和中文都没有的几个音。',
  ),
  tags: [t('Prononciation', 'Pronunciation', '发音'), t('Débutant', 'Beginner', '初级')],
  modules: [
    {
      id: 'mod_a1so_1',
      courseId: ID,
      title: t('Lire et entendre', 'Reading and hearing', '读与听'),
      summary: t(
        'Ce qui se prononce, ce qui se tait, ce qui se lie.',
        'What is pronounced, what stays silent, what links up.',
        '哪些发音、哪些不发音、哪些要连读。',
      ),
      lessons: [
        {
          id: 'les_a1so_1',
          moduleId: 'mod_a1so_1',
          kind: 'text',
          durationMin: 10,
          title: t('Les lettres qui ne se disent pas', 'The letters you do not say', '不发音的字母'),
          summary: t(
            'La règle la plus utile du français : la fin des mots est souvent muette.',
            'The single most useful rule in French: word endings are often silent.',
            '法语最有用的一条规则：词尾常常不发音。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🤫',
              text: t(
                'C’est la première surprise du français : on écrit beaucoup plus de lettres qu’on n’en prononce. « Beaucoup » s’écrit avec huit lettres et se dit en deux syllabes, [bo-ku]. Le **p** final ne se dit pas.',
                'This is the first surprise of French: you write many more letters than you pronounce. “Beaucoup” has eight letters and is said in two syllables, [bo-ku]. The final **p** is not pronounced.',
                '这是法语给人的第一个意外：写出来的字母远多于读出来的。“Beaucoup” 有八个字母，却只读两个音节 [bo-ku]。词尾的 **p** 不发音。',
              ),
            },
            {
              type: 'callout',
              tone: 'success',
              emoji: '💡',
              title: t('Le moyen mnémotechnique : C-R-F-L', 'A memory aid: C-R-F-L', '记忆窍门：C-R-F-L'),
              text: t(
                'En fin de mot, presque toutes les consonnes sont muettes. Celles qui se prononcent souvent tiennent dans un mot : **CaReFuL** — c, r, f, l. Ainsi : avec, bonjour, neuf, mal se prononcent en entier.',
                'At the end of a word, almost every consonant is silent. The ones that are often pronounced fit in one word: **CaReFuL** — c, r, f, l. So: avec, bonjour, neuf, mal are said in full.',
                '词尾几乎所有辅音都不发音。常发音的那几个正好凑成一个词：**CaReFuL** —— c、r、f、l。因此 avec、bonjour、neuf、mal 全部读出。',
              ),
            },
            {
              type: 'table',
              emoji: '📊',
              caption: t('Ce qui tombe en fin de mot', 'What drops at the end of a word', '词尾脱落的成分'),
              headers: [t('Lettre', 'Letter', '字母'), t('Exemple écrit', 'Written', '书写'), t('Ce qu’on entend', 'What you hear', '听到的')],
              rows: [
                [t('-e', '-e', '-e'), t('une table', 'une table', 'une table'), t('[tabl] — le e final ne s’entend pas', '[tabl] — the final e is not heard', '[tabl] —— 词尾的 e 听不到')],
                [t('-s', '-s', '-s'), t('les amis', 'les amis', 'les amis'), t('[ami] — le s du pluriel est muet', '[ami] — the plural s is silent', '[ami] —— 复数的 s 不发音')],
                [t('-t', '-t', '-t'), t('petit, comment', 'petit, comment', 'petit、comment'), t('[pəti], [kɔmɑ̃] — rien à la fin', '[pəti], [kɔmɑ̃] — nothing at the end', '[pəti]、[kɔmɑ̃] —— 结尾没有音')],
                [t('-d', '-d', '-d'), t('grand, quand', 'grand, quand', 'grand、quand'), t('[gʁɑ̃], [kɑ̃] — muet aussi', '[gʁɑ̃], [kɑ̃] — silent too', '[gʁɑ̃]、[kɑ̃] —— 同样不发音')],
                [t('-x, -z', '-x, -z', '-x、-z'), t('deux, chez', 'deux, chez', 'deux、chez'), t('[dø], [ʃe] — muets', '[dø], [ʃe] — silent', '[dø]、[ʃe] —— 不发音')],
              ],
            },
            {
              type: 'interactive',
              emoji: '🔊',
              title: t('Ce qu’on écrit, ce qu’on entend', 'What you write, what you hear', '写的与听的'),
              hint: t(
                'Cliquez chaque mot pour voir combien de lettres disparaissent.',
                'Click each word to see how many letters vanish.',
                '点击每个词，看看有多少字母消失了。',
              ),
              widget: {
                kind: 'sentence',
                segments: [
                  {
                    text: 'Vous',
                    role: t('[vu] — 4 lettres, 2 sons', '[vu] — 4 letters, 2 sounds', '[vu] —— 4 个字母，2 个音'),
                    detail: t('Le s final est muet. Il ne se réveille que devant une voyelle : « vous avez » se dit [vu-za-ve].', 'The final s is silent. It only wakes up before a vowel: “vous avez” is said [vu-za-ve].', '词尾的 s 不发音。只有在元音前才“苏醒”：“vous avez” 读作 [vu-za-ve]。'),
                  },
                  {
                    text: 'êtes',
                    role: t('[ɛt] — 4 lettres, 2 sons', '[ɛt] — 4 letters, 2 sounds', '[ɛt] —— 4 个字母，2 个音'),
                    detail: t('L’accent circonflexe ne change pas le son ici : il rappelle un ancien « s » disparu (comme dans « estes »).', 'The circumflex does not change the sound here: it marks an old “s” that vanished (as in “estes”).', '这里的长音符不改变读音：它标记一个已消失的旧 “s”（如 “estes”）。'),
                  },
                  {
                    text: 'français',
                    role: t('[fʁɑ̃-sɛ] — 8 lettres, 4 sons', '[fʁɑ̃-sɛ] — 8 letters, 4 sounds', '[fʁɑ̃-sɛ] —— 8 个字母，4 个音'),
                    detail: t('Le « ç » garde le son [s] devant a. Le « ais » final se dit [ɛ], et le s ne s’entend pas.', 'The “ç” keeps the [s] sound before a. The final “ais” is said [ɛ], and the s is not heard.', '“ç” 在 a 前保持 [s] 音。词尾 “ais” 读作 [ɛ]，s 听不到。'),
                  },
                  { text: '?' },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'warning',
              emoji: '🪤',
              title: t('Le piège du « e » final', 'The trap of the final “e”', '词尾 “e” 的陷阱'),
              text: t(
                'Le e final ne se prononce pas, mais il fait prononcer la consonne d’avant. Comparez : **grand** [gʁɑ̃] et **grande** [gʁɑ̃d]. C’est ainsi qu’on entend le féminin d’un adjectif.',
                'The final e is not pronounced, but it makes the consonant before it sound. Compare: **grand** [gʁɑ̃] and **grande** [gʁɑ̃d]. This is how you hear an adjective’s feminine.',
                '词尾的 e 不发音，但它让前面的辅音发出音来。比较：**grand** [gʁɑ̃] 与 **grande** [gʁɑ̃d]。形容词的阴性正是这样听出来的。',
              ),
            },
          ],
        },
        {
          id: 'les_a1so_2',
          moduleId: 'mod_a1so_1',
          kind: 'text',
          durationMin: 10,
          title: t('Les liaisons : quand les mots se collent', 'Liaisons: when words stick together', '联诵：词与词相连'),
          summary: t(
            'Pourquoi « les amis » se dit [lezami] et pourquoi c’est important.',
            'Why “les amis” is said [lezami], and why that matters.',
            '为什么 “les amis” 读作 [lezami]，以及这为何重要。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🔗',
              text: t(
                'Une consonne muette se réveille quand le mot suivant commence par une voyelle. C’est la liaison. Sans elle, le français sonne haché ; avec elle, la phrase coule d’un seul tenant.',
                'A silent consonant wakes up when the next word starts with a vowel. That is the liaison. Without it French sounds chopped up; with it, the sentence flows as one piece.',
                '当下一个词以元音开头时，原本不发音的辅音会“苏醒”。这就是联诵。没有它，法语听起来支离破碎；有了它，句子连成一气。',
              ),
            },
            {
              type: 'examples',
              emoji: '💬',
              title: t('La liaison à l’œuvre', 'Liaison in action', '联诵的实际运用'),
              items: [
                { fr: 'les amis → [lezami]', gloss: t('Le s se dit [z]. C’est souvent le seul indice qu’il y a plusieurs amis.', 'The s is said [z]. It is often the only clue that there is more than one friend.', 's 读作 [z]。这往往是判断朋友不止一个的唯一线索。') },
                { fr: 'un grand homme → [œ̃-gʁɑ̃-tɔm]', gloss: t('Le d muet se réveille en [t]. Étrange, mais systématique.', 'The silent d wakes up as [t]. Odd, but systematic.', '不发音的 d 变成 [t] 音。奇怪，但很规律。') },
                { fr: 'vous avez → [vu-za-ve]', gloss: t('Sans la liaison, on entendrait « vous » et « avez » séparés : très étranger à l’oreille.', 'Without the liaison you would hear “vous” and “avez” apart: very foreign-sounding.', '没有联诵会把 “vous” 和 “avez” 听成两截：听起来很不地道。') },
                { fr: 'et alors → [e-a-lɔʁ]', gloss: t('Jamais de liaison après « et ». C’est la seule interdiction absolue.', 'Never a liaison after “et”. This is the one absolute prohibition.', '“et” 之后绝不联诵。这是唯一的绝对禁令。'), incorrect: false },
              ],
            },
            {
              type: 'interactive',
              emoji: '🧲',
              title: t('Liaison ou pas ?', 'Liaison or not?', '要不要联诵？'),
              hint: t(
                'Chaque cas a sa règle. Cliquez pour la voir.',
                'Each case has its rule. Click to see it.',
                '每种情况都有规则。点击查看。',
              ),
              widget: {
                kind: 'switcher',
                steps: [
                  {
                    id: 'obligatoire',
                    label: t('Toujours', 'Always', '必须'),
                    headline: t('article ou pronom + voyelle', 'article or pronoun + vowel', '冠词或代词 + 元音'),
                    example: 'les enfants · nous avons · un ami',
                    gloss: t('Après un petit mot grammatical, la liaison est obligatoire. L’omettre s’entend tout de suite.', 'After a small grammatical word, the liaison is compulsory. Leaving it out is immediately noticeable.', '在语法小词之后，联诵是必须的。省略会立刻被听出来。'),
                  },
                  {
                    id: 'frequente',
                    label: t('Souvent', 'Often', '常见'),
                    headline: t('adjectif + nom', 'adjective + noun', '形容词 + 名词'),
                    example: 'un petit enfant · les grands hommes',
                    gloss: t('Quand l’adjectif précède le nom, on lie presque toujours. Ne pas le faire n’est pas une faute, seulement moins fluide.', 'When the adjective comes before the noun, you almost always link. Not doing it is not a mistake, just less fluent.', '形容词位于名词之前时几乎总要联诵。不联诵不算错，只是不够流畅。'),
                  },
                  {
                    id: 'jamais',
                    label: t('Jamais', 'Never', '禁止'),
                    headline: t('après « et », ou devant un h aspiré', 'after “et”, or before an aspirate h', '在 “et” 之后，或送气 h 之前'),
                    example: 'et alors · les / héros',
                    gloss: t('Après « et », jamais de liaison. Devant certains mots en h — héros, haine — non plus : ce h « aspiré » bloque tout.', 'After “et”, never a liaison. Nor before certain h-words — héros, haine: that “aspirate” h blocks everything.', '“et” 之后绝不联诵。某些以 h 开头的词前也不联诵——héros、haine：这个“送气” h 会阻断一切。'),
                  },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'info',
              emoji: '👂',
              title: t('Pourquoi c’est important pour comprendre', 'Why this matters for listening', '这为何对听力重要'),
              text: t(
                'La liaison colle les mots ensemble : à l’oreille, « il est ici » forme un seul bloc [i-lɛ-ti-si]. Un débutant qui cherche des mots séparés n’entend rien. Il faut apprendre à reconnaître ces blocs.',
                'Liaison glues words together: to the ear, “il est ici” makes one block, [i-lɛ-ti-si]. A beginner looking for separate words hears nothing. You have to learn to recognise these blocks.',
                '联诵把词粘在一起：听觉上 “il est ici” 是一整块 [i-lɛ-ti-si]。初学者若逐词去找，就什么也听不出来。要学会识别这些整块。',
              ),
            },
          ],
        },
        {
          id: 'les_a1so_3',
          moduleId: 'mod_a1so_1',
          kind: 'text',
          durationMin: 11,
          title: t('Les sons difficiles', 'The hard sounds', '难发的音'),
          summary: t(
            'Le u, le r, les voyelles nasales : ce que votre langue maternelle n’a pas.',
            'The u, the r, the nasal vowels: what your first language does not have.',
            'u、r、鼻化元音：母语中没有的那些音。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🗣️',
              text: t(
                'Cinq ou six sons posent problème, toujours les mêmes. Les travailler quelques minutes par jour change plus votre accent que des heures de grammaire.',
                'Five or six sounds cause trouble, always the same ones. Working on them a few minutes a day changes your accent more than hours of grammar.',
                '有五六个音总是让人头疼。每天花几分钟练习，对口音的改善远胜数小时的语法学习。',
              ),
            },
            {
              type: 'keyvalues',
              emoji: '🎯',
              title: t('Les sons à travailler en priorité', 'The sounds to work on first', '优先练习的音'),
              entries: [
                { label: t('u [y] — tu, rue, sur', 'u [y] — tu, rue, sur', 'u [y] —— tu、rue、sur'), value: t('Dites « i », puis avancez les lèvres en rond sans bouger la langue. Ce n’est pas le « ou » de « vous ».', 'Say “ee”, then round your lips forward without moving your tongue. It is not the “oo” of “vous”.', '先发 “i”，然后保持舌位不变、把嘴唇向前撮圆。这不是 “vous” 里的 “ou”。') },
                { label: t('r [ʁ] — Paris, rouge', 'r [ʁ] — Paris, rouge', 'r [ʁ] —— Paris、rouge'), value: t('Il se fait au fond de la gorge, pas avec le bout de la langue. Proche du son du gargarisme, en beaucoup plus léger.', 'It is made at the back of the throat, not with the tip of the tongue. Close to a gargle, but far lighter.', '在喉咙深处发出，而非用舌尖。接近漱口的声音，但轻得多。') },
                { label: t('an / en [ɑ̃] — grand, temps', 'an / en [ɑ̃] — grand, temps', 'an / en [ɑ̃] —— grand、temps'), value: t('Voyelle nasale : l’air passe par le nez. Le n ne se prononce pas séparément.', 'A nasal vowel: air goes through the nose. The n is not pronounced separately.', '鼻化元音：气流经过鼻腔。n 不单独发音。') },
                { label: t('on [ɔ̃] — bon, nom', 'on [ɔ̃] — bon, nom', 'on [ɔ̃] —— bon、nom'), value: t('Même principe, bouche plus arrondie. « Bon » et « banc » ne se confondent que si l’on néglige cette différence.', 'Same principle, more rounded mouth. “Bon” and “banc” only get confused if you neglect this difference.', '原理相同，口型更圆。只有忽略这一差别时，“bon” 和 “banc” 才会混淆。') },
                { label: t('in [ɛ̃] — vin, main, pain', 'in [ɛ̃] — vin, main, pain', 'in [ɛ̃] —— vin、main、pain'), value: t('La troisième nasale. Avec les deux autres, elle forme le trio à distinguer : vent, vont, vin.', 'The third nasal. With the other two it forms the trio to tell apart: vent, vont, vin.', '第三个鼻化元音。与前两个构成需要区分的三音组：vent、vont、vin。') },
                { label: t('eu [ø] — deux, bleu', 'eu [ø] — deux, bleu', 'eu [ø] —— deux、bleu'), value: t('Dites « é », puis arrondissez les lèvres. C’est le son de « monsieur ».', 'Say “ay”, then round your lips. It is the sound in “monsieur”.', '先发 “é”，然后撮圆嘴唇。就是 “monsieur” 里的那个音。') },
              ],
            },
            {
              type: 'interactive',
              emoji: '👂',
              title: t('Les paires qui se ressemblent', 'The pairs that sound alike', '容易混淆的音对'),
              hint: t(
                'Reliez chaque mot à ce qui le distingue de son voisin.',
                'Match each word to what tells it apart from its neighbour.',
                '把每个词与区分它和邻近词的要点配对。',
              ),
              widget: {
                kind: 'pairs',
                prompt: t('Ces mots ne diffèrent que par un son :', 'These words differ by one sound only:', '这些词只差一个音：'),
                pairs: [
                  { id: 's1', left: 'dessus / dessous', right: t('u [y] contre ou [u] : au-dessus, c’est plus haut', 'u [y] versus ou [u]: au-dessus means higher up', 'u [y] 对 ou [u]：au-dessus 指上面') },
                  { id: 's2', left: 'vent / vont', right: t('an [ɑ̃] contre on [ɔ̃] : le premier est le vent qui souffle', 'an [ɑ̃] versus on [ɔ̃]: the first is the wind that blows', 'an [ɑ̃] 对 on [ɔ̃]：前者是刮的风') },
                  { id: 's3', left: 'poisson / poison', right: t('deux s pour [s], un seul pour [z] : le repas ou le danger', 'double s for [s], single for [z]: dinner or danger', '双 s 读 [s]，单 s 读 [z]：一顿饭还是一场危险') },
                  { id: 's4', left: 'beau / bon', right: t('o [o] contre on [ɔ̃] : le second passe par le nez', 'o [o] versus on [ɔ̃]: the second goes through the nose', 'o [o] 对 on [ɔ̃]：后者经过鼻腔') },
                  { id: 's5', left: 'ces / ses', right: t('même son : seul le contexte les sépare à l’oral', 'same sound: only context separates them in speech', '读音相同：口语中只能靠上下文区分') },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'success',
              emoji: '⏱️',
              title: t('Cinq minutes par jour suffisent', 'Five minutes a day is enough', '每天五分钟就够'),
              text: t(
                'Choisissez une paire — « tu » et « tout » par exemple — et dites-la vingt fois de suite en exagérant. L’oreille se règle avant la bouche : au bout d’une semaine, vous entendrez la différence chez les autres.',
                'Pick one pair — “tu” and “tout”, say — and repeat it twenty times, exaggerating. The ear tunes before the mouth: after a week you will hear the difference in other people.',
                '挑一组音对——比如 “tu” 和 “tout”——夸张地连说二十遍。耳朵先于嘴巴调准：一周后，你就能听出别人的区别。',
              ),
            },
          ],
        },
      ],
    },
    {
      id: 'mod_a1so_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Six questions sur les lettres muettes, les liaisons et les sons.', 'Six questions on silent letters, liaisons and sounds.', '六道题，考查不发音字母、联诵与语音。'),
      lessons: [
        {
          id: 'les_a1so_q',
          moduleId: 'mod_a1so_q',
          kind: 'quiz',
          durationMin: 6,
          quizId: 'qz_a1_sons',
          title: t('Quiz — Les sons du français', 'Quiz — The sounds of French', '测验 — 法语语音'),
          summary: t('6 questions sur la prononciation.', '6 questions on pronunciation.', '6 道题，考查发音。'),
        },
      ],
    },
  ],
};
