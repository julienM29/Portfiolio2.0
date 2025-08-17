import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import CustomButton from '../shared/CustomButton';
import { motion } from 'framer-motion';

const containerVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15, // délai entre enfants
      when: "beforeChildren", // attendre avant d'animer les enfants
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


function Accueil({ isLight, setIsLight }) {
  return (
    <motion.section
      id="Accueil"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
        className={`relative w-[90%] sm:w-4/5 md:w-7/12 max-md:min-h-[85vh] min-h-[95vh] flex flex-col items-center justify-center space-y-6 sm:space-y-8  ${isLight ? 'text-light-primary' : 'text-dark-primary'}`}

    >
      <div className='flex flex-col gap-6 h-full w-full justify-center max-md:mt-30'>
        <motion.h1 variants={childVariants}className="titre text-2xl sm:text-3xl md:text-5xl font-bold leading-tight max-md:text-center">
          Bonjour, moi c’est
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {' '}Julien Miossec
          </span>
        </motion.h1>

        <motion.p variants={childVariants} className="text-base sm:text-lg md:text-xl w-full leading-relaxed text-justify sm:text-left">
          Développeur Web, à la recherche d’une
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {' '}alternance de 3 ans
          </span> en tant qu’<span className="font-semibold">Expert en architecture et développement logiciel </span>
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {' '}(bac +5)
          </span>, ou d’une
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {' '}première opportunité professionnelle
          </span> en tant que <span className="font-semibold">développeur</span>.
        </motion.p>

        <motion.ul
          variants={childVariants}
                className={`text-sm sm:text-base md:text-lg list-disc list-inside space-y-1 ${
        isLight ? 'text-light-secondary' : 'text-dark-secondary'
      } text-left`}
        >
          <li>2 ans d’expérience en développement Web</li>
          <li>Autoformation sur des technologies modernes</li>
          <li>Capacité à apprendre rapidement et à m'adapter à différents langages</li>
        </motion.ul>

        <motion.div variants={childVariants} className="flex gap-4 pt-4">

          <CustomButton
            rel='noopener noreferrer'
            target='_blank'
            icone={<FaLinkedin className="w-6 h-6" />}
            link={"https://www.linkedin.com/in/julien-miossec-a55869210/"}
            nom="LinkedIn"
            bgColor={isLight ? 'bg-light-bouton' : 'bg-dark-bouton'}
            borderColor={isLight ? 'border-light-bouton' : 'border-dark-bouton'}
            textColor={isLight ? 'text-black' : 'text-dark-primary'}
          />
          <CustomButton
            rel='noopener noreferrer'
            target='_blank'
            icone={<FaGithub className="w-5 h-5" />}
            link={"https://github.com/julienM29"}
            nom="GitHub"
            bgColor={isLight ? 'bg-light-bouton-second' : 'bg-dark-bouton-second'}
            borderColor={isLight ? 'border-light-bouton' : 'border-dark-bouton '}
            textColor={isLight ? 'text-black' : 'text-dark-primary'}
          />
        </motion.div>
      </div>
      <motion.div
        variants={childVariants}  
        className="absolute  bottom-0 w-full flex justify-center"
      >
        <motion.button
          onClick={() => {
            const target = document.getElementById('Apropos');
            if (target) target.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`hidden sm:inline cursor-pointer p-3 rounded-full ${isLight
        ? 'bg-light-bouton border-light-bouton border-2 text-black'
        : 'bg-dark-bouton border-2 border-dark-bouton text-dark-primary'
        } shadow-lg`}
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



    </motion.section>



  );
}
export default Accueil