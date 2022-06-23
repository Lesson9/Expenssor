import React from 'react';

export default function TransactionListEntry({ data: { type, date, category, note, amount } }) {
  const dt = new Date(date);
  const formattedDate = dt.toUTCString().slice(0, 12);

  return (
    <li className="transaction-list-entry">
      <div className="transaction-date">{formattedDate}</div>
      <div className="transaction-info">
        <div className="transaction-icon" style={{ backgroundColor: type === 'income' ? '#c2255c' : '#2b8a3e' }}>
          { type === 'income' ? <span class="icon material-symbols-outlined">payments</span> : <span class="icon material-symbols-outlined">shopping_cart</span> }
        </div>
        <div className="transaction-text">
          <p className="transaction-category">{category}</p>
          {note && <p className="transaction-note">{note}</p>}
        </div>
      </div>
      { type === 'income' ? <div className="transaction-amount" style={{color: '#c2255c'}}>$ {amount}</div> : <div className="transaction-amount" style={{color: '#2b8a3e'}}>$ {amount}</div> }
    </li>
  );
}
