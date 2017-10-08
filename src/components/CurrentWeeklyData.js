import React, { Component } from 'react';
import Highcharts from 'highcharts';
// var Highcharts = require('highcharts');
// require('highcharts/modules/funnel')(Highcharts);

class CurrentWeeklyData extends Component {

    componentDidMount() {
       if (this.props.modules) {
           this.props.modules.forEach(function (module) {
               module(Highcharts);
           });
       }
       // Set container which the chart should render to.
       this.chart = new Highcharts[this.props.type || "Chart"](
           this.props.container,
           this.props.options
       );
   }
   //Destroy chart before unmount.
   componentWillUnmount() {
       this.chart.destroy();
   }

  render() {
    return (
      <div className="CurrentWeeklyData">
      	{this.props.container}
      </div>
    );
  }
}

export default CurrentWeeklyData;
