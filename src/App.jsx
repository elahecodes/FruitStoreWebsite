import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Blogs from "./pages/blogs.jsx";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import MainLayout from "./pages/mainLayout.jsx";
import AuthLayout from "./pages/AuthLayout.jsx";
function App() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element ={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
