import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Suspense, lazy } from 'react';
import PageWrapper from './components/layout/PageWrapper';
import { OrbitProgress } from 'react-loading-indicators';

// Lazy-loading des pages pour réduire la taille du bundle initial
const HomePage = lazy(() => import('./components/pages/HomePage'));
const ProjetKerisnel = lazy(() => import('./components/pages/ProjetKerisnel'));
const ProjetEvenementiel = lazy(() => import('./components/pages/ProjetEvenementiel'));
const ProjetPizzeria = lazy(() => import('./components/pages/ProjetPizzeria'));
const ProjetDashboard = lazy(() => import('./components/pages/ProjetDashboard'));

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <OrbitProgress color="#ac7b38" size="large" text="" textColor="" />
          </div>
        }
      >     
       <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
          <Route path="/projet-E-Commerce" element={<PageWrapper><ProjetKerisnel /></PageWrapper>} />
          <Route path="/projet-Evenementiel" element={<PageWrapper><ProjetEvenementiel /></PageWrapper>} />
          <Route path="/projet-Pizzeria" element={<PageWrapper><ProjetPizzeria /></PageWrapper>} />
          <Route path="/projet-Dashboard" element={<PageWrapper><ProjetDashboard /></PageWrapper>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}