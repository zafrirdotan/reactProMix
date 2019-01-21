import React, { Component } from 'react';
import './TextInput.scss';

export default class TextInput extends Component {
  handleInputChange = event => {
    this.props.onselectChange(event.target.value);
  };
  render() {
    return (
      <div className="input-container">
        <input
          className="input"
          type="text"
          value={this.props.value}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}
