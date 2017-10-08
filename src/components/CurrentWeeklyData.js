import React, { Component } from 'react';
import '../App.css'

class CurrentWeeklyData extends Component {
  render() {
    
    
    return (
      <div className="CurrentWeeklyData">
      	<h3 className="title-style">Current Weekly Budget</h3>
      			{this.props.weekely}
      </div>
    );
  }
}

export default CurrentWeeklyData;
