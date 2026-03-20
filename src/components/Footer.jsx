// components/Footer.js
import React from 'react';
import { formatCurrency } from '../utils/helpers';

function Footer({ yearlyTotal }) {
  return (
    <footer className="footer">
      <p>Диспетчер подписок | Всего экономии: {formatCurrency(yearlyTotal * 0.2)} в год</p>
      <p className="footer-hint">Отмена ненужных подписок может сэкономить деньги</p>
    </footer>
  );
}

export default Footer;