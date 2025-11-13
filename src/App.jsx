import { useState } from 'react';

import ProductList from './components/ProductList';
import CategoryFilter from './components/CategoryFilter';
import ShoppingCart from './components/ShoppingCart';

const initialProducts = [
  { 
    id: 1, 
    name: 'Laptop', 
    category: 'Electronics', 
    price: 1200,
    image: 'https://picsum.photos/seed/laptop/300/200'
  },
  { 
    id: 2, 
    name: 'T-Shirt', 
    category: 'Clothing', 
    price: 25,
    image: 'https://picsum.photos/seed/tshirt/300/200'
  },
  { 
    id: 3, 
    name: 'The Great Gatsby', 
    category: 'Books', 
    price: 15,
    image: 'https://picsum.photos/seed/gatsby/300/200'
  },
  { 
    id: 4, 
    name: 'Smartphone', 
    category: 'Electronics', 
    price: 800,
    image: 'https://picsum.photos/seed/smartphone/300/200'
  },
  { 
    id: 5, 
    name: 'Jeans', 
    category: 'Clothing', 
    price: 50,
    image: 'https://picsum.photos/seed/jeans/300/200'
  },
  { 
    id: 6, 
    name: 'Sapiens', 
    category: 'Books', 
    price: 20,
    image: 'https://picsum.photos/seed/sapiens/300/200'
  },

  // More Electronics
  { 
    id: 7, 
    name: 'Headphones', 
    category: 'Electronics', 
    price: 150,
    image: 'https://picsum.photos/seed/headphones/300/200'
  },
  { 
    id: 8, 
    name: 'Tablet', 
    category: 'Electronics', 
    price: 500,
    image: 'https://picsum.photos/seed/tablet/300/200'
  },
  { 
    id: 9, 
    name: 'Bluetooth Speaker', 
    category: 'Electronics', 
    price: 90,
    image: 'https://picsum.photos/seed/speaker/300/200'
  },

  // More Clothing
  { 
    id: 10, 
    name: 'Hoodie', 
    category: 'Clothing', 
    price: 40,
    image: 'https://picsum.photos/seed/hoodie/300/200'
  },
  { 
    id: 11, 
    name: 'Sneakers', 
    category: 'Clothing', 
    price: 70,
    image: 'https://picsum.photos/seed/sneakers/300/200'
  },
  { 
    id: 12, 
    name: 'Jacket', 
    category: 'Clothing', 
    price: 85,
    image: 'https://picsum.photos/seed/jacket/300/200'
  },

  // More Books
  { 
    id: 13, 
    name: 'Atomic Habits', 
    category: 'Books', 
    price: 18,
    image: 'https://picsum.photos/seed/atomic/300/200'
  },
  { 
    id: 14, 
    name: '1984', 
    category: 'Books', 
    price: 17,
    image: 'https://picsum.photos/seed/1984/300/200'
  },
  { 
    id: 15, 
    name: 'Rich Dad Poor Dad', 
    category: 'Books', 
    price: 16,
    image: 'https://picsum.photos/seed/richdad/300/200'
  }
];


function App() {
  const [products] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem.quantity === 1) {
        return prevCart.filter((item) => item.id !== product.id);
      }
      return prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const categories = ['All', ...new Set(products.map((p) => p.category))];

  return (
    <div className="bg-[#EDF0F5] min-h-screen">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-3xl font-bold text-center">E-Commerce Store</h1>
      </header>
      <main className="container mx-auto p-4">
        <div className="md:flex md:gap-8">
          <div className="md:w-1/4">
            <CategoryFilter
              categories={categories}
              setSelectedCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
            <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
          </div>
          <div className="md:w-3/4">
            <ProductList products={filteredProducts} addToCart={addToCart} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;