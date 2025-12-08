import React from "react";
import {Outlet } from "react-router-dom";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";

const mainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default mainLayout;
