import { D, useI18n } from '../i18n';
import { IconEyeOff, IconLock, IconShieldCheck } from '../components/Icons';
import type { ShieldReason } from './useContentProtection';

/** Écran de garde affiché quand le contenu doit être masqué. */
export function Shield({ reason }: { readonly reason: ShieldReason }) {
  const { l } = useI18n();
  if (!reason) return null;

  const message =
    reason === 'print'
      ? { title: l(D.shield.printTitle), text: l(D.shield.printText), icon: 'lock' as const }
      : reason === 'hidden'
        ? { title: l(D.shield.hiddenTitle), text: l(D.shield.hiddenText), icon: 'eye' as const }
        : { title: l(D.shield.blurTitle), text: l(D.shield.blurText), icon: 'eye' as const };

  return (
    <div className="shield" role="status" aria-live="polite">
      <div className="shield__card">
        <div className="shield__icon">{message.icon === 'lock' ? <IconLock size={24} /> : <IconEyeOff size={24} />}</div>
        <div className="shield__title">{message.title}</div>
        <p className="shield__text">{message.text}</p>
        <div className="shield-bar__pill">
          <IconShieldCheck size={13} /> {l(D.shield.active)}
        </div>
      </div>
    </div>
  );
}
