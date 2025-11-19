import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header.jsx";
import Blogs from "./pages/blogs.jsx";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/blogs" element={<Blogs/>} />
      </Routes>
    </div>
  );
}

export default App;
