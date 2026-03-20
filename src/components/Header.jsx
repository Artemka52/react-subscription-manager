// components/Header.js
import React from 'react';
import { DollarSign } from 'lucide-react';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1><DollarSign size={28} /> Диспетчер подписок</h1>
        <p>Контролируйте все ваши регулярные платежи в одном месте</p>
      </div>
    </header>
  );
}

export default Header;