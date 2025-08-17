import { MdOutlineInfo, MdOutlineExplore, MdOutlineShoppingBasket, MdTune, MdSecurity } from 'react-icons/md';
import { FiSearch, FiShoppingCart, FiFilter, FiUser } from 'react-icons/fi';
import { RiShieldUserLine } from 'react-icons/ri';
const projetECommerce = (isLight) => ({
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
                    <p >Sur la page d'accueil les produits sont affichés dans plusieurs <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'
                        } font-bold`}
                    > carrousels interactif </span>( nouveautés, promotions, meilleurs ventes...).</p>
                    <p>Chaque fiche comporte une première image du produit affiché en permanence et une deuxième qui apparait au survol de l'image, bouton de mise en <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'
                        } font-bold`}
                    > wishlist</span>, un badge indiquant la
                        <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'
                            } font-bold`}
                        > promotion</span>, les informations principales (nom, catégorie, prix, disponibilité), et un bouton d’
                        <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'
                            } font-bold`}
                        > ajout rapide</span> au panier.</p>

                </>
            ),
        },
        {
            titre: "Navigation & recherche",
            icone: FiSearch,
            contenu: (
                <>
                    <p>Une <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'
                        } font-bold`}
                    > barre de recherche</span> dans le header permet de retrouver rapidement un produit. Les produits récemment consultés sont conservés via
                        <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'
                            } font-bold`}
                        > cookies</span>. Sur chaque page l'utilisateur peut accéder au menu de filtres d'un produit pour effectuer une recherche.</p>
                    <p>L’expérience est fluidifiée par des <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'
                        } font-bold`}
                    > animations GSAP</span> et l'utilisation de carroussel via <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'
                        } font-bold`}
                    > Swiper JS</span> pour afficher les nouveautés ou les produits en promotion sur la page principale.</p>

                </>
            ),
        },
        {
            titre: " Panier & expérience d’achat",
            icone: FiShoppingCart ,
            contenu: (
                <>
                    <p>
                        L’utilisateur peut consulter son <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>panier</span> à tout moment grâce à une <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>modale latérale</span>, qui apparaît lorsqu’il clique sur l’icône du panier dans le header. Les produits y sont listés avec leur <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>nom</span>, <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>prix</span> et <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>quantité</span>.
                    </p>
                    <p>
                        L’utilisateur peut <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>modifier ou supprimer</span> un produit directement depuis la modale, ou accéder à sa fiche en cliquant sur son nom ou son image. Un bouton permet de rejoindre la page panier pour <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>ajouter une garantie</span>, <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>modifier la commande</span> ou <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>la valider</span>.
                    </p>
                    <p>
                        Le panier bénéficie d’un <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>système de mise à jour en temps réel</span> grâce à Redux, permettant à la modale latérale de se mettre automatiquement à jour lors de l’<span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'} font-bold`}>ajout rapide</span> d’un produit.
                    </p>
                </>
            ),
        },

        {
            titre: "Filtres avancés & responsive",
            icone : FiFilter,
            contenu: (
                <>
                    <p>Un <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'
                        } font-bold`}
                    > menu de filtres</span> complet permet de filtrer par prix (slider), couleur, disponibilité, etc. <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'
                        } font-bold`}
                    > Redux</span> garantit la synchronisation du menu de filtre de la page présentant tous les produits avec le menu de filtre accessible sur chaque page.</p>
                    <p>La version mobile  utilise des <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'
                        } font-bold`}
                    > bottom sheets</span> pour le panier ou les filtres tandis que la version desktop utilise des modales.</p>
                </>
            ),
        },
        {
            titre: " Espace utilisateur & sécurité",
            icone : FiUser,
            contenu: (
                <>

                    <p>L'utilisateur peut modifier ses infos et adresses de livraison. Une <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'
                        } font-bold`}
                    > API de géocodage</span> (Nominatim) permet d'avoir une liste d'adresses correspondantes à celle inscrite et permet de la sélectionner pour remplir automatiquement le <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'
                        } font-bold`}
                    > formulaire</span>.</p>
                    <p>La connexion est gérée avec <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'
                        } font-bold`}
                    > JWT</span> et <span className={`${isLight ? 'text-light-contrast' : 'text-dark-contrast'
                        } font-bold`}
                    >  cookies</span> pour un accès sécurisé et persistant au compte utilisateur.</p>

                </>
            ),
        },
    ],
});

export default projetECommerce;