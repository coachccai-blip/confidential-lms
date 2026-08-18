import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_b2_nuance';

export const b2NuanceCourse: Course = {
  id: ID,
  slug: 'b2-nuance',
  level: 'B2',
  accentFrom: '#818cf8',
  accentTo: '#4338ca',
  status: 'published',
  title: t('Nuancer sa pensée : subjonctif, hypothèse, concession', 'Shading your thinking: subjunctive, hypothesis, concession', '让表达更有层次：虚拟式、假设、让步'),
  subtitle: t('3 leçons · 1 quiz noté', '3 lessons · 1 graded quiz', '3 节课 · 1 次评分测验'),
  description: t(
    'Le passage du B1 au B2 se joue sur la nuance : distinguer le certain du souhaité, poser une hypothèse à trois niveaux, et concéder sans céder.',
    'The step from B1 to B2 is all about nuance: separating the certain from the wished-for, framing a hypothesis at three levels, and conceding without giving in.',
    '从 B1 迈向 B2 的关键在于分寸：区分确定与愿望、构建三个层次的假设，以及让步而不退让。',
  ),
  tags: [t('Grammaire avancée', 'Advanced grammar', '高阶语法'), t('Argumentation', 'Argumentation', '论证')],
  modules: [
    {
      id: 'mod_b2nu_1',
      courseId: ID,
      title: t('Les modes de la nuance', 'The moods of nuance', '表达分寸的语式'),
      summary: t(
        'Subjonctif, conditionnel, et les connecteurs de concession.',
        'Subjunctive, conditional, and concession connectors.',
        '虚拟式、条件式，以及让步连接词。',
      ),
      lessons: [
        {
          id: 'les_b2nu_1',
          moduleId: 'mod_b2nu_1',
          kind: 'text',
          durationMin: 13,
          title: t('Le subjonctif : ce qui n’est pas un fait', 'The subjunctive: what is not a fact', '虚拟式：并非事实的内容'),
          summary: t(
            'Une logique unique derrière une longue liste de déclencheurs.',
            'A single logic behind a long list of triggers.',
            '一长串触发条件背后是同一套逻辑。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'On présente souvent le subjonctif comme une liste à apprendre. En réalité, il y a une seule règle : l’indicatif présente un fait, le subjonctif présente un fait **filtré par une attitude** — volonté, émotion, doute, nécessité. La proposition n’est plus posée comme vraie, elle est posée comme voulue, redoutée ou mise en question.',
                'The subjunctive is often presented as a list to be memorised. In fact there is a single rule: the indicative presents a fact, the subjunctive presents a fact **filtered through an attitude** — will, emotion, doubt, necessity. The clause is no longer put forward as true, but as wanted, feared or questioned.',
                '虚拟式常被当作一份需要背诵的清单。实际上只有一条规则：直陈式陈述事实，虚拟式陈述**经由某种态度过滤**的内容——意愿、情感、怀疑、必要性。该从句不再被当作真实，而是被当作所愿、所惧或所疑。',
              ),
            },
            {
              type: 'conjugation',
              emoji: '🔀',
              title: t('Le subjonctif présent des verbes irréguliers', 'The present subjunctive of irregular verbs', '不规则动词的虚拟式现在时'),
              note: t(
                'Pour les verbes réguliers, on prend la forme « ils » du présent : ils finiss**ent** → que je finisse. Seuls sept verbes sont vraiment irréguliers.',
                'For regular verbs, take the “ils” form of the present: ils finiss**ent** → que je finisse. Only seven verbs are genuinely irregular.',
                '规则动词取现在时 “ils” 形式：ils finiss**ent** → que je finisse。真正不规则的只有七个动词。',
              ),
              columns: [t('être', 'être', 'être'), t('avoir', 'avoir', 'avoir'), t('faire', 'faire', 'faire'), t('pouvoir', 'pouvoir', 'pouvoir')],
              rows: [
                { pronoun: 'que je / j’', forms: ['sois', 'aie', 'fasse', 'puisse'] },
                { pronoun: 'que tu', forms: ['sois', 'aies', 'fasses', 'puisses'] },
                { pronoun: 'qu’il / elle', forms: ['soit', 'ait', 'fasse', 'puisse'] },
                { pronoun: 'que nous', forms: ['soyons', 'ayons', 'fassions', 'puissions'] },
                { pronoun: 'que vous', forms: ['soyez', 'ayez', 'fassiez', 'puissiez'] },
                { pronoun: 'qu’ils / elles', forms: ['soient', 'aient', 'fassent', 'puissent'] },
              ],
            },
            {
              type: 'table',
              emoji: '🔄',
              caption: t('Indicatif ou subjonctif : la frontière', 'Indicative or subjunctive: the dividing line', '直陈式还是虚拟式：分界线'),
              headers: [t('Attitude', 'Attitude', '态度'), t('Mode', 'Mood', '语式'), t('Exemple', 'Example', '例句')],
              rows: [
                [t('Certitude, constat', 'Certainty, observation', '确信、陈述'), t('indicatif', 'indicative', '直陈式'), t('Je sais qu’il vient. Il est certain qu’elle a raison.', 'Je sais qu’il vient. Il est certain qu’elle a raison.', 'Je sais qu’il vient. Il est certain qu’elle a raison.')],
                [t('Volonté, souhait', 'Will, wish', '意愿、愿望'), t('subjonctif', 'subjunctive', '虚拟式'), t('Je veux qu’il vienne. J’aimerais qu’elle soit là.', 'Je veux qu’il vienne. J’aimerais qu’elle soit là.', 'Je veux qu’il vienne. J’aimerais qu’elle soit là.')],
                [t('Émotion, jugement', 'Emotion, judgement', '情感、评判'), t('subjonctif', 'subjunctive', '虚拟式'), t('Je suis content qu’il vienne. Il est dommage qu’elle parte.', 'Je suis content qu’il vienne. Il est dommage qu’elle parte.', 'Je suis content qu’il vienne. Il est dommage qu’elle parte.')],
                [t('Doute, négation d’opinion', 'Doubt, negated opinion', '怀疑、否定的看法'), t('subjonctif', 'subjunctive', '虚拟式'), t('Je doute qu’il vienne. Je ne crois pas qu’elle ait tort.', 'Je doute qu’il vienne. Je ne crois pas qu’elle ait tort.', 'Je doute qu’il vienne. Je ne crois pas qu’elle ait tort.')],
                [t('Nécessité', 'Necessity', '必要性'), t('subjonctif', 'subjunctive', '虚拟式'), t('Il faut qu’on parte. Il est important que vous compreniez.', 'Il faut qu’on parte. Il est important que vous compreniez.', 'Il faut qu’on parte. Il est important que vous compreniez.')],
              ],
            },
            {
              type: 'callout',
              tone: 'warning',
              emoji: '🪤',
              title: t('« Espérer » ne prend pas le subjonctif', '“Espérer” does not take the subjunctive', '“Espérer” 不接虚拟式'),
              text: t(
                'Contre toute logique, « j’espère qu’il **vient** » se construit à l’indicatif, alors que « je souhaite qu’il **vienne** » prend le subjonctif. C’est l’exception que les correcteurs repèrent immédiatement.',
                'Against all logic, “j’espère qu’il **vient**” takes the indicative, whereas “je souhaite qu’il **vienne**” takes the subjunctive. This is the exception markers spot immediately.',
                '不合逻辑的是，“j’espère qu’il **vient**” 用直陈式，而 “je souhaite qu’il **vienne**” 用虚拟式。这是阅卷人一眼就能看出的例外。',
              ),
            },
            {
              type: 'keyvalues',
              emoji: '🔄',
              title: t('Les conjonctions toujours suivies du subjonctif', 'Conjunctions always followed by the subjunctive', '恒接虚拟式的连词'),
              entries: [
                { label: t('bien que / quoique', 'bien que / quoique', 'bien que / quoique'), value: t('Concession : « bien qu’il fasse froid, je sors. »', 'Concession: “bien qu’il fasse froid, je sors.”', '让步：“bien qu’il fasse froid, je sors.”') },
                { label: t('pour que / afin que', 'pour que / afin que', 'pour que / afin que'), value: t('But : « je te le dis pour que tu saches. »', 'Purpose: “je te le dis pour que tu saches.”', '目的：“je te le dis pour que tu saches.”') },
                { label: t('avant que / jusqu’à ce que', 'avant que / jusqu’à ce que', 'avant que / jusqu’à ce que'), value: t('Temps antérieur : « avant qu’il parte ». Mais « après que » demande l’indicatif.', 'Anteriority: “avant qu’il parte”. But “après que” requires the indicative.', '先于：“avant qu’il parte”。但 “après que” 要求直陈式。') },
                { label: t('à condition que / à moins que', 'à condition que / à moins que', 'à condition que / à moins que'), value: t('Condition : « à condition que tu sois d’accord ».', 'Condition: “à condition que tu sois d’accord”.', '条件：“à condition que tu sois d’accord”。') },
                { label: t('sans que', 'sans que', 'sans que'), value: t('Absence : « il est parti sans que je m’en aperçoive ».', 'Absence: “il est parti sans que je m’en aperçoive”.', '未发生：“il est parti sans que je m’en aperçoive”。') },
              ],
            },
            {
              type: 'callout',
              tone: 'success',
              emoji: '✅',
              title: t('Éviter le subjonctif quand on peut', 'Avoiding the subjunctive when you can', '能避则避'),
              text: t(
                'Si les deux propositions ont le même sujet, on remplace le subjonctif par un infinitif : « je veux **partir** » et non « je veux que je parte ». De même « avant de partir » plutôt que « avant que je parte ». C’est plus court et toujours correct.',
                'If both clauses share the same subject, replace the subjunctive with an infinitive: “je veux **partir**”, not “je veux que je parte”. Likewise “avant de partir” rather than “avant que je parte”. It is shorter and always correct.',
                '若主从句主语相同，用不定式代替虚拟式：说 “je veux **partir**”，而非 “je veux que je parte”。同理用 “avant de partir” 而非 “avant que je parte”。更简洁，且永远正确。',
              ),
            },
          ],
        },
        {
          id: 'les_b2nu_2',
          moduleId: 'mod_b2nu_1',
          kind: 'text',
          durationMin: 12,
          title: t('L’hypothèse à trois niveaux', 'Hypothesis at three levels', '三个层次的假设'),
          summary: t(
            'Si + présent, si + imparfait, si + plus-que-parfait : trois degrés de réalité.',
            'Si + present, si + imperfect, si + pluperfect: three degrees of reality.',
            'Si + 现在时、si + 未完成过去时、si + 愈过去时：三种现实程度。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'Le système hypothétique français est parfaitement régulier : le temps employé après **si** détermine mécaniquement celui de la principale. Aucune exception, aucun choix de style. Il suffit de retenir trois paires.',
                'The French hypothetical system is perfectly regular: the tense after **si** mechanically determines the tense of the main clause. No exceptions, no stylistic choice. You only need to remember three pairs.',
                '法语假设体系完全规则：**si** 之后的时态机械地决定主句时态。没有例外，也没有文体选择。只需记住三组搭配。',
              ),
            },
            {
              type: 'table',
              emoji: '🔬',
              caption: t('Les trois systèmes hypothétiques', 'The three hypothetical systems', '三种假设体系'),
              headers: [t('Degré', 'Degree', '程度'), t('Subordonnée en si', 'Si clause', 'si 从句'), t('Principale', 'Main clause', '主句'), t('Exemple', 'Example', '例句')],
              rows: [
                [t('Possible', 'Possible', '可能'), t('si + présent', 'si + present', 'si + 现在时'), t('futur simple', 'simple future', '简单将来时'), t('S’il pleut, je prendrai un parapluie.', 'S’il pleut, je prendrai un parapluie.', 'S’il pleut, je prendrai un parapluie.')],
                [t('Irréel du présent', 'Unreal present', '与现在事实相反'), t('si + imparfait', 'si + imperfect', 'si + 未完成过去时'), t('conditionnel présent', 'present conditional', '条件式现在时'), t('Si j’avais le temps, je viendrais.', 'Si j’avais le temps, je viendrais.', 'Si j’avais le temps, je viendrais.')],
                [t('Irréel du passé', 'Unreal past', '与过去事实相反'), t('si + plus-que-parfait', 'si + pluperfect', 'si + 愈过去时'), t('conditionnel passé', 'past conditional', '条件式过去时'), t('Si j’avais su, je ne serais pas venu.', 'Si j’avais su, je ne serais pas venu.', 'Si j’avais su, je ne serais pas venu.')],
              ],
            },
            {
              type: 'interactive',
              emoji: '🔬',
              title: t('Le banc d’essai de l’hypothèse', 'The hypothesis test bench', '假设试验台'),
              hint: t(
                'Choisissez un degré de réalité, {prenom} : les deux temps se verrouillent l’un l’autre.',
                'Pick a degree of reality, {prenom}: the two tenses lock onto each other.',
                '{prenom}，选择一种现实程度：两个时态随即相互锁定。',
              ),
              widget: {
                kind: 'switcher',
                steps: [
                  {
                    id: 'possible',
                    label: t('C’est possible', 'It may happen', '有可能'),
                    headline: t('si + présent → futur simple', 'si + present → simple future', 'si + 现在时 → 简单将来时'),
                    example: 'S’il pleut, je prendrai un parapluie.',
                    gloss: t('L’hypothèse reste ouverte : rien n’exclut que cela se produise.', 'The hypothesis stays open: nothing rules it out.', '假设仍然开放：没有任何因素排除其发生。'),
                  },
                  {
                    id: 'unreal-present',
                    label: t('Ce n’est pas le cas', 'It is not the case', '与现状相反'),
                    headline: t('si + imparfait → conditionnel présent', 'si + imperfect → present conditional', 'si + 未完成过去时 → 条件式现在时'),
                    example: 'Si j’avais le temps, je viendrais.',
                    gloss: t('Irréel du présent : on sait que la condition n’est pas remplie aujourd’hui.', 'Unreal present: we know the condition is not met today.', '与现在事实相反：我们知道条件目前并不成立。'),
                  },
                  {
                    id: 'unreal-past',
                    label: t('C’était trop tard', 'It was too late', '已经太迟'),
                    headline: t('si + plus-que-parfait → conditionnel passé', 'si + pluperfect → past conditional', 'si + 愈过去时 → 条件式过去时'),
                    example: 'Si j’avais su, je ne serais pas venu.',
                    gloss: t('Irréel du passé : le moment est passé, la phrase exprime un regret.', 'Unreal past: the moment has gone; the sentence expresses regret.', '与过去事实相反：时机已过，句子表达遗憾。'),
                  },
                  {
                    id: 'forbidden',
                    label: t('Jamais', 'Never', '绝不'),
                    headline: t('si + conditionnel — impossible', 'si + conditional — impossible', 'si + 条件式 —— 不成立'),
                    example: 'Si j’aurais su…',
                    gloss: t('La faute la plus célèbre du français. Après un « si » d’hypothèse : imparfait ou plus-que-parfait, jamais de conditionnel.', 'The most famous mistake in French. After a hypothetical “si”: imperfect or pluperfect, never a conditional.', '法语中最著名的错误。表假设的 “si” 之后只能用未完成过去时或愈过去时，绝不用条件式。'),
                  },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'warning',
              emoji: '🪤',
              title: t('Jamais de conditionnel après « si »', 'Never a conditional after “si”', '“si” 之后绝不用条件式'),
              text: t(
                '« Si j’aurais su » est la faute la plus célèbre du français, au point d’être devenue une plaisanterie. La règle est absolue : après **si** d’hypothèse, on écrit imparfait ou plus-que-parfait, jamais conditionnel.',
                '“Si j’aurais su” is the most famous mistake in French, so much so that it has become a running joke. The rule is absolute: after a hypothetical **si**, you write imperfect or pluperfect, never conditional.',
                '“Si j’aurais su” 是法语中最著名的错误，甚至成了笑柄。规则是绝对的：表假设的 **si** 之后只能用未完成过去时或愈过去时，绝不用条件式。',
              ),
            },
            { type: 'heading', emoji: '🔄', text: t('Le conditionnel au-delà de l’hypothèse', 'The conditional beyond hypothesis', '假设之外的条件式') },
            {
              type: 'keyvalues',
              emoji: '🔄',
              title: t('Trois autres emplois du conditionnel', 'Three other uses of the conditional', '条件式的另外三种用法'),
              entries: [
                { label: t('La politesse', 'Politeness', '礼貌'), value: t('« Je voudrais un café » au lieu de « je veux ». Adoucit toute demande.', '“Je voudrais un café” instead of “je veux”. Softens any request.', '用 “Je voudrais un café” 代替 “je veux”，可缓和任何请求。') },
                { label: t('L’information non vérifiée', 'Unverified information', '未经证实的信息'), value: t('Le conditionnel journalistique : « le bilan serait de dix blessés » = ce n’est pas confirmé.', 'The journalistic conditional: “le bilan serait de dix blessés” = it is not confirmed.', '新闻条件式：“le bilan serait de dix blessés” 表示尚未确认。') },
                { label: t('Le futur dans le passé', 'Future in the past', '过去将来'), value: t('« Il a dit qu’il viendrait » : le conditionnel exprime l’avenir vu depuis le passé.', '“Il a dit qu’il viendrait”: the conditional expresses the future seen from the past.', '“Il a dit qu’il viendrait”：条件式表示从过去视角看的将来。') },
                { label: t('Le conseil', 'Advice', '建议'), value: t('« Tu devrais te reposer », « il faudrait y penser » : moins brutal que l’impératif.', '“Tu devrais te reposer”, “il faudrait y penser”: less blunt than the imperative.', '“Tu devrais te reposer”“il faudrait y penser”：比命令式委婉。') },
              ],
            },
            {
              type: 'examples',
              emoji: '🔬',
              title: t('Repérer le degré de réalité', 'Spotting the degree of reality', '判断现实程度'),
              items: [
                { fr: 'Si tu viens demain, on ira au cinéma.', gloss: t('Hypothèse ouverte : c’est encore possible.', 'Open hypothesis: it is still possible.', '开放性假设：仍有可能。') },
                { fr: 'Si tu venais demain, on irait au cinéma.', gloss: t('Moins probable, ou simple imagination.', 'Less likely, or pure imagination.', '可能性较小，或纯属设想。') },
                { fr: 'Si tu étais venu hier, on serait allés au cinéma.', gloss: t('Impossible : le moment est passé, on exprime un regret.', 'Impossible: the moment has passed; this expresses regret.', '已不可能：时机已过，表达遗憾。') },
                { fr: 'Si tu viendrais demain, on irait au cinéma.', gloss: t('Conditionnel après « si » : impossible en français.', 'A conditional after “si”: impossible in French.', '“si” 后接条件式：法语中不成立。'), incorrect: true },
              ],
            },
          ],
        },
        {
          id: 'les_b2nu_3',
          moduleId: 'mod_b2nu_1',
          kind: 'text',
          durationMin: 12,
          title: t('Concéder, opposer, restreindre', 'Conceding, opposing, restricting', '让步、对立、限定'),
          summary: t(
            'Reconnaître l’argument adverse pour mieux le dépasser : le geste rhétorique central du B2.',
            'Acknowledging the opposing argument in order to move beyond it: the central rhetorical move at B2.',
            '承认对方论点以便更好地超越它：B2 阶段的核心修辞动作。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'Un argumentaire B2 ne se contente pas d’aligner des raisons : il **intègre** l’objection. Concéder d’abord, réfuter ensuite, est le mouvement qui distingue immédiatement une copie B2 d’une copie B1.',
                'A B2 argument does not merely stack up reasons: it **absorbs** the objection. Conceding first, then refuting, is the move that immediately distinguishes a B2 paper from a B1 one.',
                'B2 的论证不只是罗列理由，而是**吸纳**反方意见。先让步、再反驳，正是让 B2 答卷一眼有别于 B1 的动作。',
              ),
            },
            {
              type: 'table',
              emoji: '🧠',
              caption: t('Les outils de la concession', 'The tools of concession', '让步的工具'),
              headers: [t('Connecteur', 'Connector', '连接词'), t('Construction', 'Construction', '结构'), t('Registre', 'Register', '语体')],
              rows: [
                [t('bien que / quoique', 'bien que / quoique', 'bien que / quoique'), t('+ subjonctif', '+ subjunctive', '+ 虚拟式'), t('soutenu, écrit', 'formal, written', '正式，书面')],
                [t('même si', 'même si', 'même si'), t('+ indicatif', '+ indicative', '+ 直陈式'), t('neutre, très fréquent', 'neutral, very frequent', '中性，极常用')],
                [t('malgré / en dépit de', 'malgré / en dépit de', 'malgré / en dépit de'), t('+ nom', '+ noun', '+ 名词'), t('neutre à soutenu', 'neutral to formal', '中性偏正式')],
                [t('cependant / néanmoins / toutefois', 'cependant / néanmoins / toutefois', 'cependant / néanmoins / toutefois'), t('en tête de phrase', 'at the start of a sentence', '句首'), t('soutenu', 'formal', '正式')],
                [t('or', 'or', 'or'), t('introduit le fait qui renverse', 'introduces the fact that overturns', '引出扭转局面的事实'), t('argumentatif, écrit', 'argumentative, written', '论证性，书面')],
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              emoji: '🪤',
              title: t('« Or » n’est pas « ou »', '“Or” is not “ou”', '“Or” 不是 “ou”'),
              text: t(
                '**Or** introduit un fait qui fait basculer le raisonnement : « Tous les experts prévoyaient une baisse. Or les chiffres ont augmenté. » Ne le confondez pas avec **ou**, qui propose une alternative. Les deux mots se prononcent différemment : [ɔʁ] contre [u].',
                '**Or** introduces a fact that tips the reasoning over: “Tous les experts prévoyaient une baisse. Or les chiffres ont augmenté.” Do not confuse it with **ou**, which offers an alternative. The two words are pronounced differently: [ɔʁ] versus [u].',
                '**Or** 引出扭转推理走向的事实：“Tous les experts prévoyaient une baisse. Or les chiffres ont augmenté.” 不要与表示选择的 **ou** 混淆。两词读音不同：[ɔʁ] 对 [u]。',
              ),
            },
            { type: 'heading', emoji: '🧠', text: t('Le mouvement concession-réfutation', 'The concession-refutation move', '让步—反驳的行文动作') },
            {
              type: 'quote',
              text: t(
                'Il est vrai que le télétravail réduit les temps de trajet et améliore, pour beaucoup, l’équilibre entre vie privée et vie professionnelle. On ne saurait le nier. Il reste néanmoins que cette organisation suppose un logement adapté, une connexion fiable et une capacité à s’isoler — trois conditions qui sont loin d’être réunies pour tous. Le bénéfice, réel, n’est donc pas également réparti.',
                'It is true that remote work cuts commuting time and, for many, improves the balance between private and professional life. This cannot be denied. It remains the case, however, that such an arrangement presupposes suitable housing, a reliable connection and the ability to isolate oneself — three conditions that are far from being met for everyone. The benefit, real as it is, is therefore not evenly distributed.',
                '诚然，远程办公缩短了通勤时间，对许多人而言也改善了工作与生活的平衡。这一点无可否认。然而，这种模式仍以合适的住所、可靠的网络以及独处的条件为前提——而这三项条件远非人人具备。因此，这份实实在在的好处并未被平均分配。',
              ),
              source: t('Paragraphe type — concéder, puis renverser', 'Model paragraph — concede, then overturn', '范例段落 —— 先让步，后扭转'),
            },
            {
              type: 'interactive',
              emoji: '🧠',
              title: t('Le mouvement de concession, morceau par morceau', 'The concession move, piece by piece', '让步动作，逐段拆解'),
              hint: t(
                'Cliquez chaque segment : c’est l’enchaînement qui fait la copie B2.',
                'Click each segment: it is the sequence that makes a B2 paper.',
                '点击每个片段：正是这一衔接造就了 B2 水平的答卷。',
              ),
              widget: {
                kind: 'sentence',
                segments: [
                  {
                    text: 'Il est vrai que le télétravail réduit les trajets',
                    role: t('1. La concession', '1. The concession', '1. 让步'),
                    detail: t('On accorde à l’adversaire ce qui est incontestable. Le refuser rendrait tout le raisonnement suspect.', 'You grant the other side what is indisputable. Refusing it would make the whole argument look suspect.', '把无可争辩之处让给对方。否认它会让整个论证显得可疑。'),
                  },
                  { text: '.' },
                  {
                    text: 'On ne saurait le nier',
                    role: t('2. Le renforcement', '2. The reinforcement', '2. 加强'),
                    detail: t('On appuie la concession au lieu de l’expédier : le lecteur doit croire qu’on a vraiment envisagé l’autre thèse.', 'You lean into the concession instead of rushing it: the reader must believe the other view was genuinely considered.', '不是草草带过，而是加重让步：要让读者相信你确实考虑过对方观点。'),
                  },
                  { text: '.' },
                  {
                    text: 'Il reste néanmoins que',
                    role: t('3. Le pivot', '3. The pivot', '3. 转折'),
                    detail: t('Le connecteur qui renverse. « Néanmoins », « toutefois », « il n’en demeure pas moins que » jouent le même rôle.', 'The connector that overturns. “Néanmoins”, “toutefois”, “il n’en demeure pas moins que” all play the same role.', '实现扭转的连接词。“Néanmoins”“toutefois”“il n’en demeure pas moins que” 作用相同。'),
                  },
                  {
                    text: 'cette organisation suppose trois conditions rarement réunies',
                    role: t('4. L’objection décisive', '4. The decisive objection', '4. 决定性反驳'),
                    detail: t('L’argument qu’on gardait. Il doit être plus précis que la concession, sinon le mouvement retombe à plat.', 'The argument you were holding back. It must be more precise than the concession, or the move falls flat.', '此前保留的论据。它必须比让步部分更具体，否则整个动作就落空了。'),
                  },
                  { text: '.' },
                ],
              },
            },
            {
              type: 'examples',
              emoji: '🧠',
              title: t('Formules de concession et de restriction', 'Concession and restriction formulas', '让步与限定句式'),
              items: [
                { fr: 'Certes, l’argument se défend. Il n’en demeure pas moins que…', gloss: t('Le couple concession / restriction le plus classique à l’écrit.', 'The most classic concession / restriction pair in writing.', '书面语中最经典的让步/限定组合。') },
                { fr: 'Quelque convaincant que soit ce raisonnement, il néglige un point.', gloss: t('« Quelque… que » + subjonctif : registre très soutenu.', '“Quelque… que” + subjunctive: a very formal register.', '“Quelque… que” + 虚拟式：非常正式的语体。') },
                { fr: 'On ne peut réduire ce débat à une question de coût.', gloss: t('Restriction par la négation : refuse une simplification.', 'Restriction through negation: refuses a simplification.', '以否定进行限定：拒绝简化。') },
                { fr: 'Bien qu’il est venu, rien n’a changé.', gloss: t('« Bien que » exige le subjonctif : « bien qu’il soit venu ».', '“Bien que” requires the subjunctive: “bien qu’il soit venu”.', '“Bien que” 要求虚拟式：应为 “bien qu’il soit venu”。'), incorrect: true },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'mod_b2nu_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Six questions sur le subjonctif, l’hypothèse et la concession.', 'Six questions on the subjunctive, hypothesis and concession.', '六道题，考查虚拟式、假设与让步。'),
      lessons: [
        {
          id: 'les_b2nu_q',
          moduleId: 'mod_b2nu_q',
          kind: 'quiz',
          durationMin: 8,
          quizId: 'qz_b2_nuance',
          title: t('Quiz — Nuancer sa pensée', 'Quiz — Shading your thinking', '测验 — 让表达更有层次'),
          summary: t('6 questions sur les modes et les connecteurs.', '6 questions on moods and connectors.', '6 道题，考查语式与连接词。'),
        },
      ],
    },
  ],
};
