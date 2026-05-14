import React from 'react';
import { useSelector } from 'react-redux';

const LowStockAlert = () => {
  const { items } = useSelector(state => state.inventory);
  const lowStock = items.filter(i => i.stock < 5); // Low stock highlight logic [cite: 11]

  if (lowStock.length === 0) return null;

  return (
    <div className="alert-box">
      <h3>⚠️ Low Stock Alerts</h3>
      {lowStock.map(i => <p key={i.id}>{i.name} has only {i.stock} left!</p>)}
    </div>
  );
};

export default LowStockAlert;