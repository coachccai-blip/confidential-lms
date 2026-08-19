import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { readonly size?: number };

function Base({ size = 18, children, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const IconHome = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 10.4 12 3l9 7.4" />
    <path d="M5 9.5V20h14V9.5" />
    <path d="M9.5 20v-6h5v6" />
  </Base>
);

export const IconBook = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H19v18H5.5A1.5 1.5 0 0 1 4 19.5z" />
    <path d="M8 3v18" />
  </Base>
);

export const IconShield = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3 5 6v6c0 4.2 2.9 7.6 7 9 4.1-1.4 7-4.8 7-9V6z" />
  </Base>
);

export const IconShieldCheck = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3 5 6v6c0 4.2 2.9 7.6 7 9 4.1-1.4 7-4.8 7-9V6z" />
    <path d="m9 12 2 2 4-4" />
  </Base>
);

export const IconUser = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="8" r="3.4" />
    <path d="M4.8 20a7.4 7.4 0 0 1 14.4 0" />
  </Base>
);

export const IconGauge = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 18a8 8 0 1 1 16 0" />
    <path d="m12 14 4-3.6" />
    <circle cx="12" cy="15" r="1.4" />
  </Base>
);

export const IconSun = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4" />
  </Base>
);

export const IconMoon = (p: IconProps) => (
  <Base {...p}>
    <path d="M20 14.2A8.2 8.2 0 0 1 9.8 4 8.4 8.4 0 1 0 20 14.2" />
  </Base>
);

export const IconCheck = (p: IconProps) => (
  <Base strokeWidth={2.4} {...p}>
    <path d="m4.5 12.5 5 5 10-11" />
  </Base>
);

export const IconX = (p: IconProps) => (
  <Base strokeWidth={2.2} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Base>
);

export const IconMinus = (p: IconProps) => (
  <Base strokeWidth={2.4} {...p}>
    <path d="M6 12h12" />
  </Base>
);

export const IconChevronRight = (p: IconProps) => (
  <Base {...p}>
    <path d="m9 5 7 7-7 7" />
  </Base>
);

export const IconChevronLeft = (p: IconProps) => (
  <Base {...p}>
    <path d="m15 5-7 7 7 7" />
  </Base>
);

export const IconChevronDown = (p: IconProps) => (
  <Base {...p}>
    <path d="m5 9 7 7 7-7" />
  </Base>
);

export const IconMenu = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Base>
);

export const IconLock = (p: IconProps) => (
  <Base {...p}>
    <rect x="4.5" y="10" width="15" height="10.5" rx="2.2" />
    <path d="M8 10V7.5a4 4 0 0 1 8 0V10" />
  </Base>
);

export const IconAlert = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 4.5 2.8 20h18.4z" />
    <path d="M12 10v4.2M12 17.2v.2" />
  </Base>
);

export const IconInfo = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5.5M12 7.8v.2" />
  </Base>
);

export const IconPlay = (p: IconProps) => (
  <Base {...p}>
    <path d="M8 5.5v13l10-6.5z" />
  </Base>
);

export const IconClock = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.2V12l3 2" />
  </Base>
);

export const IconAward = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="9" r="5.2" />
    <path d="m8.6 13.4-1.3 7L12 18l4.7 2.4-1.3-7" />
  </Base>
);

export const IconMonitor = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="4.5" width="18" height="12" rx="2" />
    <path d="M9 20h6M12 16.5V20" />
  </Base>
);

export const IconSmartphone = (p: IconProps) => (
  <Base {...p}>
    <rect x="7" y="2.8" width="10" height="18.4" rx="2.4" />
    <path d="M11 18.3h2" />
  </Base>
);

export const IconTrash = (p: IconProps) => (
  <Base {...p}>
    <path d="M4.5 7h15M9.5 7V5.2A1.2 1.2 0 0 1 10.7 4h2.6a1.2 1.2 0 0 1 1.2 1.2V7" />
    <path d="M6.5 7 7.4 20h9.2L17.5 7" />
  </Base>
);

export const IconLogout = (p: IconProps) => (
  <Base {...p}>
    <path d="M14 4.5H6.5A1.5 1.5 0 0 0 5 6v12a1.5 1.5 0 0 0 1.5 1.5H14" />
    <path d="M16.5 8.5 20 12l-3.5 3.5M20 12h-9" />
  </Base>
);

export const IconFingerprint = (p: IconProps) => (
  <Base {...p}>
    <path d="M6.2 8.5a7 7 0 0 1 11.6 0" />
    <path d="M8.6 12a3.6 3.6 0 0 1 6.8 1.4c0 2-.4 4-1.2 5.8" />
    <path d="M11 20.4a14 14 0 0 0 1.1-6.7" />
    <path d="M5.6 13.4a9 9 0 0 1 1-5.4" />
    <path d="M7.6 19.4A11 11 0 0 0 9 14" />
  </Base>
);

