import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import './CurrencyInput.scss';
import CurrencyFormat from '../../../inputFormats/CurrencyFormat';

class CurrencyInput extends Component {
  handleInputChange = event => {
    this.props.onInputChange(+event.target.value || null);
  };

  handleOnKeyUp = event => {
    if (event.keyCode === 13) {
      this.props.submitInput();
    }
    if (this.props.onKeyUp) {
      this.props.onKeyUp();
    }
  };

  render() {
    const { classes } = this.props;
    console.log('classes:', classes);

    return (
      <div className="input-container">
        <div className="label"> {this.props.label}</div>
        <TextField
          id="numberInput"
          margin="normal"
          className={classes.textField}
          variant="outlined"
          autoFocus={true}
          value={this.props.value}
          onChange={this.handleInputChange}
          onKeyUp={this.handleOnKeyUp}
          InputProps={{
            inputComponent: CurrencyFormat,
          }}
        />
      </div>
    );
  }
}
const styles = theme => ({
  textField: {
    // 'font-size': 50,
    color: 'blue',
  },
});
export default withStyles(styles)(CurrencyInput);
