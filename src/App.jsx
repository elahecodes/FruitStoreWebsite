import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Blogs from "./pages/blogs.jsx";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import MainLayout from "./pages/mainLayout.jsx";
import AuthLayout from "./pages/AuthLayout.jsx";
import VerificationCode from "./pages/verificationCode.jsx";
import Shop from "./pages/Shop.jsx";
import ProductPage from "./pages/productPage.jsx";
import Products from "./pages/products.jsx";
import ProductsProvider from "./pages/productProvider.jsx";

function App() {
  return (
    <ProductsProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/productPage/:id" element={<ProductPage />} />
          <Route path="/products" element={<Products />} />

        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/verificationCode" element={<VerificationCode />} />
        </Route>
      </Routes>
    </ProductsProvider>
  );
}

export default App;
