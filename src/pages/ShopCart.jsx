import React, { useContext } from "react";
import { CartContext } from "./CartContextProvider.jsx";
import Cart from "../components/Cart.jsx";
import Pay from "../components/pay.jsx";

const ShopCart = () => {
  const { state } = useContext(CartContext);
  return (
    <div className="my-24 flex flex-col justify-between items-start gap-6">
      <div className="font-bold text-xl border w-full text-center">
        {state.selectedItems.length === 0 ? (
          <p>سبد خرید شما خالی است</p>
        ) : (
          <div className="w-full flex justify-between items-start gap-2">
            <section className="w-3/4 flex flex-col gap-2">
              {state.selectedItems.map((item) => (
                <Cart key={item.id} Data={item} />
              ))}
            </section>
            <Pay state={state} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopCart;
