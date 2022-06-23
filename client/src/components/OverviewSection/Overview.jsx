import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import CurrentStats from './CurrentStats.jsx';
import TransactionList from './TransactionList.jsx';
import './OverviewSection.css';

export default function Overview() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    Axios.get('/transactions')
      .then((res) => { setTransactions(res.data); })
      .catch((err) => { console.error(err); });
  }, []);

  return (
    <section className="section-overview">
      <header className="section-header">
        <h2>Overview</h2>
        <p className="subtitle">My first money book</p>
      </header>

      <main className="section-body">
        <CurrentStats />
        <TransactionList />
      </main>
    </section>
  );
}
