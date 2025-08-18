import { useLocation, useNavigate } from 'react-router-dom';
import logoPortfolioLightMode from '../../assets/logo_LightMode.webp';
import logoPortfolioDarkMode from '../../assets/logo_DarkMode.webp';
import LienHeader from '../shared/LienHeader';
import { Sun, Moon } from 'lucide-react';
 
function Header({ isLight, setIsLight }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent flex items-center h-32 justify-center">
      <nav
        className={`w-11/12 md:w-md mx-auto flex items-center justify-between px-5 py-2 rounded-full shadow-sm border text-gray-500 backdrop-blur-3xl
        ${isLight
            ? 'bg-[#ffd09b] text-black border-neutral-700/20 shadow-amber-100/40'
            : 'bg-[#393E46] text-white border-amber-50/20 shadow-white/30'
          }`}
      >
        {/* Logo */}
        <button
          onClick={() => {
    if (isHome) {
      window.scrollTo({ top: 0}); // 👈 retour en haut
    } else {
      navigate('/');
    }
  }}
          className={`cursor-pointer text-lg font-semibold transition-transform duration-300 hover:scale-110 ${isLight
            ? 'text-neutral-600 hover:text-neutral-900'
            : 'text-neutral-300 hover:text-white'
            }`}

        >
          <img
            src={isLight ? logoPortfolioLightMode : logoPortfolioDarkMode}
            className="w-10"
            alt="logo"
          />
        </button>
        {isHome ? (
          <div className="flex justify-between w-4/6">
            <LienHeader isLight={isLight} nom={'Profil'} href={'#Apropos'} />
            <LienHeader isLight={isLight} nom={'Projets'} href={'#projets'} />
            <LienHeader isLight={isLight} nom={'Contact'} href={'#contact'} />
          </div>
        ) : (
          <div className="flex justify-around w-4/6">

            <LienHeader isLight={isLight} nom={'Présentation'} href={'#Presentation'} />
            <LienHeader isLight={isLight} nom={'Détails'} href={'#Details'} />
          </ div>
        )}

        {/* Bouton light/dark mode */}
        <button
          type="button"
          onClick={setIsLight}
          className={`transition-transform duration-200 hover:scale-110 hover:cursor-pointer border rounded-full p-2 ${isLight
            ? 'text-black border-neutral-700/60'
            : 'text-white border-white/90 '
            }`}
        >

          {isLight ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </nav>
    </header>
  );
}

export default Header;
