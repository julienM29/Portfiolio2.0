import React from 'react';
import { Link } from 'react-router-dom';

const colorMap = {
  'text-black': '#000000',
  'text-white': '#ffffff',
  'text-light-accent': '#F5B769',
  'text-gray-900': '#111827',
  'text-light-primary': '#2E2E2E',
  'text-dark-primary': '#EEEEEE',
  'border-light-bouton' : '#1E160F',
  'border-dark-composant': '#3F4A51',
  'border-dark-bouton': '#EEEEEE',
  'bg-dark-text-primary': '#EEEEEE',
  'border-gray-500': '#6B7280',
};

const CustomButton = ({ icone, link, rel ,target, nom, bgColor, borderColor, textColor }) => {
  const shadowColor = colorMap[borderColor];

  return (
    <Link
  target={target || ''}
  rel={rel || ''}
  to={link || '#'}
  className={`
    flex gap-1.5 md:gap-2 items-center font-semibold 
    text-sm md:text-base
    px-3 py-2 md:px-4 md:py-2.5 
    rounded-xl border-2 cursor-pointer
    transition-all duration-150 ease-in-out
    active:shadow-none active:translate-x-[3px] active:translate-y-[3px]
    hover:scale-105 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]
    ${bgColor} ${borderColor} ${textColor}
  `}
  style={{
    boxShadow: `2px 2px 0 0 ${shadowColor}`,
  }}
>
  {icone && React.cloneElement(icone, { className: 'w-4 h-4 md:w-5 md:h-5' })}
  {nom}
</Link>

  );
};

export default CustomButton;
