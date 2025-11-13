import React from "react";

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              className="
    w-full 
    h-48 
    object-cover 
    object-center 
    rounded-t 
    bg-gray-100
    transition-transform 
    duration-300 
    hover:scale-105
  "
              src={product.image}
              alt="product image"
            />

            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-500">{product.category}</p>
            <p className="text-lg font-bold mt-2">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
