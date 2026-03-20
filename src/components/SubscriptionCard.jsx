// components/SubscriptionCard.js
import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import { getCategoryColor, formatCurrency, getPeriodLabel, getMonthlyEquivalent } from '../utils/helpers';

function SubscriptionCard({ subscription, onEdit, onDelete }) {
  const { id, name, price, period, chargeDate, category, description } = subscription;

  return (
    <div 
      className="subscription-card"
      style={{ borderLeftColor: getCategoryColor(category) }}
    >
      <div className="subscription-header">
        <h3>{name}</h3>
        <div className="subscription-actions">
          <button onClick={() => onEdit(subscription)}>
            <Edit2 size={16} />
          </button>
          <button onClick={() => onDelete(id)}>
            <Trash2 size={16} />
          </button>
        </div>
      </div>
      
      <div className="subscription-details">
        <div className="detail-item">
          <span>Стоимость:</span>
          <strong>{formatCurrency(price)} / {getPeriodLabel(period)}</strong>
        </div>
        <div className="detail-item">
          <span>Дата списания:</span>
          <strong>{chargeDate} число</strong>
        </div>
        <div className="detail-item">
          <span>В месяц:</span>
          <strong>{formatCurrency(getMonthlyEquivalent(subscription))}</strong>
        </div>
      </div>
      
      {description && (
        <p className="subscription-description">{description}</p>
      )}
    </div>
  );
}

export default SubscriptionCard;