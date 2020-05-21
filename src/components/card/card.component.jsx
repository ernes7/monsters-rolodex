import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    <div className='card'>
        <p>{props.monster.name}{props.monster.height}</p>
    </div>
    
);

