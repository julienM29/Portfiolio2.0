import { FaGithub, FaLinkedin } from "react-icons/fa";
import CustomButton from '../shared/CustomButton';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const containerVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren",
      duration: 0.5,
    },
  },
  exit: { opacity: 0, y: -30 },
};

const childVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

function Accueil({ isLight }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const textPrimary = isLight ? 'text-light-primary' : 'text-dark-primary';
  const textContrast = isLight ? 'text-light-contrast' : 'text-dark-contrast';
  const textSecondary = isLight ? 'text-light-secondary' : 'text-dark-secondary';
  const btnBg = isLight ? 'bg-light-bouton' : 'bg-dark-bouton';
  const btnBorder = isLight ? 'border-light-bouton' : 'border-dark-bouton';
  const btnText = isLight ? 'text-black' : 'text-dark-primary';

  return (
    <motion.section
      id="Accueil"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`relative w-[90%] sm:w-4/5 md:w-[65%] max-md:min-h-[85vh] min-h-[95vh] flex flex-col items-center justify-center space-y-6 sm:space-y-8 ${textPrimary}`}
    >
      <div className='flex flex-col gap-6 h-full w-full justify-center max-md:mt-30'>
        <motion.h1 variants={childVariants} className={`titre text-2xl sm:text-3xl md:text-5xl font-bold leading-tight max-md:text-center`}>
          Bonjour, moi c’est
          <span className={`${textContrast} font-bold`}> Julien Miossec</span>
        </motion.h1>
        <motion.p variants={childVariants} className="text-base sm:text-lg md:text-xl w-full leading-relaxed text-justify sm:text-left">
          Actuellement en formation de <span className="font-semibold">Concepteur Développeur d'Applications (bac+3)</span>. 
          Je suis à la recherche d’un <span className={`${textContrast} font-bold`}> stage de 2 mois </span> du <span className="font-semibold">31 août au 23 octobre 2026</span> et/ou une 
          <span className={`${textContrast} font-bold`}> alternance de 2 ans </span> 
          à partir de <span className="font-semibold">novembre 2026</span>, dans le cadre de la formation 
          d'<span className="font-semibold">Expert en architecture et développement logiciel (bac+5)</span>. 
          Le rythme de l'alternance sera de <span className="font-semibold">2 semaines à l’école pour 4 à 7 semaines en entreprise</span>.
        </motion.p>

        <motion.ul variants={childVariants} className={`text-sm sm:text-base md:text-lg list-disc list-inside space-y-1 ${textSecondary} text-left`}>
          <li>3 ans d’expérience en développement Web</li>
          <li>Apprentissage continu sur des technologies modernes</li>
          <li>Capacité à apprendre rapidement et à s'adapter à différents langages</li>
        </motion.ul>

        <motion.div variants={childVariants} className="flex gap-4 pt-4">
          <CustomButton
            rel='noopener noreferrer'
            target='_blank'
            icone={<FaLinkedin className="w-6 h-6" />}
            link={"https://www.linkedin.com/in/julien-miossec/"}
            nom="LinkedIn"
            bgColor={btnBg}
            borderColor={btnBorder}
            textColor={btnText}
          />
          <CustomButton
            rel='noopener noreferrer'
            target='_blank'
            icone={<FaGithub className="w-5 h-5" />}
            link={"https://github.com/julienM29"}
            nom="GitHub"
            bgColor={isLight ? 'bg-light-bouton-second' : 'bg-dark-bouton-second'}
            borderColor={btnBorder}
            textColor={btnText}
          />
        </motion.div>
      </div>

      {/* Scroll button seulement sur desktop */}
      {!isMobile && (
        <motion.div variants={childVariants} className="absolute bottom-0 w-full flex justify-center">

          <motion.button
            onClick={() => {
              const target = document.getElementById('Apropos');
              if (target) target.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`cursor-pointer p-3 rounded-full ${btnBg} border-2 ${btnBorder} ${btnText} shadow-lg`}
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            aria-label="Scroll down"
            style={{ zIndex: 10 }}
          >
            ↓
          </motion.button>
        </motion.div>
      )}
    </motion.section>
  );
}

export default Accueil;
