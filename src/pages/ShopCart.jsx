import React, { useContext } from "react";
import { CartContext } from "./CartContextProvider.jsx";
import Cart from "../helper/Cart.jsx";

const emptyCart = (state, id) => {
  if (state.selectedItems.findIndex((item) => item.id == id)) {
    return true;
  }
};
const ShopCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div className="my-24 flex flex-col justify-between items-start gap-6">
      <div className="font-bold text-xl">
        {emptyCart(state, 1) ? <h3>سبد خرید</h3> : <p>سبد خرید خالی است </p>}
      </div>
      <div className="w-full flex justify-between items-start gap-2">
        <section className="w-3/4 flex flex-col gap-2">
          {state.selectedItems.map((item) => (
            <Cart key={item.id} Data={item} />
          ))}
        </section>
        <section className="w-1/4 bg-white h-52 border-neutral-200 border rounded-md px-2">
          <div>
            <span>قیمت کل :</span>
            <span className="font-bold">{state.total}</span>
          </div>
          <button className="bg-green-primery text-white w-full py-1.5 rounded-md">
            پرداخت
          </button>
        </section>
      </div>
    </div>
  );
};

export default ShopCart;
