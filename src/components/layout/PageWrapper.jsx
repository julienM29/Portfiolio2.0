import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useTheme } from './ThemeContext';
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const pageTransition = {
  duration: 0.5,
  ease: 'easeInOut',
};

export default function PageWrapper({ children }) {
  const { isLight } = useTheme(); // récupère le mode actuel

  useEffect(() => {
    // Scroll en haut au début de l'animation (juste après le montage du composant)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); // ou 'smooth' si tu veux tester
  }, []);

  return (
    <div className={`${isLight ? 'bg-light' : 'bg-dark'} min-h-screen w-full`}>

      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
        className={`min-h-screen`}
      >
        {children}
      </motion.div>
    </div>
  );
}
