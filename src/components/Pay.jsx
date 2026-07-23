import React from "react";
import { formatPrice } from "../helper/functions";

const Pay = ({ state }) => {
  let deliveryPrice = 55000;
  return (
    <section className="md:w-[300px] w-full bg-white border-neutral-200 border rounded-md p-3">
      <div className="flex flex-col justify-between items-center md:items-start gap-4 md:gap-8">
        <div className="flex w-full bg-neutral-50/80 p-2 rounded-md flex-col flex-wrap md:flex-row  md:w-full md:justify-between gap-3">
          <div className="w-full flex justify-between gap-1.5">
            <span className="text-gray-600 w-30 flex justify-start text-xs md:text-sm">
              قیمت محصولات :
            </span>
            <div className="flex gap-1">
              <span className="w-24 flex justify-end text-xs md:text-sm text-neutral-700">
                {formatPrice(state.total)}
              </span>
              <span className="text-[0.6rem] text-neutral-700">تومان</span>
            </div>
          </div>
          <hr className="border border-neutral-100" />
          <div className="w-full flex justify-between text-xs md:text-sm gap-1.5 flex items-end">
            <span className="text-neutral-700 w-30 flex justify-start text-xs md:text-sm">
              هزینه ارسال :
            </span>
            <div className="flex gap-1">
              <span className="w-24 flex justify-end text-xs md:text-sm text-neutral-700">
                {formatPrice(Number(deliveryPrice))}
              </span>
              <span className="text-gray-600 text-[0.6rem]">تومان</span>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          <span className="text-xs md:text-sm text-neutral-700">قیمت کل :</span>
          <span className="font-bold border border-neutral-200 py-1 px-4 rounded flex justify-center items-center gap-1.5 text-neutral-700">
            {formatPrice(state.total + deliveryPrice)}
            <span className="text-sm text-neutral-500">تومان</span>
          </span>
        </div>
      </div>
      <button className="bg-green-primery cursor-pointer hover:bg-green-primery/80 transition-all text-white w-full py-1.5 rounded-md mt-5">
        پرداخت
      </button>
    </section>
  );
};

export default Pay;
