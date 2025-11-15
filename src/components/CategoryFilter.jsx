import React, { useContext } from "react";

import { CategoryContext } from "../Context/CategoryContext.jsx";

const CategoryFilter = () => {
  const { setSelectedCategory, categories } = useContext(CategoryContext);

  return (
    <div className="flex flex-wrap mb-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className="bg-blue-500 mb-2 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
