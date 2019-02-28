import React, { Component } from 'react';
import './QuestionCard.scss';

import Select from './select/select';
import TextInput from './TextInput/TextInput';
import CurrencyInput from './CurrencyInput/CurrencyInput';
import TimeInput from './TimeInput/TimeInput';
import YesNoInput from './YesNoInput/YesNoInput';
import CurrencyPercent from './CurrencyPercent/CurrencyPercent';
import MultiInputs from './MultiInputs/MultiInputs';
import RiskGauge from './RiskGauge/RiskGauge';

export default class QuestionCard extends Component {
  constructor(props) {
    super(props);
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(e) {
    let question = this.props.Question;
    question.value = e;
    this.props.onValueChange(question);
  }

  handleSubmitInput = () => {
    this.props.submitInput();
  };

  handleMultiInputsChange = answeredQuestions => {
    let question = this.props.Question;
    question.questions = answeredQuestions;
    this.props.onValueChange(question);
  };

  getInputByType(type) {
    switch (type) {
      case 'select':
        return (
          <Select
            onselectChange={this.handleValueChange}
            onClick={this.handleSubmitInput}
            options={this.props.Question.options}
            selected={this.props.Question.value}
          />
        );
      case 'currency':
        return (
          <CurrencyInput
            onInputChange={this.handleValueChange}
            submitInput={this.handleSubmitInput}
            value={this.props.Question.value}
          />
        );
      case 'currencyPercent':
        return (
          <CurrencyPercent
            onInputChange={this.handleValueChange}
            question={this.props.Question}
            submitInput={this.handleSubmitInput}
            setFocus={this.props.setFocus}
            baseValue={
              this.props.lastQuestion ? this.props.lastQuestion.value : null
            }
          />
        );
      case 'multiInputs':
        return (
          <MultiInputs
            question={this.props.Question}
            submitInput={this.handleSubmitInput}
            onInputChange={this.handleMultiInputsChange}
          />
        );
      case 'Time':
        return (
          <TimeInput
            onselectChange={this.handleValueChange}
            value={this.props.Question.value}
          />
        );
      case 'yesNo':
        return (
          <YesNoInput
            onselectChange={this.handleValueChange}
            value={this.props.Question.value}
          />
        );
      case 'text':
        return <TextInput />;

      case 'RiskGauge':
        return (
          <RiskGauge
            value={this.props.Question.value}
            onselectChange={this.handleValueChange}
          />
        );
      default:
        return;
    }
  }

  render() {
    const input = this.getInputByType(this.props.Question.inputType);
    const isWidthFull = this.props.Question.inputType === 'RiskGauge';
    return (
      <div className="card">
        <div className="mask" />
        <div className="text">{this.props.Question.text}</div>
        {this.props.Question.text2 && (
          <div className="text-2">{this.props.Question.text2}</div>
        )}
        <div
          className="card-input-container"
          style={isWidthFull ? { width: '100%' } : {}}
        >
          {input}
        </div>
      </div>
    );
  }
}
