import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header.jsx";
import Blogs from "./pages/blogs.jsx";
import Home from "./pages/home.jsx";
import Footer from "./components/footer.jsx";
function App() {
  return (
    <div>
      <Header/>
      <Footer/>
      <Home/>
      <Routes>
        <Route path="/blogs" element={<Blogs/>} />
      </Routes>
    </div>
  );
}

export default App;
