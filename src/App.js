import React from 'react';
import './App.css';
import { Component } from 'react';

import { List } from './components/list/list.component';

class App extends Component 
{
  constructor()
  {
    super();

    this.state = 
    {
      monsters:[]
    };
  }

  componentDidMount()
  {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(pokemon => this.setState({ monsters: pokemon.results}))
    
  }


  render() 
  {
    return (
      <div className="App">
        <input type='search' />
        <List monsters={this.state.monsters}/>
  
      </div>
    );
  }

}

export default App;
