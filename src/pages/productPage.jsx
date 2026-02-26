import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "./productProvider";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContextProvider.jsx";
import { quantityCount } from "../helper/functions.js";
import { isInCart } from "../helper/functions.js";
import Commentss from "../components/Commentss.jsx";
// --------------------------------------------------------------
import star from "/src/assets/icons/star.png";
import share from "/src/assets/icons/share.png";
import like from "/src/assets/icons/like.png";
import view from "/src/assets/images/view.png";
import benefits from "/src/assets/images/benefits.png";
import usage from "/src/assets/images/usage.png";
import tongue from "/src/assets/images/tongue.png";
import trash from "/src/assets/icons/trash.png";

const ProductPage = () => {
  const { id } = useParams();
  const Data = useContext(ProductsContext);
  const [selectedImg, setSelectedImg] = useState("");
  
  const [counter, setCounter] = useState(0);
  const { state, dispatch } = useContext(CartContext);
  const product = Data.find((item) => item.id === Number(id));

  function plus() {
    setCounter((prev) => prev + 1);
    dispatch({ type: "INCREASE", payload: product });
  }
  function mines() {
    setCounter((prev) => {
      if (prev <= 0) {
        return 0;
      } else {
        return prev - 1;
      }
    });
    dispatch({ type: "DECREASE", payload: product });
  }

  function addToCart() {
    setCounter((prev) => prev + 1);
    dispatch({ type: "ADD_ITEM", payload: product });
  }

  useEffect(() => {
    setSelectedImg(product?.imgOne);
  }, [product]);


  return (
    <div className="flex flex-col justify-center items-center lg:mt-32 mb-20">
      <section className="flex flex-col lg:flex-row justify-between items-start h-auto w-full gap-2.5">
        <div className="flex flex-col lg:w-1/4 gap-3 h-[30rem] p-2 border border-neutral-200 rounded-2xl justify-between bg-white">
          <img className="w-full rounded-2xl" src={selectedImg} />
          <div className="flex justify-between bg-neutral-200 p-3 rounded-2xl items-center">
            <img
              onClick={() => setSelectedImg(product?.imgOne)}
              className="w-16 h-16 border border-neutral-200 rounded-xl cursor-pointer"
              src={product?.imgOne}
            />
            <img
              onClick={() => setSelectedImg(product?.imgTwo)}
              className="w-16 h-16 border border-neutral-200 rounded-xl cursor-pointer"
              src={product?.imgTwo}
            />
            <img
              onClick={() => setSelectedImg(product?.imgThree)}
              className="w-16 h-16 border border-neutral-200 rounded-xl cursor-pointer"
              src={product?.imgThree}
            />
            <img
              onClick={() => setSelectedImg(product?.imgFour)}
              className="w-16 h-16 border border-neutral-200 rounded-xl cursor-pointer"
              src={product?.imgFour}
            />
          </div>
        </div>
        <div className="lg:w-2/3 w-full bg-white border rounded-2xl border-neutral-200 h-[30rem] overflow-y-scroll no-scrollbar flex flex-col items-start justify-start gap-6 p-2">
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
            <div className=" flex justify-start items-center gap-2 rounded  py-0.5 pb-2 text-neutral-700">
              <img className="w-6 h-6" src={benefits} />
              <span className="text-neutral-700 text-sm">خواص تغذیه ای :</span>
            </div>
            <p className="text">{product?.nutritionalBenefits}</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-start">
            <div className=" flex justify-start items-center gap-2 rounded  py-0.5 pb-2 text-neutral-700">
              <img className="w-5 h-5" src={view} />
              <span className="text-neutral-700 text-sm">ظاهر :</span>
            </div>
            <p className="text">{product?.appearance}</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-start">
            <div className=" flex justify-start items-center gap-2 rounded  py-0.5 pb-2 text-neutral-700">
              <img className="w-4 h-4" src={usage} />
              <span className="text-neutral-700 text-sm">موارد مصرف :</span>
            </div>
            <p className="text">{product?.usage}</p>
          </div>
        </div>

        <div className="lg:w-1/4 border w-full rounded-2xl border-neutral-200 h-[30rem] flex flex-col gap-6 bg-white p-2">
          <div className="w-full h-8 flex justify-between items-center">
            <span className="px-3 py-1.5">4.5</span>
            <img className="w-5 h-5" src={star} />
            <img className="w-5 h-5" src={star} />
            <img className="w-5 h-5" src={star} />
            <img className="w-5 h-5" src={star} />
            <img className="w-5 h-5" src={star} />
            <div className="w-full flex justify-end items-center gap-2">
              <img className="w-5 h-5 cursor-pointer" src={like} />
              <img className="w-5 h-5 cursor-pointer" src={share} />
            </div>
          </div>
          <div>
            <p className="text-sm text-neutral-700"> 90درصد رضایت خرید</p>
          </div>
          <div className="flex flex-col gap-3">
            <h4>انتخاب رنگ</h4>
            <div className="flex justify-start items-center gap-1.5">
              <button
                value={"قرمز"}
                className="w-6 h-6 bg-red-500 rounded-full cursor-pointer"
              ></button>
              <button
                value={"ابی"}
                className="w-6 h-6 bg-blue-500 rounded-full cursor-pointer"
              ></button>
              <button
                value={"سبز"}
                className="w-6 h-6 bg-green-500 rounded-full cursor-pointer"
              ></button>
              <button
                value={"زرد"}
                className="w-6 h-6 bg-yellow-500 rounded-full cursor-pointer"
              ></button>
              <button
                value={"نارنجی"}
                className="w-6 h-6 bg-orange-500 rounded-full cursor-pointer"
              ></button>
            </div>
          </div>

          <div className="w-full flex justify-between items-center">
            <span>قیمت:</span>
            <div className="flex justify-center items-center gap-2">
              <b className="text-2xl text-neutral-700">{product?.price}</b>
              <span className="text-neutral-500">تومان</span>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2">
            <div className="w-full flex justify-evenly items-center gap-1">
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
                {state.itemsCounter == 0 ? 0 : counter}
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
     <Commentss/>
    </div>
  );
};

export default ProductPage;