export const IconEyeOff = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 4.5 20 19.5" />
    <path d="M9.6 6.6A9.6 9.6 0 0 1 12 6.3c5 0 8.5 4.2 9.4 5.7-.4.7-1.5 2.2-3.2 3.5" />
    <path d="M15.4 17.2a9.6 9.6 0 0 1-3.4.5c-5 0-8.5-4.2-9.4-5.7.5-.9 2-2.9 4.4-4.3" />
    <path d="M10.2 10.4a2.4 2.4 0 0 0 3.3 3.4" />
  </Base>
);

export const IconEye = (p: IconProps) => (
  <Base {...p}>
    <path d="M2.6 12C3.5 10.5 7 6.3 12 6.3s8.5 4.2 9.4 5.7c-.9 1.5-4.4 5.7-9.4 5.7S3.5 13.5 2.6 12" />
    <circle cx="12" cy="12" r="2.6" />
  </Base>
);

export const IconSparkle = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3.5 13.7 9l5.5 1.7-5.5 1.7L12 18l-1.7-5.6L4.8 10.7 10.3 9z" />
    <path d="M18.6 4v3M20.1 5.5h-3" />
  </Base>
);

export const IconSearch = (p: IconProps) => (
  <Base {...p}>
    <circle cx="11" cy="11" r="6.4" />
    <path d="m16 16 4 4" />
  </Base>
);

export const IconVolcano = (p: IconProps) => (
  <Base {...p}>
    <path d="M9.2 9.5 3 20h18l-6.2-10.5z" />
    <path d="M9.2 9.5h5.6" />
    <path d="M10.5 6.6 9.4 3.6M13.6 6.4l1.6-2.6M12 6V3.2" />
  </Base>
);

export const IconLayers = (p: IconProps) => (
  <Base {...p}>
    <path d="m12 3.5 8.5 4.3L12 12 3.5 7.8z" />
    <path d="m3.5 12 8.5 4.2 8.5-4.2" />
    <path d="m3.5 16.2 8.5 4.3 8.5-4.3" />
  </Base>
);

export const IconList = (p: IconProps) => (
  <Base {...p}>
    <path d="M8.5 6.5h11M8.5 12h11M8.5 17.5h11M4.5 6.5h.2M4.5 12h.2M4.5 17.5h.2" />
  </Base>
);

export const IconUserPlus = (p: IconProps) => (
  <Base {...p}>
    <path d="M15 20v-1.6A3.4 3.4 0 0 0 11.6 15H6.4A3.4 3.4 0 0 0 3 18.4V20" />
    <circle cx="9" cy="8" r="3.4" />
    <path d="M18 8v6" />
    <path d="M15 11h6" />
  </Base>
);

export const IconCopy = (p: IconProps) => (
  <Base {...p}>
    <rect x="9" y="9" width="11" height="11" rx="2" />
    <path d="M5 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5V5" />
  </Base>
);

export const IconInbox = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 13h5l1.4 2.4h5.2L16 13h5" />
    <path d="M4.6 5.4 3 13v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5l-1.6-7.6A2 2 0 0 0 17.4 4H6.6a2 2 0 0 0-2 1.4Z" />
  </Base>
);

export const IconArchive = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="4" width="18" height="4" rx="1" />
    <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8" />
    <path d="M10 12h4" />
  </Base>
);

export const IconVolume = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 9.5h3.2L12 5.5v13l-4.8-4H4z" />
    <path d="M16 9.2a4 4 0 0 1 0 5.6" />
    <path d="M18.6 6.6a7.5 7.5 0 0 1 0 10.8" />
  </Base>
);

export const IconVolumeOff = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 9.5h3.2L12 5.5v13l-4.8-4H4z" />
    <path d="m16.5 9.5 5 5" />
    <path d="m21.5 9.5-5 5" />
  </Base>
);

export const IconTurtle = (p: IconProps) => (
  <Base {...p}>
    <path d="M3.5 17h17" />
    <path d="M5.5 17a6.5 6.5 0 0 1 13 0" />
    <path d="M9 10.6 10.6 17M15 10.6 13.4 17" />
    <path d="M18.5 13.5h1.8a1.3 1.3 0 0 0 0-2.6h-1.2" />
  </Base>
);

export const IconPencil = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 20h4l10-10-4-4L4 16z" />
    <path d="m14 6 4 4" />
  </Base>
);

export const IconEar = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 9a5 5 0 0 1 10 0c0 3-2.5 3.8-3.4 5.6-.6 1.2-.1 3.4-2.3 3.4a2.3 2.3 0 0 1-2.3-2.3" />
    <path d="M10.2 9.3a1.9 1.9 0 0 1 3.6.7" />
  </Base>
);
