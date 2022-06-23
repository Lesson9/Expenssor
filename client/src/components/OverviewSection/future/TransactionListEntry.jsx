import React from 'react';
import TransactionDailyList from './TransactionDailyList.jsx';

export default function TransactionListEntry() {
  return (
    <li className="transaction-list-entry">
      <span className="date">June 23</span>
      <li>
        <TransactionDailyList />
      </li>
    </li>
  );
}
