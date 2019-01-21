import React, { Component } from 'react';
import './QuestionCard.scss';

import Select from './select/select';
import TextInput from './TextInput/TextInput';
import CurrencyInput from './CurrencyInput/CurrencyInput';
import TimeInput from './TimeInput/TimeInput';
import YesNoInput from './YesNoInput/YesNoInput';

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

  getInputByType(type) {
    switch (type) {
      case 'select':
        return (
          <Select
            onselectChange={this.handleValueChange}
            options={this.props.Question.options}
            selected={this.props.Question.value}
            key={this.props.Question._id}
          />
        );
      case 'currency':
        return (
          <CurrencyInput
            onselectChange={this.handleValueChange}
            value={this.props.Question.value}
            key={this.props.Question._id}
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
      default:
        return;
    }
  }

  render() {
    const input = this.getInputByType(this.props.Question.inputType);
    return (
      <div className="card">
        <div className="text">{this.props.Question.text}</div>
        {input}
      </div>
    );
  }
}
