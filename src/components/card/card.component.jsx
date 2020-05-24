import React from 'react';

import './card.styles.css';


export const Card = (props) => (
    <div className='card'>
        <img 
            alt='Pokemon'
            src={`https://pokeres.bastionbot.org/images/pokemon/${counter}.png`}
        />
        <h2>{props.monster.name}</h2>
    </div>
    
);

