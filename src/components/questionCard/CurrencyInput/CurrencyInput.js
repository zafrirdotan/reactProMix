import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import NumberFormat from 'react-number-format';
import './CurrencyInput.scss';

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      autoComplete="off"
      type="tel"
      autoFocus={true}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      allowNegative={false}
      thousandSeparator
      prefix="  &#8362;  "
      allowEmptyFormatting={false}
    />
  );
}

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
          value={this.props.value}
          onChange={this.handleInputChange}
          onKeyUp={this.handleOnKeyUp}
          InputProps={{
            inputComponent: NumberFormatCustom,
          }}
        />
      </div>
    );
  }
}
