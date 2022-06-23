import Axios from 'axios';
import React, { useState, useEffect, createContext } from 'react';
import CurrentStats from './CurrentStats.jsx';
import TransactionList from './TransactionList.jsx';
import './OverviewSection.css';

export const TransactionContext = createContext();
export const StatsContext = createContext();

export default function Overview() {
  const [transactions, setTransactions] = useState([]);
  const [display, setDisplay] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  const calculateIncome = (arrOfEntries, type) => {
    return arrOfEntries
      .filter((entry) => entry.type === type)
      .map((filtered) => filtered.amount)
      .reduce((prev, curr) => prev + curr, 0);
  };

  const viewAll = () => {
    setDisplay(transactions);
  };

  // const getRecentDate = () => {
  //   let date = new Date();
  //   const recent = new Date(date.getTime());
  //   recent.setDate(date.getDate() - 3);
  //   return recent;
  // };

  // const formatDate = (date) => {
  //   let year = (date.getFullYear()).toString();
  //   let month = (date.getMonth() + 1).toString();
  //   let day = (date.getDate()).toString();

  //   if (month.length < 2) {
  //     month = '0' + month;
  //   }

  //   if (day.length < 2) {
  //     day = '0' + day;
  //   }

  //   return [year, month, day].join('-') + 'T00:00:00.000Z';
  // };

  // let recent = formatDate(getRecentDate());
  // console.log(typeof Date.parse(recent));


  useEffect(() => {
    Axios.get('/transactions')
      .then((res) => { setTransactions(res.data); })
      .catch((err) => { console.error(err); });
  }, []);

  useEffect(() => {
    setDisplay(transactions.slice(0, 3));
    setIncome(calculateIncome(transactions, 'income'));
    setExpense(calculateIncome(transactions, 'transaction'));
  }, [transactions]);

  useEffect(() => {
    setBalance(income - expense);
  }, [income, expense]);

  return (
    <section className="section-overview">
      <header className="section-header">
        <h2 className="heading heading-secondary">Overview</h2>
        <p className="subtitle">My first money book</p>
      </header>

      <main className="section-body">
        <StatsContext.Provider value={{income, expense, balance}}>
          <CurrentStats />
        </StatsContext.Provider>

        <TransactionContext.Provider value={{display, viewAll}}>
          <TransactionList />
        </TransactionContext.Provider>
      </main>
    </section>
  );
}
