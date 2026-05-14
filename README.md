# 📦 Inventory Tracking System

A professional and industry-ready **Inventory Management System** built using **React.js, Redux Toolkit, Firebase Realtime Database, and Redux Thunk**.

This application helps businesses manage inventory efficiently with real-time synchronization, CRUD operations, and centralized state management.

---

# 🚀 Features

## ➕ Add Product

Add new inventory products with details such as:

- Product Name
- Category
- Stock Quantity
- Product Price

---

## 📋 View Products

Fetch and display all inventory items in a structured table or card layout with:

- Product Name
- Category
- Quantity
- Price
- Product Status

---

## ✏️ Update Product

Modify product information such as:

- Product Name
- Stock Quantity
- Product Price
- Product Category

Changes sync instantly with Firebase Database.

---

## 🗑️ Delete Product

Remove discontinued or unavailable products from inventory.

Redux updates UI instantly without manual refresh.

---

## ⚠️ Low Stock Alerts

Highlight products with low stock quantity for better inventory management.

---

## 🔥 Real-Time Synchronization

Whenever products are:

- Added
- Updated
- Deleted

Firebase syncs data instantly across all connected users.

---

# 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| React.js | Frontend |
| Redux Toolkit | State Management |
| Redux Thunk | Async Firebase Operations |
| Firebase Realtime Database | Backend Database |
| Tailwind CSS / Material UI | Styling |
| Vercel / Firebase Hosting | Deployment |

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/inventory-tracking-system.git
cd inventory-tracking-system
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

# 🔥 Firebase Setup

## 3️⃣ Configure Firebase

Navigate to:

```bash
src/firebase/firebaseConfig.js
```

Add your Firebase configuration:

```javascript
const firebaseConfig = {
  const firebaseConfig = {
  apiKey: "AIzaSyDipcoXCYXgLTGNnTRlE9vGwPQie33p44c",
  authDomain: "fire-database-11.firebaseapp.com",
  databaseURL: "https://fire-database-11-default-rtdb.firebaseio.com",
  projectId: "fire-database-11",
  storageBucket: "fire-database-11.firebasestorage.app",
  messagingSenderId: "145298023841",
  appId: "1:145298023841:web:ecb6a41a4519a2a31897e0",
  measurementId: "G-QDQ19RXYY4"
};
};
```

---

# ▶️ Run Project

## 4️⃣ Start Development Server

```bash
npm run dev
```

---

# 📂 Project Structure

```plaintext
src/
├── app/
│   └── store.js
├── features/
│   └── inventorySlice.js
├── components/
│   ├── AddProduct.jsx
│   ├── ProductList.jsx
│   ├── ProductCard.jsx
│   └── SearchFilter.jsx
├── firebase/
│   └── firebaseConfig.js
├── pages/
│   └── Dashboard.jsx
├── App.jsx
└── main.jsx
```

---

# 🔥 Redux Modules Included

- addProduct
- fetchProducts
- updateProduct
- deleteProduct
- loadingState
- errorHandling

---

# 📚 Use Case

This system can be used in:

- Retail Stores
- Warehouses
- Supermarkets
- E-commerce Inventory
- Product Management Systems

### Example Workflow

1. Admin adds products
2. Staff updates stock quantity
3. System syncs data instantly
4. Low stock products get highlighted

---

# 🌟 Future Enhancements

- 📊 Sales Analytics Dashboard
- 🔔 Stock Notifications
- 📦 Barcode Scanner Integration
- 🔐 Authentication System
- 📄 Export Inventory Reports
- 🌙 Dark Mode Support

---

# 🛡️ Firebase Database Rules

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

---

# 📜 License

MIT License

---

# 👨‍💻 Developer

Made with ❤️ by Yash Bulchandani
