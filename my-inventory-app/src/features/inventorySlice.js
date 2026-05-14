import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from "../firebase/firebaseConfig";
import { ref, push, set, get, remove, update } from "firebase/database";

/** * 1. Database se products fetch karna 
 */
export const fetchProducts = createAsyncThunk("inventory/fetchProducts", async () => {
  const snapshot = await get(ref(db, 'inventory'));
  const data = snapshot.val();
  // Firebase object return karta hai, humein use array mein convert karna hoga
  return data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
});

/** * 2. Naya product add karna 
 */
export const addProduct = createAsyncThunk("inventory/addProduct", async (product) => {
  const newRef = push(ref(db, 'inventory'));
  await set(newRef, product);
  return { id: newRef.key, ...product };
});

/** * 3. Product update (Edit) karna 
 */
export const updateProduct = createAsyncThunk("inventory/updateProduct", async (product) => {
  const { id, ...dataWithoutId } = product; // ID alag karo
  const updates = {};
  updates[`inventory/${id}`] = dataWithoutId; // Sahi path: inventory/YOUR_ID
  
  await update(ref(db), updates);
  return product; // Updated data dispatch ke liye
});

/** * 4. Product delete karna 
 */
export const deleteProduct = createAsyncThunk("inventory/deleteProduct", async (id) => {
  await remove(ref(db, `inventory/${id}`));
  return id;
});

const inventorySlice = createSlice({
  name: 'inventory',
  initialState: { 
    items: [], 
    loading: false,
    error: null 
  },
  reducers: {}, // Yahan normal reducers ki zaroorat nahi hai
  extraReducers: (builder) => {
    builder
      // Fetch Logic
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      
      // Add Logic
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      
      // Delete Logic
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      })
      
      // Update (Edit) Logic - Iske bina edit kaam nahi karega
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload; // Local state update
        }
      });
  }
});

export default inventorySlice.reducer;