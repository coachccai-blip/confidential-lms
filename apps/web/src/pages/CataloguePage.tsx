import { AppShell } from '../components/AppShell';
import { CourseCatalogue } from '../components/CourseCatalogue';
import { Figure, courses } from '../content';
import { D, useI18n } from '../i18n';

export function CataloguePage() {
  const { l, locale } = useI18n();

  return (
    <AppShell title={l(D.nav.catalogue)} wide>
      <header className="pagehead">
        <div className="pagehead__text">
          <span className="pagehead__eyebrow">{l(D.dashboard.catalogue)}</span>
          <h1>{l(D.nav.catalogue)}</h1>
          <p>{l(D.dashboard.introNew)}</p>
        </div>
        <div className="pagehead__aside">
          <span className="badge badge--accent">{l(D.dashboard.statStepsHint(courses.length))}</span>
        </div>
      </header>

      <figure className="figure" style={{ marginBottom: 'var(--space-8)' }}>
        <Figure figureId="cecrl-echelle" locale={locale} />
      </figure>

      <CourseCatalogue />
    </AppShell>
  );
}
