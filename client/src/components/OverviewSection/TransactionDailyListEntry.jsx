import React from 'react';

export default function TransactionDailyListEntry() {
  return (
    <li className="transaction-daily-list-entry">
      <div className="transaction-info">
        <p className="transaction-category">Food</p>
        <span className="transaction-note">Chick-fil-A</span>
      </div>
      <span className="transaction-amount">$ 12.34</span>
    </li>
  );
}
