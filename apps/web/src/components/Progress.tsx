export function ProgressBar({ value, thin = false }: { readonly value: number; readonly thin?: boolean }) {
  const clamped = Math.max(0, Math.min(100, Math.round(value)));
  return (
    <div
      className={thin ? 'progress progress--thin' : 'progress'}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="progress__bar" style={{ width: `${clamped}%` }} />
    </div>
  );
}

export function ProgressRing({
  value,
  size = 120,
  stroke = 9,
}: {
  readonly value: number;
  readonly size?: number;
  readonly stroke?: number;
}) {
  const clamped = Math.max(0, Math.min(100, Math.round(value)));
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - clamped / 100);

  return (
    <svg className="progress-ring" width={size} height={size} role="img" aria-label={`Progression ${clamped} %`}>
      <circle className="progress-ring__track" cx={size / 2} cy={size / 2} r={radius} fill="none" strokeWidth={stroke} />
      <circle
        className="progress-ring__value"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        strokeWidth={stroke}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        transform={`rotate(90 ${size / 2} ${size / 2})`}
        style={{ fill: 'var(--text)', fontSize: size * 0.24, fontWeight: 650, letterSpacing: '-0.03em' }}
      >
        {clamped}%
      </text>
    </svg>
  );
}
