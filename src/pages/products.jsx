import React, { useEffect, useRef, useState } from "react";
import shop from "../assets/icons/shopW.png";
import iconTitle from "/src/assets/icons/icon-title.png";
import iconFilter from "/src/assets/icons/panel.png";
import title from "/src/assets/icons/tag.png";

const Products = () => {
  let increment = 10;
  const [products, setProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(1);
  const [showProducts, setShowProducts] = useState([]);
  const [active, setActive] = useState(false);
  let [counter, setCounter] = useState([]);

  const [Tags] = useState(["پرفروش ترین ها", "تخفیف خورده ها", "جدید ترین ها"]);
  const [category] = useState([
    "میوه های استوایی",
    "میوه فصل",
    "میوه خشک",
    "صیفی جات",
    "بسته بندی شده",
  ]);
  const [brands] = useState(["برند اول", "برند دوم", "برند سوم", "برند چهارم"]);

  useEffect(() => {
    fetch("/src/data/products.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log(error + "خطا در دریافت اطلاهات"));
  }, []);

  useEffect(() => {
    const start = (startIndex - 1) * increment;
    const end = start + increment;
    setShowProducts(products.slice(start, end));
  }, [increment, startIndex, products]);

  const handleCarts = (number) => {
    setStartIndex(number);
  };
  let counterOfPages = Math.ceil(products.length / increment);
  useEffect(() => {
    let page = [];
    for (let index = counterOfPages; index >= 1; index--) {
      page.push(index);
    }
    setCounter(page);
  }, [counterOfPages]);

  const ActiveBtn = () => {
    setActive((prev) => !prev);
  };

  return (
    <>
      <main className="flex justify-between items-start gap-2 mt-28">
        <aside className="w-1/5 p-2 flex flex-col items-start justify-start gap-2 bg-white border rounded border-gray-200">
          <div className="flex justify-start items-center gap-2">
            <img className="w-4" src={iconFilter} alt="" />
            <h4>فیلتربندی</h4>
          </div>
          <section>***************</section>
          <section className="w-full">
            <form className="w-full flex flex-col gap-3" action="">
              <div>
                <h3 className="w-full flex justify-start items-end gap-1 bg-neutral-100 rounded pb-1 px-1.5"><img className="w-3 h-3 mb-0.5" src={title} alt="" />قیمت</h3>
              </div>
              <div>
                <h3 className="w-full flex justify-start items-end gap-1 bg-neutral-100 rounded pb-1 px-1.5"><img className="w-3 h-3 mb-0.5" src={title} alt="" />دسته بندی ها</h3>
                {category.map((item) => {
                  return (
                    <div className="w-full flex justify-between items-center h-9 cursor-pointer">
                      <h5 className="text-neutral-600 text-sm">{item}</h5>
                      <input type="checkbox" name="" id="" />
                    </div>
                  );
                })}
              </div>
              <div>
                <h3 className="w-full flex justify-start items-end gap-1 bg-neutral-100 rounded pb-1 px-1.5"><img className="w-3 h-3 mb-0.5" src={title} alt="" />برند</h3>
                {brands.map((item) => {
                  return (
                    <div className="w-full flex justify-between items-center h-9 cursor-pointer">
                      <h5 className="text-neutral-600 text-sm">{item}</h5>
                      <input type="checkbox" name="" id="" />
                    </div>
                  );
                })}
              </div>
              <div className="w-full flex justify-between mt-6">
                <h3>فقط کالا های موجود</h3>
                <div
                  onClick={ActiveBtn}
                  className={`w-16 flex items-center p-1 bg-neutral-200 rounded-2xl cursor-pointer ${
                    active === true ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full left-0 transition-all ${
                      active === true ? "bg-orange" : "bg-neutral-400"
                    }`}
                  ></div>
                </div>
              </div>
              <div className="w-full flex justify-between items-center gap-1.5 mt-3">
                <button className="text-sm w-1/2 pb-2 pt-1.5 rounded-md bg-green-primery text-white font-bold cursor-pointer transition-all" type="submit">اعمال فیلتر</button>
                <button className="text-sm w-1/2 pb-2 pt-1.5 rounded-md bg-neutral-300 font-bold cursor-pointer transition-all text-neutral-800" type="reset">بازنشانی</button>
              </div>
            </form>
          </section>
        </aside>
        <section className="products w-3/4">
          <div className="w-full flex justify-between gap-2 mb-2">
            <div className="flex justify-start items-center gap-2">
              <img className="w-2" src={iconTitle} alt="" />
              <h2 className="flex justify-center text-lg font-bold gap-0.5">
                صفحه
                <span className="text-green-primery underline">محصولات</span>
              </h2>
            </div>
            <div className="flex justify-center gap-2 items-center">
              {Tags.map((item) => {
                return (
                  <button className="tag cursor-pointer hover:bg-neutral-300 transition-all text-neutral-800 bg-neutral-200 rounded-4xl h-8 text-xs px-2">
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="w-full grid grid-cols-5 gap-y-2">
            {showProducts.map((item, index) => (
              <div
                key={index}
                className="slide w-44 md:w-52 h-62 md:h-80 hover:border-green-secondry border-green-primery border shrink-0 transition-all cursor-pointer border-neutral-300 bg-white rounded-lg flex flex-col justify-between p-2 gap-3"
              >
                <img className="h-40 w-full" src={item.img} alt="" />
                <span className="text-xl">{item.title}</span>
                <div className="w-full rounded-md bg-green-lightness p-1 flex justify-between items-center self-end">
                  <div className="flex flex-col justify-start">
                    <span>هرکیلو</span>
                    <b>
                      {item.price}
                      <span className="text-xs text-gray-500 mr-1.5">
                        تومان
                      </span>
                    </b>
                  </div>
                  <button className="bg-green-primery p-2 rounded-full cursor-pointer hover:shadow-lg hover:shadow-green-primery hover:scale-110 transition-all">
                    <img className="w-6 h-6" src={shop} alt="" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="buttonsContainer w-full flex justify-center items-center gap-2">
            {Array.from({ length: counterOfPages }).map((_, index) => (
              <button
                className={`my-8 rounded-md p-1.5 text-lg cursor-pointer w-12 h-12 hover:bg-green-primery hover:text-white  transition-all ${
                  startIndex === index + 1
                    ? "bg-green-primery text-white"
                    : "bg-neutral-300 text-neutral-800"
                }`}
                onClick={() => handleCarts(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Products;
