import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';

class App extends Component 
{
  constructor()
  {
    super();

    this.state = 
    {
      monsters:
      [
        {
          id: "1",
          name: "Pikachu"
        },
        {
          id: "2",
          name: "Charizard"
        },
        {
          id: "3",
          name: "Raichu"
        }
      ]
    };
  }

  render() 
  {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div>
          {this.state.monsters.map(monster => ( <p key={monster.id}> {monster.name} </p> ))}
        </div>
      </div>
    );
  }

}

export default App;
