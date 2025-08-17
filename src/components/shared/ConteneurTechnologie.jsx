const ConteneurTechnologie = ({ isLight, nom, image, couleur }) => {
  return (
    <div
      className={`rounded-full border py-1 px-2 md:px-3 flex items-center gap-2
        ${isLight 
          ? 'border-gray-900/80 bg-white bg-opacity-30 shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-200' 
          : 'border-white/80 bg-gray-800 bg-opacity-40 shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-200'}`}
    >
      <i className={`${image} ${couleur}`}></i>
      <span className="text-xs md:text-base">{nom}</span>
    </div>
  );
};

export default ConteneurTechnologie;

