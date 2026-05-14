import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, updateProduct } from '../features/inventorySlice';

const ProductForm = ({ editingProduct, setEditingProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const dispatch = useDispatch();

  // Jab Edit button dabayein, tab form fill ho jaye
  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name);
      setPrice(editingProduct.price);
      setStock(editingProduct.stock);
      setImageUrl(editingProduct.imageUrl);
    }
  }, [editingProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = { name, price: Number(price), stock: Number(stock), imageUrl };

    if (editingProduct) {
      // Firebase Update logic (Humne slice mein banaya tha)
      dispatch(updateProduct({ id: editingProduct.id, ...productData }));
      setEditingProduct(null); // Edit mode khatam
    } else {
      dispatch(addProduct(productData));
    }

    // Form clear karo
    setName(''); setPrice(''); setStock(''); setImageUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingProduct ? "Update Product" : "Add New Product"}</h2>
      <input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <input type="number" placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)} required />
      <input type="text" placeholder="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      
      <button className="add-btn" type="submit">
        {editingProduct ? "Update in Firebase" : "Add to Inventory"}
      </button>

      {editingProduct && (
        <button className="cancel-btn" type="button" onClick={() => setEditingProduct(null)}>
          Cancel Edit
        </button>
      )}
    </form>
  );
};

export default ProductForm;