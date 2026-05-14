import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { items } = useSelector(state => state.inventory);
  // Total products calculate karna [cite: 3]
  const totalItems = items.length;

  return (
    <nav className="navbar">
      <h2>Inventory Pro</h2>
      <div className="stats">
        <span>Total Products: {totalItems}</span>
      </div>
    </nav>
  );
};

export default Navbar;