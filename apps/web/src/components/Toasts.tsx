import { useApp } from '../state/app-context';
import { IconAlert, IconCheck, IconInfo, IconShield } from './Icons';

const ICONS = {
  info: IconInfo,
  success: IconCheck,
  warning: IconShield,
  danger: IconAlert,
} as const;

export function Toasts() {
  const { toasts } = useApp();
  if (toasts.length === 0) return null;

  return (
    <div className="toasts" role="log" aria-live="polite">
      {toasts.map((toast) => {
        const Icon = ICONS[toast.tone];
        return (
          <div className={`toast toast--${toast.tone}`} key={toast.id}>
            <span className="toast__icon">
              <Icon size={16} />
            </span>
            <div>
              <div className="toast__title">{toast.title}</div>
              {toast.text ? <div className="toast__text">{toast.text}</div> : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
