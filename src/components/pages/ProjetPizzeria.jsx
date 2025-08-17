
import Header from '../layout/header';
import Footer from '../layout/Footer';
import { useTheme } from '../layout/ThemeContext';
import ProjetPrésentation from '../layout/projets/ProjetPrésentation';
import ProjetArticle from '../layout/projets/ProjetArticle';
import imageHome from '../../assets/pizzeria/home.png';
import imageModal from '../../assets/pizzeria/modal_panier.png';
import imagePanier from '../../assets/pizzeria/panier.png';
import imageGestionMenu from '../../assets/pizzeria/menu_gestion.png';
import imageAjoutIngredient from '../../assets/pizzeria/ajout_ingredient.png';
import imageAjoutProduit from '../../assets/pizzeria/ajout_produit.png';
import imageModifierProduit1 from '../../assets/pizzeria/modifier_produit1.png';
import imageModifierProduit2 from '../../assets/pizzeria/modifier_produit2.png';
import imageGestionStock from '../../assets/pizzeria/gestion_stock.png';
import imageGestionUser1 from '../../assets/pizzeria/gestion_user1.png';
import imageGestionUser2 from '../../assets/pizzeria/gestion_user2.png';
import imageGestionUser3 from '../../assets/pizzeria/gestion_user3.png';
import imageMessagerie from '../../assets/pizzeria/messagerie.png';
import imageLivraisonClient from '../../assets/pizzeria/livraison_client.png';
import imageLivraisonPizzaiolo from '../../assets/pizzeria/livraison_pizzaiolo.png';

import { motion } from 'framer-motion';

import dataProjetPizzeria from '../data/dataProjetPizzeria';
function ProjetPizzeria({ }) {
    const { isLight, setIsLight } = useTheme();
    return (
        <motion.div
            key="kerisnel"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col space-y-12 h-full  items-center ${isLight ? 'bg-light' : 'bg-zinc-900'} `}>
            <Header isLight={isLight} setIsLight={() => setIsLight(!isLight)} />
            <ProjetPrésentation
                isLight={isLight}
                titre="Site web d'une pizzeria"
                description={[
                    `Après avoir suivi plusieurs cours en ligne sur React, j'ai décidé de me lancer dans un projet pour mettre en pratique ce que j'avais appris.`
                ]}
                technologies={['Node.js', 'React', 'TailwindCSS', 'MySQL']}
                logoTechnologies={['devicon-nodejs-plain-wordmark', 'devicon-react-original', 'devicon-tailwindcss-original', 'devicon-mysql-original']}
                couleursLogoTechnologies={['text-green-600', 'text-teal-500', 'text-teal-400', 'text-blue-500']}
                images={[imageHome, imageModal, imagePanier,
                    imageGestionMenu, imageAjoutIngredient, imageAjoutProduit,
                    imageModifierProduit1, imageModifierProduit2, imageGestionStock,
                    imageGestionUser1, imageGestionUser2, imageGestionUser3, imageMessagerie, imageLivraisonClient, imageLivraisonPizzaiolo
                ]}
                github="https://github.com/julienM29/Site_E-commerce_Plante"
            />
            <ProjetArticle isLight={isLight} projet={dataProjetPizzeria(isLight)} />

            <Footer isLight={isLight} />
        </motion.div>

    )
}

export default ProjetPizzeria