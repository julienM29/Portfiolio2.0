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
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   whileInView={{ opacity: 1 }}
    //   viewport={{ once: true, amount: 0.3 }}
    //   transition={{ duration: 0.6, ease: 'easeOut' }}
    //   className={`rounded-3xl p-6 md:p-10 flex flex-col lg:flex-row items-stretch gap-10 
    //     ${isLight ? 'bg-light-composant shadow-xl' : 'bg-dark-composant text-dark-primary border border-dark-composant'}`}
    // >
    //   {/* Image */}
    //   <motion.div
    //     initial={{ opacity: 0, y: 20 }}
    //     whileInView={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.6, ease: 'easeOut' }}
    //     viewport={{ once: true, amount: 0.3 }}
    //     className={`w-full lg:w-[490px] aspect-video relative rounded-xl overflow-hidden group cursor-pointer
    //       ${isLight ? 'bg-light border border-light' : 'bg-dark border border-dark-composant'}`}
    //   >
    //     <img
    //       src={imageProjet}
    //       alt={nomProjet}
    //       aria-label={`Capture d'écran du projet ${nomProjet}`}
    //       decoding="async"
    //       loading="lazy"
    //       height='1842'
    //       width='909'
    //       className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 will-change-transform"
    //     />
    //   </motion.div>

    //   {/* Texte + tech + boutons */}
    //   <motion.div
    //     initial={{ opacity: 0, y: 20 }}
    //     whileInView={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
    //     viewport={{ once: true, amount: 0.3 }}
    //     className="flex-1 flex flex-col space-y-8"
    //   >
    //     {/* Technologies */}
    //     <div className="flex flex-wrap gap-2">
    //       {listeTechnologies.map((tech, index) => (
    //         <ConteneurTechnologie
    //           key={index}
    //           isLight={isLight}
    //           nom={tech}
    //           image={listeImageTechnologies[index]}
    //           couleur={listeCouleurTechnologies[index]}
    //         />
    //       ))}
    //     </div>

    //     {/* Titre + description */}
    //     <div className="flex flex-col gap-3">
    //       <h2 className={`titre text-3xl font-semibold ${isLight ? 'text-light-primary' : 'text-dark-primary'}`}>
    //         {nomProjet}
    //       </h2>
    //       <div className={`text-md flex flex-col leading-relaxed text-justify 
    //         ${isLight ? 'text-light-primary' : 'text-dark-secondary'}`}>
    //         {descriptionProjet.map((paragraphe, index) => (
    //           <p key={index}>{paragraphe}</p>
    //         ))}
    //       </div>
    //     </div>

    //     {/* Boutons */}
    //     <div className="flex flex-wrap gap-4">
    //       <CustomButton
    //         link={lienProjet}
    //         nom="En savoir plus"
    //         icone={<FaArrowRight className="w-5 h-5" />}
    //         bgColor={isLight ? 'bg-light-bouton' : 'bg-dark-bouton'}
    //         borderColor={isLight ? 'border-light-bouton' : 'border-dark-bouton'}
    //         textColor={isLight ? 'text-black' : 'text-dark-primary'}
    //       />
    //       <CustomButton
    //         rel='noopener noreferrer'
    //         target='_blank'
    //         icone={<FaGithub className="w-5 h-5" />}
    //         link={"https://github.com/julienM29"}
    //         nom="GitHub"
    //         bgColor={isLight ? 'bg-light-bouton-second' : 'bg-dark-bouton-second'}
    //         borderColor={isLight ? 'border-light-bouton' : 'border-dark-bouton'}
    //         textColor={isLight ? 'text-black' : 'text-dark-primary'}
    //       />
    //     </div>
    //   </motion.div>
    // </motion.div>
      <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
  className={`rounded-3xl p-6 xl:p-10 space-y-6 w-full mx-auto
    ${isLight ? 'bg-light-composant shadow-xl' : 'bg-dark-composant text-dark-primary border border-dark-composant'}
    flex flex-col xl:flex-row xl:gap-10 xl:items-stretch xl:space-y-0`}
>
  {/* Image */}
  <a href={lienProjet} className="block w-full xl:w-1/2 aspect-video overflow-hidden rounded-xl group flex-shrink-0">
    <img
      src={imageProjet}
      height="1842"
      width="909"
      alt={`Image du projet ${nomProjet}`}
      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      decoding="async"
      loading="lazy"
    />
  </a>

  {/* Texte */}
  <div className="space-y-4 xl:flex-1 xl:flex-col xl:space-y-8  ">
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
