import React, { Component } from 'react';
import CurrentMonthBudget from './CurrentMonthBudget.js';
import CurrentWeeklyData from './CurrentWeeklyData.js';

class Column_1 extends Component {
  render() {
    return (
      <div className="Column-1">
        <CurrentMonthBudget />
        <CurrentWeeklyData />
      </div>
    );
  }
}

export default Column_1;
