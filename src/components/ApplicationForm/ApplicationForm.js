import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SwipeableViews from 'react-swipeable-views';
import Select from '../questionCard/select/select';
import TextInput from '../questionCard/TextInput/TextInput';
import CurrencyInput from '../questionCard/CurrencyInput/CurrencyInput';
import TimeInput from '../questionCard/TimeInput/TimeInput';
import YesNoInput from '../questionCard/YesNoInput/YesNoInput';
import CurrencyPercent from '../questionCard/CurrencyPercent/CurrencyPercent';
import MultiInputs from '../questionCard/MultiInputs/MultiInputs';
import './ApplicationForm.scss';

export default class ApplicationForm extends Component {
  state = {
    questionNumber: 0,
  };
  goBack = () => {
    this.setState(state => ({
      questionNumber: state.questionNumber - 1,
    }));
  };
  setNextQuestion = () => {
    this.setState(state => ({
      questionNumber: state.questionNumber + 1,
    }));
  };
  handleValueChange = () => {
    console.log('handleValueChange');
  };
  render() {
    const questionCards = [
      <Select
        onselectChange={this.handleValueChange}
        onClick={this.setNextQuestion}
        options={this.props.questions[0].options}
        selected={this.props.questions[0].value}
        text={this.props.questions[0].text}
      />,
      <CurrencyInput
        onInputChange={this.handleValueChange}
        submitInput={this.handleSubmitInput}
        value={this.props.questions[1].value}
      />,
    ];

    const backButton = (
      <Button
        className="nav-button"
        onClick={this.goBack}
        size="medium"
        variant="outlined"
        color="primary"
      >
        <Icon size="medium" color="primary">
          arrow_forward
        </Icon>
      </Button>
    );

    return (
      <form
        className="form-container"
        onSubmit={this.handleSubmit}
        noValidate
        autoComplete="off"
      >
        <div className="question-card-container">
          <div className="question-card">
            {this.state.questionNumber !== 0 && backButton}
            <SwipeableViews
              axis="x-reverse"
              disabled={true}
              index={this.state.questionNumber}
              children={questionCards}
            />
          </div>
        </div>
      </form>
    );
  }
}
