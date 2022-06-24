import React, { useContext } from 'react';
import TransactionListEntry from './TransactionListEntry.jsx';
import { OverviewContext } from '../App.jsx';

export default function TransactionList() {
  const {displayData, viewAll} = useContext(OverviewContext);

  return (
    <div className="transactions">
      <div className="transactions-header">
        <h3 className="heading heading-tertiary">Recent Transactions</h3>
        <span onClick={viewAll} className="btn-underline">View all</span>
      </div>

      <ul className="transaction-list">
        {displayData.map((entry, index) => <TransactionListEntry key={index} data={entry} />)}
      </ul>
    </div>
  );
}