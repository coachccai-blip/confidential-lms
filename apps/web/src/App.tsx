import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppProvider, useApp } from './state/app-context';
import { ClickSound } from './feedback/ClickSound';
import { GlossaryProvider } from './components/GlossaryProvider';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { CataloguePage } from './pages/CataloguePage';
import { CoursePage } from './pages/CoursePage';
import { LessonPage } from './pages/LessonPage';
import { QuizPage } from './pages/QuizPage';
import { AccountPage } from './pages/AccountPage';
import { SecurityPage } from './pages/SecurityPage';
import { AdminPage } from './pages/AdminPage';
import type { ReactElement } from 'react';

function RequireAuth({ children, adminOnly = false }: { readonly children: ReactElement; readonly adminOnly?: boolean }) {
  const { user } = useApp();
  if (!user) return <Navigate to="/connexion" replace />;
  if (adminOnly && user.role !== 'admin') return <Navigate to="/app" replace />;
  return children;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/connexion" element={<LoginPage />} />
      <Route
        path="/app"
        element={
          <RequireAuth>
            <DashboardPage />
          </RequireAuth>
        }
      />
      <Route
        path="/app/catalogue"
        element={
          <RequireAuth>
            <CataloguePage />
          </RequireAuth>
        }
      />
      <Route
        path="/app/cours/:slug"
        element={
          <RequireAuth>
            <CoursePage />
          </RequireAuth>
        }
      />
      <Route
        path="/app/cours/:slug/lecon/:lessonId"
        element={
          <RequireAuth>
            <LessonPage />
          </RequireAuth>
        }
      />
      <Route
        path="/app/cours/:slug/quiz/:quizId"
        element={
          <RequireAuth>
            <QuizPage />
          </RequireAuth>
        }
      />
      <Route
        path="/app/compte"
        element={
          <RequireAuth>
            <AccountPage />
          </RequireAuth>
        }
      />
      <Route
        path="/app/securite"
        element={
          <RequireAuth>
            <SecurityPage />
          </RequireAuth>
        }
      />
      <Route
        path="/admin"
        element={
          <RequireAuth adminOnly>
            <AdminPage />
          </RequireAuth>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export function App() {
  return (
    <AppProvider>
      <HashRouter>
        <ScrollToTop />
        <ClickSound />
        <GlossaryProvider>
          <AppRoutes />
        </GlossaryProvider>
      </HashRouter>
    </AppProvider>
  );
}
