import { MdOutlineExplore } from 'react-icons/md';
import { FiMessageSquare, FiBell, FiCalendar, FiUser } from 'react-icons/fi';

const projetEvenementiel = (isLight) => ({
  contexte: (
    <>
      <p>
        Après quelques cours en ligne sur <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>Node.js</span>, 
        j’ai créé un projet pratique : un site événementiel complet.
      </p>
      <p>
        Le site intègre messagerie entre utilisateurs, notifications, gestion et évaluation des événements.
      </p>
      <p>
        J’ai utilisé plusieurs bibliothèques pour améliorer l’expérience utilisateur : calendrier FullCalendar, selects multiples avec recherche via Select2, et affichage des participations via DataTable.
      </p>
      <p>
        L’API OpenStreetMap est utilisée pour la localisation précise des lieux d’événements.
      </p>
    </>
  ),

  stack: {
    stackFrontend: [
      { nom: 'JavaScript', image: 'devicon-javascript-plain', couleur: 'text-[#F7DF1E]' },
      { nom: 'Bootstrap', image: 'devicon-bootstrap-plain', couleur: 'text-purple-500' },
      { nom: 'HTML5', image: 'devicon-html5-plain', couleur: 'text-[#E34F26]' },
      { nom: 'CSS3', image: 'devicon-css3-plain', couleur: 'text-[#1572B6]' },
    ],
    stackBackend: [
      { nom: 'Node.js', image: 'devicon-nodejs-plain', couleur: 'text-[#339933]' },
      { nom: 'Fastify', image: 'devicon-fastify-plain', couleur: 'text-[#764ABC]' },
    ],
    stackDatabase: [
      { nom: 'MySQL', image: 'devicon-mysql-original', couleur: 'text-blue-400' },
    ],
  },

  fonctionnalites: [
    {
  titre: "Recherche d'événements",
  icone: MdOutlineExplore,  
  contenu: (
    <>
      <p>
        Les utilisateurs peuvent rechercher des événements par 
        <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}> mots-clés </span> 
        liés à l’événement (sport, culture, concert...), 
        par <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>nom d’événement</span> et/ou 
        <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}> lieu</span>.
      </p>
      <p>
        Un <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>toggle</span> permet de filtrer les événements 
        <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}> passés ou à venir</span>.
      </p>
      <p>
        Les résultats s’affichent sous forme de 
        <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}> fiches </span> 
        contenant : <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>logo</span>, 
        <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}> dates</span>, 
        <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}> localisation</span>, et un 
        <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}> bouton </span> 
        pour accéder à la page de détail de l’événement.
      </p>
    </>
  ),
},
    {
  titre: "Messagerie interne",
  icone: FiMessageSquare,
  contenu: (
    <>
      <p>
        Les utilisateurs peuvent s’envoyer des 
        <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}> messages privés </span> 
        via un système de discussion, idéal pour organiser un 
        <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}> co-voiturage </span> ou coordonner les participants d’un événement.
      </p>
      <p>
        Le header indique la réception de 
        <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}> nouveaux messages </span> 
        non lus via le logo de messagerie.
      </p>
    </>
  ),
},
{
  titre: "Notifications",
  icone: FiBell,
  contenu: (
    <>
      <p>
        Alertes pour les 
        <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}> nouveaux messages </span>, 
        <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}> invitations </span> et 
        <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}> évaluations </span> 
        des participants aux événements.
      </p>
    </>
  ),
},
{
  titre: "Gestion des événements",
  icone: FiCalendar,
  contenu: (
    <>
      <p>
        <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}> Création </span>,
        <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}> modification </span>,
        <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}> activation </span>/<span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}> suppression </span> et

        <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}> évaluation </span> d'évènements.
      </p>
      <p>
        Visualisation dans un 
        <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}> calendrier interactif </span> 
        grâce à <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>FullCalendar</span> des évènements auxquels l'utilisateur participe.
      </p>
    </>
  ),
},
{
  titre: "Sélection & participation",
  icone: MdOutlineExplore,
  contenu: (
    <>
      <p>
        Inviter des utilisateur via la recherche intégrée de
        <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}> Select2 </span> 
        avec recherche intégrée depuis la page de l'évènement.
      </p>
      <p>
        Suivi des participations de l'utilisateur via une table créé avec
        <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}> DataTable </span>, 
        pour voir les événements auxquels l’utilisateur a participé et gérer ses évaluations et de pouvoir retourner sur la page de l'évènement.
      </p>
    </>
  ),
},
{
  titre: "Localisation des événements",
  icone: FiUser,
  contenu: (
    <>
      <p>
        Géolocalisation précise des lieux grâce à l’API 
        <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}> OpenStreetMap </span>.
      </p>
      <p>
        Permet à l’utilisateur de 
        <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}> visualiser </span> et 
        <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}> planifier </span> ses déplacements facilement.
      </p>
    </>
  ),
},

  ],
});

export default projetEvenementiel;
