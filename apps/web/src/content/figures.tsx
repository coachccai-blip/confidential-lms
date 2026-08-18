import type { ReactNode } from 'react';

/**
 * Illustrations pedagogiques du cours, en SVG inline.
 *
 * Aucune ressource externe : les schemas heritent des variables de theme
 * (mode sombre / clair) et restent nets a toutes les resolutions. Ils sont
 * rendus a l'interieur de la zone protegee, donc filigranes eux aussi.
 */

const LABEL = { fontSize: 11, fill: 'var(--text-muted)', fontFamily: 'var(--font-sans)' } as const;
const TITLE = { fontSize: 12, fill: 'var(--text)', fontWeight: 600, fontFamily: 'var(--font-sans)' } as const;
const SMALL = { fontSize: 9.5, fill: 'var(--text-muted)', fontFamily: 'var(--font-mono)' } as const;

function EarthSection() {
  return (
    <svg viewBox="0 0 640 300" role="img" aria-label="Coupe de la Terre : croûte, manteau, noyau externe et noyau interne">
      <defs>
        <radialGradient id="core-grad" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffd166" />
          <stop offset="1" stopColor="#e2453b" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="150" r="128" fill="var(--panel-2)" stroke="var(--border-strong)" />
      <circle cx="200" cy="150" r="112" fill="color-mix(in srgb, var(--ember-3) 12%, transparent)" stroke="var(--border)" />
      <circle cx="200" cy="150" r="72" fill="color-mix(in srgb, var(--ember-2) 22%, transparent)" stroke="var(--border)" />
      <circle cx="200" cy="150" r="34" fill="url(#core-grad)" />
      <path d="M200 22v256M200 150h128" stroke="var(--border-strong)" strokeDasharray="3 4" />

      {[
        { r: 128, y: 32, label: 'Croûte · 5 à 70 km' },
        { r: 112, y: 62, label: 'Manteau supérieur · asthénosphère' },
        { r: 72, y: 108, label: 'Manteau inférieur · 2 900 km' },
        { r: 34, y: 152, label: 'Noyau externe liquide' },
      ].map((item) => (
        <g key={item.label}>
          <line x1={200 + item.r} y1={item.y + 6} x2="392" y2={item.y + 6} stroke="var(--border-strong)" />
          <circle cx={200 + item.r} cy={item.y + 6} r="2.6" fill="var(--accent)" />
          <text x="400" y={item.y + 10} style={LABEL}>
            {item.label}
          </text>
        </g>
      ))}
      <g>
        <line x1="200" y1="150" x2="392" y2="196" stroke="var(--border-strong)" />
        <circle cx="200" cy="150" r="2.6" fill="var(--accent)" />
        <text x="400" y="200" style={LABEL}>
          Graine solide · ~5 200 °C
        </text>
      </g>
      <text x="400" y="240" style={TITLE}>
        Le volcanisme naît dans les 200 premiers km
      </text>
      <text x="400" y="260" style={LABEL}>
        soit moins de 3 % du rayon terrestre.
      </text>
    </svg>
  );
}

