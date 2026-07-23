import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
import ShopCart from "./pages/ShopCart.jsx";
import BlogsProvider from "./components/BlogsProvider.jsx";
import BlogsPage from "./components/BlogsPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Notification from "./components/Notification.jsx";
import Questions from "./pages/Questions.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <ProductsProvider>
        <CartContextProvider>
          <BlogsProvider>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/blogsPage" element={<BlogsPage />} />
                <Route path="/blogsPage/:id" element={<BlogPage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductPage />} />
                <Route path="/product" element={<Product />} />
                <Route path="/shopcart" element={<ShopCart />} />
                <Route path="/notifications" element={<Notification />} />
                <Route path="/Questions" element={<Questions />} />
              </Route>

              <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route
                  path="/verificationCode"
                  element={<VerificationCode />}
                />
              </Route>
            </Routes>
          </BlogsProvider>
        </CartContextProvider>
      </ProductsProvider>
    </>
  );
}

export default App;
