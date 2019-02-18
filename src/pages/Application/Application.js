import React, { Component } from 'react';
import ApplicationService from '../../services/ApplicationService';
import QuestionCard from '../../components/questionCard/questionCard';
import Button from '@material-ui/core/Button';
import './Application.scss';

export default class ApplicationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [...ApplicationService.getQuesting()],
      questionNumber: 0,
      currentQuestion: ApplicationService.getQuesting()[0],
    };
    this.baseState = this.state;
    this.setNextQuestion = this.setNextQuestion.bind(this);
    this.goBack = this.goBack.bind(this);
    this.submitApplication = this.submitApplication.bind(this);
    // this.handelValueChange = this.handelValueChange.bind(this);
  }

  componentWillUnmount() {
   ApplicationService.reset();
  }
  
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

  handelValueChange(question, isNextQuestion) {
    let newQuestions = question;
    let questions = [...this.state.questions];
    questions[this.state.questionNumber] = newQuestions;
    this.setState({ questions: questions });
    if(isNextQuestion){
      this.setNextQuestion();
    }
    // console.log('ev:', e);
  }

  submitApplication() {
    ApplicationService.sendApplication(this.state.questions);
  }

  render() {
    return (
      <div className="question-card-container">
        <div className="question-card">
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
          {this.state.questionNumber === this.state.questions.length && (
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
          )}
        </div>
        <div className="buttons">
          {/* {this.state.questionNumber !== this.state.questions.length && (
            <Button className="nav-button" onClick={this.setNextQuestion}>
              קדימה
            </Button>
          )} */}
          {this.state.questionNumber !== 0 && (
            <Button className="nav-button" onClick={this.goBack}>
              אחורה
            </Button>
          )}
        </div>
      </div>
    );
  }
}