function PlateBoundaries() {
  const blocks = [
    { x: 20, title: 'Divergence', sub: 'Les plaques s’écartent' },
    { x: 230, title: 'Convergence', sub: 'Une plaque plonge' },
    { x: 440, title: 'Coulissage', sub: 'Les plaques glissent' },
  ];
  return (
    <svg viewBox="0 0 640 250" role="img" aria-label="Les trois types de limites de plaques tectoniques">
      {blocks.map((block) => (
        <text key={block.title} x={block.x + 90} y="22" style={TITLE} textAnchor="middle">
          {block.title}
        </text>
      ))}

      {/* Divergence */}
      <g>
        <rect x="20" y="80" width="78" height="52" rx="4" fill="var(--panel-2)" stroke="var(--border-strong)" />
        <rect x="122" y="80" width="78" height="52" rx="4" fill="var(--panel-2)" stroke="var(--border-strong)" />
        <path d="M98 132 110 96l12 36z" fill="color-mix(in srgb, var(--ember-2) 45%, transparent)" />
        <path d="M110 92v-24" stroke="var(--ember-2)" strokeWidth="2" />
        <path d="M104 74l6-10 6 10z" fill="var(--ember-2)" />
        <path d="M78 60h-34M142 60h34" stroke="var(--text-muted)" strokeWidth="1.4" markerEnd="url(#arrow)" />
        <text x="110" y="160" style={LABEL} textAnchor="middle">
          Dorsale océanique
        </text>
        <text x="110" y="176" style={SMALL} textAnchor="middle">
          basalte fluide · ~80 % du magma
        </text>
      </g>

      {/* Convergence */}
      <g>
        <rect x="230" y="80" width="82" height="52" rx="4" fill="var(--panel-2)" stroke="var(--border-strong)" />
        <path d="M312 80h78v18l-64 46-14-10z" fill="var(--panel-2)" stroke="var(--border-strong)" />
        <path d="M320 132c14 18 30 26 48 28" stroke="var(--ember-3)" strokeWidth="2" strokeDasharray="4 3" fill="none" />
        <path d="M300 80l8-22 8 22z" fill="color-mix(in srgb, var(--ember-3) 55%, transparent)" />
        <path d="M308 58v-12" stroke="var(--ember-1)" strokeWidth="2" />
        <text x="320" y="160" style={LABEL} textAnchor="middle">
          Zone de subduction
        </text>
        <text x="320" y="176" style={SMALL} textAnchor="middle">
          magma visqueux · explosif
        </text>
      </g>

      {/* Coulissage */}
      <g>
        <rect x="440" y="80" width="78" height="52" rx="4" fill="var(--panel-2)" stroke="var(--border-strong)" />
        <rect x="524" y="80" width="78" height="52" rx="4" fill="var(--panel-2)" stroke="var(--border-strong)" />
        <path d="M521 74v64" stroke="var(--text-muted)" strokeWidth="2" strokeDasharray="5 4" />
        <path d="M470 62v-14M572 150v14" stroke="var(--text-muted)" strokeWidth="1.4" />
        <path d="M464 52l6-10 6 10zM566 160l6 10 6-10z" fill="var(--text-muted)" />
        <text x="521" y="160" style={LABEL} textAnchor="middle">
          Faille transformante
        </text>
        <text x="521" y="176" style={SMALL} textAnchor="middle">
          séismes, peu de volcanisme
        </text>
      </g>

      <line x1="20" y1="205" x2="620" y2="205" stroke="var(--border)" />
      <text x="320" y="228" style={LABEL} textAnchor="middle">
        Environ 90 % des volcans actifs se trouvent à une limite de plaques.
      </text>
    </svg>
  );
}

function VolcanicSettings() {
  return (
    <svg viewBox="0 0 640 260" role="img" aria-label="Les trois grands contextes du volcanisme terrestre">
      <rect x="0" y="150" width="640" height="110" fill="var(--panel-2)" />
      <path d="M0 150h640" stroke="var(--border-strong)" />

      <g>
        <path d="M60 150l34-52 34 52z" fill="color-mix(in srgb, var(--ember-2) 30%, transparent)" stroke="var(--border-strong)" />
        <path d="M94 96v-30" stroke="var(--ember-2)" strokeWidth="2.5" />
        <ellipse cx="94" cy="60" rx="16" ry="9" fill="color-mix(in srgb, var(--ember-1) 40%, transparent)" />
        <text x="94" y="180" style={TITLE} textAnchor="middle">
          Dorsale
        </text>
        <text x="94" y="198" style={LABEL} textAnchor="middle">
          Décompression
        </text>
        <text x="94" y="214" style={SMALL} textAnchor="middle">
          Islande · Açores
        </text>
      </g>

      <g>
        <path d="M270 150l50-70 50 70z" fill="color-mix(in srgb, var(--ember-3) 26%, transparent)" stroke="var(--border-strong)" />
        <path d="M320 80l-8-22h16z" fill="var(--ember-3)" />
        <path d="M300 200c22-26 42-40 68-46" stroke="var(--ember-3)" strokeWidth="1.6" strokeDasharray="4 3" fill="none" />
        <text x="320" y="180" style={TITLE} textAnchor="middle">
          Subduction
        </text>
        <text x="320" y="198" style={LABEL} textAnchor="middle">
          Fusion hydratée
        </text>
        <text x="320" y="214" style={SMALL} textAnchor="middle">
          Andes · Japon · Antilles
        </text>
      </g>

      <g>
        <path d="M500 150l44-40 44 40z" fill="color-mix(in srgb, var(--ember-1) 26%, transparent)" stroke="var(--border-strong)" />
        <path d="M544 200v-84" stroke="var(--ember-1)" strokeWidth="2.5" strokeDasharray="6 4" />
        <circle cx="544" cy="232" r="14" fill="color-mix(in srgb, var(--ember-1) 45%, transparent)" />
        <text x="544" y="180" style={TITLE} textAnchor="middle">
          Point chaud
        </text>
        <text x="544" y="198" style={LABEL} textAnchor="middle">
          Panache mantellique
        </text>
        <text x="620" y="240" style={SMALL} textAnchor="end">
          Hawaï · La Réunion
        </text>
      </g>
    </svg>
  );
}

