import React, { Component } from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

import './RiskGauge.scss';
export default class RiskGauge extends Component {
  state = {
    value: 1,
  };

  changeValue = value => {
    // this.setState({ value });
    this.props.onselectChange(value);
  };

  render() {
    return (
      <div className="risk-gauge-container">
        <ReactSpeedometer
          segments={6}
          minValue={0}
          maxValue={6}
          value={this.props.value}
          textColor="transparent"
          startColor="#00d30a"
          endColor="red"
        />
        <div className="button-container">
          <div className="min-button" onClick={this.changeValue.bind(this, 1)}>
            <div className="gauge-text">בטוחה</div>
          </div>
          <div className="mid-button" onClick={this.changeValue.bind(this, 3)}>
            <div className="gauge-text">בינונית</div>
          </div>
          <div className="max-button" onClick={this.changeValue.bind(this, 5)}>
            <div className="gauge-text">מסוכנת</div>
          </div>
        </div>
      </div>
    );
  }
}
