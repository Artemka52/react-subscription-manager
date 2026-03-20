// App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import StatsCards from './components/StatsCards';
import SubscriptionForm from './components/SubscriptionForm';
import SubscriptionList from './components/SubscriptionList';
import CalendarSection from './components/CalendarSection';
import UpcomingCharges from './components/UpcomingCharges';
import CategoryBreakdown from './components/CategoryBreakdown';
import Footer from './components/Footer';
import { calculateMonthlyTotal, calculateYearlyTotal } from './utils/helpers';
import './App.css';

function App() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    period: 'monthly',
    chargeDate: '',
    category: 'streaming',
    description: ''
  });

  // Загрузка из localStorage
  useEffect(() => {
    const saved = localStorage.getItem('subscriptions');
    if (saved) setSubscriptions(JSON.parse(saved));
  }, []);

  // Сохранение в localStorage
  useEffect(() => {
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
  }, [subscriptions]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newSubscription = {
      id: editingId || Date.now(),
      ...formData,
      price: parseFloat(formData.price),
      chargeDate: parseInt(formData.chargeDate)
    };

    if (editingId) {
      setSubscriptions(prev =>
        prev.map(sub => (sub.id === editingId ? newSubscription : sub))
      );
      setEditingId(null);
    } else {
      setSubscriptions(prev => [...prev, newSubscription]);
    }

    resetForm();
    setShowForm(false);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      price: '',
      period: 'monthly',
      chargeDate: '',
      category: 'streaming',
      description: ''
    });
  };

  const handleDelete = (id) => {
    if (window.confirm('Удалить эту подписку?')) {
      setSubscriptions(prev => prev.filter(sub => sub.id !== id));
    }
  };

  const handleEdit = (subscription) => {
    setFormData({
      name: subscription.name,
      price: subscription.price.toString(),
      period: subscription.period,
      chargeDate: subscription.chargeDate.toString(),
      category: subscription.category || 'streaming',
      description: subscription.description || ''
    });
    setEditingId(subscription.id);
    setShowForm(true);
  };

  const monthlyTotal = calculateMonthlyTotal(subscriptions);
  const yearlyTotal = calculateYearlyTotal(subscriptions);

  return (
    <div className="app">
      <Header />
      
      <div className="container">
        <StatsCards 
          count={subscriptions.length}
          monthlyTotal={monthlyTotal}
          yearlyTotal={yearlyTotal}
        />

        <div className="main-content">
          <div className="left-column">
            <button 
              className="add-button"
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? 'Скрыть форму' : 'Добавить подписку'}
            </button>

            {showForm && (
              <SubscriptionForm
                formData={formData}
                editingId={editingId}
                onInputChange={handleInputChange}
                onSubmit={handleSubmit}
                onCancel={() => {
                  setEditingId(null);
                  resetForm();
                  setShowForm(false);
                }}
              />
            )}

            <SubscriptionList
              subscriptions={subscriptions}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>

          <div className="right-column">
            <CalendarSection subscriptions={subscriptions} />
            <UpcomingCharges subscriptions={subscriptions} />
            <CategoryBreakdown subscriptions={subscriptions} />
          </div>
        </div>
      </div>

      <Footer yearlyTotal={yearlyTotal} />
    </div>
  );
}

export default App;