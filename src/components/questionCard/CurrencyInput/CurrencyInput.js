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
      thousandSeparator
      prefix="  &#8362;  "
      allowEmptyFormatting
    />
  );
}

export default class CurrencyInput extends Component {

  handleInputChange = event => {
    if(event.keyCode == 13){
      this.props.onselectChange(event.target.value, true);
    }else{
      this.props.onselectChange(event.target.value);
    }
  };

  render() {
    return (
      <div className="input-container">
        <TextField
          id="numberInput"
          root="numberInput"
          className="currency-input"
          
          // type="number"
          margin="normal"
          variant="outlined"
          // fullWidth="true"
          value={this.props.value}
          // onChange={this.handleInputChange}
          onKeyDown={this.handleInputChange}
          InputProps={{
            inputComponent: NumberFormatCustom,
          }}
        />
      </div>
    );
  }
}
