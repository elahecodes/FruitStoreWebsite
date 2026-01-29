import React from "react";
import shop from "../assets/icons/shop.png";
const Product = ({ productData }) => {
  return (
    <div
      key={productData?.id}
      className="slide h-62 md:h-80 hover:border-green-secondry border-green-primery border shrink-0 transition-all cursor-pointer border-neutral-300 bg-white rounded-lg flex flex-col justify-between p-2 gap-3"
    >
      <img className="w-full" src={productData?.imageOne} alt="image" />
      <span className="text-sm md:text-xl">{productData?.title}</span>
      <div className="w-full rounded-md bg-green-lightness p-1 flex justify-between items-center self-end">
        <div className="flex flex-col justify-start">
          <span className="text-xs md:text-sm">هرکیلو</span>
          <b className="text-xs md:text-sm">
            {productData?.price}
            <span className="text-xs text-gray-500 mr-1.5">تومان</span>
          </b>
        </div>
        <button className="hidden md:block bg-green-primery p-1 md:p-2 rounded-full cursor-pointer hover:shadow-lg hover:shadow-green-primery hover:scale-110 transition-all">
          <img className="md:w-6 md:h-6 w-4 h-4" src={shop} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Product;
