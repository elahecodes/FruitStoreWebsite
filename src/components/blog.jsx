import React, { useState } from "react";
import img from "../assets/images/image.jpg";

const blog = ({ item }) => {
  return (
    <div
      key={item.id}
      className="border h-72 cursor-pointer hover:shadow-2xl transition-all bg-white rounded-md border-neutral-200 p-1 flex flex-col justify-start items-center gap-1"
    >
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col justify-center items-start">
          <h2>{item.title}</h2>
          <h6 className="text-xs text-neutral-600">{item.date}</h6>
        </div>
        <img className="w-10 h-10 rounded" src={img} alt="" />
      </div>

      <p className="w-full text-sm h-60 rounded bg-neutral-100 p-1 text-justify">
        {item.desctiption}
      </p>
    </div>
  );
};

export default blog;
