# PrestigeCart
**PrestigeCart** is a modern online shopping platform built with **React**, **TypeScript**, and **Vite**. It features user authentication, product browsing, shopping cart functionality, and a responsive, clean UI. Authentication is handled using **Supabase Auth**, and the app uses **React Context** for managing user and cart state.

## Features
**User Authentication**
- Sign up and sign in using **Supabase Auth**
- Authentication state managed with `AuthContext`
- Sign in / Sign up handled via modal for seamless experience

**Product Browsing**
- Display 12+ products in a responsive **product grid**
- Filtering, sorting, and search functionality
- Product cards with wishlist, quick view, and add-to-cart options

**Shopping Cart**
- Cart state managed with `CartContext`
- Add, remove, and update products in the cart
- Cart dropdown accessible from header

**Sections**
- **Hero Section** with banner and key features
- **Category Section** with category cards and promotions
- **Deals Section** with countdown timers for sales
- **Footer** with newsletter, links, and contact info

**Responsive Design**
- Mobile-first design
- Clean and modern user interface

## Tech Stack
- **Frontend:** React, TypeScript, Vite
- **Backend:** Supabase (Authentication & Database)
- **State Management:** React Context (Auth & Cart)
- **Styling:** Tailwind CSS
- **Routing:** React Router

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


## Installation
**Clone the repository:**
```bash 

git **clone git@github.com:hesbonangwenyi606/PrestigeCart.git**
cd PrestigeCart

## Install dependencies:
npm install

## Set up Supabase:
Create a Supabase project

## Add a .env file in the root:
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
un the development server:

## npm run dev
Open http://localhost:8080

## Usage
Users can sign up or sign in using the auth modal.
Browse products on the homepage and add items to the cart.
Filter products by categories and sort by price or popularity.
Check out deals in the Deals Section with countdown timers.
Header contains navigation, search, cart, and user menu options.

## Future Improvements
Add checkout and payment integration
Implement order history for users
Add user profile management
Fetch dynamic product data from Supabase
Improve SEO and performance optimizations

## License
This project is open-source and available under the MIT License.