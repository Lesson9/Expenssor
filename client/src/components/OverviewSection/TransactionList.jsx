import React from 'react';
import TransactionListEntry from './TransactionListEntry.jsx';

export default function TransactionList() {
  return (
    <div className="transactions">
      <div className="transactions-header">
        <h3>Recent Transactions</h3>
        <span className="btn-underline">View all</span>
      </div>

      <ul className="transaction-list">
        <TransactionListEntry />
        <TransactionListEntry />
        <TransactionListEntry />
      </ul>
    </div>
  );
}