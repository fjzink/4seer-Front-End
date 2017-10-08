import React, { Component } from 'react';
import '../App.css'

class TransactionsList extends Component {

  render() {
    return(
      <div className="TransactionsList">
        <table>
          <tbody>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
            {this.props.transactionsList.map(transaction => {
                return(
                <tr>
                  <td>{transaction.date_time.slice(0, 10)}</td>
                  <td>{transaction.description.slice(0, 15)}</td>
                  <td>{transaction.posted_amount}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }

}

export default TransactionsList;

