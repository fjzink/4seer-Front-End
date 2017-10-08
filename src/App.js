import React, { Component } from 'react';
import CurrentMonthBudget from './components/CurrentMonthBudget.js';
import HistoricalData from './components/HistoricalData.js';
import CurrentWeeklyData from './components/CurrentWeeklyData.js';
import TransactionsList from './components/TransactionsList.js';

class App extends Component {
  constructor() {
    super();


  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">4seer</h1>
        </header>
        <CurrentMonthBudget />
        <HistoricalData />
        <CurrentWeeklyData />
        <TransactionsList />
      </div>
    );
  }
}

export default App;
