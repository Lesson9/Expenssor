import React from 'react';
import TransactionDailyListEntry from './TransactionDailyListEntry.jsx';

export default function TransactionDailyList() {
  return (
    <ul className="transaction-daily-list">
      <TransactionDailyListEntry />
      <TransactionDailyListEntry />
      <TransactionDailyListEntry />
    </ul>
  );
}
