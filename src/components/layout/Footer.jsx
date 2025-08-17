import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import CustomButton from '../shared/CustomButton';
import { Link } from 'react-router-dom';

function Footer({ isLight }) {
  return (
    <div
  id="footer"
  className={`flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8 py-10 px-4
    ${isLight ? "text-light-primary" : "text-dark-primary"}`}
>
  <span className="text-sm sm:text-md font-medium tracking-wide text-center sm:text-left">
    © 2025 Julien Miossec – Tous droits réservés.
  </span>

  <div className="flex flex-wrap gap-3 sm:gap-4 items-center justify-center sm:justify-start">
    <Link
      to="https://www.linkedin.com/in/julien-miossec-a55869210/"
      target="_blank"
      rel="noopener noreferrer"
      className={`text-xs md:text-sm flex gap-2 items-center font-semibold px-4 py-2 rounded-3xl border-2 cursor-pointer 
      transition-transform duration-100 active:shadow-none active:translate-x-[3px] active:translate-y-[3px] 
      hover:scale-[1.02] ${isLight ? 'bg-light-bouton border-light-bouton text-black' : 'bg-dark-bouton text-dark-primary border-dark-bouton'}`}
      style={{
        boxShadow: `2px 2px 0 0 ${isLight ? '#1E160F' : '#EEEEEE'}`,
      }}
    >
      <FaLinkedin className="w-5 h-5" />
      LinkedIn
    </Link>

    <Link
      to="https://github.com/julienM29"
      target="_blank"
      rel="noopener noreferrer"
      className={`text-xs md:text-sm flex gap-2 items-center font-semibold px-4 py-2 rounded-3xl border-2 cursor-pointer 
      transition-transform duration-100 active:shadow-none active:translate-x-[3px] active:translate-y-[3px] 
      hover:scale-[1.02] ${isLight ? 'bg-light-bouton-second border-light-bouton text-black' : 'bg-dark-bouton-second text-dark-primary border-dark-bouton'}`}
      style={{
        boxShadow: `2px 2px 0 0 ${isLight ? '#1E160F' : '#EEEEEE'}`,
      }}
    >
      <FaGithub className="w-5 h-5" />
      GitHub
    </Link>
  </div>
</div>

  );
}

export default Footer;
