import { createContext, useState } from "react";
import products from "../Data/product";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...new Set(products.map((item) => item.category))];
  return (
    <CategoryContext.Provider
      value={{ selectedCategory, setSelectedCategory, categories }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
