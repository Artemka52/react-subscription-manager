// components/CalendarSection.js
import React from 'react';
import { Calendar } from 'lucide-react';
import { formatCurrency } from '../utils/helpers';

function CalendarSection({ subscriptions }) {
  return (
    <div className="calendar-section">
      <h2><Calendar size={20} /> Календарь списаний</h2>
      <div className="calendar-grid">
        {Array.from({ length: 31 }, (_, i) => i + 1).map(day => {
          const daySubscriptions = subscriptions.filter(sub => sub.chargeDate === day);
          const hasCharges = daySubscriptions.length > 0;
          
          return (
            <div 
              key={day} 
              className={`calendar-day ${hasCharges ? 'has-charges' : ''}`}
            >
              <div className="day-number">{day}</div>
              {hasCharges && (
                <div className="day-charges">
                  <div className="charge-dot"></div>
                  <span>{daySubscriptions.length}</span>
                </div>
              )}
              {hasCharges && (
                <div className="day-tooltip">
                  <strong>{day} число:</strong>
                  {daySubscriptions.map(sub => (
                    <div key={sub.id}>{sub.name} - {formatCurrency(sub.price)}</div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CalendarSection;