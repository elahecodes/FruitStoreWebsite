import React, { useEffect, useRef, useState } from "react";
import star from "/src/assets/icons/star.png";
import share from "/src/assets/icons/share.png";
import like from "/src/assets/icons/like.png";
import chat from "/src/assets/icons/chat.png";
import image from "/src/assets/images/download.jpg";
import img from "/src/assets/images/download (1).jpg";

const ProductPage = () => {
  const [saveComment, setSaveComment] = useState([]);
  const [UserComments, setUserComments] = useState([]);

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
    <div className="flex flex-col justify-center items-center mt-32 mb-8">
      <section className="flex justify-between items-start h-auto w-full gap-2.5">
        <div className="flex flex-col w-1/4 gap-3">
          <img
            className="w-full rounded-2xl border border-neutral-200"
            src={image}
            alt=""
          />
          <div className="flex justify-between bg-neutral-200 p-3 rounded-2xl items-center">
            <img
              className="w-16 h-16 border border-neutral-200 rounded-xl cursor-pointer"
              src={img}
              alt=""
            />
            <img
              className="w-16 h-16 border border-neutral-200 rounded-xl cursor-pointer"
              src={img}
              alt=""
            />
            <img
              className="w-16 h-16 border border-neutral-200 rounded-xl cursor-pointer"
              src={img}
              alt=""
            />
            <img
              className="w-16 h-16 border border-neutral-200 rounded-xl cursor-pointer"
              src={img}
              alt=""
            />
          </div>
        </div>
        <div className="w-2/4 bg-white border rounded-2xl border-neutral-200 h-[35.8rem] overflow-scroll flex flex-col items-start justify-start gap-6 p-2">
          <h3 className="text-2xl text-neutral-700 font-bold">توت فرنگی</h3>
          <div className="flex flex-col gap-2 justify-center items-start">
            <span className="bg-green-primery/30 rounded  py-0.5 pb-2 px-3 text-neutral-700">
              طعم و عطر :
            </span>
            <p>شیرین خوش طعم و معطر مناسب برای مصرف تازه یا تهیه دسر و مربا</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-start">
            <span className="bg-green-primery/30 rounded  py-0.5 pb-2 px-3 text-neutral-700">
              خواص تغذیه ای :
            </span>
            <p>
              سرشار از ویتامین آنتی اکسیدان ها و فیبر تقویت کننده سیستم ایمنی و
              مفید برای سلامت پوست
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-start">
            <span className="bg-green-primery/30 rounded  py-0.5 pb-2 px-3 text-neutral-700">
              {" "}
              ظاهر :
            </span>
            <p>دانه های قرمز براق با بافت نرم و ابدار</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-start">
            <span className="bg-green-primery/30 rounded  py-0.5 pb-2 px-3 text-neutral-700">
              موارد مصرف :
            </span>
            <p>
              مناسب برای سالاد میوه اسموتی کیک و شیرینی یا مصرف روزانه به عنوان
              میان وعده سالم
            </p>
          </div>
        </div>
        <div className="w-1/4 h-full border rounded-2xl border-neutral-200 flex flex-col gap-6 bg-white p-2">
          <div className="w-full h-8 flex justify-between items-center">
            <span className="px-3 py-1.5">4.5</span>
            <img className="w-5 h-5" src={star} alt="" />
            <img className="w-5 h-5" src={star} alt="" />
            <img className="w-5 h-5" src={star} alt="" />
            <img className="w-5 h-5" src={star} alt="" />
            <img className="w-5 h-5" src={star} alt="" />
            <div className="w-full flex justify-end items-center gap-2">
              <img className="w-5 h-5 cursor-pointer" src={like} alt="" />
              <img className="w-5 h-5 cursor-pointer" src={share} alt="" />
            </div>
          </div>
          <div>
            <p> 90درصد رضایت خرید</p>
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
              <b className="text-2xl text-neutral-700">1200000</b>
              <span className="text-neutral-500">تومان</span>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2">
            <div className="w-1/2 flex justify-evenly items-center gap-1">
              <button className="bg-neutral-200 w-1/3 pb-2 pt-1 rounded cursor-pointer">
                +
              </button>
              <span className="w-1/3  flex justify-center border pb-1.5 pt-1 border-neutral-300 rounded cursor-pointer">
                1
              </span>
              <button className="w-1/3 bg-neutral-200 pb-2 pt-1 rounded cursor-pointer">
                -
              </button>
            </div>
            <button className="w-1/2 bg-orange rounded px-1.5 pb-2 pt-1 text-white">
              <img src="" alt="" />
              افزودن
            </button>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="flex justify-start items-center my-8 gap-2">
          <img className="w-7 h-7" src={chat} alt="" />
          <h3 className="text-2xl mb-2">بخش نظرات</h3>
        </div>
        <div className="flex justify-between items-start overflow-scroll w-full">
          <div className="w-[58rem] h-[40rem] overflow-y-auto border border-neutral-200 bg-white rounded-2xl p-3">
            {UserComments.length === 0 ? (
              <p>هنوز نظری ثبت نشده است</p>
            ) : (
              UserComments?.map((item) => (
                <div
                  key={item.id}
                  className="p-2 rounded-lg bg-neutral-100 mb-6"
                >
                  <div className="w-full flex justify-between items-center">
                    <span className="block font-semibold">
                      {" "}
                      کاربر : {item.userName}
                    </span>
                    <div className="flex justify-end items-center gap-1">
                      <span className="ml-8 text-neutral-600">1404-09-13</span>
                      <span className="ml-1.5">4.5</span>
                      <img className="w-5 h-5" src={star} alt="" />
                      <img className="w-5 h-5" src={star} alt="" />
                      <img className="w-5 h-5" src={star} alt="" />
                      <img className="w-5 h-5" src={star} alt="" />
                      <img className="w-5 h-5" src={star} alt="" />
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
            className="w-[30rem] flex flex-col gap-3"
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
              <img src="" alt="" />
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
              className="bg-green-secondry w-full py-2 cursor-pointer hover:bg-green-800 transition-all text-white rounded"
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
