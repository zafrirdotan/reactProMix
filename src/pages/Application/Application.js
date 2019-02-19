import React, { Component } from 'react';
import ApplicationService from '../../services/ApplicationService';
import QuestionCard from '../../components/questionCard/questionCard';
import SidePopup from '../../components/SidePopup/SidePopup';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import SwipeableViews from 'react-swipeable-views';

import './Application.scss';

export default class ApplicationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [...ApplicationService.getQuesting()],
      questionNumber: 0,
    };
    this.baseState = this.state;
  }

  componentWillUnmount = () => {
    ApplicationService.reset();
  };

  setNextQuestion = () => {
    this.setState(state => ({
      questionNumber: state.questionNumber + 1,
    }));
  };

  goBack = () => {
    this.setState(state => ({
      questionNumber: state.questionNumber - 1,
    }));
  };

  handelValueChange = (index, question, isNextQuestion) => {
    if (index === this.state.questionNumber) {
      let questions = this.state.questions;
      questions[this.state.questionNumber].value = question.value;
      this.setState({ questions: questions }, () => {
        if (isNextQuestion) {
          this.setNextQuestion();
        }
      });
    }
  };

  submitApplication = () => {
    ApplicationService.sendApplication(this.state.questions);
  };

  render() {
    const questionCards = this.state.questions.map((question, index) => {
      if (
        index === this.state.questionNumber ||
        index === this.state.questionNumber - 1
      ) {
        return (
          <QuestionCard
            key={question._id}
            onValueChange={this.handelValueChange.bind(this, index)}
            Question={question}
          />
        );
      } else {
        return <div />;
      }
    });

    questionCards[this.state.questions.length] = (
      <div className="submit-container">
        <div className="submit-box">
          <h1>שלח את את השאלון</h1>
          <Button
            className="submit-button"
            variant="outlined"
            color="primary"
            onClick={this.submitApplication}
          >
            בצע
          </Button>
        </div>
      </div>
    );

    const backButton = (
      <Button
        className="nav-button"
        onClick={this.goBack}
        size="medium"
        variant="outlined"
        color="primary"
        // disableFocusRipple="true"
        // disableRipple="true"
      >
        <Icon size="medium" color="primary">
          arrow_forward
        </Icon>
      </Button>
    );

    return (
      <div className="question-card-container">
        {this.state.questionNumber !== 0 && backButton}
        <div className="question-card">
          <SwipeableViews
            axis="x-reverse"
            disabled={true}
            index={this.state.questionNumber}
            children={questionCards}
          />
        </div>
        {this.state.questionNumber !== this.state.questions.length && (
          <SidePopup
            text={this.state.questions[this.state.questionNumber].advice}
          />
        )}
      </div>
    );
  }
}
