import React, { Component } from 'react';
import '../App.css'

class CurrentWeeklyData extends Component {
  render() {
    
    
    return (
      <div className="CurrentWeeklyData">
      	<h3 className="title-style">Current Weekly Budget</h3>
      			$ {parseInt(this.props.weekly/4)}
      </div>
    );
  }
}

export default CurrentWeeklyData;
