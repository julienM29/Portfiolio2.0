import Accueil from '../layout/Accueil';
import APropos from '../layout/APropos';
import Projets from '../layout/Projets';
import Contact from '../layout/Contact';
import Header from '../layout/header';
import Footer from '../layout/Footer';
import { useTheme } from '../layout/ThemeContext';
import { motion } from 'framer-motion';

function HomePage() {
  const { isLight, setIsLight } = useTheme();

  return (
    <motion.div
      key="homepage"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col   space-y-18 md:space-y-24   items-center ${isLight ? 'bg-light' : 'bg-dark'}`}
    >
      <Header isLight={isLight} setIsLight={() => setIsLight(!isLight)} />
      <Accueil isLight={isLight} setIsLight={() => setIsLight(!isLight)} />
      <APropos isLight={isLight} setIsLight={() => setIsLight(!isLight)} />
      <Projets isLight={isLight} />
      <Contact isLight={isLight} />
      <Footer isLight={isLight} />
    </motion.div>
  );
}

export default HomePage;
