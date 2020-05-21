import React from 'react';
import './list.styles.css';
import { Card } from '../card/card.component';

export const List = (props) => (
    <div className='list'>
    {props.monsters.map(monster => ( 
        <Card key={monster.id} monster={monster}/> ))}
    </div>
); 