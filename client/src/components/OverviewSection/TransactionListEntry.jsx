import React from 'react';

export default function TransactionListEntry({ data: { type, date, category, note, amount } }) {
  const dt = new Date(date);
  const formattedDate = dt.toUTCString().slice(0, 12);

  return (
    <li className="transaction-list-entry">
      <div className="transaction-date">{formattedDate}</div>
      <div className="transaction-info">
        <p className="transaction-category">{category}</p>
        {note && <p className="transaction-note">{note}</p>}
      </div>
      { type === 'income' ? <div className="transaction-amount" style={{color: '#c2255c'}}>$ {amount}</div> : <div className="transaction-amount" style={{color: '#2b8a3e'}}>$ {amount}</div> }
    </li>
  );
}
