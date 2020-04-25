import React from 'react';
import Pokemon from './Pokemon';

export default class Pokedex extends React.Component {
  render() {
    
    return (
      <div className="pokemon-list">
        {this.props.pokemons.map((el) => <Pokemon key={el.id} pokemon={el} />)}        
      </div>
    );
  }
}
