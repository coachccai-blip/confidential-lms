import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Remet le défilement en haut à chaque changement de route. */
export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return null;
}
