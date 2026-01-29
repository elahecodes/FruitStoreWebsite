import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "./productProvider";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContextProvider.jsx";
import { isInCart } from "../helper/functions.js";
import { quantityCount } from "../helper/functions.js";
// --------------------------------------------------------------
import star from "/src/assets/icons/star.png";
import share from "/src/assets/icons/share.png";
import like from "/src/assets/icons/like.png";
import chat from "/src/assets/icons/chat.png";
import view from "/src/assets/images/view.png";
import benefits from "/src/assets/images/benefits.png";
import usage from "/src/assets/images/usage.png";
import tongue from "/src/assets/images/tongue.png";

const ProductPage = () => {
  const { id } = useParams();
  const [URL, setURL] = useState();
  const Data = useContext(ProductsContext);
  const [selectedImg, setSelectedImg] = useState("");
  const [saveComment, setSaveComment] = useState([]);
  const [UserComments, setUserComments] = useState([]);
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
        prev - 1;
      }
      dispatch({ type: "DECREASE", payload: product });
    });
  }

  useEffect(() => {}, [state.itemsCounter]);
  useEffect(() => {
    setURL(id);
  }, [id]);

  useEffect(() => {
    setSelectedImg(product?.imgOne);
  });

  useEffect(() => {
    saveComment.userName = "";
    saveComment.userComment = "";
  }, []);

  function addComment(e) {
    e.preventDefault();
    if (!saveComment.userName?.trim() || !saveComment.userComment?.trim()) {
      return;
    }
    setUserComments((prev) => [
      ...prev,
      {
        userName: saveComment.userName,
        userComment: saveComment.userComment,
      },
    ]);
    setSaveComment({ userName: "", userComment: "" });
  }

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
          <div className="flex flex-col gap-3">
            <h4>انتخاب سایز</h4>
            <div className="flex justify-start items-center gap-1.5">
              <button className="bg-neutral-200 rounded w-10 h-10 cursor-pointer hover:bg-neutral-300">
                36
              </button>
              <button className="bg-neutral-200 rounded w-10 h-10 cursor-pointer hover:bg-neutral-300">
                40
              </button>
              <button className="bg-neutral-200 rounded w-10 h-10 cursor-pointer hover:bg-neutral-300">
                42
              </button>
              <button className="bg-neutral-200 rounded w-10 h-10 cursor-pointer hover:bg-neutral-300">
                46
              </button>
              <button className="bg-neutral-200 rounded w-10 h-10 cursor-pointer hover:bg-neutral-300">
                48
              </button>
              <button className="bg-neutral-200 rounded w-10 h-10 cursor-pointer hover:bg-neutral-300">
                80
              </button>
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
                  onClick={plus}
                >
                  +
                </button>
              ) : (
                <button
                  className="bg-orange hover:cursor-pointer hover:bg-orange-400 transition-all px-2 py-2 text-sm rounded-md text-white"
                  onClick={() =>
                    dispatch({ type: "ADD_ITEM", payload: product })
                  }
                >
                  افزودن به سبد خرید
                </button>
              )}

              <span className="w-1/4 flex justify-center border pb-1.5 pt-1 border-neutral-300 rounded cursor-pointer">
                {counter}
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
                    dispatch({ type: "REMOVE-ITEM", payload: product })
                  }
                >
                  remove
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="flex justify-start items-center my-8 gap-2">
          <img className="w-7 h-7" src={chat} />
          <h3 className="text-2xl mb-2">بخش نظرات</h3>
        </div>
        <div className="flex justify-between flex-col-reverse lg:flex-row items-start overflow-scroll no-scrollbar gap-5 lg:gap-0 w-full">
          <div className="lg:w-[65%] w-full max-h-[40rem] no-scrollbar border border-neutral-200 bg-white rounded p-3">
            {UserComments.length === 0 ? (
              <p>هنوز نظری ثبت نشده است</p>
            ) : (
              UserComments?.map((item) => (
                <div
                  key={item.id}
                  className="p-2 rounded-lg bg-neutral-100 mb-6"
                >
                  <div className="w-full flex justify-between items-center">
                    <span className="block font-semibold text-xs lg:text-[1rem]">
                      {" "}
                      کاربر : {item.userName}
                    </span>
                    <div className="flex justify-end items-center gap-1">
                      <span className="ml-8 text-neutral-600">1404-09-13</span>
                      <span className="ml-1.5">4.5</span>
                      <img className="lg:w-5 lg:h-5 h-3 h-3" src={star} />
                      <img className="lg:w-5 lg:h-5 h-3 h-3" src={star} />
                      <img className="lg:w-5 lg:h-5 h-3 h-3" src={star} />
                      <img className="lg:w-5 lg:h-5 h-3 h-3" src={star} />
                      <img className="lg:w-5 lg:h-5 h-3 h-3" src={star} />
                    </div>
                  </div>
                  <p className="text-sm text-neutral-700 bg-white p-2 rounded-lg mt-3">
                    {item.userComment}
                  </p>
                </div>
              ))
            )}
          </div>

          <form
            onSubmit={addComment}
            className="lg:w-[30%] w-full flex flex-col gap-3"
            action=""
          >
            <input
              onChange={(e) =>
                setSaveComment((prev) => ({
                  ...prev,
                  userName: e.target.value,
                }))
              }
              className="w-full bg-white h-10 rounded outline-none border px-2 text-sm border-neutral-200"
              type="text"
              value={saveComment.userName}
              placeholder="نام کاربری را وارد کنید"
            />
            <div className="w-full flex justify-between items-center">
              <input
                maxLength={5}
                className="bg-white outline-none border h-10 px-2 text-sm rounded border-neutral-200"
                type="text"
                placeholder="کد را وارد کنید"
              />
              <img />
            </div>
            <textarea
              onChange={(e) =>
                setSaveComment((prev) => ({
                  ...prev,
                  userComment: e.target.value,
                }))
              }
              className="h-52 resize-none border rounded border-neutral-200 outline-none p-2 text-neutral-700 bg-white w-full"
              name=""
              value={saveComment.userComment}
              id=""
            ></textarea>
            <button
              type="submit"
              className={
                saveComment.userComment == "" || saveComment.userName == ""
                  ? "rounded bg-neutral-500 text-neutral-300 w-full py-2"
                  : "bg-green-secondry w-full py-2 cursor-pointer hover:bg-green-800 transition-all text-white rounded"
              }
            >
              ثبت نظر
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
