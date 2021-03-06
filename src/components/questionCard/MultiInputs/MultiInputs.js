import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import CurrencyFormat from '../../../inputFormats/CurrencyFormat';
import YearsFormat from '../../../inputFormats/YearsFormat';
import NumberCustomFormat from '../../../inputFormats/NumberCustomFormat';


import './MultiInputs.scss';

const InputFormatMap = {
  currency: CurrencyFormat,
  years: YearsFormat,
  text: undefined,
  number: NumberCustomFormat,
};

export default class MultiInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [...this.props.question.questions],
    };
  }

  handleInputChange(index, type, event) {
    const questions = this.state.questions;
    let value = event.target.value;
    if (type !== 'text') {
      questions[index].value = +value || '';
    } else {
      questions[index].value = value;
    }
    this.props.onInputChange(questions);
  }

  handleOnKeyUp = (index, event) => {
    if (event.keyCode === 13) {
      this.props.submitInput();
    }
  };

  render() {
    const inputs = this.state.questions.map((question, index) => {
      return (
        <div className="multi-input-box" key={question._id}>
          <div className="multi-label"> {question.label}</div>
          <TextField
            className="multi-input-style"
            id={question._id}
            margin="normal"
            variant="outlined"
            autoFocus={index === 0}
            value={question.value}
            onChange={this.handleInputChange.bind(this, index, question.type)}
            onKeyUp={this.handleOnKeyUp.bind(this, index)}
            InputProps={{
              inputComponent: InputFormatMap[question.type],
            }}
            type="text"
          />
        </div>
      );
    });
    return <div className="multi-input-container">{inputs}</div>;
  }
}
