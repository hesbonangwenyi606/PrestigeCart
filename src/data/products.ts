export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  badge?: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://d64gsuwffb70l.cloudfront.net/695534d180a31c349ad968ab_1767191875084_a37fc93d.png",
    category: "Electronics",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    description: "Experience crystal-clear audio with our premium wireless headphones featuring active noise cancellation."
  },
  {
    id: 2,
    name: "Studio Pro Headphones",
    price: 249.99,
    image: "https://d64gsuwffb70l.cloudfront.net/695534d180a31c349ad968ab_1767191874445_c07266a5.jpg",
    category: "Electronics",
    rating: 4.6,
    reviews: 892,
    description: "Professional-grade studio headphones for audiophiles and music producers."
  },
  {
    id: 3,
    name: "Bluetooth Audio Elite",
    price: 179.99,
    originalPrice: 229.99,
    image: "https://d64gsuwffb70l.cloudfront.net/695534d180a31c349ad968ab_1767191872808_d151e9c0.jpg",
    category: "Electronics",
    rating: 4.5,
    reviews: 654,
    badge: "Sale",
    description: "Compact and powerful Bluetooth headphones with 30-hour battery life."
  },
  {
    id: 4,
    name: "Smart Watch Pro",
    price: 449.99,
    image: "https://d64gsuwffb70l.cloudfront.net/695534d180a31c349ad968ab_1767191891355_7a611ead.png",
    category: "Electronics",
    rating: 4.9,
    reviews: 2341,
    badge: "New",
    description: "Advanced smartwatch with health monitoring, GPS, and seamless connectivity."
  },
  {
    id: 5,
    name: "Fitness Tracker Watch",
    price: 199.99,
    originalPrice: 249.99,
    image: "https://d64gsuwffb70l.cloudfront.net/695534d180a31c349ad968ab_1767191891043_a3428b5c.jpg",
    category: "Electronics",
    rating: 4.4,
    reviews: 1876,
    badge: "Sale",
    description: "Track your fitness goals with precision using our advanced fitness tracker."
  },
  {
    id: 6,
    name: "Classic Digital Watch",
    price: 149.99,
    image: "https://d64gsuwffb70l.cloudfront.net/695534d180a31c349ad968ab_1767191890244_134e6244.jpg",
    category: "Electronics",
    rating: 4.3,
    reviews: 543,
    description: "Elegant digital watch combining classic design with modern technology."
  },
  {
    id: 7,
    name: "Designer Leather Tote",
    price: 389.99,
    image: "https://d64gsuwffb70l.cloudfront.net/695534d180a31c349ad968ab_1767191968304_2eea06ba.png",
    category: "Fashion",
    rating: 4.7,
    reviews: 876,
    badge: "Premium",
    description: "Handcrafted Italian leather tote bag with premium hardware and spacious interior."
  },
  {
    id: 8,
    name: "Crossbody Messenger Bag",
    price: 159.99,
    originalPrice: 199.99,
    image: "https://d64gsuwffb70l.cloudfront.net/695534d180a31c349ad968ab_1767191906746_9f9e1548.jpg",
    category: "Fashion",
    rating: 4.5,
    reviews: 432,
    badge: "Sale",
    description: "Versatile crossbody bag perfect for everyday use with multiple compartments."
  },
  {
    id: 9,
    name: "Luxury Evening Clutch",
    price: 279.99,
    image: "https://d64gsuwffb70l.cloudfront.net/695534d180a31c349ad968ab_1767191909070_9752bcb0.png",
    category: "Fashion",
    rating: 4.8,
    reviews: 321,
    description: "Elegant evening clutch with gold accents, perfect for special occasions."
  },
  {
    id: 10,
    name: "Urban Runner Sneakers",
    price: 189.99,
    image: "https://d64gsuwffb70l.cloudfront.net/695534d180a31c349ad968ab_1767191987571_ee8ada70.png",
    category: "Footwear",
    rating: 4.6,
    reviews: 1543,
    badge: "Trending",
    description: "Lightweight and comfortable sneakers designed for urban adventures."
  },
  {
    id: 11,
    name: "Classic White Trainers",
    price: 129.99,
    originalPrice: 159.99,
    image: "https://d64gsuwffb70l.cloudfront.net/695534d180a31c349ad968ab_1767191983841_766f3fa0.jpg",
    category: "Footwear",
    rating: 4.4,
    reviews: 987,
    badge: "Sale",
    description: "Timeless white trainers that go with everything in your wardrobe."
  },
  {
    id: 12,
    name: "Sport Performance Shoes",
    price: 219.99,
    image: "https://d64gsuwffb70l.cloudfront.net/695534d180a31c349ad968ab_1767191990376_f15a6a5a.png",
    category: "Footwear",
    rating: 4.7,
    reviews: 765,
    description: "High-performance athletic shoes with advanced cushioning technology."
  }
];

export const categories = [
  { name: "All", count: products.length },
  { name: "Electronics", count: products.filter(p => p.category === "Electronics").length },
  { name: "Fashion", count: products.filter(p => p.category === "Fashion").length },
  { name: "Footwear", count: products.filter(p => p.category === "Footwear").length },
];

export const heroImage = "https://d64gsuwffb70l.cloudfront.net/695534d180a31c349ad968ab_1767191856632_2719ddae.jpg";
