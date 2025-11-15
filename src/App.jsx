import ProductList from "./components/ProductList";
import CategoryFilter from "./components/CategoryFilter";
import ShoppingCart from "./components/ShoppingCart";
import { CartContext } from "./Context/Cartcontext";

function App() {
  // const filteredProducts =
  //   selectedCategory === "All"
  //     ? products
  //     : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="bg-[#EDF0F5] min-h-screen">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-3xl font-bold text-center">E-Commerce Store</h1>
      </header>
      <main className="container mx-auto p-4">
        <div className="md:flex md:gap-8">
          <div className="md:w-1/4">
            <CategoryFilter />
            <ShoppingCart />
          </div>
          <div className="md:w-3/4">
            <ProductList />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
