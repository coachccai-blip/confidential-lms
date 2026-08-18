import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_b1_pronoms';

export const b1PronomsCourse: Course = {
  id: ID,
  slug: 'b1-pronoms',
  level: 'B1',
  accentFrom: '#5eead4',
  accentTo: '#0ea5e9',
  status: 'published',
  title: t('Les pronoms sans hésiter', 'Pronouns without hesitating', '代词不再犹豫'),
  subtitle: t('3 leçons · 1 quiz noté', '3 lessons · 1 graded quiz', '3 节课 · 1 次评分测验'),
  description: t(
    'Le, lui, y, en, dont… Ces petits mots évitent de répéter, mais chacun remplace quelque chose de précis. Une fois qu’on sait quoi, on ne se trompe plus.',
    'Le, lui, y, en, dont… These little words save you from repeating yourself, but each one replaces something specific. Once you know what, you stop getting them wrong.',
    'Le、lui、y、en、dont……这些小词让你不必重复，但每一个都替代着特定的成分。弄清替代什么，就不会再用错。',
  ),
  tags: [t('Grammaire', 'Grammar', '语法'), t('Fluidité', 'Fluency', '流利度')],
  modules: [
    {
      id: 'mod_b1pr_1',
      courseId: ID,
      title: t('Remplacer sans répéter', 'Replacing without repeating', '替代而不重复'),
      summary: t(
        'Trois familles de pronoms, une question simple pour choisir la bonne.',
        'Three families of pronouns, one simple question to pick the right one.',
        '三类代词，一个简单的问题就能选对。',
      ),
      lessons: [
        {
          id: 'les_b1pr_1',
          moduleId: 'mod_b1pr_1',
          kind: 'text',
          durationMin: 12,
          title: t('Le, la, les ou lui, leur ?', 'Le, la, les or lui, leur?', 'Le、la、les 还是 lui、leur？'),
          summary: t(
            'La question à poser au verbe pour trouver le bon pronom.',
            'The question to ask the verb to find the right pronoun.',
            '向动词提一个问题，就能找到正确的代词。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🔍',
              text: t(
                'Tout se joue sur une seule question posée au verbe : **qui ?** ou **à qui ?** Si le verbe se construit directement, on prend le, la, les. S’il faut passer par « à », on prend lui ou leur. Il n’y a pas d’autre règle à retenir.',
                'It all comes down to one question you ask the verb: **who?** or **to whom?** If the verb links directly, you use le, la, les. If it needs “à”, you use lui or leur. There is no other rule to remember.',
                '关键只在于向动词提一个问题：**谁？**还是**对谁？**如果动词直接带宾语，就用 le、la、les；如果需要 “à”，就用 lui 或 leur。没有别的规则要记。',
              ),
            },
            {
              type: 'examples',
              emoji: '⚖️',
              title: t('La même phrase, deux verbes différents', 'The same sentence, two different verbs', '同一句话，两个不同的动词'),
              items: [
                {
                  fr: 'J’appelle Marie. → Je l’appelle.',
                  gloss: t(
                    'On appelle quelqu’un, sans « à ». Donc pronom direct : l’.',
                    'You call someone, with no “à”. So a direct pronoun: l’.',
                    '“appeler”后面直接跟人，不加 “à”。所以用直接宾语代词 l’。',
                  ),
                },
                {
                  fr: 'Je téléphone à Marie. → Je lui téléphone.',
                  gloss: t(
                    'On téléphone **à** quelqu’un. Donc pronom indirect : lui.',
                    'You phone **to** someone. So an indirect pronoun: lui.',
                    '“téléphoner”要加 **à**。所以用间接宾语代词 lui。',
                  ),
                },
                {
                  fr: 'J’aide mes parents. → Je les aide.',
                  gloss: t(
                    'Aider quelqu’un : direct, au pluriel les.',
                    '“Aider” takes a direct object, plural les.',
                    '“aider”直接带宾语，复数用 les。',
                  ),
                },
                {
                  fr: 'Je parle à mes parents. → Je leur parle.',
                  gloss: t(
                    'Parler **à** quelqu’un : indirect, au pluriel leur — sans s.',
                    'To speak **to** someone: indirect, plural leur — with no s.',
                    '“parler à”是间接宾语，复数用 leur——不加 s。',
                  ),
                },
              ],
            },
            {
              type: 'interactive',
              emoji: '🎛️',
              title: t('Le tableau des pronoms', 'The pronoun table', '代词对照表'),
              hint: t(
                'Croisez la personne et le type de complément, {prenom} : la case donne la forme.',
                'Cross the person with the complement type, {prenom}: the cell gives you the form.',
                '{prenom}，把人称与补语类型交叉查询：格子里就是对应形式。',
              ),
              widget: {
                kind: 'matrix',
                rowsLabel: t('Qui est remplacé', 'Who is replaced', '被替代的对象'),
                columnsLabel: t('Type de complément', 'Type of complement', '补语类型'),
                rows: [
                  { id: 'r1', label: t('moi', 'me', '我') },
                  { id: 'r2', label: t('toi', 'you', '你') },
                  { id: 'r3', label: t('lui / elle', 'him / her', '他 / 她') },
                  { id: 'r4', label: t('eux / elles', 'them', '他们 / 她们') },
                ],
                columns: [
                  { id: 'c1', label: t('Direct — voir qui ?', 'Direct — see who?', '直接——看见谁？') },
                  { id: 'c2', label: t('Indirect — parler à qui ?', 'Indirect — speak to whom?', '间接——对谁说？') },
                ],
                cells: [
                  { row: 'r1', column: 'c1', answer: 'me', example: 'Tu me vois.', gloss: t('Tu vois moi.', 'You see me.', '你看见我。') },
                  { row: 'r1', column: 'c2', answer: 'me', example: 'Tu me parles.', gloss: t('Tu parles à moi. Même forme aux deux colonnes.', 'You speak to me. Same form in both columns.', '你对我说话。两栏形式相同。') },
                  { row: 'r2', column: 'c1', answer: 'te', example: 'Je te vois.', gloss: t('Je vois toi.', 'I see you.', '我看见你。') },
                  { row: 'r2', column: 'c2', answer: 'te', example: 'Je te parle.', gloss: t('Je parle à toi. Même forme là aussi.', 'I speak to you. Same form here too.', '我对你说话。这里形式也相同。') },
                  { row: 'r3', column: 'c1', answer: 'le / la', example: 'Je le vois. Je la vois.', gloss: t('C’est ici que les deux colonnes se séparent : le pour un homme, la pour une femme.', 'This is where the two columns split: le for a man, la for a woman.', '两栏正是在这里分道扬镳：男性用 le，女性用 la。') },
                  { row: 'r3', column: 'c2', answer: 'lui', example: 'Je lui parle.', gloss: t('Lui sert pour un homme comme pour une femme. Le genre disparaît.', 'Lui works for a man and for a woman alike. Gender disappears.', 'lui 男女通用，性别在这里消失了。') },
                  { row: 'r4', column: 'c1', answer: 'les', example: 'Je les vois.', gloss: t('Les, pour un groupe, quel que soit le genre.', 'Les, for a group, whatever the gender.', 'les 用于一群人，不分性别。') },
                  { row: 'r4', column: 'c2', answer: 'leur', example: 'Je leur parle.', gloss: t('Leur ne prend jamais de s quand c’est un pronom.', 'Leur never takes an s when it is a pronoun.', '作为代词时，leur 永远不加 s。') },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'warning',
              emoji: '🪤',
              title: t('Les verbes qui trompent tout le monde', 'The verbs that fool everyone', '人人都会弄错的动词'),
              text: t(
                'Certains verbes français demandent « à » là où l’anglais et le chinois n’en mettent pas : **téléphoner à**, **répondre à**, **demander à**, **ressembler à**, **plaire à**. On dit donc « je lui téléphone », jamais « je le téléphone ».',
                'Some French verbs need “à” where English and Chinese do not: **téléphoner à**, **répondre à**, **demander à**, **ressembler à**, **plaire à**. So you say “je lui téléphone”, never “je le téléphone”.',
                '有些法语动词需要 “à”，而英语和中文不需要：**téléphoner à**、**répondre à**、**demander à**、**ressembler à**、**plaire à**。所以说 “je lui téléphone”，绝不说 “je le téléphone”。',
              ),
            },
            {
              type: 'interactive',
              emoji: '✏️',
              title: t('À vous de choisir', 'Your turn to choose', '轮到你来选'),
              hint: t(
                'Posez la question au verbe avant de cliquer.',
                'Ask the verb the question before you click.',
                '点击之前先向动词提问。',
              ),
              widget: {
                kind: 'fill',
                prompt: t('Direct ou indirect ?', 'Direct or indirect?', '直接还是间接？'),
                items: [
                  {
                    id: 'f1',
                    before: 'Ma sœur est malade, je',
                    after: 'appelle ce soir.',
                    options: ['l’', 'lui'],
                    answer: 'l’',
                    why: t('Appeler quelqu’un, sans « à » : pronom direct, élidé devant une voyelle.', '“Appeler” takes a direct object, no “à”: direct pronoun, elided before a vowel.', '“appeler”直接带宾语，不加 “à”：用直接宾语代词，元音前省音。'),
                  },
                  {
                    id: 'f2',
                    before: 'Mes collègues attendent une réponse, je',
                    after: 'écris demain.',
                    options: ['les', 'leur'],
                    answer: 'leur',
                    why: t('Écrire **à** quelqu’un : pronom indirect pluriel, leur sans s.', 'To write **to** someone: plural indirect pronoun, leur with no s.', '“écrire à”是间接宾语：复数用 leur，不加 s。'),
                  },
                  {
                    id: 'f3',
                    before: 'Ce film est superbe, je',
                    after: 'ai vu deux fois.',
                    options: ['l’', 'lui'],
                    answer: 'l’',
                    why: t('Voir quelque chose : direct. Devant « ai », le se réduit à l’.', 'To see something: direct. Before “ai”, le shortens to l’.', '“voir”直接带宾语。在 “ai” 前，le 缩为 l’。'),
                  },
                  {
                    id: 'f4',
                    before: 'Je ne comprends pas cette règle, je vais',
                    after: 'demander au professeur.',
                    options: ['la', 'lui'],
                    answer: 'la',
                    why: t('Ici, on demande **la règle** : c’est la chose qui est reprise, pas la personne. Le professeur reste écrit en entier.', 'Here you are asking about **the rule**: it is the thing being replaced, not the person. The teacher stays written out.', '这里问的是**规则**：被替代的是事物，不是人。老师仍然完整写出。'),
                  },
                ],
              },
            },
          ],
        },
        {
          id: 'les_b1pr_2',
          moduleId: 'mod_b1pr_1',
          kind: 'text',
          durationMin: 11,
          title: t('Y et en, les deux passe-partout', 'Y and en, the two all-rounders', 'Y 和 en：两个万能词'),
          summary: t(
            'Deux pronoms minuscules qui remplacent des phrases entières.',
            'Two tiny pronouns that replace whole phrases.',
            '两个极短的代词，能替代整段成分。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🔁',
              text: t(
                'Y remplace ce qui suit « à » ; en remplace ce qui suit « de » ou une quantité. Ces deux mots reviennent dans presque toutes les phrases parlées, et c’est souvent ce qui manque pour sonner naturel.',
                'Y replaces what follows “à”; en replaces what follows “de” or a quantity. These two words come up in almost every spoken sentence, and they are often what is missing to sound natural.',
                'y 替代 “à” 后面的成分；en 替代 “de” 后面的成分或数量。这两个词几乎出现在每一句口语中，也常常正是让人听起来地道的那一环。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🎚️',
              title: t('Un curseur, quatre emplois', 'One slider, four uses', '一个滑块，四种用法'),
              hint: t(
                'Faites glisser d’un cran à l’autre pour voir ce que chaque pronom reprend.',
                'Slide from one step to the next to see what each pronoun picks up.',
                '逐档滑动，看看每个代词各自替代什么。',
              ),
              widget: {
                kind: 'switcher',
                steps: [
                  {
                    id: 's1',
                    label: t('y = un lieu', 'y = a place', 'y = 地点'),
                    headline: t('Tout ce qui répond à « où ? »', 'Anything that answers “where?”', '一切回答“在哪里？”的成分'),
                    example: 'Tu vas à Lyon ? — Oui, j’y vais demain.',
                    gloss: t('« Y » reprend « à Lyon ». On ne répète jamais le nom de la ville.', '“Y” picks up “à Lyon”. You never repeat the name of the town.', '“y”替代 “à Lyon”。城市名绝不重复。'),
                  },
                  {
                    id: 's2',
                    label: t('y = à quelque chose', 'y = to something', 'y = 对某事'),
                    headline: t('Pour une chose, jamais pour une personne', 'For a thing, never for a person', '用于事物，绝不用于人'),
                    example: 'Tu penses à ton examen ? — J’y pense tout le temps.',
                    gloss: t('Pour une personne, on garderait « à lui », « à elle ». Y ne remplace que des choses et des idées.', 'For a person you would keep “à lui”, “à elle”. Y only replaces things and ideas.', '如果是人，则保留 “à lui”“à elle”。y 只替代事物和概念。'),
                  },
                  {
                    id: 's3',
                    label: t('en = de quelque chose', 'en = of something', 'en = 某事物的'),
                    headline: t('Tout ce qui suit « de »', 'Everything that follows “de”', '一切跟在 “de” 后面的成分'),
                    example: 'Tu reviens de Paris ? — J’en reviens à l’instant.',
                    gloss: t('« En » reprend « de Paris ». Même mécanique que y, mais avec la préposition de.', '“En” picks up “de Paris”. Same mechanics as y, but with the preposition de.', '“en”替代 “de Paris”。机制与 y 相同，只是介词换成 de。'),
                  },
                  {
                    id: 's4',
                    label: t('en = une quantité', 'en = a quantity', 'en = 数量'),
                    headline: t('Le plus fréquent à l’oral', 'The most frequent one in speech', '口语中最常见的一种'),
                    example: 'Tu as des enfants ? — Oui, j’en ai deux.',
                    gloss: t('Le nombre reste, le nom disparaît. Dire « j’ai deux » tout seul est impossible en français.', 'The number stays, the noun goes. Saying “j’ai deux” on its own is impossible in French.', '数字保留，名词消失。法语中不能单说 “j’ai deux”。'),
                  },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'success',
              emoji: '💡',
              title: t('Le réflexe : chercher la préposition', 'The reflex: look for the preposition', '养成习惯：先找介词'),
              text: t(
                'Avant de choisir, regardez le mot juste avant le complément. **à** appelle y, **de** appelle en. Cela règle neuf cas sur dix, sans réfléchir davantage.',
                'Before choosing, look at the word just before the complement. **à** calls for y, **de** calls for en. That settles nine cases out of ten, with no further thinking.',
                '选择之前，先看补语前面那个词。**à** 对应 y，**de** 对应 en。这一条就能解决十之八九，无需多想。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🧩',
              title: t('Y ou en, à vous', 'Y or en, your turn', 'y 还是 en，看你的'),
              hint: t('Repérez la préposition cachée dans la question.', 'Spot the preposition hidden in the question.', '找出问题中隐藏的介词。'),
              widget: {
                kind: 'fill',
                prompt: t('Complétez la réponse :', 'Complete the answer:', '补全回答：'),
                items: [
                  {
                    id: 'y1',
                    before: 'Tu as besoin de mon aide ? — Oui, j’',
                    after: 'ai besoin.',
                    options: ['y', 'en'],
                    answer: 'en',
                    why: t('Avoir besoin **de** quelque chose : la préposition est de, donc en.', 'To need **de** something: the preposition is de, so en.', '“avoir besoin de”：介词是 de，所以用 en。'),
                  },
                  {
                    id: 'y2',
                    before: 'Tu réponds au message ? — Oui, j’',
                    after: 'réponds tout de suite.',
                    options: ['y', 'en'],
                    answer: 'y',
                    why: t('Répondre **à** un message : préposition à, donc y. Pour une personne, on dirait « je lui réponds ».', 'To reply **à** a message: preposition à, so y. For a person you would say “je lui réponds”.', '“répondre à”一条消息：介词是 à，所以用 y。若对象是人，则说 “je lui réponds”。'),
                  },
                  {
                    id: 'y3',
                    before: 'Vous voulez du café ? — Oui, j’',
                    after: 'veux bien un peu.',
                    options: ['y', 'en'],
                    answer: 'en',
                    why: t('« Du café » cache la préposition de : c’est une quantité, donc en.', '“Du café” hides the preposition de: it is a quantity, so en.', '“du café”里藏着介词 de：这是数量，所以用 en。'),
                  },
                  {
                    id: 'y4',
                    before: 'Tu t’habitues à ton nouveau travail ? — Je commence à m’',
                    after: 'habituer.',
                    options: ['y', 'en'],
                    answer: 'y',
                    why: t('S’habituer **à** quelque chose : préposition à, donc y, même avec un verbe pronominal.', 'To get used **à** something: preposition à, so y, even with a reflexive verb.', '“s’habituer à”：介词是 à，所以用 y，自反动词也一样。'),
                  },
                ],
              },
            },
          ],
        },
        {
          id: 'les_b1pr_3',
          moduleId: 'mod_b1pr_1',
          kind: 'text',
          durationMin: 12,
          title: t('Qui, que, dont, où : relier deux phrases', 'Qui, que, dont, où: joining two sentences', 'Qui、que、dont、où：把两句话连起来'),
          summary: t(
            'Comment faire une phrase longue sans la casser.',
            'How to build a long sentence without breaking it.',
            '如何写出不散架的长句。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🔗',
              text: t(
                'Les pronoms relatifs servent à coller deux phrases qui parlent de la même chose. Le choix ne dépend pas du sens, mais de ce qui manque dans la seconde phrase : le sujet, le complément, ou un « de ».',
                'Relative pronouns glue together two sentences that talk about the same thing. The choice does not depend on meaning, but on what is missing in the second sentence: the subject, the object, or a “de”.',
                '关系代词把谈论同一事物的两句话粘在一起。选哪一个不取决于意思，而取决于第二句缺什么：主语、宾语，还是一个 “de”。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🔬',
              title: t('Une phrase, segment par segment', 'One sentence, segment by segment', '逐段拆解一个句子'),
              hint: t('Cliquez chaque morceau pour voir son rôle.', 'Click each piece to see its role.', '点击每一段，查看它的作用。'),
              widget: {
                kind: 'sentence',
                segments: [
                  {
                    text: 'Le collègue',
                    role: t('Le mot repris', 'The word picked up', '被替代的词'),
                    detail: t('C’est lui que le pronom relatif va remplacer dans la seconde phrase.', 'This is what the relative pronoun will replace in the second sentence.', '关系代词将在第二句中替代这个词。'),
                  },
                  {
                    text: 'qui',
                    role: t('Sujet du verbe suivant', 'Subject of the next verb', '后面动词的主语'),
                    detail: t('Après qui, le verbe arrive tout de suite : « qui travaille ». Qui ne s’élide jamais devant une voyelle.', 'After qui, the verb comes straight away: “qui travaille”. Qui never elides before a vowel.', 'qui 后面紧跟动词：“qui travaille”。qui 在元音前从不省音。'),
                  },
                  { text: 'travaille avec moi' },
                  {
                    text: 'et que',
                    role: t('Complément du verbe suivant', 'Object of the next verb', '后面动词的宾语'),
                    detail: t('Après que, on trouve un sujet puis un verbe : « que tu as rencontré ». Que devient qu’ devant une voyelle.', 'After que you find a subject then a verb: “que tu as rencontré”. Que becomes qu’ before a vowel.', 'que 后面是主语加动词：“que tu as rencontré”。元音前 que 变成 qu’。'),
                  },
                  { text: 'tu as rencontré hier' },
                  {
                    text: 'part',
                    role: t('Le verbe de la phrase principale', 'The verb of the main clause', '主句的动词'),
                    detail: t('Il s’accorde avec « le collègue », malgré tout ce qui s’est intercalé. C’est l’erreur la plus fréquente à ce niveau.', 'It agrees with “le collègue”, despite everything inserted in between. That is the most common mistake at this level.', '尽管中间插入了很多内容，它仍与 “le collègue” 保持一致。这是这一级别最常见的错误。'),
                  },
                  { text: 'en Espagne.' },
                ],
              },
            },
            {
              type: 'table',
              emoji: '📊',
              caption: t('Le test qui décide en une seconde', 'The test that decides in one second', '一秒钟就能判断的方法'),
              headers: [t('Pronom', 'Pronoun', '代词'), t('Ce qui suit', 'What follows', '后面接什么'), t('Exemple', 'Example', '例句')],
              rows: [
                [t('qui', 'qui', 'qui'), t('un verbe, directement', 'a verb, directly', '直接跟动词'), t('la femme qui parle', 'la femme qui parle', 'la femme qui parle')],
                [t('que', 'que', 'que'), t('un sujet, puis un verbe', 'a subject, then a verb', '先主语，后动词'), t('le livre que je lis', 'le livre que je lis', 'le livre que je lis')],
                [t('dont', 'dont', 'dont'), t('une phrase où il faudrait « de »', 'a clause that would need “de”', '本该用 “de” 的句子'), t('le film dont je parle', 'le film dont je parle', 'le film dont je parle')],
                [t('où', 'où', 'où'), t('un lieu ou un moment', 'a place or a time', '地点或时间'), t('le jour où je suis arrivé', 'le jour où je suis arrivé', 'le jour où je suis arrivé')],
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              emoji: '🧭',
              title: t('« Dont » cache toujours un « de »', '“Dont” always hides a “de”', '“dont”背后总藏着一个 “de”'),
              text: t(
                'Pour vérifier, coupez la phrase en deux. « Le film dont je parle » redevient « je parle **de** ce film ». Si le « de » réapparaît, dont est le bon choix ; sinon, c’est que ou qui.',
                'To check, cut the sentence in two. “Le film dont je parle” goes back to “je parle **de** ce film”. If the “de” reappears, dont is right; otherwise it is que or qui.',
                '检验方法：把句子拆成两半。“Le film dont je parle”还原为 “je parle **de** ce film”。如果 “de” 重新出现，就该用 dont；否则用 que 或 qui。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🔗',
              title: t('Reliez chaque relatif à son test', 'Match each relative to its test', '把每个关系代词与检验方法配对'),
              hint: t('Un clic à gauche, un clic à droite.', 'One click on the left, one on the right.', '左边点一下，右边点一下。'),
              widget: {
                kind: 'pairs',
                prompt: t('Ce qu’il faut regarder juste après :', 'What to look at right after:', '紧接着要看什么：'),
                pairs: [
                  { id: 'p1', left: 'qui', right: t('un verbe conjugué arrive immédiatement', 'a conjugated verb comes immediately', '紧跟一个变位动词') },
                  { id: 'p2', left: 'que', right: t('un sujet s’intercale avant le verbe', 'a subject comes in before the verb', '动词前插入一个主语') },
                  { id: 'p3', left: 'dont', right: t('la phrase séparée exigerait « de »', 'the separated clause would need “de”', '拆开后的句子需要 “de”') },
                  { id: 'p4', left: 'où', right: t('on parle d’un endroit ou d’une date', 'you are talking about a place or a date', '谈的是地点或日期') },
                  { id: 'p5', left: 'ce qui', right: t('aucun nom précis n’est repris, seulement une idée', 'no specific noun is picked up, only an idea', '没有具体名词，只有一个概念') },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 'mod_b1pr_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Six questions sur les pronoms compléments et relatifs.', 'Six questions on object and relative pronouns.', '六道题，考查宾语代词与关系代词。'),
      lessons: [
        {
          id: 'les_b1pr_q',
          moduleId: 'mod_b1pr_q',
          kind: 'quiz',
          durationMin: 8,
          quizId: 'qz_b1_pronoms',
          title: t('Quiz — Les pronoms', 'Quiz — Pronouns', '测验 — 代词'),
          summary: t('6 questions pour vérifier chaque choix.', '6 questions to check every choice.', '6 道题，逐一检验你的选择。'),
        },
      ],
    },
  ],
};
