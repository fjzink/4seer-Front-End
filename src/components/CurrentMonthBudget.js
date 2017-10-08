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
      	<h3>Current Monthly Budget</h3>
      		{this.props.account.current_balance}
      </div>
    );
  }
}

export default CurrentMonthBudget;
