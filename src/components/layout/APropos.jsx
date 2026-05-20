import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import BadgeTechnologie from '../shared/BadgeTechnologies';
import CustomButton from '../shared/CustomButton';
import { FaEnvelope, FaFilePdf } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

function APropos({ isLight }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Variables thème
  const bgCard = isLight ? 'bg-light-composant' : 'bg-dark-composant';
  const textPrimary = isLight ? 'text-light-primary' : 'text-dark-primary';
  const textContrast = isLight ? 'text-light-contrast' : 'text-dark-contrast';
  const btnBg = isLight ? 'bg-light-bouton' : 'bg-dark-bouton';
  const btnBorder = isLight ? 'border-light-bouton' : 'border-dark-bouton';
  const btnText = isLight ? 'text-black' : 'text-dark-primary';

  // Variants Framer Motion
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const badgeVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  const categories = [
    {
      titre: 'Back-end',
      techs: [
        { nom: 'Java', image: 'devicon-java-plain', couleur: 'text-red-600' },
        { nom: 'PHP', image: 'devicon-php-plain', couleur: 'text-indigo-500' },
        { nom: 'Python', image: 'devicon-python-plain', couleur: 'text-yellow-500' },
        { nom: 'Node.js', image: 'devicon-nodejs-plain', couleur: 'text-green-600' },
        { nom: 'Dart', image: 'devicon-dart-plain', couleur: 'text-blue-400' },
        { nom: 'Kotlin', image: 'devicon-kotlin-plain', couleur: 'text-purple-500' }

      ]
    },
    {
      titre: 'Front-end',
      techs: [
        { nom: 'JavaScript', image: 'devicon-javascript-plain', couleur: 'text-yellow-400' },
        { nom: 'React', image: 'devicon-react-original', couleur: 'text-cyan-400' },
        { nom: 'TailwindCSS', image: 'devicon-tailwindcss-original', couleur: 'text-teal-400' },
        { nom: 'Bootstrap', image: 'devicon-bootstrap-plain', couleur: 'text-purple-500' }

      ]
    },
    {
      titre: 'Base de données',
      techs: [
        { nom: 'SQL', image: 'devicon-azuresqldatabase-plain', couleur: 'text-blue-500' },
        { nom: 'Transact-SQL', image: 'devicon-microsoftsqlserver-plain', couleur: isLight ? 'text-black' : 'text-white' },
        { nom: 'MySQL', image: 'devicon-mysql-original', couleur: 'text-blue-600' },
        { nom: 'SQL Server', image: 'devicon-microsoftsqlserver-plain', couleur: isLight ? 'text-black' : 'text-white' },
        { nom: 'MariaDB', image: 'devicon-mariadb-plain', couleur: 'text-teal-800' }, { nom: 'DBeaver', image: 'devicon-dbeaver-plain', couleur: 'text-yellow-800' }
      ]
    },
    {
      titre: 'Frameworks & ORM',
      techs: [
        { nom: 'Spring Boot', image: 'devicon-spring-plain', couleur: 'text-green-600' },
        { nom: 'Spring Security', image: 'devicon-spring-plain', couleur: 'text-green-700' },
        { nom: 'Symfony', image: 'devicon-symfony-original', couleur: isLight ? 'text-black' : 'text-white' },
        { nom: 'Express.js', image: 'devicon-express-original', couleur: isLight ? 'text-black' : 'text-white' },
        { nom: 'Angular', image: 'devicon-angular-plain', couleur: 'text-red-600' },
        { nom: 'Flutter', image: 'devicon-flutter-plain', couleur: 'text-sky-400' },

        { nom: 'Hibernate', image: 'devicon-hibernate-plain', couleur: 'text-yellow-700' },
        { nom: 'Doctrine', image: 'devicon-doctrine-plain', couleur: 'text-orange-600' }
      ]
    },
    {
      titre: 'DevOps & Conteneurisation',
      techs: [
        { nom: 'Docker', image: 'devicon-docker-plain', couleur: 'text-blue-500' },
        { nom: 'Kubernetes', image: 'devicon-kubernetes-plain', couleur: 'text-blue-600' }
      ]
    }
  ];


  return (
    <section
      id="Apropos"
      ref={sectionRef}
      className={`w-11/12 sm:w-9/12 md:w-[65%] mx-auto space-y-12 sm:space-y-16 scroll-mt-28 md:scroll-mt-12 ${textPrimary}`}
    >
      {/* Titre principale */}
      <motion.h2
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className={`titre font-bold text-3xl md:text-4xl text-center sm:text-left`}
      >
        À propos de moi
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Mon parcours */}
        <motion.article
          variants={isMobile ? {} : sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex-1 space-y-6 sm:space-y-8"
        >
          <motion.h3 variants={sectionVariants} className="titre text-2xl md:text-3xl font-semibold text-center sm:text-left">
            Mon parcours
          </motion.h3>

          <div className={`flex-1 space-y-4 sm:space-y-6 text-sm sm:text-lg leading-relaxed text-justify p-6 sm:p-8 rounded-2xl shadow-xl ${bgCard}`}>
            <p>
              Après avoir obtenu mon diplôme de <span className={`${textContrast} font-bold`}>Développeur Web et Web Mobile</span>, j'ai décidé de poursuivre sur la formation de <span className={`${textContrast} font-bold`}>Concepteur Développeur d'Application (Bac+3)</span>. Grâce à ces formations et à mes projets personnels, j'ai acquis de solides connaissances en développement full stack et en conception d'applications.
            </p>
            <p>
              En parallèle de ma formation et de ma recherche de <span className={`${textContrast} font-bold`}>stage</span> et <span className={`${textContrast} font-bold`}>d'alternance</span>, je continue de me former et de pratiquer de nouvelles technologies telles que <span className={`${textContrast} font-bold`}>React</span> et <span className={`${textContrast} font-bold`}>Node.js</span>, en construisant des projets concrets pour approfondir mes compétences.
            </p>

            <p className='italic'>
              Je ne me limite pas à un langage ou un framework. J’apprends vite, je m’adapte, et je m’implique à fond dans ce que je fais.
            </p>

            <div className="flex gap-4 mt-4 max-md:mt-8">
              <a
                href="#contact"
                className={`flex text-sm md:text-base items-center font-semibold px-4 py-2 rounded-xl border-2 cursor-pointer transition-all duration-150 ease-in-out active:shadow-none active:translate-x-[3px] active:translate-y-[3px] hover:scale-105 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] ${btnBg} ${btnBorder} ${btnText}`}
                style={{ boxShadow: `2px 2px 0 0 ${isLight ? '#1E160F' : '#EEEEEE'}` }}
              >
                <FaEnvelope className="w-5 h-5" />
                <span className="sm:hidden ml-2">Contact</span>
                <span className="hidden sm:inline ml-2">Me contacter</span>
              </a>

              <CustomButton
                rel="noopener noreferrer"
                target="_blank"
                icone={<FaFilePdf className="w-5 h-5" />}
                link="/MiossecJulienCV.pdf"
                nom="Voir le CV"
                bgColor={isLight ? 'bg-light-bouton-second' : 'bg-dark-bouton-second'}
                borderColor={btnBorder}
                textColor={btnText}
              />
            </div>
          </div>
        </motion.article>

        {/* Technologies */}
        <motion.aside
          variants={isMobile ? {} : sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex-1 space-y-6 sm:space-y-8"
        >
          <motion.h3 variants={sectionVariants} className="titre text-2xl md:text-3xl font-semibold text-center sm:text-left">
            Technologies que j’ai pratiquées
          </motion.h3>

          {categories.map((cat) => (
            <motion.div
              key={cat.titre}
              variants={isMobile ? {} : sectionVariants}
              className={`flex flex-col gap-4 sm:gap-6 p-4 rounded-2xl shadow-xl ${bgCard}`}
            >
              <h2 className="titre font-bold text-xl sm:text-2xl text-center">{cat.titre}</h2>
              <motion.div className="flex flex-wrap justify-center gap-2">
                {cat.techs.map((tech) => (
                  <motion.div key={tech.nom} variants={badgeVariant} whileHover={{ scale: 1.05 }}>
                    <BadgeTechnologie isLight={isLight} nom={tech.nom} image={tech.image} couleur={tech.couleur} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.aside>
      </div>
    </section>
  );
}

export default APropos;
