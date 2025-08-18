import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { FaGithub, FaArrowLeft } from "react-icons/fa";
import "yet-another-react-lightbox/styles.css";

import 'swiper/css';
import 'swiper/css/pagination';
import "yet-another-react-lightbox/styles.css";

import { motion } from 'framer-motion';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';

const containerVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.07, // passe de 0.2 à 0.07 = animations plus rapprochées
      when: "beforeChildren",
      duration: 0.4, // raccourci la durée globale
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: { opacity: 0, y: -30, transition: { duration: 0.2 } },
};

const childVariants = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }, // raccourci à 0.3
  },
  exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2 } },
};


function ProjetPrésentation({
  github,
  isLight,
  titre,
  description,
  images,
  technologies,
  logoTechnologies,
  couleursLogoTechnologies,
}) {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <motion.section
      className={`w-full md:w-10/12 lg:w-7/12 max-w-screen-xl mt-32 
              flex flex-col items-center space-y-8 md:space-y-12 px-4 scroll-mt-12
              ${isLight ? 'bg-light text-light-primary' : 'bg-zinc-900 text-dark-primary'}`}
      id="Presentation"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Header section */}
      <div className="w-full flex flex-col space-y-6  pb-8 md:pb-10">
        <motion.div variants={childVariants} className="flex flex-wrap gap-3 md:gap-4">
          <motion.button
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 text-sm md:text-base font-semibold px-3 md:px-4 py-1.5 md:py-2 
                    rounded-xl border-2 cursor-pointer transition-transform duration-100 
                    active:shadow-none active:translate-x-[2px] active:translate-y-[2px]
                    ${isLight ? 'bg-light-bouton border-black text-black' : 'bg-dark-bouton text-dark-primary border-dark-bouton'}`}
            style={{
              boxShadow: `2px 2px 0 0 ${isLight ? '#000000' : '#EEEEEE'}`,
            }}
          >
            <span className="flex gap-1 items-center">
              <FaArrowLeft size={18} className="md:w-5 md:h-5" />
              Retour
            </span>
          </motion.button>

          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 text-sm md:text-base font-semibold px-3 md:px-4 py-1.5 md:py-2 
                    rounded-xl border-2 cursor-pointer transition-transform duration-100 
                    active:shadow-none active:translate-x-[2px] active:translate-y-[2px]
                    ${isLight ? 'bg-white border-black text-black' : 'bg-dark-bouton-second text-dark-primary border-dark-bouton'}`}
            style={{
              boxShadow: `2px 2px 0 0 ${isLight ? '#2E2E2E' : '#CBD5E1'}`,
            }}
          >
            <FaGithub className="w-4 h-4 md:w-5 md:h-5" />
            <span>GitHub</span>
          </motion.a>
        </motion.div>

        <motion.h2
          variants={childVariants}
          className="titre text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-center md:text-left"
        >
          {titre}
        </motion.h2>

        {/* Badges techno */}
        <motion.div
          variants={childVariants}
          className="flex flex-wrap gap-2 md:gap-3 py-2"
        >
          {technologies.map((techno, index) => (
            <div
              key={techno}
              className={`inline-flex items-center gap-2 rounded-full border-2 py-1  px-3 
        text-sm sm:text-base
        ${isLight
                  ? 'border-light bg-light-composant text-light-primary focus:ring-light-accent'
                  : 'border-white/60 bg-dark-bouton-second text-white focus:ring-dark-accent'
                }
        transition-transform duration-200
        hover:scale-105 shadow-md
        cursor-default
        focus:outline-none focus:ring-2  
       `}
              tabIndex={0}
            >
              <i
                className={`${logoTechnologies[index]} ${couleursLogoTechnologies[index]} text-base md:text-lg`}
                aria-hidden="true"
              />
              <span>{techno}</span>
            </div>
          ))}
        </motion.div>

        {/* Description */}
        <motion.div
          variants={childVariants}
          className={`text-sm md:text-base text-justify leading-relaxed space-y-3 md:space-y-4
                  ${isLight ? 'text-light-primary' : 'text-dark-primary'} font-bold`}
        >
          {description.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </motion.div>
        <motion.div
          variants={childVariants}
          className={`h-[1px] w-full ${isLight ? 'bg-black/50' : 'bg-white/70'}`}
        ></motion.div>

      </div>

      {/* Swiper Section */}
      <motion.div variants={childVariants} className="relative w-full md:w-10/12">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          modules={[Pagination]}
          className={`rounded-2xl shadow-xl border 
                  ${isLight ? 'border-[#3F3A36]/50' : 'border-[#EEEEEE]'}`}
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`Capture ${idx + 1}`}
                loading='lazy'
                className="w-full h-auto object-cover aspect-video rounded-2xl cursor-pointer"
                onClick={() => {
                  setIndex(idx);
                  setOpen(true);
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className={`cursor-pointer custom-pagination mt-4 flex justify-center gap-2 
                  ${isLight ? 'pagination-light' : 'pagination-dark'}`}
        ></div>
      </motion.div>
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images.map((src) => ({ src }))}
          index={index}
          controller={{ closeOnBackdropClick: true }}
        />
      )}
    </motion.section>

  );
}

export default ProjetPrésentation;
