
import Header from '../layout/header';
import Footer from '../layout/Footer';
import { useTheme } from '../layout/ThemeContext';
import ProjetPrésentation from '../layout/projets/ProjetPrésentation';
import ProjetArticle from '../layout/projets/ProjetArticle';
import imageHome from '../../assets/pizzeria/home.webp';
import imageModal from '../../assets/pizzeria/modal_panier.webp';
import imagePanier from '../../assets/pizzeria/panier.webp';
import imageGestionMenu from '../../assets/pizzeria/menu_gestion.webp';
import imageAjoutIngredient from '../../assets/pizzeria/ajout_ingredient.webp';
import imageAjoutProduit from '../../assets/pizzeria/ajout_produit.webp';
import imageModifierProduit1 from '../../assets/pizzeria/modifier_produit1.webp';
import imageModifierProduit2 from '../../assets/pizzeria/modifier_produit2.webp';
import imageGestionStock from '../../assets/pizzeria/gestion_stock.webp';
import imageGestionUser1 from '../../assets/pizzeria/gestion_user1.webp';
import imageGestionUser2 from '../../assets/pizzeria/gestion_user2.webp';
import imageGestionUser3 from '../../assets/pizzeria/gestion_user3.webp';
import imageMessagerie from '../../assets/pizzeria/messagerie.webp';
import imageLivraisonClient from '../../assets/pizzeria/livraison_client.webp';
import imageLivraisonPizzaiolo from '../../assets/pizzeria/livraison_pizzaiolo.webp';

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