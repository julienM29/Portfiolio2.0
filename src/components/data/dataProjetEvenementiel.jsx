import { MdOutlineInfo, MdOutlineExplore, MdOutlineShoppingBasket, MdTune, MdSecurity } from 'react-icons/md';
import { FiSearch, FiShoppingCart, FiFilter, FiUser } from 'react-icons/fi';
const projetEvenementiel = (isLight) => ({
    contexte: (
        <>
            <p>
                Ce projet a été réalisé dans une démarche d’apprentissage concret du développement web fullstack, à la suite de formations sur
                <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'
                    } font-bold`}
                > React</span>. Il s’agit d’un site e-commerce dédié à la vente de plantes, pensé pour offrir une expérience fluide et intuitive à l’utilisateur.
            </p>
            <p>
                Le projet couvre toutes les étapes clés d’un site e-commerce : navigation produits, création de compte, interactions avec un panier, gestion d’adresses, et finalisation de commande — tout en s’appuyant sur des
                <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'
                    } font-bold`}
                > API </span>pour enrichir l’expérience (géocodage, filtres dynamiques).
            </p>

            <p>
                Côté technique, l’application repose sur :
                <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'
                    } font-bold`}
                > React </span>  pour le frontend,
                <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'
                    } font-bold`}
                > Node.js </span> avec Fastify pour l’API backend, et
                <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'
                    } font-bold`}
                > MySQL </span> pour la base de données. Les échanges client/serveur sont assurés via une architecture REST.
            </p>
        </>
    ),
    stack: {
        stackFrontend: [
            { nom: 'React', image: 'devicon-react-original', couleur: 'text-[#61DBFB]' },
            { nom: 'Redux', image: 'devicon-redux-original', couleur: 'text-[#764ABC]' },
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
    titre: "Présentation produit",
    icone: MdOutlineInfo,
    contenu: (
      <>
        <p>
          Les produits sont affichés dans un 
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {" "}carrousel interactif{" "}
          </span>
          avec deux images (la deuxième en survol). Un 
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {" "}badge{" "}
          </span>
          indique les promotions.
        </p>
        <p>
          Chaque fiche comporte un 
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {" "}bouton de mise en wishlist{" "}
          </span>,
          les informations principales (
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {" "}nom{" "}
          </span>,
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {" "}catégorie{" "}
          </span>,
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {" "}prix{" "}
          </span>,
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {" "}disponibilité{" "}
          </span>),
          et un 
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {" "}bouton d’ajout rapide au panier
          </span>.
        </p>
      </>
    ),
  },
  {
    titre: "Panier & expérience d’achat",
    icone: FiShoppingCart ,
    contenu: (
      <>
        <p>
          L’utilisateur peut consulter son 
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {" "}panier{" "}
          </span>
          à tout moment grâce à une 
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {" "}modale latérale{" "}
          </span>
          qui apparaît lorsqu'il clique sur l’icône panier. Les produits y sont listés avec leurs 
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {" "}noms{" "}
          </span>,
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {" "}prix{" "}
          </span>et
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {" "}quantité{" "}
          </span>.
        </p>
        <p>
          L’utilisateur peut 
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {" "}supprimer{" "}
          </span>
          ou modifier la quantité directement depuis la modale, ou accéder à la 
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {" "}page panier{" "}
          </span> pour ajouter une garantie, modifier ou valider la commande.
        </p>
        <p>
          Un 
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {" "}système de mise à jour en temps réel{" "}
          </span>
          via Redux permet de voir la modale se mettre à jour dès qu’un produit est ajouté.
        </p>
      </>
    ),
  },
  {
    titre: "Navigation & recherche",
    icone : MdOutlineExplore,
    contenu: (
      <>
        <p>
          Une 
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {" "}barre de recherche{" "}
          </span>
          dans le header permet de retrouver rapidement un produit. Les produits récemment consultés sont conservés via 
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {" "}cookies{" "}
          </span>.
        </p>
        <p>
          L’expérience est fluidifiée par des 
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {" "}animations GSAP{" "}
          </span>
          et l'utilisation de 
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {" "}Swiper JS{" "}
          </span>
          pour afficher les nouveautés ou les produits en promotion sur la page principale.
        </p>
      </>
    ),
  },
  {
    titre: "Filtres avancés & responsive",
    icone : FiFilter,
    contenu: (
      <>
        <p>
          Un 
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {" "}menu de filtres complet{" "}
          </span>
          permet de filtrer par 
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {" "}prix{" "}
          </span> (slider), 
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {" "}couleur{" "}
          </span>, 
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {" "}disponibilité{" "}
          </span>, etc.
        </p>
        <p>
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {" "}Redux{" "}
          </span> garantit la synchronisation du menu entre la page principale et les pages produits. En version mobile, des 
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {" "}bottom sheets{" "}
          </span> sont utilisées, tandis qu’en desktop on utilise des 
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {" "}modales{" "}
          </span>.
        </p>
      </>
    ),
  },
  {
    titre: "Espace utilisateur & sécurité",
    icone : FiUser,
    contenu: (
      <>
        <p>
          L'utilisateur peut modifier ses 
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {" "}informations personnelles{" "}
          </span> et 
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {" "}adresses de livraison{" "}
          </span>.
          Une API de géocodage (
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            Nominatim
          </span>
          ) permet la saisie automatique des adresses.
        </p>
        <p>
          La 
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {" "}connexion{" "}
          </span> est gérée via 
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {" "}JWT{" "}
          </span> et 
          <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>
            {" "}cookies{" "}
          </span> pour un accès sécurisé et persistant.
        </p>
      </>
    ),
  }
],

});

export default projetEvenementiel;