
import Header from '../layout/header';
import Footer from '../layout/Footer';
import { useTheme } from '../layout/ThemeContext';
import ProjetPrésentation from '../layout/projets/ProjetPrésentation';
import ProjetArticle from '../layout/projets/ProjetArticle';
import imageSearch from '../../assets/e-commerce/site_kerisnel.webp';
import imagePanier from '../../assets/e-commerce/panier.webp';
import imageSwiper from '../../assets/e-commerce/swiper.webp';
import imageAdresse from '../../assets/e-commerce/adresse.webp';
import imageHome from '../../assets/e-commerce/home.webp';
import imageCommande from '../../assets/e-commerce/commande.webp';
import imageCommande2 from '../../assets/e-commerce/commande_2.webp';
import imageModalPanier from '../../assets/e-commerce/modal_panier.webp';
import imageRecemmentVu from '../../assets/e-commerce/recemment_vu.webp';
import imageAdresseAll from '../../assets/e-commerce/adresseAll.webp';
import projetECommerce from '../data/dataProjetE-commerce';
import { motion } from 'framer-motion';

function ProjetKerisnel({ }) {
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
                titre="Site E-commerce"
                description={[
                    `Après avoir suivi plusieurs cours en ligne sur React, j'ai décidé de me lancer dans un projet pour mettre en pratique ce que j'avais appris.`
                ]}
                technologies={['Node.js', 'React', 'TailwindCSS', 'MySQL']}
                logoTechnologies={['devicon-nodejs-plain-wordmark', 'devicon-react-original', 'devicon-tailwindcss-original', 'devicon-mysql-original']}
                couleursLogoTechnologies={['text-green-600', 'text-teal-500', 'text-teal-400', 'text-blue-500']}
                images={[imageHome, imageSwiper, imageSearch, imageModalPanier, imagePanier, imageAdresseAll, imageAdresse, imageRecemmentVu, imageCommande, imageCommande2]}
                github="https://github.com/julienM29/Site_E-commerce_Plante"
            />
            <ProjetArticle isLight={isLight} projet={projetECommerce(isLight)} />

            <Footer isLight={isLight} />
        </motion.div>

    )
}

export default ProjetKerisnel