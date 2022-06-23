import React, { useContext } from 'react';
import { StatsContext } from './Overview.jsx';

export default function CurrentStats() {
  const { income, expense, balance } = useContext(StatsContext);

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
