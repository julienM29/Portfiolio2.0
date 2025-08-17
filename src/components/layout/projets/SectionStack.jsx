const SectionStack = ({ isLight, stackFrontend, stackBackend, stackDatabase }) => {
  const BadgeTechno = ({ nom, image, couleur }) => (
    <div
      className={`inline-flex items-center gap-2 rounded-full border py-1.5 px-3 
        text-sm sm:text-base
        ${isLight
          ? 'border-light bg-light-composant text-light-primary focus:ring-light-accent'
          : 'border-white/60 bg-dark-bouton-second text-white focus:ring-dark-accent'
        }
        transition-transform duration-200
        hover:scale-105 shadow-md
        cursor-default
        focus:outline-none focus:ring-2  
       `}
      tabIndex={0}
    >
      <i className={`${image} ${couleur} text-sm sm:text-lg`} aria-hidden="true" />
      <span className="whitespace-nowrap">{nom}</span>
    </div>
  );

  return (
    <div className="space-y-10 sm:space-y-12 w-full">
      {/* Frontend */}
      <section>
        <h3 className={`titre text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 ${isLight ? 'text-light-primary' : 'text-dark-primary'}`}>
          Frontend
        </h3>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {stackFrontend.map((tech, idx) => (
            <BadgeTechno key={idx} {...tech} />
          ))}
        </div>
      </section>

      {/* Backend */}
      <section>
        <h3 className={`titre text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 ${isLight ? 'text-light-primary' : 'text-dark-primary'}`}>
          Backend
        </h3>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {stackBackend.map((tech, idx) => (
            <BadgeTechno key={idx} {...tech} />
          ))}
        </div>
      </section>

      {/* Base de données */}
      <section>
        <h3 className={`titre text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 ${isLight ? 'text-light-primary' : 'text-dark-primary'}`}>
          Base de données
        </h3>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {stackDatabase.map((tech, idx) => (
            <BadgeTechno key={idx} {...tech} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SectionStack;

