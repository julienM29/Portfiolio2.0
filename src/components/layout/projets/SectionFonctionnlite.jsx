function SectionFonctionnalite({ isLight, titre, icone : Icone, enfants }) {
  return (
    <section
      className={`rounded-2xl p-4 sm:p-6 md:p-10 flex flex-col gap-5 sm:gap-6 
        ${isLight 
          ? 'bg-light-composant shadow-md sm:shadow-xl' 
          : 'bg-dark-composant text-dark-primary border border-dark-composant'}
      `}
    >
      <h3 className={`titre flex items-center gap-2 text-lg md:text-2xl font-semibold ${isLight ? 'text-light-primary' : 'text-dark-primary'}`}>
                {Icone && <Icone className="" aria-hidden="true" />}

        {titre}
      </h3>

      <div className={`space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed text-justify 
        ${isLight ? 'text-light-primary' : 'text-dark-secondary'}`}>
        {enfants}
      </div>
    </section>
  );
}

export default SectionFonctionnalite;

