import React, { Component } from 'react';
import '../App.css'

class CurrentWeeklyData extends Component {
  render() {
    
    
    return (
      <div className="CurrentWeeklyData">
      	<h3>Current Weekely Budget</h3>
      		<div>
      			{this.props.weekely}
      		</div>
      </div>
    );
  }
}

export default CurrentWeeklyData;
