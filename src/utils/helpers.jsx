// utils/helpers.js

// Цвета для категорий
export const getCategoryColor = (category) => {
  const colors = {
    streaming: '#ff6b6b',
    software: '#4ecdc4',
    education: '#45b7d1',
    music: '#96ceb4',
    cloud: '#feca57',
    other: '#5f27cd'
  };
  return colors[category] || '#5f27cd';
};

// Форматирование валюты
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0
  }).format(amount);
};

// Подпись периода
export const getPeriodLabel = (period) => {
  const labels = {
    monthly: 'месяц',
    yearly: 'год',
    weekly: 'неделя',
    daily: 'день'
  };
  return labels[period] || period;
};

// Перевод категории на русский
export const getCategoryName = (category) => {
  const names = {
    streaming: 'Стриминг',
    software: 'Софт',
    education: 'Обучение',
    music: 'Музыка',
    cloud: 'Облако',
    other: 'Другое'
  };
  return names[category] || category;
};

// Расчёт эквивалента в месяц для одной подписки
export const getMonthlyEquivalent = (sub) => {
  switch (sub.period) {
    case 'monthly': return sub.price;
    case 'yearly': return sub.price / 12;
    case 'weekly': return sub.price * 4.33;
    case 'daily': return sub.price * 30;
    default: return 0;
  }
};

// Расчёт общей суммы в месяц
export const calculateMonthlyTotal = (subscriptions) => {
  return subscriptions.reduce((total, sub) => total + getMonthlyEquivalent(sub), 0);
};

// Расчёт общей суммы в год
export const calculateYearlyTotal = (subscriptions) => {
  return subscriptions.reduce((total, sub) => {
    switch (sub.period) {
      case 'monthly': return total + sub.price * 12;
      case 'yearly': return total + sub.price;
      case 'weekly': return total + sub.price * 52;
      case 'daily': return total + sub.price * 365;
      default: return total;
    }
  }, 0);
};

// Получение ближайших списаний (до 5)
export const getUpcomingCharges = (subscriptions) => {
  const today = new Date();
  const currentDay = today.getDate();
  
  return subscriptions
    .filter(sub => sub.chargeDate >= currentDay)
    .sort((a, b) => a.chargeDate - b.chargeDate)
    .slice(0, 5);
};

// Группировка по категориям для диаграммы
export const getCategoryTotals = (subscriptions) => {
  return subscriptions.reduce((acc, sub) => {
    acc[sub.category] = (acc[sub.category] || 0) + sub.price;
    return acc;
  }, {});
};