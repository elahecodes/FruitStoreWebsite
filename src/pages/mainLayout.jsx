import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* main به اندازه محتوا است، scroll روی window */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;