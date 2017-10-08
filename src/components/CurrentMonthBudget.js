import React, { Component } from 'react';
import '../App.css'

class CurrentMonthBudget extends Component {

  render() {
  		
    return (
      <div className="CurrentMonthBudget">
      	<h3>Current Monthly Budget</h3>
      		{this.props.monthly}
      </div>
    );
  }
}

export default CurrentMonthBudget;