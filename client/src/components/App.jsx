import Axios from 'axios';
import React, { useState, useEffect, createContext } from 'react';
import Overview from './OverviewSection/Overview.jsx';
import MoneyBook from './MoneyBookSection/MoneyBook.jsx';
import AddTransaction from './AddTransactionSection/AddTransaction.jsx';

export const FunctionContext = createContext();
export const OverviewContext = createContext();

export default function App() {
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  const calculate = (arrOfEntries, type) => {
    return arrOfEntries
      .filter((entry) => entry.type === type)
      .map((filtered) => filtered.amount)
      .reduce((prev, curr) => prev + curr, 0);
  };

  const getData = () => {
    Axios.get('/transactions')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => { console.error(err); });
  };

  const viewAll = () => {
    setDisplayData(data);
  };

  const addTransaction = (data) => {
    Axios.post('/transactions', data)
      .then((res) => { console.log('success'); })
      .then(() => { getData(); })
      .catch((err) => { console.error(err); });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setDisplayData(data.slice(0, 5));
    setIncome((calculate(data, 'income')).toFixed(2));
    setExpense((calculate(data, 'transaction')).toFixed(2));
  }, [data]);

  useEffect(() => {
    setBalance((income - expense).toFixed(2));
  }, [income, expense]);

  return (
    <div className="container">
      <MoneyBook />

      <OverviewContext.Provider value={{ displayData, income, expense, balance, viewAll }}>
        <Overview />
      </OverviewContext.Provider>

      <FunctionContext.Provider value={addTransaction}>
        <AddTransaction />
      </FunctionContext.Provider>
    </div>
  );
}
