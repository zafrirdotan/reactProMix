import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import CurrencyInput from '../CurrencyInput/CurrencyInput';
import PercentFormat from '../../../inputFormats/PercentFormat';
import './CurrencyPercent.scss';

export default class CurrencyPercent extends Component {
  state = {
    value: null,
    percent: null,
    inputChanged: 'value', // 'value'/ 'percent'
    // focusCounter:
  };

  componentWillMount() {
    const percent = this.calculatePercent(this.props.question.value);
    this.setState(state => {
      return { percent, value: this.props.question.value };
    });
  }

  // componentDidUpdate(){
  // }

  calculatePercent = value => {
    let percent = (value * 100) / this.props.baseValue;
    if (percent % 1 !== 0) {
      percent = percent.toFixed(2);
    }
    return percent;
  };

  calculateValue = percent => {
    let value = (this.props.baseValue * percent) / 100;
    if (value % 1 !== 0) {
      value = value.toFixed(2);
    }
    return value;
  };

  handleInputChange = value => {
    if (this.state.inputChanged === 'value') {
      const percent = this.calculatePercent(value);
      value = value || null;
      this.setState(state => {
        return { percent, value };
      });
    }
  };

  handlePercentInputChange = event => {
    if (this.state.inputChanged === 'percent') {
      let percent = +event.target.value;
      const value = this.calculateValue(percent);
      percent = percent || null;
      this.setState(state => {
        return { percent, value };
      });
    }
  };

  handleSubmitInput = () => {
    this.props.submitInput();
  };

  handleOnKeyUpValue = event => {
    this.setState({ inputChanged: 'value' });
  };

  handleOnKeyUpPercent = event => {
    this.setState({ inputChanged: 'percent' });
    if (event.keyCode === 13) {
      this.handleSubmitInput();
    }
  };

  componentWillUnmount() {
    this.props.question.value = this.state.value;
  }

  render() {
    return (
      <div className="currency-percent-box">
        <CurrencyInput
          onInputChange={this.handleInputChange}
          value={this.state.value}
          fieldName={this.props.question.fieldName}
          submitInput={this.handleSubmitInput}
          onKeyUp={this.handleOnKeyUpValue}
          label="סכום משכנתא"
        />
        <div className="percent-box">
          <div className="label"> אחוז</div>
          <TextField
            id="numberInput"
            margin="normal"
            variant="outlined"
            value={this.state.percent}
            InputProps={{
              inputComponent: PercentFormat,
            }}
            onChange={this.handlePercentInputChange}
            onKeyUp={this.handleOnKeyUpPercent}
            type="number"
          />
        </div>
      </div>
    );
  }
}
