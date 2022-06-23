import Axios from 'axios';
import React from 'react';
import Overview from './OverviewSection/Overview.jsx';
import MoneyBook from './MoneyBookSection/MoneyBook.jsx';
import AddTransaction from './AddTransactionSection/AddTransaction.jsx';

export default function App() {
  return (
    <div className="container">
      <MoneyBook />
      <Overview />
      <AddTransaction />
    </div>
  );
}
