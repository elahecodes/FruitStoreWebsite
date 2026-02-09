import React from "react";

const Pay = ({state}) => {
  return (
    <section className="w-1/4 bg-white h-52 border-neutral-200 border rounded-md px-2">
      <div>
        <span>قیمت کل :</span>
        <span className="font-bold">{state.total}</span>
      </div>
      <button className="bg-green-primery text-white w-full py-1.5 rounded-md">
        پرداخت
      </button>
    </section>
  );
};

export default Pay;
