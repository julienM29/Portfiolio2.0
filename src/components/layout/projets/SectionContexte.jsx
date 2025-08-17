 
function SectionContexte({ isLight, titre, enfants }) {
  return (
    <section
      className={`
        rounded-2xl 
        p-4 sm:p-6 md:p-10 
        flex flex-col lg:flex-row items-stretch 
        ${isLight 
          ? 'bg-light-composant shadow-xl text-light-primary' 
          : 'bg-dark-composant text-dark-primary border border-dark-composant'
        }
      `}
    >
      <div className="space-y-4 text-sm sm:text-lg leading-relaxed">
        {enfants}
      </div>
    </section>
  );
}

export default SectionContexte;
