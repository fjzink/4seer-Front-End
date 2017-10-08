import React, { Component } from 'react';
import CurrentMonthBudget from './components/CurrentMonthBudget.js';
import HistoricalData from './components/HistoricalData.js';
import CurrentWeeklyData from './components/CurrentWeeklyData.js';
import TransactionsList from './components/TransactionsList.js';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accounts: "",
      transactionsList: []
    }
    this.loadData = this.loadData.bind(this);
  }

  loadData() {
    axios.get('http://localhost:3000/api/accounts/1').then(response => {
      console.log(response);
      debugger
    }).catch(errors => console.log(errors));
  }

  componentDidMount() {
    this.loadData();
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
