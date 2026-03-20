// components/SubscriptionList.js
import React from 'react';
import SubscriptionCard from './SubscriptionCard';

function SubscriptionList({ subscriptions, onEdit, onDelete }) {
  return (
    <div className="subscriptions-list">
      <h2>Мои подписки ({subscriptions.length})</h2>
      {subscriptions.length === 0 ? (
        <div className="empty-state">
          <p>Нет добавленных подписок</p>
          <p>Нажмите "Добавить подписку" чтобы начать</p>
        </div>
      ) : (
        <div className="subscriptions-grid">
          {subscriptions.map(sub => (
            <SubscriptionCard
              key={sub.id}
              subscription={sub}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SubscriptionList;