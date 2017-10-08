import React, { Component } from 'react';
import './App.css'
import Column_1 from './components/Column_1'
import Column_2 from './components/Column_2'
import styles from './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      account: "",
      transactionsList: []
    }
  }

  loadData() {
    axios.get('http://localhost:3000/api/accounts/2').then(response => {
      this.setState({
        account: response.data[0],
        transactionsList: response.data[1]
      })
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
        <Column_1 
          accounts={this.state.accounts}
        />
        <Column_2 
          transactionsList={this.state.transactionsList}
        />
      </div>
    );
  }
}

export default App;
