import React, { useContext } from "react";
import { CartContext } from "../pages/CartContextProvider";
import trashIcon from "../assets/icons/trash.png";
import { formatPrice } from "../helper/functions";
const Cart = (props) => {
  const { title, price, quantity, imgOne } = props.Data;
  let totalPrice = quantity * price;

  const { dispatch } = useContext(CartContext);
  return (
    <section className="flex justify-between items-center md:p-2 rounded-md overflow-y-hidden h-20 md:h-30 border-neutral-200 border bg-white px-3 mb-1">
      <img className="md:w-30 w-10" src={imgOne} alt="" />
      <div className="text-sm md:text-md">{title}</div>
      <div className="">
        <span className="text-sm text-neutral-600">تعداد : </span>
        <span className="text-sm md:text-xl text-neutral-800">
          {formatPrice(quantity)}
        </span>
      </div>
      <div className="md:flex md:justify-center md:items-center">
        <span className="text-sm hidden md:inline text-neutral-600">
          قیمت :
        </span>
        <span className="text-sm md:text-xl text-neutral-800 bg-neutral-100 px-1.5 rounded flex flex-start items-center gap-1">
          {formatPrice(totalPrice)}
          <span className="text-[0.6rem]">تومان</span>
        </span>
      </div>
      <div className="flex justify-center items-center gap-1">
        <button
          onClick={() => dispatch({ type: "INCREASE", payload: props.Data })}
          className="bg-green-primery md:w-8 md:h-9 w-6 h-8 text-white flex justify-center items-center rounded cursor-pointer hover:bg-green-primery/80"
        >
          +
        </button>

        <button
          onClick={() => dispatch({ type: "DECREASE", payload: props.Data })}
          className=" md:w-8 md:h-9 w-6 h-8 text-white bg-orange flex justify-center items-center rounded cursor-pointer hover:bg-orange/80"
        >
          -
        </button>
      </div>
    </section>
  );
};

export default Cart;
