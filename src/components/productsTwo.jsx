import React, { useContext, useRef, useState } from "react";
import { ProductsContext } from "../pages/productProvider";
import iconTitle from "../assets/icons/icon-title.png";
import arrowLeft from "../assets/icons/arrow-left.png";
import { Link } from "react-router-dom";
import shop from "../assets/icons/shopW.png";
import leftWhite from "../assets/icons/left_white.png";
import rightWhite from "../assets/icons/right_white.png";

const ProductsTwo = () => {
  const data = useContext(ProductsContext);
  const products = data.slice(0, 15);
  const [currentIndex, setCurrentIndex] = useState(5);
  const containerRef = useRef(null);

  const goToSlide = (index) => {
    if (index < 0 || index > products.length) return;

    const container = containerRef.current;
    const slide = container.children[index];

    if (container && slide) {
      const slideLeft = slide.offsetLeft;
      container.scrollTo({
        left: slideLeft,
        behavior: "smooth",
      });

      setCurrentIndex(index);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    }
  };

  const next = () => {
    if (currentIndex < products.length) {
      goToSlide(currentIndex + 1);
    }
  };

  return (
    <div className="mt-10 flex justify-center rounded-2xl">
      <div className="max-w-[1530px] w-full">
        <div className="w-full flex justify-between items-center gap-2 bg-white px-2 py-1.5 rounded border border-neutral-100">
          <div className="flex justify-center items-center gap-2">
            <img className="w-2 lg:w-3" src={iconTitle} />
            <h3 className="text-lg md:text-2xl font-lalezar text-neutral-800">
              میوه های پر فروش
            </h3>
          </div>
          <div className="flex justify-end items-center gap-16">
            <div className="hidden md:flex justify-center items-center gap-2">
              <button
                onClick={prev}
                disabled={currentIndex === 5}
                className={`w-12 h-12 rounded-full bg-green-primery flex justify-center items-center transition-all ${currentIndex === 5 ? "bg-green-primery/50 cursor-default" : "bg-green-primery  cursor-pointer"}`}
              >
                <img src={rightWhite} alt="" />
              </button>

              <button
                onClick={next}
                disabled={currentIndex === products.length}
                className={`w-12 h-12 rounded-full bg-green-primery flex justify-center items-center transition-all ${currentIndex === products.length - 1 ? "bg-green-primery/50 cursor-default" : "bg-green-primery  cursor-pointer"}`}
              >
                <img src={leftWhite} alt="" />
              </button>
            </div>
            <button className="bg-orange text-white px-2 py-1 pb-2 md:pb-2 rounded-md shadow-lg shadow-orange/80 flex justify-between items-center gap-3 cursor-pointer">
              <Link
                to={"/products?isbest=bestseller"}
                className="text-[0.8rem] md:text-[1rem]"
              >
                مشاهده بیشتر
              </Link>
              <img className="w-3 md:w-4 mt-1 md:mt-" src={arrowLeft} />
            </button>
          </div>
        </div>
        <div className="p-1.5 bg-green-primery rounded-2xl mt-6">
          <div
            ref={containerRef}
            className="w-full overflow-x-scroll bg-green-primery gap-1 rounded-xl no-scrollbar snap-x snap-mandatory flex justify-start items-center top-10"
          >
            {products.map((item) => (
              <Link key={item.id} to={`/products/${item.id}`}>
                <div className="slide snap-start w-44 md:w-56 h-62 md:h-80 border border-green-primery hover:border-neutral-400 shrink-0 cursor-pointer  bg-white rounded-xl flex flex-col justify-between p-2 gap-3">
                  <div className="w-full h-44 overflow-hidden">
                    <img className="w-full" src={item?.imgOne} alt="image" />
                  </div>
                  <span className="text-xl">{item.title}</span>
                  <div className="w-full rounded-md bg-green-lightness p-1 flex justify-between items-center self-end">
                    <div className="flex flex-col justify-start">
                      <span>هرکیلو</span>
                      <b>
                        {item.price}
                        <span className="text-xs text-gray-500 mr-1.5">
                          تومان
                        </span>
                      </b>
                    </div>
                    <button className="bg-green-primery p-2 rounded-full cursor-pointer hover:shadow-lg hover:shadow-green-primery hover:scale-110 transition-all">
                      <img className="w-6 h-6" src={shop} />
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsTwo;
