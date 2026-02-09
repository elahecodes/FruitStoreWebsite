import React, { useContext } from "react";
import { ProductsContext } from "../pages/productProvider";
import iconTitle from "/src/assets/icons/icon-title.png";
import arrowLeft from "/src/assets/icons/arrow-left.png";
import shop from "../assets/icons/shopW.png";
import { Link } from "react-router-dom";
const ProductsFour = () => {
  const data = useContext(ProductsContext);
  return (
    <div className="flex flex-col justify-start items-center gap-5 p-4 rounded-2xl mt-16">
      <div className="w-full flex justify-between items-center bg-white px-2 py-1 rounded border border-neutral-100">
        <div className="flex justify-center items-center gap-2">
          <img className="w-2" src={iconTitle} />
          <h3 className="text-lg md:text-2xl font-lalezar text-neutral-800">
            میوه های پر فروش
          </h3>
        </div>
        <button className="bg-orange text-white px-2 py-1 pb-2 md:pb-2 rounded-md shadow-lg shadow-orange/80 flex justify-between items-center gap-3 cursor-pointer">
          <span className="text-[0.8rem] md:text-[1rem]">مشاهده بیشتر </span>
          <img className="w-3 md:w-4 mt-1 md:mt-1" src={arrowLeft} />
        </button>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-1 md:gap-3">
        {data.map((item) => (
          <Link to={`/productPage/${item.id}`}>
            <div
              key={item.id}
              className="slide snap-start hover:border-orange transition-all cursor-pointer border shrink-0 border-neutral-300 bg-white rounded-xl flex flex-col justify-between p-2 md:gap-3"
            >
              <div className="h-40 overflow-hidden">
                <img className="w-full" src={item.imgOne} />
              </div>
              <span className="text-xl">{item.title}</span>
              <div className="w-full rounded-md bg-green-lightness p-1 flex justify-between items-center self-end">
                <div className="flex flex-col justify-start">
                  <span>هرکیلو</span>
                  <b>
                    {item.price}
                    <span className="text-xs text-gray-500 mr-1.5">تومان</span>
                  </b>
                </div>
                <button className="hidden lg:block bg-green-primery p-2 rounded-full cursor-pointer hover:shadow-lg hover:shadow-green-primery hover:scale-110 transition-all">
                  <img className="w-6 h-6 hidden md:block" src={shop} />
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsFour;
