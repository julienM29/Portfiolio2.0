import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import ConteneurProjet from '../shared/ConteneurProjet';

import logoEvent from '../../assets/accueil.webp';
import logoPizzeria from '../../assets/accueil_PizzaOnLine.webp';
import logoKerisnel from '../../assets/e-commerce/site_kerisnel.webp';
import dashboard_540 from '../../assets/dashboard_540.png'; 
import kerisnel_540 from '../../assets/kerisnel_540.webp'; 
import evenement_540 from '../../assets/evenement_540.webp'; 
import pizzeria_540 from '../../assets/pizzeria_540.webp'; 
function Projets({ isLight }) {
  const projetsRef = useRef(null);
  const projetsInView = useInView(projetsRef, { once: true, margin: '-100px' });

  const textPrimary = isLight ? 'text-light-primary' : 'text-dark-primary';

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const projets = [
     {
      imageProjet: dashboard_540,
      nomProjet: 'Dashboard admin',
      listeTechnologies: ['Node.js','React', 'TailwindCSS', 'MySQL'],
      listeImageTechnologies: ['devicon-nodejs-plain-wordmark', 'devicon-react-original', 'devicon-tailwindcss-original', 'devicon-mysql-original'],
      listeCouleurTechnologies: ['text-green-600', 'text-teal-500', 'text-teal-400', 'text-blue-500'],
descriptionProjet: [
  "Dashboard admin pour site e-commerce : gestion des produits, commandes, messagerie, statistiques du site et notifications, avec React, Node.js et TailwindCSS."
],      lienProjet: '/projet-Dashboard'
    },
    {
      imageProjet: kerisnel_540,
      nomProjet: 'Site E-commerce',
      listeTechnologies: ['Node.js', 'React', 'TailwindCSS', 'MySQL'],
      listeImageTechnologies: ['devicon-nodejs-plain-wordmark', 'devicon-react-original', 'devicon-tailwindcss-original', 'devicon-mysql-original'],
      listeCouleurTechnologies: ['text-green-600', 'text-teal-500', 'text-teal-400', 'text-blue-500'],
      descriptionProjet: ['Premier vrai projet full stack en utilisant React : une appli e-commerce avec création de compte, panier, livraison géolocalisée et historique de commandes.'],
      lienProjet: '/projet-E-Commerce'
    },
    {
      imageProjet: evenement_540,
      nomProjet: 'Site web évènementiel',
      listeTechnologies: ['Node.js', 'Bootstrap', 'MySQL'],
      listeImageTechnologies: ['devicon-nodejs-plain-wordmark', 'devicon-bootstrap-plain', 'devicon-mysql-original'],
      listeCouleurTechnologies: ['text-green-600', 'text-purple-500', 'text-blue-500'],
      descriptionProjet: ['Premier projet full stack en utilisant Node.js : Gestion d\'évènements, système de messagerie, de participation / évaluations d\'évènements et notifications entre utilisateurs.'],
      lienProjet: '/projet-Evenementiel'
    },
    {
      imageProjet: pizzeria_540,
      nomProjet: 'Site web pizzéria',
      listeTechnologies: ['PHP', 'Symfony', 'TailwindCSS', 'MySQL'],
      listeImageTechnologies: ['devicon-php-plain', 'devicon-symfony-original', 'devicon-tailwindcss-original', 'devicon-mysql-original'],
      listeCouleurTechnologies: ['text-blue-500', 'text-black', 'text-teal-400', 'text-blue-500'],
      descriptionProjet: ['Projet initié pendant mon stage de fin de formation : créer un site fonctionnel en 2 semaines. J\'ai continué le site après ma formation pour en faire une synthèse de ce que j\'avais appris.'],
      lienProjet: '/projet-Pizzeria'
    }
  ];

  return (
    <motion.div
      ref={projetsRef}
      initial="hidden"
      animate={projetsInView ? 'visible' : 'hidden'}
      variants={sectionVariants}
      className="w-[90%] sm:w-4/5 md:w-[65%] space-y-8 sm:space-y-10 scroll-mt-28 md:scroll-mt-12"
      id="projets"
    >
      <motion.h2
        variants={sectionVariants}
        className={`titre font-bold text-3xl md:text-4xl text-center md:text-left ${textPrimary}`}
      >
        Mes projets
      </motion.h2>

      {projets.map(projet => (
          <ConteneurProjet key={projet.nomProjet} isLight={isLight} {...projet} />
      ))}
    </motion.div>
  );
}

export default Projets;
