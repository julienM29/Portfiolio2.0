import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionFonctionnalite from './SectionFonctionnlite';
import SectionContexte from './SectionContexte';
import SectionStack from './SectionStack.jsx';

// Variants similaires à APropos
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function ProjetArticle({ isLight, projet }) {
  const { contexte, stack, fonctionnalites } = projet;

  // Refs + useInView pour chaque section
  const contexteRef = useRef(null);
  const stackRef = useRef(null);
  const fonctionRef = useRef(null);

  const contexteInView = useInView(contexteRef, { once: true, margin: '-100px' });
  const stackInView = useInView(stackRef, { once: true, margin: '-100px' });
  const fonctionInView = useInView(fonctionRef, { once: true, margin: '-100px' });

  return (
    <div
      className="w-full md:w-7/12 flex flex-col items-center space-y-16 md:space-y-20 text-base md:text-lg leading-relaxed text-justify px-4 md:px-10 py-10 scroll-mt-20"
      id="Details"
    >
      {/* Contexte */}
      <motion.section
        ref={contexteRef}
        initial="hidden"
        animate={contexteInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
        className="flex flex-col space-y-6 md:space-y-10 w-full"
        id="Contexte"
      >
        <h2
          className={`text-2xl max-md:text-center md:text-4xl font-bold titre ${isLight ? 'text-light-primary' : 'text-dark-primary'}`}
        >
          Contexte du projet
        </h2>
        <SectionContexte isLight={isLight} enfants={contexte} />
      </motion.section>

      {/* Stack */}
      <motion.section
        ref={stackRef}
        initial="hidden"
        animate={stackInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
        className="flex flex-col space-y-6 md:space-y-10 w-full"
        id="Stack"
      >
        <h2
          className={`text-2xl max-md:text-center md:text-4xl font-bold titre ${isLight ? 'text-light-primary' : 'text-dark-primary'}`}
        >
          Stack utilisée
        </h2>
        <SectionStack isLight={isLight} {...stack} />
      </motion.section>

      {/* Fonctionnalités */}
      <motion.section
        ref={fonctionRef}
        initial="hidden"
        animate={fonctionInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
        className="flex flex-col space-y-6 md:space-y-10 w-full"
        id="Fonctionnalites"
      >
        <h2
          className={`text-2xl max-md:text-center md:text-4xl font-bold titre ${isLight ? 'text-light-primary' : 'text-dark-primary'}`}
        >
          Fonctionnalités clés
        </h2>
        <div className="space-y-6 md:space-y-8">
          {fonctionnalites.map((fonction, index) => (
            <SectionFonctionnalite
              key={index}
              isLight={isLight}
              titre={fonction.titre}
              icone={fonction.icone}
              enfants={fonction.contenu}
            />
          ))}
        </div>
      </motion.section>
    </div>
  );
}

export default ProjetArticle;
