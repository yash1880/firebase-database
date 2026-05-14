import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from '../features/inventorySlice';

const ProductTable = ({ onEdit }) => {
  // Redux se items nikaalna
  const { items } = useSelector((state) => state.inventory);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm("Pakka delete karna hai?")) {
      dispatch(deleteProduct(id));
    }
  };

  return (
    <div className="inventory-section">
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.imageUrl} className="prod-img" alt={item.name} />
              </td>
              <td>{item.name}</td>
              <td>{item.stock}</td>
              <td>₹{item.price}</td>
              <td>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                  {/* EDIT BUTTON YAHAN HAI */}
                  <button 
                    className="edit-btn" 
                    onClick={() => onEdit(item)}
                  >
                    Edit
                  </button>

                  {/* DELETE BUTTON */}
                  <button 
                    className="delete-btn" 
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;