import React, { useContext } from 'react';
import { CartContext } from '../Context/Cartcontext';

const ShoppingCart = () => {
  const { cart, removeFromCart } = useContext(CartContext)
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-2"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-500">
                  ${item.price} x {item.quantity}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <h3 className="text-xl font-bold mt-4">Total: ${total.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
