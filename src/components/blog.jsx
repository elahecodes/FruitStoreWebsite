import React, { useState } from "react";

const blog = ({ item }) => {
  return (
    <div
      key={item?.id}
      className="border h-70 cursor-pointer hover:shadow-2xl transition-all bg-white rounded-md border-neutral-200 p-1 flex flex-col justify-start items-center gap-1"
    >
      <div className="w-full h-20 flex justify-between items-center">
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-sm md:text-md">{item?.title}</h2>
          <h6 className="text-xs text-neutral-600">{item?.date}</h6>
        </div>
        <img className="md:w-20 w-12 rounded" src={item?.img} alt="" />
      </div>
      <p className="w-full text-xs line-clamp-7 overflow-hidden h-29 rounded bg-neutral-100 p-1 text-justify">
        {item?.sections[0].content}
      </p>
      <span className="text-sm mt-4 text-neutral-600">برای خواندن ادامه مطلب کلیک کنید</span>
    </div>
  );
};

export default blog;
