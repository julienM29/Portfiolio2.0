import React, { useCallback, Suspense, lazy } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Accueil from '../layout/Accueil'
import { useTheme } from '../layout/ThemeContext';
import { motion } from 'framer-motion';

// Lazy-load des sections sous le fold
const APropos = lazy(() => import('../layout/APropos'));
const Projets = lazy(() => import('../layout/Projets'));
const Contact = lazy(() => import('../layout/Contact'));

function HomePage() {
  const { isLight, setIsLight } = useTheme();

  // Utilisation de useCallback pour éviter la recréation de fonction à chaque render
  const toggleTheme = useCallback(() => setIsLight(prev => !prev), [setIsLight]);

  return (
    <motion.div
      key="homepage"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col space-y-18 md:space-y-24 items-center  `}
    >
      {/* Header chargé immédiatement */}
      <Header isLight={isLight} setIsLight={toggleTheme} />

      {/* Sections lazy-load avec fallback */}
      <Accueil isLight={isLight} />

      <Suspense fallback={<div className="w-full h-96 bg-gray-200 animate-pulse" />}>
        <APropos isLight={isLight} />
      </Suspense>

      <Suspense fallback={<div className="w-full h-96 bg-gray-200 animate-pulse" />}>
        <Projets isLight={isLight} />
      </Suspense>

      <Suspense fallback={<div className="w-full h-96 bg-gray-200 animate-pulse" />}>
        <Contact isLight={isLight} />
      </Suspense>

      {/* Footer chargé immédiatement */}
      <Footer isLight={isLight} />
    </motion.div>
  );
}

export default HomePage;
