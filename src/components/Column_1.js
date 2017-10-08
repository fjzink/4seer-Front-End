import React, { Component } from 'react';
import '../App.css'
import CurrentMonthBudget from './CurrentMonthBudget.js';
import CurrentWeeklyData from './CurrentWeeklyData.js';

class Column_1 extends Component {
  render() {
    const {account} = this.props;

    let betterEstimate = account.current_balance *  .75;
    
    return (
      <div className="Column-1">
        <CurrentMonthBudget 
          monthly={betterEstimate} 
        />
        <CurrentWeeklyData 
          weekly={betterEstimate}
        />
      </div>
    );
  }
}

export default Column_1;
