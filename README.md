# Lumora — Modern E-Commerce Website

A full-stack e-commerce site built with **React + Vite + Tailwind CSS** (frontend) and
**Node.js + Express + MongoDB** (backend).

## Project Structure

```
ecommerce/
├── client/          React + Vite + Tailwind frontend
└── server/          Node.js + Express + MongoDB backend
```

## Features

- Home, Shop (search/filter/sort/pagination), Product Details, Categories, Cart, Wishlist,
  Checkout, Login, Register, Profile, Order History, Admin Dashboard, Contact, About, 404
- JWT authentication with bcrypt password hashing
- Product reviews & ratings, flash sale / new arrival / best seller badges
- Cart & wishlist work for guests (localStorage) and sync to the server once logged in
- Coupon codes at checkout (try `SAVE10`, `WELCOME15`, `FLASH20`)
- Admin dashboard: manage products (create/edit/delete), update order status, manage users,
  sales overview
- Responsive, glassmorphism UI with smooth animations, toast notifications, skeleton loading,
  dark-mode toggle, scroll-to-top button

## Getting Started

### 1. Backend

```bash
cd server
cp .env.example .env      # then edit MONGO_URI / JWT_SECRET as needed
npm install
npm run seed               # populates demo categories, products, and two users
npm run dev                 # starts the API on http://localhost:5000
```

Demo accounts created by the seed script:

| Role     | Email            | Password  |
|----------|------------------|-----------|
| Admin    | admin@shop.com   | admin123  |
| Customer | demo@shop.com    | demo1234  |

You'll need a running MongoDB instance. The default `.env.example` points to
`mongodb://127.0.0.1:27017/ecommerce` (local MongoDB) — swap in a MongoDB Atlas
connection string if you'd rather use a hosted database.

### 2. Frontend

```bash
cd client
npm install
npm run dev                 # starts the app on http://localhost:5173
```

The Vite dev server proxies `/api` requests to `http://localhost:5000`, so make sure the
backend is running first.

### 3. Build for production

```bash
cd client
npm run build                # outputs static files to client/dist
```

Serve `client/dist` with any static host, and deploy `server/` to a Node host (Render,
Railway, Fly.io, etc.), pointing `CLIENT_URL` in `.env` at your deployed frontend URL.

## Tech Stack

**Frontend:** React 18, Vite, Tailwind CSS, React Router, Axios, lucide-react, react-hot-toast
**Backend:** Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs

## Notes

- Product images in the seed data are hotlinked from Unsplash for demo purposes — swap in
  your own product photography (and wire up `multer` in `server/` if you want file uploads).
- The coupon codes are hardcoded in `server/controllers/orderController.js` for demo purposes;
  replace with a real `Coupon` collection for production use.
