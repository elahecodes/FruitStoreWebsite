import React from "react";
import { Link } from "react-router-dom";
import iconTitle from "../assets/icons/icon-title.png";
import arrowLeft from "../assets/icons/arrow-left.png";
import banner from "../assets/images/banner.png";
import { useContext } from "react";
import { ProductsContext } from "../pages/productProvider";
const productsThree = () => {
  const products = useContext(ProductsContext);
  const product = products[4].id;
  return (
    <div className="w-full my-0 mx-auto border border-neutral-100 bg-white rounded-xl p-4 flex flex-col justify-between items-start xl:items-center mt-8 md:mt-30">
      <div className="max-w-[1530px] ">
        <div className="w-full flex justify-between items-center mb-4">
          <div className="flex justify-center items-start gap-2">
            <img className="w-2 sm:w-2 lg:w-4 mt-1.5" src={iconTitle} />
            <h3 className="lg:text-4xl text-2xl font-lalezar text-neutral-800">
              سلامتی و
              <br />
              <span className="text-green-primery"> حال خوب</span>
            </h3>
          </div>
          <button className="bg-orange text-white px-2 py-1 pb-2 md:pb-2 rounded-md shadow-lg shadow-orange/80 flex justify-between items-center gap-3 cursor-pointer">
            <span className="text-[0.8rem] md:text-[1rem]">مشاهده بیشتر </span>
            <img className="w-3 md:w-4 mt-1 md:mt-1" src={arrowLeft} />
          </button>
        </div>
        <div className="w-full banner flex flex-col md:flex-row rounded-2xl gap-4">
          <Link to={`/products/${product}`}>
            <img
              className="w-[100%] hover:shadow-2xl items-start-safe cursor-pointer rounded-2xl transition-all"
              src={banner}
            />
          </Link>
          <Link to={`/products/${product}`}>
            <img
              className="w-[100%] hover:shadow-2xl items-end-safe cursor-pointer rounded-2xl transition-all"
              src={banner}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default productsThree;
