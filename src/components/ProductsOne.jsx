import React, { useContext } from "react";
import { ProductsContext } from "../pages/productProvider";
import iconTitleW from "../assets/icons/icon-title-white.png";
import bgOrange from "/src/assets/background/bg-orange.png";
import arrowLeft from "/src/assets/icons/arrow-left.png";
import { Link } from "react-router-dom";
import shop from "../assets/icons/shopW.png"
const ProductsOne = () => {
  const data = useContext(ProductsContext);
  return (
    <div className="mt-15 relative h-[22rem]">
      <img
        className="absolute z-0 top-0 lg:h-80 md:h-60 h-64 w-full"
        src={bgOrange}
      />
      <div className="w-full absolute flex flex-col justify-center items-center gap-20">
        <div className="w-full right-0 flex justify-between items-center absolute top-3 px-3">
          <div className="flex justify-center items-center gap-2">
            <img className="w-3" src={iconTitleW} />
            <h4 className="text-white text-lg md:text-2xl font-lalezar">
              محصولات تازه
            </h4>
          </div>
          <div className="flex justify-end items-center">
            <button className="bg-white/20 text-white px-2 py-1 pb-1.5 hover:bg-white hover:text-orange transition rounded-md md:rounded-3xl shadow-lg shadow-orange/80 flex justify-between items-center gap-3 cursor-pointer">
              <span className="text-[0.8rem] md:text-[1rem]">مشاهده بیشتر</span>
              <img className="w-4 mt-1" src={arrowLeft} />
            </button>
          </div>
        </div>
        <div className="w-[97%] absolute top-10 overflow-x-scroll snap-mandatory snap-x no-scrollbar pt-10 pb-3 scrollbar-custom flex justify-start items-center gap-1">
          {data.map((data) => (
            <Link to={`/products/${data.id}`}>
              <div
                key={data?.id}
                className="slide w-40 md:w-60 h-62 md:h-80 hover:border-green-secondry border-green-primery border shrink-0 transition-all cursor-pointer border-neutral-300 bg-white rounded-lg flex flex-col justify-between p-2 gap-3"
              >
                <div className="w-full h-44 overflow-hidden">
                  <img className="w-full" src={data?.imgOne} alt="image" />
                </div>
                <span className="text-sm md:text-xl">{data?.title}</span>
                <div className="w-full rounded-md bg-green-lightness p-1 flex justify-between items-center self-end">
                  <div className="flex flex-col justify-start">
                    <span className="text-xs md:text-sm">هرکیلو</span>
                    <b className="text-xs md:text-sm">
                      {data?.price}
                      <span className="text-xs text-gray-500 mr-1.5">
                        تومان
                      </span>
                    </b>
                  </div>
                  <button className="hidden md:block bg-green-primery p-1 md:p-2 rounded-full cursor-pointer hover:shadow-lg hover:shadow-green-primery hover:scale-110 transition-all">
                    <img className="md:w-6 md:h-6 w-4 h-4" src={shop} />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsOne;
