import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './select.scss';
export default class Select extends Component {

  select(e) {
    this.props.onselectChange(e);
  }

  render() {
    const buttons = this.props.options.map(option => {
      return (
        <div key={option.key} className="select-button-container">
          <Button
            className={
              'select-button ' +
              (this.props.selected === option.key && 'selected')
            }
            variant="outlined"
            color="primary"
            onClick={this.select.bind(this, option.key)}
          >
            {option.name}
          </Button>
        </div>
      );
    });
    return <div className="select-box">{buttons}</div>;
  }
}
