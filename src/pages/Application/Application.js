import React, { Component } from 'react';
import ApplicationService from '../../services/ApplicationService';
import QuestionCard from '../../components/questionCard/questionCard';
import Button from '@material-ui/core/Button';
import './Application.scss';

export default class ApplicationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: ApplicationService.getQuesting(),
      questionNumber: 0,
      currentQuestion: ApplicationService.getQuesting()[0],
    };
    this.setNextQuestion = this.setNextQuestion.bind(this);
    this.goBack = this.goBack.bind(this);
    this.submitApplication = this.submitApplication.bind(this);
    // this.handelValueChange = this.handelValueChange.bind(this);
  }

  componentDidMount() {}

  setNextQuestion() {
    this.setState(state => ({
      questionNumber: state.questionNumber + 1,
      currentQuestion: this.state.questions[state.questionNumber + 1],
    }));
  }

  goBack() {
    this.setState(state => ({
      questionNumber: state.questionNumber - 1,
      currentQuestion: this.state.questions[state.questionNumber - 1],
    }));
  }

  handelValueChange(e) {
    let newQuestions = e;
    let questions = [...this.state.questions];
    questions[this.state.questionNumber] = newQuestions;
    this.setState({ questions: questions });
    // console.log('ev:', e);
  }

  submitApplication() {
    ApplicationService.sendApplication(this.state.questions);
  }

  render() {
    return (
      <div className="question-card-container">
        {this.state.questions.map((question, index) => {
          if (index === this.state.questionNumber) {
            return (
              <QuestionCard
                key={question._id}
                onValueChange={this.handelValueChange.bind(this)}
                Question={question}
              />
            );
          }
          return null;
        })}
        <div>
          {this.state.questionNumber === this.state.questions.length && (
            <Button onClick={this.submitApplication}> בצע </Button>
          )}
        </div>
        <div className="buttons">
          {this.state.questionNumber !== this.state.questions.length && (
            <Button onClick={this.setNextQuestion}>קדימה</Button>
          )}
          {this.state.questionNumber !== 0 && (
            <Button onClick={this.goBack}>אחורה</Button>
          )}
        </div>
      </div>
    );
  }
}
