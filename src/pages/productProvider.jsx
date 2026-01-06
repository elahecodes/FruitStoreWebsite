import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/src/data/products.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
