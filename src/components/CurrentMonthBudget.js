import React, { Component } from 'react';
import '../App.css'

class CurrentMonthBudget extends Component {
  render() {
    return (
      <div className="CurrentMonthBudget">
      	<h3 className="title-style">Current Monthly Budget</h3>
      		<div id="monthly-budget-style">
             $ {this.props.monthly}
          </div>
      </div>
    );
  }
}

export default CurrentMonthBudget;