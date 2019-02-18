import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/lab/Slider';
// import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import './TimeInput.scss';

export default class TimeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 12,
      max: 100,
      min: 12,
    };
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
  }

  componentDidMount() {
    if (this.props.value) {
      this.setState({ value: this.props.value });
    }
  }

  handleSliderChange = (event, value) => {
    this.updateState(value);
  };

  handleInputChange = event => {
    this.updateState(+event.target.value);
  };
  handleOnKeyDown() {
    this.props.onselectChange(this.state.value, true);
  }

  updateState(value) {
    this.setState({ value });
    this.props.onselectChange(value);
  }

  render() {
    return (
      <div className="input-container">
        <TextField
          id="numberInput"
          root="numberInput"
          className="time-input"
          type="number"
          margin="normal"
          variant="outlined"
          autoComplete="off"
          inputProps={{ min: this.state.min, max: this.state.max }}
          value={this.state.value}
          onChange={this.handleInputChange}
          onKeyDown={this.handleOnKeyDown}
          autoFocus={true}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">חודשים</InputAdornment>
            ),
          }}
        />
        <Slider
          value={this.state.value}
          max={this.state.max}
          min={this.state.min}
          step={1}
          aria-labelledby="label"
          onChange={this.handleSliderChange}
        />
      </div>
    );
  }
}
