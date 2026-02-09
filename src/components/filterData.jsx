import React, { useState, useEffect } from "react";
import iconFilter from "/src/assets/icons/panel.png";
import title from "/src/assets/icons/tag.png";

const filterData = () => {
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState([false, null]);
  const [open, setOpen] = useState(false);
  const [brands] = useState(["برند اول", "برند دوم", "برند سوم", "برند چهارم"]);
  useEffect(() => {
    fetch("/src/data/gategories.json")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  const ActiveBtn = (number) => {
    setActive(([prev]) => [!prev, number]);
  };
  return (
    <div>
      <div className="fixed md:hidden w-full h-full bg-neutral-800/60 top-0 right-0 z-30"></div>
      <div className="fixed md:hidden w-[90%] h-[80%] overflow-y-scroll top-5 right-6.5 z-40 p-3 flex flex-col items-start justify-start gap-2 bg-white border rounded border-gray-200">
        <div className="flex justify-between w-full items-center gap-2">
          <div className="w-full flex justify-start items-center">
            <img className="w-4" src={iconFilter} />
            <h4>فیلتربندی محصولات</h4>
          </div>
          <button onClick={() => setOpen(false)} className="float-left">
            بستن
          </button>
        </div>

        <section className="w-full">
          <form className="w-full flex flex-col gap-3">
            <div>
              <h3 className="w-full flex justify-start items-end gap-1 bg-neutral-100 rounded pb-1 px-1.5">
                <img className="w-3 h-3 mb-0.5" src={title} />
                قیمت
              </h3>
            </div>
            <div>
              <h3 className="w-full flex justify-start items-end gap-1 bg-neutral-100 rounded pb-1 px-1.5">
                <img className="w-3 h-3 mb-0.5" src={title} />
                دسته بندی ها
              </h3>
              {categories.map((item) => {
                return (
                  <label className="w-full hover:bg-green-primery/10 hover:p-1 rounded transition-all flex justify-between items-center h-9 cursor-pointer">
                    <h5 key={item.id} className="text-neutral-600 text-sm">
                      {item.title}
                    </h5>
                    <input type="checkbox" />
                  </label>
                );
              })}
            </div>
            <div>
              <h3 className="w-full flex justify-start items-end gap-1 bg-neutral-100 rounded pb-1 px-1.5">
                <img className="w-3 h-3 mb-0.5" src={title} />
                برند
              </h3>
              {brands.map((item) => {
                return (
                  <label className="w-full hover:bg-green-primery/10 hover:p-1 rounded transition-all flex justify-between items-center h-9 cursor-pointer">
                    <h5 className="text-neutral-600 text-sm">{item}</h5>
                    <input type="checkbox" />
                  </label>
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
              <button
                className="text-sm w-1/2 pb-2 pt-1.5 rounded-md bg-green-primery text-white font-bold cursor-pointer transition-all"
                type="submit"
              >
                اعمال فیلتر
              </button>
              <button
                className="text-sm w-1/2 pb-2 pt-1.5 rounded-md bg-neutral-300 font-bold cursor-pointer transition-all text-neutral-800"
                type="reset"
              >
                بازنشانی
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default filterData;
