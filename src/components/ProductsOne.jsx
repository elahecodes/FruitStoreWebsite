import React, { useContext, useState, useRef } from "react";
import { ProductsContext } from "../pages/productProvider";
import iconTitleW from "../assets/icons/icon-title-white.png";
import bgOrange from "../assets/background/bg-orange.png";
import arrowLeft from "../assets/icons/arrow-left.png";
import { Link } from "react-router-dom";
import leftWhite from "../assets/icons/left_orange.png";
import rightWhite from "../assets/icons/right_orange.png";
import Product from "../pages/product";

const ProductsOne = () => {
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

  if (!products?.length) return null;

  return (
    <div className="w-full flex justify-center items-center">
      <div className="mt-15 max-w-[1530px] w-full relative h-[22rem]">
        <img
          className="absolute z-0 top-0 lg:h-80 md:h-60 h-64 w-full"
          src={bgOrange}
          alt="background"
        />

        <div className="w-full absolute flex flex-col justify-center items-center gap-20">
          <div className="w-full flex justify-between items-center absolute top-5 px-3">
            <div className="flex items-center gap-2">
              <img className="w-3" src={iconTitleW} alt="title icon" />
              <h4 className="text-white text-lg md:text-2xl font-lalezar">
                محصولات تازه
              </h4>
            </div>
            <div className="flex gap-10 ml-2 h-10">
              <div className="hidden md:flex justify-center items-center gap-2">
                <button
                  onClick={prev}
                  disabled={currentIndex === 5}
                  className={`w-12 h-12 rounded-full bg-white flex justify-center items-center transition-all cursor-pointer ${currentIndex === 5 ? "bg-white/50 cursor-default" : "bg-white  cursor-pointer"}`}
                >
                  <img className="" src={rightWhite} alt="" />
                </button>

                <button
                  onClick={next}
                  disabled={currentIndex === products.length}
                  className={`w-12 h-12 rounded-full bg-white flex justify-center items-center transition-all cursor-pointer ${currentIndex === products.length - 1 ? "bg-white/50 cursor-default" : "bg-green-primery  cursor-pointer"}`}
                >
                  <img src={leftWhite} alt="" />
                </button>
              </div>
              <button className="bg-white/20 text-white px-2 py-1.5 hover:bg-white/50 transition rounded-xl shadow-xl shadow-orange/80 flex items-center gap-3">
                <Link to={`/products/${2}`} className="text-[0.8rem]">
                  مشاهده بیشتر
                </Link>
                <img className="w-[0.9rem] mt-1" src={arrowLeft} alt="arrow" />
              </button>
            </div>
          </div>

          {/* Products */}
          <div
            ref={containerRef}
            className="w-[97%] absolute top-20 lg:top-24 overflow-x-scroll snap-x snap-mandatory no-scrollbar flex gap-1"
          >
            {products.map((product) => (
              <Link key={product.id} to={`/products/${product.id}`}>
                <Product productData={product} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsOne;