function ViscosityChart() {
  const rows = [
    { name: 'Basalte', silica: '45 à 52 %', temp: '1 100 – 1 250 °C', width: 74, tone: 'var(--ember-1)', style: 'Effusif — coulées rapides' },
    { name: 'Andésite', silica: '52 à 63 %', temp: '950 – 1 100 °C', width: 148, tone: 'var(--ember-2)', style: 'Explosif modéré — dômes' },
    { name: 'Dacite', silica: '63 à 68 %', temp: '800 – 1 000 °C', width: 224, tone: 'color-mix(in srgb, var(--ember-3) 80%, var(--ember-2))', style: 'Très explosif — nuées' },
    { name: 'Rhyolite', silica: '> 68 %', temp: '700 – 900 °C', width: 300, tone: 'var(--ember-3)', style: 'Cataclysmique — plinien' },
  ];
  return (
    <svg viewBox="0 0 640 250" role="img" aria-label="Viscosité des magmas selon leur teneur en silice">
      <text x="20" y="20" style={TITLE}>
        Plus un magma est riche en silice, plus il est visqueux — et plus il explose
      </text>
      {rows.map((row, index) => {
        const y = 48 + index * 46;
        return (
          <g key={row.name}>
            <text x="20" y={y + 14} style={LABEL}>
              {row.name}
            </text>
            <rect x="92" y={y} width="308" height="20" rx="10" fill="var(--panel-2)" stroke="var(--border)" />
            <rect x="92" y={y} width={row.width} height="20" rx="10" fill={row.tone} opacity="0.75" />
            <text x={100} y={y + 14} style={{ ...SMALL, fill: 'var(--text)' }}>
              {row.silica}
            </text>
            <text x="412" y={y + 14} style={SMALL}>
              {row.temp}
            </text>
            <text x="516" y={y + 14} style={LABEL}>
              {row.style}
            </text>
          </g>
        );
      })}
      <line x1="92" y1="228" x2="400" y2="228" stroke="var(--border-strong)" />
      <text x="92" y="244" style={SMALL}>
        viscosité faible
      </text>
      <text x="400" y="244" style={SMALL} textAnchor="end">
        viscosité extrême (10⁸ Pa·s)
      </text>
    </svg>
  );
}

