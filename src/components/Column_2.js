import React, { Component } from 'react';
import HistoricalData from './HistoricalData.js';
import TransactionsList from './TransactionsList.js';

class Column_2 extends Component {
  render() {
    return (
      <div className="Column-2">
        <HistoricalData />
        <TransactionsList />
      </div>
    );
  }
}

export default Column_2;