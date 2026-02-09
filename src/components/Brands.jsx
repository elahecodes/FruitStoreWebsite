import React from "react";

const Brands = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-12 gap-6">
      <div className="w-full flex justify-start items-center">
        <img src="" />
        <h3 className="text-2xl text-neutral-800 font-lalezar">
          برند های موجود
        </h3>
      </div>
      <div className="w-full grid grid-cols-3 md:grid-cols-4 grid-rows-3 md:grid-rows-2 h-80">
        <div className="bg-white text-neutral-800 hover:bg-neutral-50 transition-all border border-neutral-200 flex justify-center items-center text-2xl">
          <span className="font-lalezar text-neutral-700">برند اول</span>
        </div>
        <div className="bg-white text-neutral-800 hover:bg-neutral-50 transition-all border border-neutral-200 flex justify-center items-center text-2xl">
          <span className="font-lalezar text-neutral-700">برند دوم</span>
        </div>
        <div className="bg-white text-neutral-800 hover:bg-neutral-50 transition-all border border-neutral-200 flex justify-center items-center text-2xl">
          <span className="font-lalezar text-neutral-700">برند سوم</span>
        </div>
        <div className="bg-white hover:bg-neutral-50 text-neutral-800 transition-all border border-neutral-200 flex justify-center items-center text-2xl">
          <span className="font-lalezar text-neutral-700">برند چهارم</span>
        </div>
        <div className="bg-white text-neutral-800 hover:bg-neutral-50 transition-all border border-neutral-200 flex justify-center items-center text-2xl">
          <span className="font-lalezar text-neutral-700">برند پنجم</span>
        </div>
        <div className="bg-white text-neutral-800 hover:bg-neutral-50 transition-all border border-neutral-200 flex justify-center items-center text-2xl">
          <span className="font-lalezar text-neutral-700">برند ششم</span>
        </div>
        <div className="bg-white text-neutral-800 hover:bg-neutral-50 transition-all border border-neutral-200 flex justify-center items-center text-2xl">
          <span className="font-lalezar text-neutral-700">برند هفتم</span>
        </div>
        <div className="bg-white text-neutral-800 hover:bg-neutral-50 transition-all border border-neutral-200 flex justify-center items-center text-2xl">
          <span className="font-lalezar text-neutral-700">برند هشتم</span>
        </div>
      </div>
    </div>
  );
};

export default Brands;
