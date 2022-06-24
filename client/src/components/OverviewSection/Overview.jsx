import Axios from 'axios';
import React, { useState, useEffect, createContext } from 'react';
import CurrentStats from './CurrentStats.jsx';
import TransactionList from './TransactionList.jsx';
import './OverviewSection.css';

export const TransactionContext = createContext();
export const StatsContext = createContext();

export default function Overview() {
  return (
    <section className="section-overview">
      <header className="section-header">
        <h2 className="heading heading-secondary">Overview</h2>
        <p className="subtitle">My first money book</p>
      </header>

      <main className="section-body">
        <CurrentStats />
        <TransactionList />
      </main>
    </section>
  );
}
