import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import BadgeTechnologie from '../shared/BadgeTechnologies';
import CustomButton from '../shared/CustomButton';
import { FaEnvelope, FaFilePdf } from 'react-icons/fa';

function APropos({ isLight }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  // Variants communs
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  const badgeVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } }
  };

  return (
    <section
      id="Apropos"
      ref={sectionRef}
      className={`w-11/12 sm:w-9/12 md:w-7/12 mx-auto space-y-12 sm:space-y-16 scroll-mt-28 md:scroll-mt-12 ${isLight ? 'bg-light text-light-primary' : 'text-dark-primary'
        }`}
    >
      {/* Titre principale */}
      <motion.h2
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className={`titre font-bold text-3xl md:text-4xl text-center sm:text-left ${isLight ? 'text-light-primary' : 'text-dark-primary'
          }`}
      >
        À propos de moi
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Mon parcours */}
        <motion.article
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex-1 space-y-6 sm:space-y-8"
        >
          <motion.h3
            variants={sectionVariants}
            className={`titre text-2xl md:text-3xl font-semibold text-center sm:text-left ${isLight ? 'text-light-primary' : 'text-dark-primary'
              }`}
          >
            Mon parcours
          </motion.h3>

          <div
            className={`flex-1 space-y-4 sm:space-y-6 text-sm sm:text-lg leading-relaxed text-justify p-6 sm:p-10 rounded-2xl shadow-xl ${isLight ? 'bg-light-composant' : 'bg-dark-composant text-dark-secondary'
              }`}
          >
            <p>
              J’ai suivi la formation de{' '}
              <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
                Développeur Web et Web Mobile
              </span>{' '}
              à l’{' '}
              <span className={`${isLight ? 'text-light-primary' : 'text-dark-primary'} font-bold`}>
                ENI de Nantes
              </span>
              , où j’ai acquis des bases solides en développement web que ce soit sur le back-end, front-end ou encore les bases de données.
            </p>
            <p>
              En parallèle de ma recherche d’entreprise, je continue de me former en autodidacte sur des technologies modernes telles que{' '}
              <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
                Node.js, Tailwind, Fastify
              </span>{' '}
              ou encore{' '}
              <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
                React
              </span>
              , en construisant des projets concrets et en approfondissant mes compétences au quotidien.
            </p>
            <p>
              Je ne me limite pas à un langage ou un framework. J’apprends vite, je m’adapte, et je m’implique à fond dans ce que je fais.
            </p>

            <div className="flex gap-4 mt-4 max-md:mt-8">
              <a
                href="#contact"
                className={`flex text-sm md:text-base items-center font-semibold px-4 py-2 rounded-xl border-2 cursor-pointer transition-all duration-150 ease-in-out active:shadow-none active:translate-x-[3px] active:translate-y-[3px] hover:scale-105 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] ${isLight ? 'bg-light-bouton border-light-bouton text-black' : 'bg-dark-bouton border-dark-bouton text-dark-primary'
                  }`}
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
                borderColor={isLight ? 'border-light-bouton' : 'border-dark-bouton'}
                textColor={isLight ? 'text-black' : 'text-dark-primary'}
              />
            </div>
          </div>
        </motion.article>

        {/* Technologies */}
        <motion.aside
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex-1 space-y-6 sm:space-y-8"
        >
          <motion.h3
            variants={sectionVariants}
            className="titre text-2xl md:text-3xl font-semibold text-center sm:text-left"
          >
            Technologies que j’ai pratiquées
          </motion.h3>

          {/* Liste de catégories */}
          {[
            {
              titre: 'Back-end',
              techs: [
                { nom: 'Java', image: 'devicon-java-plain', couleur: 'text-blue-500' },
                { nom: 'PHP', image: 'devicon-php-plain', couleur: 'text-blue-500' },
                { nom: 'Node.js', image: 'devicon-nodejs-plain-wordmark', couleur: 'text-green-500' }
              ]
            },
            {
              titre: 'Front-end',
              techs: [
                { nom: 'HTML', image: 'devicon-html5-plain', couleur: 'text-orange-600' },
                { nom: 'CSS', image: 'devicon-css3-plain', couleur: 'text-blue-500' },
                { nom: 'JavaScript', image: 'devicon-javascript-plain', couleur: 'text-yellow-500' },
                { nom: 'React', image: 'devicon-react-original-wordmark', couleur: 'text-teal-500' }
              ]
            },
            {
              titre: 'Base de données',
              techs: [
                { nom: 'SQL Server', image: 'devicon-microsoftsqlserver-plain', couleur: isLight ? 'text-black' : 'text-white' },
                { nom: 'MySQL', image: 'devicon-mysql-original', couleur: 'text-blue-500' },
                { nom: 'MariaDB', image: 'devicon-mariadb-plain', couleur: 'text-teal-800' },
                { nom: 'DBeaver', image: 'devicon-dbeaver-plain', couleur: 'text-yellow-800' }
              ]
            },
            {
              titre: 'Frameworks',
              techs: [
                { nom: 'SpringBoots', image: 'devicon-spring-original', couleur: 'text-green-500' },
                { nom: 'Symfony', image: 'devicon-symfony-original', couleur: isLight ? 'text-black' : 'text-white' },
                { nom: 'Fastify', image: 'devicon-fastify-plain', couleur: isLight ? 'text-black' : 'text-white' },
                { nom: 'Angular', image: 'devicon-angular-plain', couleur: 'text-red-600' },
                { nom: 'TailwindCSS', image: 'devicon-tailwindcss-original', couleur: 'text-teal-400' },
                { nom: 'Bootstrap', image: 'devicon-bootstrap-plain', couleur: 'text-purple-500' }
              ]
            }
          ].map((cat) => (
            <motion.div
              key={cat.titre}
              variants={sectionVariants}
              className={`flex flex-col gap-4 sm:gap-6 p-4 rounded-2xl shadow-xl ${isLight ? 'bg-light-composant' : 'bg-dark-composant'
                }`}
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