function VolcanoAnatomy() {
  return (
    <svg viewBox="0 0 640 340" role="img" aria-label="Coupe d’un stratovolcan et de son système magmatique">
      <rect x="0" y="240" width="640" height="100" fill="var(--panel-2)" />
      <path d="M120 240 L300 70 L480 240 Z" fill="color-mix(in srgb, var(--ember-3) 14%, transparent)" stroke="var(--border-strong)" />
      {[0, 1, 2, 3].map((index) => (
        <path
          key={index}
          d={`M${170 + index * 12} 240 L300 ${104 + index * 12} L${430 - index * 12} 240`}
          fill="none"
          stroke="var(--border)"
          strokeDasharray="3 5"
        />
      ))}
      <path d="M282 78h36l-8 14h-20z" fill="var(--bg)" stroke="var(--border-strong)" />
      <path d="M296 92v128" stroke="var(--ember-2)" strokeWidth="7" strokeLinecap="round" />
      <ellipse cx="300" cy="272" rx="86" ry="34" fill="url(#chamber)" stroke="var(--ember-3)" strokeDasharray="4 3" />
      <defs>
        <radialGradient id="chamber" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0" stopColor="var(--ember-1)" stopOpacity="0.75" />
          <stop offset="1" stopColor="var(--ember-3)" stopOpacity="0.25" />
        </radialGradient>
      </defs>
      <path d="M296 150c-40 6-58 26-64 46" stroke="var(--ember-2)" strokeWidth="3.5" fill="none" />
      <path d="M232 196l-24 12" stroke="var(--ember-2)" strokeWidth="3" />
      <path d="M300 96c6-18 2-32-6-44" stroke="var(--text-muted)" strokeWidth="1.4" strokeDasharray="3 4" fill="none" />

      {[
        { x: 300, y: 60, text: 'Panache · cendres et gaz', anchor: 'middle' as const },
        { x: 344, y: 92, text: 'Cratère sommital', anchor: 'start' as const },
        { x: 330, y: 150, text: 'Cheminée principale', anchor: 'start' as const },
        { x: 150, y: 214, text: 'Cheminée adventive', anchor: 'end' as const },
        { x: 300, y: 320, text: 'Réservoir magmatique · 3 à 10 km de profondeur', anchor: 'middle' as const },
        { x: 470, y: 214, text: 'Coulées empilées (strates)', anchor: 'start' as const },
      ].map((item) => (
        <text key={item.text} x={item.x} y={item.y} style={LABEL} textAnchor={item.anchor}>
          {item.text}
        </text>
      ))}
      <line x1="318" y1="88" x2="340" y2="88" stroke="var(--border-strong)" />
      <line x1="302" y1="146" x2="326" y2="146" stroke="var(--border-strong)" />
      <line x1="208" y1="208" x2="156" y2="210" stroke="var(--border-strong)" />
      <line x1="430" y1="210" x2="466" y2="210" stroke="var(--border-strong)" />
    </svg>
  );
}

