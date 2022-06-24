import Axios from 'axios';
import React, { useState, useContext } from 'react';
import { FunctionContext } from '../App.jsx';
import './AddTransactionSection.css';

export default function AddTransaction() {
  const addTransaction = useContext(FunctionContext);

  const [type, setType] = useState('transaction');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [note, setNote] = useState('');

  const clearState = () => {
    setAmount('');
    setDate('');
    setCategory('');
    setNote('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ type, amount, date, category, note });
    clearState();
  };

  return (
    <section className='section-transaction'>
      <header className="section-header">
        <h2 className="heading heading-secondary">Add a transaction</h2>
        <nav className="transaction-nav">
          { type === 'transaction'
            ?
            <ul>
              <li onClick={() => { setType('income'); }}>Income</li>
              <li className="selected">Transaction</li>
            </ul>
            :
            <ul>
              <li className="selected">Income</li>
              <li onClick={() => { setType('transaction'); }}>Transaction</li>
            </ul>
          }

        </nav>
      </header>

      <main>
        <form onSubmit={handleSubmit} className="transaction-form">
          <div className="amount">
            <span className="label">Amount</span>
            <input onChange={(e) => { setAmount(e.target.value); }} type="number" step="0.01" placeholder="0.00" value={amount} />
          </div>

          <div className="date">
            <span className="label">Date</span>
            <input onChange={(e) => { setDate(e.target.value); }} type="date" value={date} required></input>
          </div>

          <div className="category">
            <span className="label">Category</span>
            <input onChange={(e) => { setCategory(e.target.value); }} type="text" placeholder="Write a category" value={category} />
          </div>

          <div className="note">
            <span className="label">Notes</span>
            <input onChange={(e) => { setNote(e.target.value); }} type="text" placeholder="Write some notes here" value={note} />
          </div>

          <input className="btn btn-primary btn-save" type="submit" value="Save" />
        </form>
      </main>
    </section>
  );
}
