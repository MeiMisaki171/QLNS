import React, { createContext, useContext, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
  ]);

  const addProduct = (product: Product) => setProducts([...products, product]);
  const removeProduct = (id: number) => setProducts(products.filter((p) => p.id !== id));

  return <ProductContext.Provider value={{ products, addProduct, removeProduct }}>{children}</ProductContext.Provider>;
};

export const useProduct = () => useContext(ProductContext)!;
