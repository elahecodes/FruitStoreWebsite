import React, { useState } from "react";
import star from '/src/assets/icons/star.png'
import share from '/src/assets/icons/share.png'
import like from '/src/assets/icons/like.png'
const ProductPage = () => {
  
  return (
    <div className="flex flex-col justify-center items-center mt-32 mb-8">
      <section className="flex justify-between items-center h-auto w-full">
        <div className="h-full flex flex-col w-1/4 border">
          <img className="w-full" src="" alt="" />
          <div className="flex justify-between items-center">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <div className="w-2/4 h-full"></div>
        <div className="w-1/4 h-full border rounded border-neutral-200 flex flex-col gap-6 bg-white p-2">
          <div className="w-full h-8 flex justify-between items-center">
            <span className="px-3 py-1.5">4.5</span>
            <img className="w-5 h-5" src={star} alt="" />
            <img className="w-5 h-5" src={star} alt="" />
            <img className="w-5 h-5" src={star} alt="" />
            <img className="w-5 h-5" src={star} alt="" />
            <img className="w-5 h-5" src={star} alt="" />
             <div className="w-full flex justify-end items-center gap-2">
            <img className="w-5 h-5 cursor-pointer" src={like} alt="" />
            <img className="w-5 h-5 cursor-pointer" src={share} alt="" />
          </div>
          </div>
          <div>
           <p> 90درصد رضایت خرید</p>
          </div>
          <div className="flex flex-col gap-3">
            <h4>انتخاب رنگ</h4>
          <div className="flex justify-start items-center gap-1.5">
            <button value={'قرمز'} className="w-6 h-6 bg-red-500 rounded-full cursor-pointer"></button>
            <button value={'ابی'} className="w-6 h-6 bg-blue-500 rounded-full cursor-pointer"></button>
            <button value={'سبز'} className="w-6 h-6 bg-green-500 rounded-full cursor-pointer"></button>
            <button value={'زرد'} className="w-6 h-6 bg-yellow-500 rounded-full cursor-pointer"></button>
            <button value={'نارنجی'} className="w-6 h-6 bg-orange-500 rounded-full cursor-pointer"></button>
          </div>
          </div>
          <div className="flex flex-col gap-3">
            <h4>انتخاب سایز</h4>
            <div className="flex justify-start items-center gap-1.5">
              <button className="bg-neutral-200 rounded w-10 h-10 cursor-pointer hover:bg-neutral-300">36</button>
              <button className="bg-neutral-200 rounded w-10 h-10 cursor-pointer hover:bg-neutral-300">40</button>
              <button className="bg-neutral-200 rounded w-10 h-10 cursor-pointer hover:bg-neutral-300">42</button>
              <button className="bg-neutral-200 rounded w-10 h-10 cursor-pointer hover:bg-neutral-300">46</button>
              <button className="bg-neutral-200 rounded w-10 h-10 cursor-pointer hover:bg-neutral-300">48</button>
              <button className="bg-neutral-200 rounded w-10 h-10 cursor-pointer hover:bg-neutral-300">80</button>
            </div>
          </div>
          <div className="w-full flex justify-between items-center">
            <span>قیمت:</span>
            <div className="flex justify-center items-center gap-2">
              <b className="text-2xl text-neutral-700">1200000</b>
              <span className="text-neutral-500">تومان</span>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2">
            <div className="w-1/2 flex justify-evenly items-center gap-1">
              <button className="bg-neutral-200 w-1/3 pb-2 pt-1 rounded cursor-pointer">+</button>
              <span className="w-1/3  flex justify-center border pb-1.5 pt-1 border-neutral-300 rounded cursor-pointer">1</span>
              <button className="w-1/3 bg-neutral-200 pb-2 pt-1 rounded cursor-pointer">-</button>
            </div>
            <button className="w-1/2 bg-orange rounded px-1.5 pb-2 pt-1 text-white"><img src="" alt="" />افزودن</button>
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default ProductPage;
