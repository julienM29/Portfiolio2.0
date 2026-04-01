import { motion } from 'framer-motion';
import { FaGithub, FaArrowRight } from 'react-icons/fa';
import ConteneurTechnologie from './ConteneurTechnologie';
import CustomButton from "./CustomButton";
import { Link } from 'react-router-dom';

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
  className={`rounded-3xl p-6 space-y-6 w-full mx-auto
    ${isLight ? 'bg-light-composant shadow-xl' : 'bg-dark-composant text-dark-primary border border-dark-composant'}
    flex flex-col xl:flex-row xl:gap-10 xl:items-center xl:space-y-0`}
>
  {/* Image */}
<Link
  to={lienProjet}
  className="block w-full xl:w-[55%] rounded-xl group flex-shrink-0 overflow-hidden"
>
  <img
    src={imageProjet}
    srcSet={`${imageProjet} 1x, ${imageProjet} 2x`} // Option Retina
    alt={`Image du projet ${nomProjet}`}
    className="w-full h-full md:w-[540px] md:h-[304px] object-cover  rounded-xl transition-transform duration-500 ease-in-out group-hover:scale-110"
    decoding="async"
    loading="lazy"
  />
</Link>


  {/* Texte */}
  <div className="space-y-4 xl:flex-1 xl:flex-col">
    {/* Technologies */}
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

    <h2 className={`titre text-2xl md:text-3xl font-semibold `}>
             {nomProjet}
           </h2>

    {/* Description */}
    <div className="max-lg:text-sm  flex flex-col gap-2 leading-relaxed text-justify">
      {descriptionProjet.map((paragraphe, index) => (
        <p key={index}>{paragraphe}</p>
      ))}
    </div>

    {/* Boutons */}
    <div className="flex flex-wrap gap-4">
      <CustomButton
        link={lienProjet}
        nom="Plus d'infos"
        icone={<FaArrowRight className="w-5 h-5" />}
        bgColor={isLight ? 'bg-light-bouton' : 'bg-dark-bouton'}
        borderColor={isLight ? 'border-light-bouton' : 'border-dark-bouton'}
        textColor={isLight ? 'text-black' : 'text-dark-primary'}
      />
      <CustomButton
        rel="noopener noreferrer"
        target="_blank"
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

export default ConteneurProjet;
