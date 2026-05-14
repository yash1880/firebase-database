import React, { useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductTable from '../components/ProductTable';

const Dashboard = () => {
  // Ye state batayegi ki kaunsa product edit ho raha hai
  const [editingProduct, setEditingProduct] = useState(null);

  return (
    <div className="dashboard-wrapper">
      <div className="form-box">
        {/* Form ko editingProduct bhej rahe hain */}
        <ProductForm 
          editingProduct={editingProduct} 
          setEditingProduct={setEditingProduct} 
        />
      </div>

      <div className="inventory-section">
        {/* Table se data utha kar state mein daal rahe hain */}
        <ProductTable onEdit={(item) => setEditingProduct(item)} />
      </div>
    </div>
  );
};

export default Dashboard;