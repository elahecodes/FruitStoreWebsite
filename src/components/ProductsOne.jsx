import React, { useContext } from "react";
import { ProductsContext } from "../pages/productProvider";
import iconTitleW from "../assets/icons/icon-title-white.png";
import bgOrange from "/src/assets/background/bg-orange.png";
import arrowLeft from "/src/assets/icons/arrow-left.png";
import { Link } from "react-router-dom";
import shop from "../assets/icons/shopW.png";

const ProductsOne = () => {
  const products = useContext(ProductsContext);

  if (!products?.length) return null;

  return (
    <div className="mt-15 relative h-[22rem]">
      <img
        className="absolute z-0 top-0 lg:h-80 md:h-60 h-64 w-full"
        src={bgOrange}
        alt="background"
      />

      <div className="w-full absolute flex flex-col justify-center items-center gap-20">
        {/* Header */}
        <div className="w-full flex justify-between items-center absolute top-3 px-3">
          <div className="flex items-center gap-2">
            <img className="w-3" src={iconTitleW} alt="title icon" />
            <h4 className="text-white text-lg md:text-2xl font-lalezar">
              محصولات تازه
            </h4>
          </div>

          <button className="bg-white/20 text-white px-2 py-1.5 hover:bg-white hover:text-orange transition rounded-md md:rounded-3xl shadow-lg shadow-orange/80 flex items-center gap-3">
            <Link to={`/products/${2}`} className="text-[0.8rem] md:text-[1rem]">مشاهده بیشتر</Link>
            <img className="w-4 mt-1" src={arrowLeft} alt="arrow" />
          </button>
        </div>

        {/* Products */}
        <div className="w-[97%] absolute top-10 overflow-x-scroll snap-x snap-mandatory no-scrollbar pt-10 pb-3 flex gap-1">
          {products.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <div className="snap-start w-40 md:w-60 h-62 md:h-80 border border-neutral-300 hover:border-green-secondry transition-all bg-white rounded-lg flex flex-col justify-between p-2 gap-3">
                <div className="w-full h-44 overflow-hidden">
                  <img
                    className="w-full"
                    src={product.imgOne}
                    alt={product.title}
                  />
                </div>

                <span className="text-sm md:text-xl">{product.title}</span>

                <div className="w-full rounded-md bg-green-lightness p-1 flex justify-between items-center">
                  <div>
                    <span className="text-xs md:text-sm">هر کیلو</span>
                    <b className="block text-xs md:text-sm">
                      {product.price}
                      <span className="text-xs text-gray-500 mr-1.5">
                        تومان
                      </span>
                    </b>
                  </div>

                  <button className="hidden md:block bg-green-primery p-2 rounded-full hover:scale-110 transition">
                    <img className="w-5 h-5" src={shop} alt="shop" />
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
