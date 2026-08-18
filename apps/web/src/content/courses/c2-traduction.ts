import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_c2_traduction';

export const c2TraductionCourse: Course = {
  id: ID,
  slug: 'c2-traduction',
  level: 'C2',
  accentFrom: '#c4b5fd',
  accentTo: '#1e3a8a',
  status: 'published',
  title: t('Penser en français, pas traduire', 'Thinking in French, not translating', '用法语思考，而不是翻译'),
  subtitle: t('3 leçons · 1 quiz noté', '3 lessons · 1 graded quiz', '3 节课 · 1 次评分测验'),
  description: t(
    'Le dernier accent qui trahit un non-natif n’est pas phonétique : c’est la structure de la phrase. Ce cours démonte les réflexes de traduction et donne la construction française équivalente.',
    'The last accent that gives away a non-native speaker is not phonetic: it is sentence structure. This course dismantles translation reflexes and gives the equivalent French construction.',
    '最后暴露非母语者的“口音”不在语音，而在句子结构。本课程拆解翻译式反射，并给出对应的法语构造。',
  ),
  tags: [t('Maîtrise', 'Mastery', '精通'), t('Structure', 'Structure', '结构')],
  modules: [
    {
      id: 'mod_c2tr_1',
      courseId: ID,
      title: t('Ce que le français dit autrement', 'What French says differently', '法语的另一种说法'),
      summary: t(
        'Trois familles de constructions qui n’ont pas d’équivalent direct.',
        'Three families of constructions with no direct equivalent.',
        '三类没有直接对应形式的结构。',
      ),
      lessons: [
        {
          id: 'les_c2tr_1',
          moduleId: 'mod_c2tr_1',
          kind: 'text',
          durationMin: 12,
          title: t('Le français préfère le nom, l’anglais préfère le verbe', 'French prefers the noun, English prefers the verb', '法语偏爱名词，英语偏爱动词'),
          summary: t(
            'La différence de structure la plus profonde entre les deux langues.',
            'The deepest structural difference between the two languages.',
            '两种语言之间最根本的结构差异。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🔀',
              text: t(
                'Là où l’anglais empile les verbes, le français condense en groupes nominaux ; là où le chinois juxtapose des propositions courtes, le français les subordonne. Traduire mot à mot donne une phrase correcte et pourtant reconnaissable comme étrangère.',
                'Where English stacks up verbs, French condenses into noun groups; where Chinese sets short clauses side by side, French subordinates them. Translating word for word gives a correct sentence that is still recognisably foreign.',
                '英语层层叠加动词，法语则浓缩为名词词组；中文把短句并列，法语则让它们主从有别。逐字翻译能得到正确的句子，却一眼就能看出是外来的。',
              ),
            },
            {
              type: 'examples',
              emoji: '⚖️',
              title: t('La même idée, deux architectures', 'The same idea, two architectures', '同一想法，两种构架'),
              items: [
                {
                  fr: 'Après avoir vérifié les comptes, le comité a validé le budget.',
                  gloss: t(
                    'Le français aime placer l’action antérieure en tête, sous forme d’infinitif passé. C’est plus soutenu qu’une proposition avec quand.',
                    'French likes to put the earlier action at the front, as a past infinitive. It is more formal than a clause with “quand”.',
                    '法语喜欢把先发生的动作放在句首，用过去不定式表达。这比用 “quand” 引导的从句更正式。',
                  ),
                },
                {
                  fr: 'Faute de temps, nous reportons la décision.',
                  gloss: t(
                    'Deux mots remplacent toute une proposition de cause. Ce type de groupe nominal en tête est un marqueur net de bon français écrit.',
                    'Two words replace a whole clause of cause. This kind of fronted noun group is a clear marker of good written French.',
                    '两个词替代了整个原因从句。这类置于句首的名词词组是优秀法语书面表达的鲜明标志。',
                  ),
                },
                {
                  fr: 'Il est parti sans dire au revoir, ce qui a surpris tout le monde.',
                  gloss: t(
                    '« Ce qui » reprend toute la phrase précédente, pas un nom. C’est la façon française d’enchaîner un commentaire.',
                    '“Ce qui” picks up the whole preceding clause, not a noun. It is the French way of tacking on a comment.',
                    '“ce qui” 指代的是前面整句话，而不是某个名词。这是法语添加评论的方式。',
                  ),
                },
              ],
            },
            {
              type: 'interactive',
              emoji: '🎛️',
              title: t('Le réflexe étranger et sa version française', 'The foreign reflex and its French version', '外语式反射及其法语版本'),
              hint: t(
                'Croisez la construction de départ et la solution, {prenom}.',
                'Cross the starting construction with the solution, {prenom}.',
                '{prenom}，把原始结构与解决方案交叉查询。',
              ),
              widget: {
                kind: 'matrix',
                rowsLabel: t('Ce qu’on a envie d’écrire', 'What you feel like writing', '你想写的'),
                columnsLabel: t('La solution', 'The solution', '解决方案'),
                rows: [
                  { id: 'r1', label: t('Une chaîne de verbes', 'A chain of verbs', '一串动词') },
                  { id: 'r2', label: t('Deux phrases juxtaposées', 'Two clauses side by side', '两个并列短句') },
                  { id: 'r3', label: t('Un sujet impersonnel', 'An impersonal subject', '无人称主语') },
                ],
                columns: [
                  { id: 'c1', label: t('Version calquée', 'Calqued version', '直译版本') },
                  { id: 'c2', label: t('Version française', 'French version', '法语版本') },
                ],
                cells: [
                  { row: 'r1', column: 'c1', answer: 'lourd', example: 'Quand il est arrivé, il a vu que la porte était ouverte.', gloss: t('Correct, mais chaque idée occupe une proposition entière. À l’écrit, cela alourdit vite.', 'Correct, but each idea takes up a whole clause. In writing, that quickly weighs things down.', '正确，但每个想法都占了一整个从句。写起来很快就显得笨重。') },
                  { row: 'r1', column: 'c2', answer: 'condensé', example: 'À son arrivée, il trouva la porte ouverte.', gloss: t('Le verbe devient un groupe nominal, et la seconde proposition disparaît dans un adjectif.', 'The verb becomes a noun group, and the second clause vanishes into an adjective.', '动词变成名词词组，第二个从句化入一个形容词。') },
                  { row: 'r2', column: 'c1', answer: 'plat', example: 'Il pleuvait. Nous sommes restés à la maison.', gloss: t('La juxtaposition laisse le lien de cause implicite. Acceptable à l’oral, faible à l’écrit.', 'Juxtaposition leaves the causal link implicit. Fine in speech, weak in writing.', '并列让因果关系停留在暗示层面。口语中可以，书面则显弱。') },
                  { row: 'r2', column: 'c2', answer: 'subordonné', example: 'La pluie nous a retenus à la maison.', gloss: t('Le français nomme la cause et en fait le sujet. La phrase devient plus dense et plus nette.', 'French names the cause and makes it the subject. The sentence becomes denser and sharper.', '法语点明原因，并让它充当主语。句子因而更凝练、更清晰。') },
                  { row: 'r3', column: 'c1', answer: 'calque', example: 'C’est dit que la réunion est reportée.', gloss: t('Calque direct d’une tournure impersonnelle étrangère. N’existe pas en français.', 'A direct calque of a foreign impersonal turn. Does not exist in French.', '外语无人称结构的直接照搬。法语中不存在。') },
                  { row: 'r3', column: 'c2', answer: 'on / il', example: 'On dit que la réunion est reportée. Il paraît que la réunion est reportée.', gloss: t('Le français dispose de deux sujets impersonnels : « on » pour la rumeur, « il » pour les tournures figées.', 'French has two impersonal subjects: “on” for hearsay, “il” for fixed turns.', '法语有两个无人称主语：“on” 用于传闻，“il” 用于固定句式。') },
                ],
              },
            },
          ],
        },
        {
          id: 'les_c2tr_2',
          moduleId: 'mod_c2tr_1',
          kind: 'text',
          durationMin: 11,
          title: t('Les expressions qui ne se traduisent pas', 'The expressions that do not translate', '无法直译的表达'),
          summary: t(
            'Ce qu’il faut dire à la place, et pourquoi la traduction littérale échoue.',
            'What to say instead, and why the literal translation fails.',
            '该怎么说，以及为什么直译行不通。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🧩',
              text: t(
                'Certaines idées très courantes n’ont pas de mot en français : elles se rendent par une construction entière. Les connaître fait gagner plus de fluidité que cent mots de vocabulaire rare.',
                'Some very common ideas have no single word in French: they are rendered by a whole construction. Knowing them buys more fluency than a hundred rare vocabulary items.',
                '有些极常见的意思在法语里没有对应的词，而要靠整个结构来表达。掌握它们比记一百个生僻词更能提升流利度。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🔗',
              title: t('L’idée et sa construction française', 'The idea and its French construction', '意思与其法语结构'),
              hint: t('Cinq idées sans mot unique en français.', 'Five ideas with no single French word.', '五个在法语中没有单一对应词的意思。'),
              widget: {
                kind: 'pairs',
                prompt: t('Pour dire cette idée, le français emploie :', 'To say this idea, French uses:', '要表达这个意思，法语会用：'),
                pairs: [
                  { id: 'e1', left: 'avoir hâte de', right: t('l’attente impatiente d’un événement heureux', 'the impatient wait for a happy event', '对一件好事的迫不及待的等待') },
                  { id: 'e2', left: 'il s’agit de', right: t('présenter le sujet dont on parle, sans sujet réel dans la phrase', 'introduce the topic at hand, with no real subject in the sentence', '引出所谈的主题，句中并无真正的主语') },
                  { id: 'e3', left: 'avoir beau + infinitif', right: t('faire un effort qui reste sans résultat', 'make an effort that comes to nothing', '努力却毫无结果') },
                  { id: 'e4', left: 'faillir + infinitif', right: t('avoir été tout près de faire quelque chose', 'to have come very close to doing something', '差一点就做了某事') },
                  { id: 'e5', left: 'quitte à + infinitif', right: t('accepter par avance une conséquence désagréable', 'accept an unpleasant consequence in advance', '预先接受一个不愉快的后果') },
                ],
              },
            },
            {
              type: 'examples',
              emoji: '🎯',
              title: t('Ces constructions à l’œuvre', 'These constructions at work', '这些结构的实际用法'),
              items: [
                {
                  fr: 'J’ai eu beau relire le contrat, je n’ai rien vu d’anormal.',
                  gloss: t(
                    '« Avoir beau » se place toujours en tête, suivi de l’infinitif, et la seconde partie annonce l’échec. Aucun équivalent en un mot.',
                    '“Avoir beau” always comes first, followed by the infinitive, and the second half announces the failure. No one-word equivalent.',
                    '“avoir beau” 永远置于句首，后接不定式，后半句宣告努力落空。没有单个词能对应。',
                  ),
                },
                {
                  fr: 'J’ai failli manquer le train.',
                  gloss: t(
                    'Attention : cela veut dire que je ne l’ai pas manqué. « Faillir » dit toujours ce qui ne s’est pas produit.',
                    'Careful: this means that I did not miss it. “Faillir” always states what did not happen.',
                    '注意：这句话的意思是我并没有误车。“faillir” 表达的永远是没有发生的事。',
                  ),
                },
                {
                  fr: 'Je préfère demander, quitte à passer pour ignorant.',
                  gloss: t(
                    'On accepte le risque avant qu’il se réalise. La tournure est très fréquente à l’oral soigné.',
                    'You accept the risk before it materialises. The turn is very frequent in careful speech.',
                    '在风险出现之前就接受它。这个说法在考究口语中非常常见。',
                  ),
                },
              ],
            },
            {
              type: 'callout',
              tone: 'danger',
              emoji: '🚨',
              title: t('« J’ai failli tomber » ne veut pas dire que je suis tombé', '“J’ai failli tomber” does not mean I fell', '“J’ai failli tomber” 不是说我摔倒了'),
              text: t(
                'C’est le contresens le plus fréquent à ce niveau, et il change complètement le récit. « Faillir » signifie être passé tout près, donc ne pas avoir fait. Vérifiez ce verbe chaque fois que vous racontez un incident.',
                'This is the most frequent misreading at this level, and it flips the whole story. “Faillir” means to have come very close, therefore not to have done it. Check this verb every time you recount an incident.',
                '这是这个级别最常见的误解，而且会彻底改变叙述。“faillir” 意为差一点，也就是并没有做成。每次讲述事故时都要检查这个动词。',
              ),
            },
          ],
        },
        {
          id: 'les_c2tr_3',
          moduleId: 'mod_c2tr_1',
          kind: 'text',
          durationMin: 11,
          title: t('Réécrire une phrase traduite', 'Rewriting a translated sentence', '改写一句翻译腔的句子'),
          summary: t(
            'La méthode en quatre gestes pour effacer l’accent de traduction.',
            'The four-step method for erasing the translation accent.',
            '四步法，消除翻译腔。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🛠️',
              text: t(
                'Une phrase traduite se répare presque toujours de la même façon. Quatre gestes, dans cet ordre, suffisent à la faire sonner française — et ils s’appliquent aussi à vos propres textes, une fois refroidis.',
                'A translated sentence is nearly always repaired the same way. Four moves, in this order, are enough to make it sound French — and they apply to your own texts too, once they have cooled off.',
                '翻译腔的句子几乎总能用同样的方法修好。按顺序做四个动作，就足以让它听起来像法语——放凉之后回头看自己的文字，同样适用。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🔢',
              title: t('Les quatre gestes, dans l’ordre', 'The four moves, in order', '四个动作，依次进行'),
              hint: t('Remettez la méthode dans le bon ordre.', 'Put the method back in the right order.', '把方法排回正确顺序。'),
              widget: {
                kind: 'order',
                prompt: t('Pour réécrire une phrase qui sent la traduction :', 'To rewrite a sentence that smells of translation:', '改写一句带翻译腔的句子：'),
                items: [
                  { id: 's1', text: t('Trouver le vrai sujet de la phrase et le mettre en premier', 'Find the real subject of the sentence and put it first', '找出句子的真正主语，把它放在最前面') },
                  { id: 's2', text: t('Supprimer les verbes vides : il y a, c’est, faire, avoir', 'Delete the empty verbs: il y a, c’est, faire, avoir', '删掉空洞的动词：il y a、c’est、faire、avoir') },
                  { id: 's3', text: t('Condenser une proposition entière en un groupe nominal', 'Condense a whole clause into a noun group', '把整个从句浓缩成一个名词词组') },
                  { id: 's4', text: t('Relire à voix haute et couper ce qui ne se dit pas', 'Read aloud and cut whatever you would not say', '朗读一遍，删掉说不出口的部分') },
                ],
                successNote: t(
                  'Ces quatre gestes suppriment la plupart des lourdeurs. Le quatrième est le plus efficace : l’oreille repère ce que l’œil laisse passer.',
                  'These four moves remove most of the heaviness. The fourth is the most effective: the ear catches what the eye lets through.',
                  '这四个动作能去掉大部分笨重感。第四个最有效：耳朵能抓住眼睛放过的东西。',
                ),
              },
            },
            {
              type: 'examples',
              emoji: '✨',
              title: t('Avant, après', 'Before, after', '改前，改后'),
              items: [
                {
                  fr: 'Il y a beaucoup de personnes qui pensent que cette décision est une mauvaise décision.',
                  incorrect: true,
                  gloss: t(
                    'Trois défauts : « il y a » vide, « personnes qui » alourdit, et « décision » se répète.',
                    'Three faults: an empty “il y a”, a heavy “personnes qui”, and “décision” repeated.',
                    '三个毛病：空洞的 “il y a”、笨重的 “personnes qui”，以及重复的 “décision”。',
                  ),
                },
                {
                  fr: 'Beaucoup jugent cette décision mauvaise.',
                  gloss: t(
                    'Le sujet passe en tête, le verbe vide disparaît, la répétition aussi. La phrase perd la moitié de ses mots et gagne en force.',
                    'The subject moves to the front, the empty verb goes, and so does the repetition. The sentence loses half its words and gains force.',
                    '主语提前，空洞动词消失，重复也没了。句子少了一半的词，力量却更强。',
                  ),
                },
                {
                  fr: 'C’est important de noter que le rapport a été publié en retard.',
                  incorrect: true,
                  gloss: t(
                    '« C’est important de noter que » n’apporte rien : ce sont sept mots pour annoncer qu’on va parler.',
                    '“C’est important de noter que” adds nothing: seven words to announce that you are about to speak.',
                    '“C’est important de noter que” 什么也没说：用七个词宣布自己要开口了。',
                  ),
                },
                {
                  fr: 'Le rapport a été publié en retard.',
                  gloss: t(
                    'On garde le fait, on jette l’annonce. Dans une copie de C2, cette économie est directement valorisée.',
                    'You keep the fact and throw away the announcement. In a C2 paper, this economy is directly rewarded.',
                    '保留事实，扔掉铺垫。在 C2 的答卷中，这种简省会直接加分。',
                  ),
                },
              ],
            },
            {
              type: 'callout',
              tone: 'success',
              emoji: '🎧',
              title: t('Le test de l’oreille', 'The ear test', '耳朵测试'),
              text: t(
                'Lisez votre phrase à voix haute sans reprendre votre souffle. Si vous manquez d’air avant la fin, elle est trop longue pour un lecteur français. Cette vérification ne coûte rien et remplace n’importe quelle règle.',
                'Read your sentence aloud without taking a breath. If you run out of air before the end, it is too long for a French reader. This check costs nothing and replaces any rule.',
                '一口气把你的句子读出来。如果读不到句尾就没气了，那它对法语读者来说太长了。这个检验不花任何成本，胜过任何规则。',
              ),
            },
          ],
        },
      ],
    },
    {
      id: 'mod_c2tr_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Six questions sur les structures propres au français.', 'Six questions on structures specific to French.', '六道题，考查法语特有的结构。'),
      lessons: [
        {
          id: 'les_c2tr_q',
          moduleId: 'mod_c2tr_q',
          kind: 'quiz',
          durationMin: 8,
          quizId: 'qz_c2_traduction',
          title: t('Quiz — Penser en français', 'Quiz — Thinking in French', '测验 — 用法语思考'),
          summary: t('6 questions sur les réflexes à corriger.', '6 questions on the reflexes to correct.', '6 道题，考查需要纠正的思维反射。'),
        },
      ],
    },
  ],
};
