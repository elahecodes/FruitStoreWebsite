import React from "react";
import iconTitle from "/src/assets/icons/icon-title.png";
import arrowLeft from "/src/assets/icons/arrow-left.png";
import banner from "/src/assets/images/banner.png";
const productsThree = () => {
  return (
    <div className="w-full my-0 mx-auto flex flex-col justify-between items-start mt-8 md:mt-30 gap-6">
      <div className="w-full flex justify-between items-start">
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
      <div className="banner flex flex-col md:flex-row rounded-2xl justify-end gap-4">
        <img
          className="md:w-[50%] hover:shadow-2xl cursor-pointer rounded-2xl transition-all"
          src={banner}
        />
        <img
          className="md:w-[50%] hover:shadow-2xl cursor-pointer rounded-2xl transition-all"
          src={banner}
        />
      </div>
    </div>
  );
};

export default productsThree;
