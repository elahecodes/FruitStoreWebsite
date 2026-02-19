import React, { useContext } from "react";
import { CartContext } from "../pages/CartContextProvider";

const Cart = (props) => {
  const { title, price, quantity, imgOne } = props.Data;
  let totalPrice = quantity * price;

  const { dispatch } = useContext(CartContext);
  return (
    <div>
      <section className="flex justify-between items-center p-2 rounded-md overflow-y-hidden h-30 border-neutral-200 border bg-white">
        <img className="w-30" src={imgOne} alt="" />
        <div className="w-36">{title}</div>
        <div className="w-36">
          <span className="text-sm text-neutral-600">تعداد : </span>
          <span className="text-xl text-neutral-800">{quantity}</span>
        </div>
        <div className="w-36">
          <span className="text-sm text-neutral-600">قیمت : </span>
          <span className="text-xl text-neutral-800 bg-neutral-100 px-1.5 rounded">{totalPrice}</span>
        </div>
        <div className="w-36 flex justify-center items-center gap-1">
          <button
            onClick={() => dispatch({ type: "INCREASE", payload: props.Data })}
            className="bg-green-primery w-6 h-6 text-white flex justify-center items-center rounded cursor-pointer hover:bg-green-primery/80"
          >
            +
          </button>
          {quantity > 1 ? (
            <button
              onClick={() =>
                dispatch({ type: "DECREASE", payload: props.Data })
              }
              className="w-6 h-6 text-white bg-orange flex justify-center items-center rounded cursor-pointer hover:bg-orange/80"
            >
              -
            </button>
          ) : (
            <h5
              onClick={() =>
                dispatch({ type: "REMOVE-ITEM", payload: props.Data })
              }
            >
              delete
            </h5>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;
