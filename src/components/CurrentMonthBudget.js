import React, { Component } from 'react';
import '../App.css'

class CurrentMonthBudget extends Component {
	constructor(props){
		super(props);
	}


	// updateBudget(){
	// 	budget = this.props.account["CurrentAccountBalance"]
	// }

  render() {

    return (
      <div className="CurrentMonthBudget">
      	<h3 className="title-style">Current Monthly Budget</h3>
      		<div id="monthly-budget-style">
          {this.props.account.current_balance}
          </div>
      </div>
    );
  }
}

export default CurrentMonthBudget;
