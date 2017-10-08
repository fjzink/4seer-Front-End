import React, { Component } from 'react';
import '../App.css'
import ReactJSXHighcharts, { HighchartsChart, Chart, Title, Subtitle, Legend, XAxis, YAxis, LineSeries } from 'react-jsx-highcharts';
import ReactDOM from 'react-dom';

class HistoricalData extends Component {
  render() {
    const plotOptions = {
    series: {
      pointIntervalUnit: 'day'
    }
  };

  return (
    <HighchartsChart plotOptions={plotOptions}>
      <Chart />

      <Title>Historical Data</Title>

      <Legend layout="vertical" align="right" verticalAlign="middle" />

      <XAxis>
        <XAxis.Title>Time</XAxis.Title>
      </XAxis>

      <YAxis id="number">
        <YAxis.Title>Expenses ($)</YAxis.Title>
        <LineSeries id="Gas" name="Gas" data={[43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]} />
        <LineSeries id="manufacturing" name="McDonalds" data={[24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]} />
        <LineSeries id="other" name="Other" data={[12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]} />
      </YAxis>
    </HighchartsChart>
  );
  }
}

export default HistoricalData;