function EdificeTypes() {
  const types = [
    { name: 'Volcan bouclier', path: 'M10 90 Q80 34 150 90 Z', note: 'Pente 5-10° · lave fluide', example: 'Mauna Loa' },
    { name: 'Stratovolcan', path: 'M30 90 L80 22 L130 90 Z', note: 'Pente 25-35° · alternance', example: 'Fuji, Merapi' },
    { name: 'Cône de scories', path: 'M46 90 L80 40 L114 90 Z', note: '< 300 m · éphémère', example: 'Paricutín' },
    { name: 'Caldeira', path: 'M10 90 L44 48 L60 62 L100 62 L116 48 L150 90 Z', note: 'Effondrement · 5-50 km', example: 'Campi Flegrei' },
  ];
  return (
    <svg viewBox="0 0 660 190" role="img" aria-label="Les quatre grands types d’édifices volcaniques">
      {types.map((type, index) => {
        const x = index * 165;
        return (
          <g key={type.name} transform={`translate(${x + 6}, 10)`}>
            <path d={type.path} fill="color-mix(in srgb, var(--ember-2) 18%, transparent)" stroke="var(--border-strong)" />
            <line x1="6" y1="90" x2="154" y2="90" stroke="var(--border-strong)" />
            <text x="80" y="116" style={TITLE} textAnchor="middle">
              {type.name}
            </text>
            <text x="80" y="134" style={LABEL} textAnchor="middle">
              {type.note}
            </text>
            <text x="80" y="152" style={SMALL} textAnchor="middle">
              {type.example}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function VeiScale() {
  const levels = [
    { vei: 0, h: 8, label: 'Hawaïen', volume: '< 10⁴ m³' },
    { vei: 1, h: 18, label: 'Strombolien', volume: '10⁴' },
    { vei: 2, h: 32, label: 'Vulcanien', volume: '10⁶' },
    { vei: 3, h: 52, label: 'Sub-plinien', volume: '10⁷' },
    { vei: 4, h: 76, label: 'Plinien', volume: '10⁸' },
    { vei: 5, h: 104, label: 'Plinien', volume: '10⁹' },
    { vei: 6, h: 132, label: 'Colossal', volume: '10¹⁰' },
    { vei: 7, h: 158, label: 'Super-colossal', volume: '10¹¹' },
    { vei: 8, h: 180, label: 'Méga-colossal', volume: '> 10¹²' },
  ];
  const famous: Record<number, string> = { 4: 'Eyjafjallajökull 2010', 5: 'St. Helens 1980', 6: 'Pinatubo 1991', 7: 'Tambora 1815', 8: 'Toba −74 000' };
  return (
    <svg viewBox="0 0 640 290" role="img" aria-label="Échelle d’explosivité volcanique VEI de 0 à 8">
      <text x="20" y="20" style={TITLE}>
        Indice d’explosivité volcanique (VEI) — chaque échelon multiplie le volume par 10
      </text>
      {levels.map((level, index) => {
        const x = 30 + index * 66;
        const y = 226 - level.h;
        return (
          <g key={level.vei}>
            <rect x={x} y={y} width="44" height={level.h} rx="4" fill={`color-mix(in srgb, var(--ember-3) ${30 + index * 8}%, var(--ember-1))`}
              opacity={0.3 + index * 0.075} stroke="var(--border-strong)" />
            <text x={x + 22} y={y - 8} style={SMALL} textAnchor="middle">
              {level.volume}
            </text>
            <text x={x + 22} y="244" style={{ ...TITLE, fontSize: 13 }} textAnchor="middle">
              {level.vei}
            </text>
            <text x={x + 22} y="262" style={{ ...SMALL, fontSize: 8.5 }} textAnchor="middle">
              {level.label}
            </text>
            {famous[level.vei] ? (
              <text x={x + 22} y="280" style={{ ...SMALL, fontSize: 8, fill: 'var(--accent)' }} textAnchor="middle">
                {famous[level.vei]}
              </text>
            ) : null}
          </g>
        );
      })}
      <line x1="20" y1="228" x2="620" y2="228" stroke="var(--border-strong)" />
    </svg>
  );
}

function EruptiveProducts() {
  return (
    <svg viewBox="0 0 640 280" role="img" aria-label="Produits d’une éruption : retombées, écoulements pyroclastiques et lahars">
      <rect x="0" y="210" width="640" height="70" fill="var(--panel-2)" />
      <path d="M180 210 L300 60 L420 210 Z" fill="color-mix(in srgb, var(--ember-3) 12%, transparent)" stroke="var(--border-strong)" />
      <path d="M300 60c-30-30-10-52 18-58-6 22 10 26 26 12-4 26-22 40-44 46z" fill="color-mix(in srgb, var(--text-muted) 22%, transparent)" stroke="var(--border)" />
      <g opacity="0.85">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <circle key={index} cx={356 + index * 34} cy={40 + index * 9} r={3.4 - index * 0.3} fill="var(--text-muted)" />
        ))}
      </g>
      <path d="M300 78 L392 208 Q420 214 440 226" fill="none" stroke="var(--ember-3)" strokeWidth="3" />
      <path d="M296 96 L214 206 Q188 220 156 228" fill="none" stroke="var(--info)" strokeWidth="3" strokeDasharray="6 4" />

      <text x="470" y="52" style={TITLE}>
        Retombées de téphras
      </text>
      <text x="470" y="70" style={LABEL}>
        cendres, lapillis, bombes
      </text>
      <text x="470" y="150" style={{ ...TITLE, fill: 'var(--danger)' }}>
        Écoulement pyroclastique
      </text>
      <text x="470" y="168" style={LABEL}>
        200 à 700 °C · jusqu’à 700 km/h
      </text>
      <text x="20" y="250" style={{ ...TITLE, fill: 'var(--info)' }}>
        Lahar
      </text>
      <text x="20" y="268" style={LABEL}>
        coulée de boue déclenchée par pluie ou fonte
      </text>
    </svg>
  );
}

function MonitoringNetwork() {
  const stations = [
    { x: 150, y: 190, label: 'Sismomètre', detail: 'trémor, séismes LP' },
    { x: 245, y: 132, label: 'GNSS', detail: 'déformation mm/j' },
    { x: 360, y: 132, label: 'Inclinomètre', detail: 'gonflement du dôme' },
    { x: 452, y: 190, label: 'Spectromètre COSPEC', detail: 'flux de SO₂' },
  ];
  return (
    <svg viewBox="0 0 640 270" role="img" aria-label="Réseau de surveillance instrumentale d’un volcan actif">
      <rect x="0" y="212" width="640" height="58" fill="var(--panel-2)" />
      <path d="M140 212 L300 62 L460 212 Z" fill="color-mix(in srgb, var(--ember-2) 12%, transparent)" stroke="var(--border-strong)" />
      <ellipse cx="300" cy="244" rx="66" ry="22" fill="color-mix(in srgb, var(--ember-3) 26%, transparent)" stroke="var(--ember-3)" strokeDasharray="4 3" />
      <path d="M300 66v-24" stroke="var(--text-muted)" strokeDasharray="3 4" />
      <circle cx="300" cy="34" r="10" fill="none" stroke="var(--info)" strokeDasharray="3 3" />
      <text x="318" y="30" style={LABEL}>
        Satellite · InSAR &amp; thermique
      </text>

      {stations.map((station) => (
        <g key={station.label}>
          <rect x={station.x - 8} y={station.y - 8} width="16" height="16" rx="4" fill="var(--panel)" stroke="var(--accent)" />
          <circle cx={station.x} cy={station.y} r="3" fill="var(--accent)" />
          <text x={station.x} y={station.y + 28} style={{ ...LABEL, fill: 'var(--text)' }} textAnchor="middle">
            {station.label}
          </text>
          <text x={station.x} y={station.y + 43} style={SMALL} textAnchor="middle">
            {station.detail}
          </text>
        </g>
      ))}
      <text x="300" y="264" style={SMALL} textAnchor="middle">
        Réservoir surveillé en continu · données transmises à l’observatoire
      </text>
    </svg>
  );
}

function AlertLadder() {
  const levels = [
    { name: 'Vert — Repos', color: 'var(--success)', text: 'Activité de fond, surveillance de routine.' },
    { name: 'Jaune — Vigilance', color: 'var(--warning)', text: 'Anomalies mesurées : sismicité, gaz, déformation.' },
    { name: 'Orange — Alerte', color: 'var(--ember-2)', text: 'Éruption probable à court terme, zones fermées.' },
    { name: 'Rouge — Éruption', color: 'var(--danger)', text: 'Éruption en cours, évacuation appliquée.' },
  ];
  return (
    <svg viewBox="0 0 640 230" role="img" aria-label="Échelle des niveaux d’alerte volcanique">
      {levels.map((level, index) => {
        const y = 14 + index * 52;
        return (
          <g key={level.name}>
            <rect x="20" y={y} width="600" height="42" rx="8" fill="var(--panel-2)" stroke="var(--border)" />
            <rect x="20" y={y} width="7" height="42" rx="3.5" fill={level.color} />
            <text x="44" y={y + 19} style={{ ...TITLE, fill: level.color }}>
              {level.name}
            </text>
            <text x="44" y={y + 34} style={LABEL}>
              {level.text}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

const FIGURES: Readonly<Record<string, () => ReactNode>> = {
  'terre-coupe': EarthSection,
  'tectonique-limites': PlateBoundaries,
  'contextes-volcaniques': VolcanicSettings,
  'viscosite-silice': ViscosityChart,
  'volcan-coupe': VolcanoAnatomy,
  'types-edifices': EdificeTypes,
  'echelle-vei': VeiScale,
  'produits-eruptifs': EruptiveProducts,
  'surveillance-reseau': MonitoringNetwork,
  'niveaux-alerte': AlertLadder,
};

export function Figure({ figureId }: { readonly figureId: string }): ReactNode {
  const Component = FIGURES[figureId];
  return Component ? <Component /> : null;
}
