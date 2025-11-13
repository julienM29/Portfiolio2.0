import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';
import ConteneurTechnologie from './ConteneurTechnologie';
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';

const ConteneurProjetMobile = ({
  isLight,
  imageProjet,
  nomProjet,
  descriptionProjet,
  listeTechnologies,
  listeImageTechnologies,
  listeCouleurTechnologies,
  lienProjet,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`rounded-3xl   p-4 space-y-6 w-full max-w-[95%] mx-auto 
        ${isLight ? 'bg-light-composant shadow-xl' : 'bg-dark-composant text-dark-primary border border-dark-composant'}`}
    >
<Link
  to={lienProjet}
  className="block w-full xl:w-1/2 aspect-video overflow-hidden rounded-xl group flex-shrink-0"
>
  <img
    src={imageProjet}
    height="1842"
    width="909"
    alt={`Image du projet ${nomProjet}`}
    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
    decoding="async"
    loading="lazy"
  />
</Link>
      {/* Texte + techs */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {listeTechnologies.map((tech, index) => (
            <ConteneurTechnologie
              key={index}
              nom={tech}
              image={listeImageTechnologies[index]}
              couleur={listeCouleurTechnologies[index]}
              isLight={isLight}
            />
          ))}
        </div>
        <h3 className="titre text-2xl font-semibold">{nomProjet}</h3>

        {/* Technologies */}
        

        {/* Description */}
        <div className="text-sm flex flex-col gap-2 leading-relaxed text-justify">
          {descriptionProjet.map((paragraphe, index) => (
            <p key={index}>{paragraphe}</p>
          ))}
        </div>

        {/* Boutons */}
        <div className="flex flex-wrap gap-4  ">
          <CustomButton
            link={lienProjet}
            nom="Plus d'infos"
            icone={<FaArrowRight className="w-5 h-5" />}
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
            borderColor={isLight ? 'border-light-bouton' : 'border-dark-bouton'}
            textColor={isLight ? 'text-black' : 'text-dark-primary'}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ConteneurProjetMobile;
