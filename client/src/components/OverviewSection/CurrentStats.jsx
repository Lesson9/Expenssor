import React, { useContext } from 'react';
import { OverviewContext } from '../App.jsx';

export default function CurrentStats() {
  const { income, expense, balance } = useContext(OverviewContext);

  return (
    <div className="current">
      <div>
        <span>Expense</span>
        <p className="money expense">$ { expense }</p>
      </div>

      <div>
        <span>Income</span>
        <p className="money income">$ { income }</p>
      </div>

      <div>
        <span>Balance</span>
        <p className="money balance">$ { balance }</p>
      </div>
    </div>
  );
}
