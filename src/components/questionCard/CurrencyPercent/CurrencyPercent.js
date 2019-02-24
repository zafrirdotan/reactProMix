import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import CurrencyInput from '../CurrencyInput/CurrencyInput';
import NumberFormat from 'react-number-format';

import './CurrencyPercent.scss';

export default class CurrencyPercent extends Component {
  state = {
    value: this.props.question.value || 100,
    percent: 0,
    baseValue: this.props.baseValue,
  };
  componentWillMount() {
    this.calculatePercent();
  }

  calculatePercent = () => {
    let percent = (this.state.value * 100) / this.state.baseValue;
    if (percent % 1 !== 0) {
      percent = percent.toFixed(2);
    }
    this.setState({
      percent,
    });
  };
  calculateValue = () => {
    let value = (this.state.baseValue * this.state.percent) / 100;
    if (value % 1 !== 0) {
      value = value.toFixed(2);
    }
    this.setState({
      value,
    });
  };

  handleInputChange = value => {
    this.setState({ value }, () => {
      this.calculatePercent();
      this.props.onInputChange(this.state.value);
    });
  };

  handlePercentInputChange = event => {
    this.setState({ percent: +event.target.value }, () => {
      this.calculateValue();
    });
  };

  handleSubmitInput = () => {
    this.props.submitInput();
  };

  handleOnKeyUp = event => {
    if (event.keyCode === 13) {
      this.handleSubmitInput();
    }
  };

  render() {
    return (
      <div className="currency-percent-box">
        <CurrencyInput
          onInputChange={this.handleInputChange}
          value={this.state.value}
          submitInput={this.handleSubmitInput}
          label="סכום משכנתא"
        />
        <div className="percent-box">
        <div className="label"> אחוז</div>
          <TextField
            id="numberInput"
            // label="אחוז"
            margin="normal"
            variant="outlined"
            value={this.state.percent}
            InputProps={{
              inputComponent: PercentFormatCustom,
            }}
            onChange={this.handlePercentInputChange}
            onKeyDown={this.handleOnKeyUp}
            type="number"
          />
        </div>
      </div>
    );
  }
}

function PercentFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      autoComplete="off"
      type="tel"
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      allowNegative={false}
      suffix=" % "
      allowEmptyFormatting
    />
  );
}
