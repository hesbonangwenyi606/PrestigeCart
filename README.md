# PrestigeCart

**PrestigeCart** is a modern online shopping platform built with **React**, **TypeScript**, and **Vite**. It features user authentication, product browsing, shopping cart functionality, and a responsive, clean UI. Authentication is handled using **Supabase Auth**, and the app uses **React Context** for managing user and cart state.

---

## Features

### User Authentication
- Sign up and sign in using **Supabase Auth**
- Authentication state managed with `AuthContext`
- Sign in / Sign up handled via modal for seamless experience

### Product Browsing
- Display 12+ products in a responsive **product grid**
- Filtering, sorting, and search functionality
- Product cards with wishlist, quick view, and add-to-cart options

### Shopping Cart
- Cart state managed with `CartContext`
- Add, remove, and update products in the cart
- Cart dropdown accessible from header

### Sections
- **Hero Section** with banner and key features
- **Category Section** with category cards and promotions
- **Deals Section** with countdown timers for sales
- **Footer** with newsletter, links, and contact info

### Responsive Design
- Mobile-first design
- Clean and modern user interface

---

## Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Backend:** Supabase (Authentication & Database)
- **State Management:** React Context (Auth & Cart)
- **Styling:** Tailwind CSS
- **Routing:** React Router

---

## Project Structure
src/
├─ components/
│ ├─ AppLayout.tsx
│ ├─ Header.tsx
│ ├─ HeroSection.tsx
│ ├─ CategorySection.tsx
│ ├─ ProductGrid.tsx
│ ├─ ProductCard.tsx
│ ├─ DealsSection.tsx
│ ├─ Footer.tsx
│ ├─ AuthModal.tsx
├─ contexts/
│ ├─ AuthContext.tsx
│ ├─ CartContext.tsx
├─ data/
│ ├─ products.ts
├─ lib/
│ ├─ supabase.ts
├─ pages/
│ ├─ Index.tsx
│ ├─ NotFound.tsx
├─ App.tsx
