// components/StatsCards.js
import React from 'react';
import { formatCurrency } from '../utils/helpers';

function StatsCards({ count, monthlyTotal, yearlyTotal }) {
  return (
    <div className="stats-cards">
      <div className="stat-card">
        <h3>Всего подписок</h3>
        <div className="stat-value">{count}</div>
      </div>
      <div className="stat-card">
        <h3>В месяц</h3>
        <div className="stat-value">{formatCurrency(monthlyTotal)}</div>
      </div>
      <div className="stat-card">
        <h3>В год</h3>
        <div className="stat-value">{formatCurrency(yearlyTotal)}</div>
      </div>
    </div>
  );
}

export default StatsCards;