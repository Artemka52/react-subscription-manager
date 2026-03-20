// components/UpcomingCharges.js
import React from 'react';
import { getUpcomingCharges, formatCurrency, getPeriodLabel } from '../utils/helpers';

function UpcomingCharges({ subscriptions }) {
  const upcoming = getUpcomingCharges(subscriptions);

  return (
    <div className="upcoming-charges">
      <h2>Ближайшие списания</h2>
      {upcoming.length === 0 ? (
        <p className="no-upcoming">Нет предстоящих списаний в этом месяце</p>
      ) : (
        <div className="upcoming-list">
          {upcoming.map(sub => (
            <div key={sub.id} className="upcoming-item">
              <div className="upcoming-date">
                <div className="date-circle">{sub.chargeDate}</div>
                <span>число</span>
              </div>
              <div className="upcoming-info">
                <h4>{sub.name}</h4>
                <p>{formatCurrency(sub.price)} / {getPeriodLabel(sub.period)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UpcomingCharges;