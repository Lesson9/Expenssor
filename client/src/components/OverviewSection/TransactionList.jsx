import React, { useContext } from 'react';
import TransactionListEntry from './TransactionListEntry.jsx';
import { TransactionContext } from './Overview.jsx';

export default function TransactionList() {
  const {display, viewAll} = useContext(TransactionContext);

  return (
    <div className="transactions">
      <div className="transactions-header">
        <h3>Recent Transactions</h3>
        <span onClick={viewAll} className="btn-underline">View all</span>
      </div>

      <ul className="transaction-list">
        {display.map((entry, index) => <TransactionListEntry key={index} data={entry} />)}
      </ul>
    </div>
  );
}