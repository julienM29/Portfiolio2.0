const BadgeTechnologie = ({ isLight, nom, image, couleur }) => {
  return (
    <div
      role="listitem"
      className={`inline-flex items-center gap-1.5 md:gap-2 rounded-full 
        border py-0.5 md:py-1 px-2.5 md:px-3 
        text-sm md:text-md
        ${isLight
          ? 'border-black/40 bg-white text-light-primary'
          : 'border-white/60 bg-gray-800 text-white'
        }
        transition-transform duration-200
        hover:scale-105
        cursor-default
      `}
    >
      <i className={`${image} ${couleur}`} aria-hidden="true" />
      <span>{nom}</span>
    </div>
  );
};


export default BadgeTechnologie;
