import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/header.jsx";
import Blogs from "./pages/blogs.jsx";
import Home from "./pages/home.jsx";
import Footer from "./components/footer.jsx";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to ="/home"/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
