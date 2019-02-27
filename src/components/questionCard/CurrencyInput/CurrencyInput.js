import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './CurrencyInput.scss';
import CurrencyFormat from '../../../inputFormats/CurrencyFormat';

export default class CurrencyInput extends Component {
  handleInputChange = event => {
    this.props.onInputChange(+event.target.value || null);
  };

  handleOnKeyUp = event => {
    if (event.keyCode === 13) {
      this.props.submitInput();
    }
    if (this.props.onKeyUp) {
      this.props.onKeyUp();
    }
  };

  render() {
    return (
      <div className="input-container">
        <div className="label"> {this.props.label}</div>
        <TextField
          id="numberInput"
          margin="normal"
          variant="outlined"
          autoFocus={true}
          value={this.props.value}
          onChange={this.handleInputChange}
          onKeyUp={this.handleOnKeyUp}
          InputProps={{
            inputComponent: CurrencyFormat,
          }}
        />
      </div>
    );
  }
}
