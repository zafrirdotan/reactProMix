import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import './select.scss';
export default class Select extends Component {
  select(e) {
    this.props.onselectChange(e);
    this.props.onClick();
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
            <span> {option.name}</span>
            <Icon size="medium" color="primary" className="icon">
              {option.icon}
            </Icon>
          </Button>
        </div>
      );
    });
    return <div className="select-box">{buttons}</div>;
  }
}
