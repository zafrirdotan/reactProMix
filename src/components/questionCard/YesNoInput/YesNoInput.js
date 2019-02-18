import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './YesNoInput.scss';
export default class YesNoInput extends Component {
  select(e) {
    this.props.onselectChange(e, true);
  }

  render() {
    return (
      <div className="yesNo-box">
        <div className="yesNo-button-container">
          <Button
            className={
              'yesNo-button '
               + (this.props.value === true && 'selected')
            }
            onClick={this.select.bind(this, true)}
            variant="outlined"
            color="primary"
          >
            כן
          </Button>
        </div>
        <div className="yesNo-button-container">
          <Button
            className={
              'yesNo-button '
              + (this.props.value === false && 'selected')
            }
            onClick={this.select.bind(this, false)}
            variant="outlined"
            color="primary"
          >
            לא
          </Button>
        </div>
      </div>
    );
  }
}
