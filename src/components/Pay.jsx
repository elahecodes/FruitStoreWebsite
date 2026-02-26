import React from "react";

const Pay = ({ state }) => {
  let deliveryPrice = 55000;
  return (
    <section className="md:w-[300px] w-full bg-white  border-neutral-200 border rounded-md p-3">
      <div className="flex md:flex-col justify-between items-center md:items-start md:gap-8">
        <div className="flex flex-col flex-wrap md:flex-row items-start md:w-full md:justify-between gap-3">
          <h4 className="text-xs md:text-sm">
            <span>قیمت محصولات</span>:{state.total}<span className="text-[0.6rem] text-neutral-700">تومان</span>
          </h4>
          <h4 className="text-xs md:text-sm">
            <span className="text-neutral-700">هزینه ارسال:</span>
            {Number(deliveryPrice)}
          </h4>
        </div>
        <hr className="border border-neutral-100 w-full hidden md:block" />
        <div>
          <span className="text-xs md:text-sm text-neutral-700">قیمت کل :</span>
          <span className="font-bold bg-neutral-100 p-1 rounded">
            {state.total + deliveryPrice}
            <span className="text-sm text-neutral-600">تومان</span>
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
