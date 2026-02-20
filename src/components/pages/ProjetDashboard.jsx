
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { useTheme } from '../layout/ThemeContext';
import ProjetPrésentation from '../layout/projets/ProjetPrésentation';
import ProjetArticle from '../layout/projets/ProjetArticle';

import dashboardAccueil from '../../assets/dashboard/dashboardAccueilDark.webp';
import dashboardAccueilLight from '../../assets/dashboard/dashboardAccueilLight.webp';
import dashboardAjoutProduit from '../../assets/dashboard/dashboardAjoutProduit.webp';
import dashboardMessagerie from '../../assets/dashboard/dashboardMessagerie.webp';
import dashboardNotifications from '../../assets/dashboard/dashboardNotifications.webp';
import dashboardProfil from '../../assets/dashboard/dashboardProfil.webp';
import dashboardStatistiques from '../../assets/dashboard/dashboardStatistiques.webp';
import { motion } from 'framer-motion';
import projetDashboard from '../data/dataProjetDashboard';

function ProjetDashboard({ }) {
    const { isLight, setIsLight } = useTheme();

    return (
        <motion.div
            key="kerisnel"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col space-y-12 h-full  items-center`}>
            <Header isLight={isLight} setIsLight={() => setIsLight(!isLight)} />
            <ProjetPrésentation
                isLight={isLight}
                titre="Dashboard admin"
                description={[
                    `Ce projet fait suite à celui du site e-commerce afin d'avoir un back office "professionnel" et de pouvoir apprendre et mettre en pratique Docker et Kubernetes. Le projet est en cours de développements les images / fonctionnalités peuvent changer.`
                ]}
                technologies={['Node.js','React', 'Tailwind', 'MySQL']}
                logoTechnologies={['devicon-nodejs-plain-wordmark', 'devicon-react-original', 'devicon-tailwindcss-original', 'devicon-mysql-original']}
                couleursLogoTechnologies={['text-green-600', 'text-purple-500', 'text-blue-500']}
                images={
                    [dashboardAccueil,
                        dashboardStatistiques,
                        dashboardAccueilLight,
                        dashboardAjoutProduit,
                        dashboardMessagerie,
                        dashboardNotifications,
                        dashboardProfil
                    ]}
                github="https://github.com/julienM29/mon-projet"
            />
            <ProjetArticle isLight={isLight} projet={projetDashboard(isLight)} />
            <Footer isLight={isLight} />
        </motion.div>

    )
}

export default ProjetDashboard