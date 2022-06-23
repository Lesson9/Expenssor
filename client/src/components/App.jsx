import React from 'react';
import Overview from './OverviewSection/Overview.jsx';
import MoneyBook from './MoneyBookSection/MoneyBook.jsx';

export default function App() {
  return (
    <div className="container">
      <MoneyBook />
      <Overview />
      <div>Add Transaction</div>
    </div>
  );
}
