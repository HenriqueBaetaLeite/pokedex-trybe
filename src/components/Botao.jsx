import React from'react';
import { Component } from 'react';

export default class Botao extends Component {
  render() {
    console.log(this.props);
    return (
      <button className="button" onClick={() => {this.props.handleClick()}}>{this.props.text}</button>
    );
  }
}