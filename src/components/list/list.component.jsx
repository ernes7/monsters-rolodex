import React from 'react';
import './list.styles.css';

export const List = (props) => {
    return <div className='list'>
    {props.monsters.map(monster => ( 
        <p key={monster.id}> {monster.name} </p> ))}
    </div>;
}; 