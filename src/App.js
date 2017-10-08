import React, { Component } from 'react';
import CurrentMonthBudget from './components/CurrentMonthBudget.js';
import HistorialData from './components/HistorialData.js';
import CurrentWeeklyData from './components/CurrentWeeklyData.js';
import TransactionsList from './components/TransactionsList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">4seer</h1>
        </header>
        <CurrentMonthBudget />
        <HistorialData />
        <CurrentWeeklyData />
        <TransactionsList />
      </div>
    );
  }
}

export default App;
