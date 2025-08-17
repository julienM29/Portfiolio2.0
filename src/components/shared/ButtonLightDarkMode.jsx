import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';


const ButtonLightDarkMode = ({ isLight, setIsLight }) => {
 
    return (


        <button type="button"
            onClick={() => setIsLight(!isLight)}
            className={`transition-transform duration-300 hover:scale-110 hover:cursor-pointer border rounded-full p-2  ${isLight ? 'text-black' : 'text-white'  }`}>
            {isLight ? <Sun /> : <Moon />}
        </button>
    );
};

export default ButtonLightDarkMode;

