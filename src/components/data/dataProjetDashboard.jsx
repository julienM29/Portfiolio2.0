import { MdOutlineDashboard, MdOutlineShoppingBasket, MdOutlineNotifications, MdOutlinePerson, MdOutlineBarChart,MdOutlineBuild, MdConstruction, MdPending } from 'react-icons/md';
import { FiMessageSquare, FiSettings } from 'react-icons/fi';

const projetDashboard  = (isLight) => ({
  contexte: (
    <>
      <p>
        Ce projet est un <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>dashboard admin</span> pour un site e-commerce, conçu pour gérer efficacement les produits, les commandes et les utilisateurs.
      </p>
      <p>
        Il permet de suivre les notifications liées aux commandes, au stock et à la sécurité, de visualiser les statistiques clés du site, d’accéder aux conversations et messages des utilisateurs, et de gérer les paramètres du compte admin.
      </p>
      <p>
        Côté technique, l’application est développée avec <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>React</span> pour le frontend, <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>TailwindCSS</span> et <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>Material UI</span> pour le design, et <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>Chart.js</span> pour les graphiques et visualisations statistiques.
      </p>
    </>
  ),
  stack: {
    stackFrontend: [
      { nom: 'React', image: 'devicon-react-original', couleur: 'text-[#61DBFB]' },
      { nom: 'Material UI', image: 'devicon-materialui-plain', couleur: 'text-[#007FFF]' },
      { nom: 'TailwindCSS', image: 'devicon-tailwindcss-plain', couleur: 'text-[#06B6D4]' },
      { nom: 'JavaScript', image: 'devicon-javascript-plain', couleur: 'text-[#F7DF1E]' },
      { nom: 'HTML5', image: 'devicon-html5-plain', couleur: 'text-[#E34F26]' },
      { nom: 'CSS3', image: 'devicon-css3-plain', couleur: 'text-[#1572B6]' },
    ],
    stackBackend: [
            { nom: 'Node.js', image: 'devicon-nodejs-plain', couleur: 'text-[#339933]' },
            { nom: 'Fastify', image: 'devicon-fastify-plain', couleur: 'text-[#764ABC]' }, // pas dans devicon
        ],
        stackDatabase: [
            { nom: 'MySQL', image: 'devicon-mysql-original', couleur: 'text-blue-400' },
            { nom: 'DBeaver', image: 'devicon-dbeaver-plain', couleur: 'text-amber-700' },
        ],
  },
  fonctionnalites: [
    {
      titre: "Gestion des produits",
      icone: MdOutlineShoppingBasket,
      contenu: (
        <>
          <p>Ajout, modification et suppression des produits avec informations détaillées : images, prix, stock, catégories.</p>
          <p>Possibilité de filtrer et rechercher les produits rapidement pour une gestion efficace via <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>nom</span> ou produits <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>archivés</span>.</p>
        </>
      ),
    },
    {
      titre: "Gestion des commandes & utilisateurs",
      icone: MdOutlineDashboard,
      contenu: (
        <>
          <p>Visualisation des commandes<span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}> en cours</span>, <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>traitement</span> des commandes et <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>suivi</span> des statuts.</p>
          <p>Gestion des utilisateurs : création, modification et contrôle des accès.</p>
        </>
      ),
    },
    {
      titre: "Notifications",
      icone: MdOutlineNotifications,
      contenu: (
        <>
          <p>Page dédiée aux notifications liées aux <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>commandes</span>, au <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>stock</span> ou aux alertes de <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>sécurité</span>.</p>
          <p>Possibilité de marquer comme lues et de filtrer par type de notification.</p>
        </>
      ),
    },
    {
      titre: "Profil & messagerie",
      icone: MdOutlinePerson,
      contenu: (
        <>
          <p>Résumé des <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>informations</span> du profil administrateur,<span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>statistiques</span>  clés du site , les derniers <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>messages</span> non lus et possibilité de modifier ses paramètres.</p>
          <p>Onglet <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>messagerie</span> pour suivre les conversations avec les utilisateurs et répondre directement depuis le dashboard.</p>
        </>
      ),
    },
    {
      titre: "Statistiques",
      icone: MdOutlineBarChart,
      contenu: (
        <>
          <p>Tableaux et cartes pour visualiser le chiffre d'affaire, comparaison du nombre de commandes par rapport à l'année d'avant, taux de conversion, utilisateurs actifs...</p>
          <p>Graphiques décrivant les ventes par mois, la répartition des ventes via catégories de produits, ratio de commandes effectuées entre les anciens et nouveaux utilisateurs.</p>
          <p>Possibilité d’afficher les données globales ou filtrées par produit/catégorie sur des graphiques via <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>Chart.js</span>.</p>
        </>
      ),
    },
    {
      titre: "Paramètres",
      icone: FiSettings,
      contenu: (
        <>
          <p>Gestion des <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>préférences</span> du dashboard, options de <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>sécurité</span> et configuration générale pour l’administrateur.</p>
        </>
      ),
    },
    {
  titre: "Infrastructure & chantier",
  icone: MdConstruction, // tu peux remplacer par une icône adaptée
  contenu: (
    <>
      <p>Prochain travail à effectuer après le responsive de l'application, afin de connecter le dashboard à l'infrastructure complète du site e-commerce et à la base de données.</p>
    <p>Cela me permettra d'apprendre et de mettre en place <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>Docker</span> et <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>Kubernetes</span> pour faire cette connexion.</p>
    </>
  ),
}

  ],
});

export default projetDashboard ;
