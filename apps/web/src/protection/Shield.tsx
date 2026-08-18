import { IconEyeOff, IconLock, IconShieldCheck } from '../components/Icons';
import type { ShieldReason } from './useContentProtection';

const MESSAGES: Record<Exclude<ShieldReason, null>, { title: string; text: string; icon: 'eye' | 'lock' }> = {
  blur: {
    title: 'Contenu masqué',
    text: "La fenêtre a perdu le focus. Revenez sur l'application pour réafficher la leçon.",
    icon: 'eye',
  },
  hidden: {
    title: 'Onglet en arrière-plan',
    text: 'Le contenu est masqué tant que cet onglet n’est pas au premier plan.',
    icon: 'eye',
  },
  print: {
    title: 'Impression désactivée',
    text: 'Le contenu de formation ne peut être ni imprimé ni exporté. Tentative enregistrée.',
    icon: 'lock',
  },
};

export function Shield({ reason }: { readonly reason: ShieldReason }) {
  if (!reason) return null;
  const message = MESSAGES[reason];

  return (
    <div className="shield" role="status" aria-live="polite">
      <div className="shield__card">
        <div className="shield__icon">{message.icon === 'lock' ? <IconLock size={24} /> : <IconEyeOff size={24} />}</div>
        <div className="shield__title">{message.title}</div>
        <p className="shield__text">{message.text}</p>
        <div className="shield-bar__pill">
          <IconShieldCheck size={13} /> Protection active
        </div>
      </div>
    </div>
  );
}
