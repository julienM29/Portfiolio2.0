import { motion } from 'framer-motion';
import { FaGithub, FaArrowRight } from 'react-icons/fa';
import ConteneurTechnologie from './ConteneurTechnologie';
import CustomButton from "./CustomButton";

const ConteneurProjet = ({
  isLight,
  imageProjet,
  nomProjet,
  descriptionProjet,
  listeTechnologies,
  listeImageTechnologies,
  listeCouleurTechnologies,
  lienProjet
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`rounded-3xl p-6 md:p-10 flex flex-col lg:flex-row items-stretch gap-10 
        ${isLight ? 'bg-light-composant shadow-xl' : 'bg-dark-composant text-dark-primary border border-dark-composant'}`}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        className={`w-full lg:w-[490px] aspect-video relative rounded-xl overflow-hidden group cursor-pointer
          ${isLight ? 'bg-light border border-light' : 'bg-dark border border-dark-composant'}`}
      >
        <img
          src={imageProjet}
          alt={nomProjet}
          aria-label={`Capture d'écran du projet ${nomProjet}`}
          decoding="async"
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 will-change-transform"
        />
      </motion.div>

      {/* Texte + tech + boutons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex-1 flex flex-col space-y-10"
      >
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {listeTechnologies.map((tech, index) => (
            <ConteneurTechnologie
              key={index}
              isLight={isLight}
              nom={tech}
              image={listeImageTechnologies[index]}
              couleur={listeCouleurTechnologies[index]}
            />
          ))}
        </div>

        {/* Titre + description */}
        <div className="flex flex-col gap-3">
          <h2 className={`titre text-3xl font-semibold ${isLight ? 'text-light-primary' : 'text-dark-primary'}`}>
            {nomProjet}
          </h2>
          <div className={`text-md flex flex-col leading-relaxed text-justify 
            ${isLight ? 'text-light-primary' : 'text-dark-secondary'}`}>
            {descriptionProjet.map((paragraphe, index) => (
              <p key={index}>{paragraphe}</p>
            ))}
          </div>
        </div>

        {/* Boutons */}
        <div className="flex flex-wrap gap-4">
          <CustomButton
            link={lienProjet}
            nom="En savoir plus"
            icone={<FaArrowRight className="w-5 h-5" />}
            bgColor={isLight ? 'bg-light-bouton' : 'bg-dark-bouton'}
            borderColor={isLight ? 'border-light-bouton ' : 'border-dark-bouton '}
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
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ConteneurProjet;
