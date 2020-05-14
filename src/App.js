import React, { Component } from 'react';
import './App.css';
import pokemons from './components/data';

import Pokedex from './components/Pokedex'
import Botao from './components/Botao';

// class MyButton extends Component {
//   render() {
//     return (
//     <button onClick={() => {this.props.handleClick(this.props.label)}} className="button">{this.props.label}</button>
//     );
//   }
// }

class MyLabel extends Component {
  render() {
    return (
    <p>Cliquei no: {this.props.text}</p>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = 
      {
        labelText: 'Ola',
      }
  }

  setLabelText = (labelText) => {
    this.setState({ labelText });
  }


  render() {
    console.log(this.state);
    return (
      <div>
        <Pokedex pokemons={pokemons}/>
        
        {/* <MyLabel text={this.state.labelText}/>
        <Botao handleClick={this.setLabelText} text="Click 1"/>
        <Botao handleClick={this.setLabelText} text="Click 2"/>
        {this.state.labelText} */}

        {/* <MyButton handleClick={this.setLabelText} label="Botao 1"/>
        <MyButton handleClick={this.setLabelText} label="Botao 2"/>
        <MyButton handleClick={this.setLabelText} label="Botao 3"/> */}
      </div>
    );
  }
}

export default App;
