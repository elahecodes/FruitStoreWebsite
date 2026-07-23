import { useContext, useEffect, useRef, useState } from "react";
import { ProductsContext } from "./productProvider";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContextProvider.jsx";
import { quantityCount } from "../helper/functions.js";
import { isInCart } from "../helper/functions.js";
import Commentss from "../components/Commentss.jsx";
import { formatPrice } from "../helper/functions.js";
// --------------------------------------------------------------

import share from "/src/assets/icons/share.png";
import view from "/src/assets/images/view.png";
import benefits from "/src/assets/images/benefits.png";
import usage from "/src/assets/images/usage.png";
import tongue from "/src/assets/images/tongue.png";
import trash from "/src/assets/icons/trash.png";
import Rating from "../components/Rating.jsx";

const ProductPage = () => {
  const { id } = useParams();
  const Data = useContext(ProductsContext);
  const [selectedImg, setSelectedImg] = useState("");
  const { state, dispatch } = useContext(CartContext);
  const product = Data.find((item) => item.id === Number(id));
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/data/services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      })
      .catch((error) => console.log(error + "خطا در دریافت اطلاهات"));
  }, []);

  function plus() {
    dispatch({ type: "INCREASE", payload: product });
  }
  function mines() {
    dispatch({ type: "DECREASE", payload: product });
  }

  function addToCart() {
    dispatch({ type: "ADD_ITEM", payload: product });
  }

  useEffect(() => {
    setSelectedImg(product?.imgOne);
  }, [product]);

  const copyURL = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <main className="flex justify-center items-center lg:mt-32 mb-20">
      <div className="max-w-[1530px] w-full flex flex-col justify-center items-center">
        <section className="flex flex-col xl:flex-row justify-between items-start h-auto w-full gap-2.5">
          <div className="flex w-full flex-col md:flex-row justify-start gap-3">
            <div className="flex flex-col w-full lg:w-1/4 gap-3 lg:h-[30rem] p-2 border border-neutral-200 rounded-2xl justify-between bg-white">
              <img className="w-full rounded-2xl" src={selectedImg} />
              <div className="flex justify-between md:justify-center md:gap-1 bg-neutral-200 p-3 rounded-2xl items-center overflow-x-scroll no-scrollbar">
                <img
                  onClick={() => setSelectedImg(product?.imgOne)}
                  className="w-16 h-16 shrink-0 border border-neutral-200 rounded-xl cursor-pointer"
                  src={product?.imgOne}
                />
                <img
                  onClick={() => setSelectedImg(product?.imgTwo)}
                  className="w-16 h-16 shrink-0 border border-neutral-200 rounded-xl cursor-pointer"
                  src={product?.imgTwo}
                />
                <img
                  onClick={() => setSelectedImg(product?.imgThree)}
                  className="w-16 h-16 shrink-0 border border-neutral-200 rounded-xl cursor-pointer"
                  src={product?.imgThree}
                />
                <img
                  onClick={() => setSelectedImg(product?.imgFour)}
                  className="w-16 h-16 shrink-0 border border-neutral-200 rounded-xl cursor-pointer"
                  src={product?.imgFour}
                />
              </div>
            </div>
            <div className="lg:w-3/4 w-full bg-white border rounded-2xl border-neutral-200 h-[30rem] overflow-y-scroll no-scrollbar flex flex-col items-start justify-start gap-6 p-2">
              <h3 className="text-2xl text-neutral-700 font-bold">
                {product?.title}
              </h3>
              <div className="flex flex-col gap-2 justify-center items-start">
                <div className=" flex justify-start items-center gap-2 rounded py-0.5 pb-2 text-neutral-700">
                  <img className="w-4 h-4" src={tongue} />
                  <span className="text-neutral-700 text-sm">طعم و عطر :</span>
                </div>
                <p className="text">{product?.tasteAndAroma}</p>
              </div>
              <div className="flex flex-col gap-2 justify-center items-start">
                <div className=" flex justify-start items-center gap-2 rounded py-0.5 pb-2 text-neutral-700">
                  <img className="w-6 h-6" src={benefits} />
                  <span className="text-neutral-700 text-sm">
                    خواص تغذیه ای :
                  </span>
                </div>
                <p className="text">{product?.nutritionalBenefits}</p>
              </div>
              <div className="flex flex-col gap-2 justify-center items-start">
                <div className=" flex justify-start items-center gap-2 rounded py-0.5 pb-2 text-neutral-700">
                  <img className="w-5 h-5" src={view} />
                  <span className="text-neutral-700 text-sm">ظاهر :</span>
                </div>
                <p className="text">{product?.appearance}</p>
              </div>
              <div className="flex flex-col gap-2 justify-center items-start">
                <div className=" flex justify-start items-center gap-2 rounded py-0.5 pb-2 text-neutral-700">
                  <img className="w-4 h-4" src={usage} />
                  <span className="text-neutral-700 text-sm">موارد مصرف :</span>
                </div>
                <p className="text">{product?.usage}</p>
              </div>
            </div>
          </div>

          <div className="xl:w-1/4 border border-neutral-200 w-full rounded-2xl flex flex-col gap-6 bg-white py-8 p-2">
            <div className="w-full h-8 flex justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                <Rating productID={product?.id} />
                <span className=" py-1.5">{formatPrice(4.5)}</span>
              </div>
              <div
                onClick={copyURL}
                className="p-1 cursor-pointer rounded flex justify-end items-center gap-2 bg-neutral-100"
              >
                <img className="w-4 h-4 cursor-pointer" src={share} />
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2">
              {services.map((item, index) => (
                <div className="flex justify-start items-center gap-2 bg-neutral-100 p-2 rounded-lg">
                  <div className="w-6 h-6 bg-orange/10 flex justify-center items-center rounded">
                    <svg fill="#ffa500" className="w-4" viewBox={item.viewBox}>
                      <path d={item.d} />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-700">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
            <div className="w-full flex justify-start gap-2 items-center">
              <span>قیمت:</span>
              <div className="flex justify-center items-center gap-2">
                <b className="text-2xl bg-neutral-100 p-1 rounded-md text-neutral-700">
                  {formatPrice(product?.price)}
                </b>
                <span className="text-neutral-500">تومان</span>
              </div>
            </div>
            <div className="flex justify-between items-center gap-2">
              <div className="w-full flex justify-start xl:justify-center items-center gap-4">
                {isInCart(state, product?.id) ? (
                  <button
                    className="bg-neutral-100 w-1/4 h-9 hover:cursor-pointer hover:bg-neutral-200 transition-all rounded-md"
                    onClick={() => plus()}
                  >
                    +
                  </button>
                ) : (
                  <button
                    className="bg-orange hover:cursor-pointer hover:bg-orange-400 transition-all px-2 py-2 text-sm rounded-md text-white"
                    onClick={addToCart}
                  >
                    افزودن به سبد خرید
                  </button>
                )}

                <span className="w-1/4 flex justify-center border pb-1.5 pt-1 border-neutral-300 rounded cursor-pointer">
                  {formatPrice(quantityCount(state, product?.id))}
                </span>
                {quantityCount(state, product?.id) > 1 && (
                  <button
                    className="bg-neutral-100 w-1/4 h-9 hover:cursor-pointer hover:bg-neutral-200 transition-all rounded-md"
                    onClick={mines}
                  >
                    -
                  </button>
                )}
                {quantityCount(state, product?.id) === 1 && (
                  <button
                    onClick={() =>
                      dispatch({ type: "DECREASE", payload: product })
                    }
                  >
                    <img className="w-6 " src={trash} alt="" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
        <Commentss />
      </div>
    </main>
  );
};

export default ProductPage;
