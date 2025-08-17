import React, { useState, useEffect } from 'react';


const LienHeader = ({isLight, nom, href }) => {

    return (
        <a className={`titre text-xl font-semibold ${isLight ? 'text-neutral-700 hover:text-neutral-900' : 'text-neutral-100 hover:text-white'  }`}
            href={href}>
            {nom}
        </a>
    );
};

export default LienHeader;

