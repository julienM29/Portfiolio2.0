
import Header from '../layout/header';
import Footer from '../layout/Footer';
import { useTheme } from '../layout/ThemeContext';
import ProjetPrésentation from '../layout/projets/ProjetPrésentation';
import ProjetArticle from '../layout/projets/ProjetArticle';
import imageEventPast from '../../assets/evenementiel/evenement_passe.png';
import imageEventFutur from '../../assets/evenementiel/evenement_venir.png';
import imageCalendrier from '../../assets/evenementiel/calendrier.png';
import imageDiscussion from '../../assets/evenementiel/discussion.png';
import imageEvaluation from '../../assets/evenementiel/evaluation.png';
import imageParticipations from '../../assets/evenementiel/mes_participations.png';
import imageModifierProfil from '../../assets/evenementiel/modifier_profil.png';
import imageNotification from '../../assets/evenementiel/notification.png';
import imageEvent from '../../assets/evenementiel/page_evenement.png';
import imagePageParticipation from '../../assets/evenementiel/page_evenement_participation.png';
import imageProfil from '../../assets/evenementiel/profil.png';
import projetEvenementiel from '../data/dataProjetEvenementiel';
import { motion } from 'framer-motion';

function ProjetEvenementiel({ }) {
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
                titre="Site Evenementiel"
                description={[
                    `Après avoir suivi plusieurs cours en ligne sur Node.js, j'ai décidé de me lancer dans un projet pour mettre en pratique ce que j'avais appris.`
                ]}
                technologies={['Node.js', 'Bootstrap', 'MySQL']}
                logoTechnologies={['devicon-nodejs-plain-wordmark', 'devicon-bootstrap-plain', 'devicon-mysql-original']}
                couleursLogoTechnologies={['text-green-600', 'text-purple-500', 'text-blue-500']}
                images={
                    [imageEventPast,
                        imageEventFutur,
                        imageCalendrier,
                        imageDiscussion,
                        imageEvaluation,
                        imageParticipations,
                        imageProfil,
                        imageModifierProfil,
                        imageNotification,
                        imageEvent,
                        imagePageParticipation,
                    ]}
                github="https://github.com/julienM29/mon-projet"
            />
            <ProjetArticle isLight={isLight} projet={projetEvenementiel(isLight)} />
            <Footer isLight={isLight} />
        </motion.div>

    )
}

export default ProjetEvenementiel