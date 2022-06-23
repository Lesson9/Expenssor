import React from 'react';

export default function CurrentStats() {
  return (
    <div className="current">
      <div>
        <span>Expense</span>
        <p className="money expense">$ 1,876.32</p>
      </div>

      <div>
        <span>Income</span>
        <p className="money income">$ 6,521.87</p>
      </div>

      <div>
        <span>Balance</span>
        <p className="money balance">$ 4,645.55</p>
      </div>
    </div>
  );
}
