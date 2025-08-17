import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'; // 👈 Ajouter ceci

import './index.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

import { ThemeProvider } from './components/layout/ThemeContext';  
import HomePage from './components/pages/HomePage';
import ProjetKerisnel from './components/pages/ProjetKerisnel';
import ProjetEvenementiel from './components/pages/ProjetEvenementiel';
import ProjetPizzeria from './components/pages/ProjetPizzeria';
import PageWrapper from './components/layout/PageWrapper';

// 👇 Wrapper pour gérer les animations de transition
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/projet-E-Commerce" element={<PageWrapper><ProjetKerisnel /></PageWrapper>} />
        <Route path="/projet-Evenementiel" element={<PageWrapper><ProjetEvenementiel /></PageWrapper>} />
        <Route path="/projet-Pizzeria" element={<PageWrapper><ProjetPizzeria /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Router>
        <AnimatedRoutes /> {/* 👈 Remplace <Routes> */}
      </Router>
    </ThemeProvider>
  </StrictMode>
);
