import React from 'react';
import './MoneyBookSection.css';

export default function MoneyBook() {
  return (
    <section className="section-moneybook">
      <header className="section-header">
        <h2 className="heading heading-secondary">Money Books</h2>
      </header>

      <main className="section-body">
        <h3 className="heading-tertiary selected">My First Money Book</h3>
        <p>Football Team</p>
        <p>+ Create a new Money book</p>
      </main>
    </section>
  );
}
