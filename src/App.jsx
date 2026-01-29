import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Blogs from "./pages/blogs.jsx";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import MainLayout from "./pages/mainLayout.jsx";
import AuthLayout from "./pages/AuthLayout.jsx";
import VerificationCode from "./pages/verificationCode.jsx";
import ProductPage from "./pages/productPage.jsx";
import Products from "./pages/products.jsx";
import ProductsProvider from "./pages/productProvider.jsx";
import CartContextProvider from "./pages/CartContextProvider.jsx";
import Product from "./pages/product.jsx";
import ShopCart from "./pages/shopCart.jsx";

function App() {
  return (
    <ProductsProvider>
      <CartContextProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/product" element={<Product />} />
            <Route path="/shopcart" element={<ShopCart/>} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/verificationCode" element={<VerificationCode />} />
          </Route>
        </Routes>
        </CartContextProvider>
    </ProductsProvider>
  );
}

export default App;
