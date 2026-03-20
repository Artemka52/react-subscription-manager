// components/CategoryBreakdown.js
import React from 'react';
import { getCategoryColor, getCategoryName, formatCurrency, getCategoryTotals } from '../utils/helpers';

function CategoryBreakdown({ subscriptions }) {
  const categoryTotals = getCategoryTotals(subscriptions);

  return (
    <div className="category-breakdown">
      <h2>Распределение по категориям</h2>
      <div className="categories-list">
        {Object.entries(categoryTotals).map(([category, total]) => (
          <div key={category} className="category-item">
            <div className="category-header">
              <span 
                className="category-color" 
                style={{ backgroundColor: getCategoryColor(category) }}
              ></span>
              <span className="category-name">{getCategoryName(category)}</span>
            </div>
            <span className="category-total">{formatCurrency(total)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryBreakdown;