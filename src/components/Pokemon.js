import React from 'react';

export default class Pokemon extends React.Component {
  render() {
    const { id, name, type, averageWeight, image, moreInfo } = this.props.pokemon;
    return (
      <div className="pokemon-card">
        <h4>Nome: {name}</h4>
        <h5>Tipo: {type}</h5>
        <p>Peso médio: {averageWeight.value}</p>
        <p>{id}</p>
        <img src={image} alt={name}/>
        <a href={moreInfo} rel="noopener noreferrer" target="_blank">More Info</a>
      </div>
    );
  }
}