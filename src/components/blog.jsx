import React, { useState } from "react";

const blog = ({ item, isGrid }) => {
  const rawText = item?.sections[0].content;
  const maxLength = 200;
  let displayText = rawText;

  if (rawText.length > maxLength) {
    const lastDotIndex = rawText.lastIndexOf(".", maxLength);
    if (lastDotIndex > 0) {
      displayText = rawText.substring(0, lastDotIndex) + "...";
    }
  }
  return (
    <div
      key={item?.id}
      className={`border h-64 relative cursor-pointer hover:shadow-2xl transition-all bg-white rounded-md border-neutral-200 p-1 flex flex-col justify-start items-center gap-1 ${isGrid === false ? "w-48  shrink-0" : "w-auto"}`}
    >
      <div className="w-full h-20 flex justify-between items-center">
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-sm md:text-md">{item?.title}</h2>
          <h6 className="text-xs text-neutral-600">{item?.date}</h6>
        </div>
        <img className="md:w-20 w-12 rounded" src={item?.img} alt="" />
      </div>
      <p className="w-full text-xs overflow-y-hidden rounded bg-green-primery/20 p-1 text-justify">
        {displayText}
      </p>
      <span className="text-xs mt-4 text-orange absolute bottom-2">
        برای خواندن ادامه مطلب کلیک کنید
      </span>
    </div>
  );
};

export default blog;
