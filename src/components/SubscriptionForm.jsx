// components/SubscriptionForm.js
import React from 'react';

function SubscriptionForm({ formData, editingId, onInputChange, onSubmit, onCancel }) {
  return (
    <div className="form-container">
      <h2>{editingId ? 'Редактировать' : 'Новая подписка'}</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Название сервиса *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onInputChange}
            required
            placeholder="Netflix, Spotify, Яндекс.Плюс..."
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Стоимость *</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={onInputChange}
              required
              min="0"
              step="0.01"
              placeholder="0.00"
            />
          </div>

          <div className="form-group">
            <label>Период *</label>
            <select
              name="period"
              value={formData.period}
              onChange={onInputChange}
              required
            >
              <option value="monthly">Ежемесячно</option>
              <option value="yearly">Ежегодно</option>
              <option value="weekly">Еженедельно</option>
              <option value="daily">Ежедневно</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Дата списания *</label>
            <input
              type="number"
              name="chargeDate"
              value={formData.chargeDate}
              onChange={onInputChange}
              required
              min="1"
              max="31"
              placeholder="1-31"
            />
            <span className="hint">Число месяца</span>
          </div>

          <div className="form-group">
            <label>Категория</label>
            <select
              name="category"
              value={formData.category}
              onChange={onInputChange}
            >
              <option value="streaming">Стриминг</option>
              <option value="software">Софт</option>
              <option value="education">Обучение</option>
              <option value="music">Музыка</option>
              <option value="cloud">Облако</option>
              <option value="other">Другое</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Описание (необязательно)</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={onInputChange}
            rows="3"
            placeholder="Дополнительная информация..."
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">
            {editingId ? 'Обновить' : 'Добавить'}
          </button>
          {editingId && (
            <button type="button" className="cancel-btn" onClick={onCancel}>
              Отмена
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SubscriptionForm;