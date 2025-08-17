import { MdOutlineInfo,MdOutlineMyLocation, MdOutlineRestaurant , MdDeliveryDining , MdOutlineMail, MdSecurity } from 'react-icons/md';
import { FiSearch, FiShoppingCart,FiMessageSquare , FiFilter, FiUser } from 'react-icons/fi';
import { RiShieldUserLine } from 'react-icons/ri';

const dataProjetPizzeria = (isLight) => ({
    contexte: (
        <>
            <p>
                Lors de ma formation de <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'
                    } font-bold`}
                > Développeur Web et Web Mobile </span> , il était prévu que je fasse un stage de 8 semaines en entreprise.  À la suite d’un problème de date avec l’entreprise, je n’ai pu faire que 6 semaines de stage.
            </p>
            <p>
                J’ai donc demandé à l’école un <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'
                    } font-bold`}
                > sujet</span> afin de réaliser un projet sur les <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'
                    } font-bold`}
                > différentes compétences</span> que je n’ai pas vu pendant mon stage.
            </p>
            <p>L’un de mes formateurs de l’ENI m’a proposé un sujet portant sur la création d’un <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'
                } font-bold`}
            >   site web pour une pizzeria</span>. </p>
            <p>
                Pendant les 2 semaines l’objectif fût de <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'
                    } font-bold`}
                > maquetter</span> les différentes pages de l’application, de pouvoir <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'
                    } font-bold`}
                > gérer la carte</span> des pizzas, de pouvoir <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'
                    } font-bold`}
                > commander</span>, d’avoir un <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'
                    } font-bold`}
                > système d’authentification</span> et d’autorisation sur l’application.
            </p>
            <p>                Après ma formation, j’ai décidé de <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'
                } font-bold`}
            > continuer ce projet</span> en y mettant toutes les fonctionnalités que je voulais et en mettant en application tout ce que j’ai pu apprendre pendant ma formation.
            </p>
            <p>
                Côté technique, l’application repose sur :
                <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'
                    } font-bold`}
                > JavaScript </span>  pour le frontend,
                <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'
                    } font-bold`}
                > PHP  </span> sous Symfony pour le backend, et
                <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'
                    } font-bold`}
                > MySQL </span> pour la base de données.
            </p>
        </>
    ),
    stack: {
  stackFrontend: [
    { nom: 'JavaScript', image: 'devicon-javascript-plain', couleur: 'text-[#F7DF1E]' },
    { nom: 'TailwindCSS', image: 'devicon-tailwindcss-plain', couleur: 'text-[#06B6D4]' },
    ],
  stackBackend: [
    { nom: 'PHP', image: 'devicon-php-plain', couleur: 'text-[#777BB4]' },
    { nom: 'Symfony', image: 'devicon-symfony-original', couleur: 'text-black' },
   ],
  stackDatabase: [
    { nom: 'MySQL', image: 'devicon-mysql-original', couleur: 'text-blue-400' },
    { nom: 'DBeaver', image: 'devicon-dbeaver-plain', couleur: 'text-amber-700' }, // Pas officiel dans devicon non plus
  ],
},

    fonctionnalites: [
  {
    titre: "Catalogue & fiche produit",
    icone: MdOutlineInfo,
    contenu: (
      <>
        <p>
          La page principale affiche tous les produits sous forme de <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>cartes</span> contenant une image, un titre, un prix et deux actions : un lien <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>“En savoir plus”</span> menant à la page du produit, et un bouton <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>“Ajouter au panier”</span>.
        </p>
        <p>
          Ce bouton ouvre une <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>modale interactive</span> permettant de choisir la <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>quantité</span> et la <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>taille</span> du produit avant de l’ajouter au panier.
        </p>
        <p>
          Un <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>menu de filtres</span> permet de trier les produits par catégorie, prix, etc.
        </p>
      </>
    ),
  },
  {
    titre: "Panier interactif",
    icone: FiShoppingCart ,
    contenu: (
      <>
        <p>
          L’icône du <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>panier</span> dans le header devient <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>rouge</span> dès qu’il contient au moins un produit. Au survol, un <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>aperçu rapide</span> affiche la liste des produits avec leurs quantités et le prix total.
        </p>
        <p>
          Une page dédiée permet de voir tous les produits ajoutés, de <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>modifier la quantité</span>, de <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>supprimer un article</span>, ou de <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>valider la commande</span>.
        </p>
      </>
    ),
  },
  {
    titre: "Suivi de livraison client",
    icone:MdOutlineMyLocation,
    contenu: (
      <>
        <p>
          La page de livraison côté client intègre une carte interactive via <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>Leaflet</span>. Elle permet de voir en temps réel la <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>position du livreur</span> ainsi que l’<span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>adresse de livraison</span>.
        </p>
      </>
    ),
  },
  {
    titre: "  Espace utilisateur",
    icone:FiUser ,
    contenu: (
      <>
        <p>
          L'utilisateur peut <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>créer un compte</span>, <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>modifier ses informations</span> personnelles, et ajouter une <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>adresse de livraison</span> via une API de géocodage.
        </p>
      </>
    ),
  },
  {
    titre: "  Gestion employés & administrateurs",
    icone:MdSecurity ,
    contenu: (
      <>
        <p>
          Un <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>menu de gestion</span> accessible dans le header permet aux employés et gérants de gérer les <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>ingrédients</span>, les <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>produits</span>, les <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>utilisateurs</span> ainsi que les <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>commandes en cours</span>.
        </p>
      </>
    ),
  },
  {
    titre: "Messagerie client",
    icone:MdOutlineMail ,
    contenu: (
      <>
        <p>
          Un <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>système de messagerie</span> permet aux utilisateurs d’envoyer des messages à la pizzeria. Les employés peuvent <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>lire</span> et <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>valider</span> ces messages pour assurer un suivi client.
        </p>
      </>
    ),
  },
  {
    titre: "Préparation des commandes",
    icone:MdOutlineRestaurant ,
    contenu: (
      <>
        <p>
          Les pizzaiolos disposent d’une page listant les commandes triées par <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>heure</span>. Ils peuvent les valider une fois la <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>préparation terminée</span>.
        </p>
      </>
    ),
  },
  {
    titre: "Livraison – côté livreur",
    icone:MdDeliveryDining  ,
    contenu: (
      <>
        <p>
          Le livreur peut <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>prendre une commande</span>, qui s’ajoute à sa liste. Sur la page de livraison, il voit toutes les commandes qu’il doit livrer, triées par <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>distance</span> par rapport à la pizzéria.
        </p>
        <p>
          Une carte interactive avec <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>Leaflet</span> affiche le <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>trajet</span> avec les points d’arrêt. Le livreur peut cliquer sur l’icône du client ou sur la commande pour <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>valider la livraison</span>.
        </p>
      </>
    ),
  },
]

});

export default dataProjetPizzeria;