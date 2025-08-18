import { data } from 'react-router-dom'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.05,
    },
  },
}

const childVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

function Contact({ isLight }) {
  const contactRef = useRef(null)
  const contactInView = useInView(contactRef, { once: true, margin: '-100px' })
  const [emailError, setEmailError] = useState('');

  const submitMailForm = async (dataFormMail) => {
    console.log('test', dataFormMail)
    const response = await fetch('https://formspree.io/f/xyzgrknz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataFormMail),
    });
    if (response.ok) {

      toast.success(
        <p className={`titre  text-light-primary `}>Email envoyé avec succès !</p>
        ,
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );

    } else {
      toast.error(
        <p className={`titre  text-light-primary `}>Erreur lors de l'envoi du mail !</p>
        ,
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );

    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      nom: e.target.nom.value,
      prenom: e.target.prenom.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i; // i pour insensible à la casse
    if (!emailPattern.test(formData.email)) {
      setEmailError('Veuillez entrer un email valide (ex: nom@exemple.com)');
      return;
    } else {
      setEmailError('');
    }

    submitMailForm(formData);
    e.target.reset();
  };

  return (
    <motion.div
      ref={contactRef}
      initial="hidden"
      animate={contactInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      id="contact"
      className={`w-11/12 sm:w-9/12 md:w-7/12 mx-auto   flex flex-col rounded-2xl space-y-6 md:space-y-10 scroll-mt-28 md:scroll-mt-12 ${isLight ? 'text-light-primary' : 'text-dark-primary'
        }`}
    >
      <ToastContainer />
      <motion.h2
        variants={childVariants}
        className={`titre font-bold text-3xl md:text-4xl text-center sm:text-left ${isLight ? 'text-light-primary' : 'text-dark-primary'
          }`}
      >
        Contact
      </motion.h2>

      <motion.div variants={childVariants} className="flex justify-center w-full">
        <motion.form
          onSubmit={handleSubmit}
          method="POST"
          variants={containerVariants}
          className={`w-full md:w-3/4 rounded-3xl p-6 md:p-10 flex flex-col space-y-7 shadow-xl ${isLight ? 'bg-light-composant' : 'bg-dark-composant text-dark-primary'
            }`}
        >
          {/* Prénom / Nom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={childVariants}>
              <label htmlFor="first_name" className="block text-base font-medium mb-2">
                Prénom*
              </label>
              <Input
                id="prenom"
                name="prenom"
                type="text"
                placeholder="Prénom"
                required
                className={`rounded-xl p-4 text-base md:text-base font-medium border shadow-sm focus:outline-none focus:ring-2 ${isLight
                  ? 'bg-white text-gray-900 border-light focus:ring-light-accent'
                  : 'bg-dark-text-primary text-black border-dark-composant focus:ring-dark-accent'
                  }`}
              />
            </motion.div>

            <motion.div variants={childVariants}>
              <label htmlFor="last_name" className="block text-base font-medium mb-2">
                Nom*
              </label>
              <Input
                id="nom"
                name="nom"
                type="text"
                placeholder="Nom"
                required
                className={`rounded-xl p-4 text-base md:text-base font-medium border shadow-sm focus:outline-none focus:ring-2 ${isLight
                  ? 'bg-white text-gray-900 border-light focus:ring-light-accent'
                  : 'bg-dark-text-primary text-black border-dark-composant focus:ring-dark-accent'
                  }`}
              />
            </motion.div>
          </div>

          {/* Email */}
          <motion.div variants={childVariants}>
            <label htmlFor="email" className="block text-base font-medium mb-2">
              Email*
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="nom@exemple.com"
              required
              className={`rounded-xl p-4 text-base md:text-base font-medium border shadow-sm w-full focus:outline-none focus:ring-2 ${isLight
                ? 'bg-white text-gray-900 border-light focus:ring-light-accent'
                : 'bg-dark-text-primary text-black border-dark-composant focus:ring-dark-accent'
                }`}
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}

          </motion.div>

          {/* Message */}
          <motion.div variants={childVariants}>
            <label htmlFor="message" className="block text-base font-medium mb-2">
              Message*
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Message..."
              required
              rows={6}
              className={`rounded-xl p-4 h-64 md:h-42 text-base md:text-base font-medium resize-none border shadow-sm focus:outline-none focus:ring-2 ${isLight
                ? 'bg-white text-gray-900 border-light focus:ring-light-accent'
                : 'bg-dark-text-primary text-black border-dark-composant focus:ring-dark-accent'
                }`}
            />
          </motion.div>

          {/* Bouton Envoyer */}
          <motion.div variants={childVariants} className="w-full flex justify-center">
            <button
              type="submit"
              aria-label="Envoyer le message via le formulaire de contact"
              className={`hover:scale-[1.02] font-semibold px-4 py-1.5 md:px-6 md:py-3 rounded-xl border-2 cursor-pointer transition-transform duration-100 active:shadow-none active:translate-x-[3px] active:translate-y-[3px] ${isLight
                ? 'bg-light-bouton border-black text-black'
                : 'bg-dark-bouton border-dark-bouton text-dark-primary'
                }`}
              style={{
                boxShadow: `2px 2px 0 0 ${isLight ? '#000000' : '#EEEEEE'}`,
              }}
            >
              Envoyer le message
            </button>
          </motion.div>
        </motion.form>
      </motion.div>
    </motion.div>
  )
}

export default Contact
