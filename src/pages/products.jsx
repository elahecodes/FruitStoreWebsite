import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "./productProvider";
import Product from "./product.jsx";
import iconTitle from "/src/assets/icons/icon-title.png";
import iconFilter from "/src/assets/icons/panel.png";
import title from "/src/assets/icons/tag.png";
import FilterData from "../components/filterData.jsx";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const Data = useContext(ProductsContext);
  const [serchParams] = useSearchParams();
  const categoryFormURL = serchParams.get("category");

  let increment = 6;
  useEffect(() => {
    if (categoryFormURL) {
      setCategotySelected([Number(categoryFormURL)]);
    }
  }, [categoryFormURL]);

  const [startIndex, setStartIndex] = useState(1);
  const [showProducts, setShowProducts] = useState([]);
  const [active, setActive] = useState([false, null]);
  const [categotySelected, setCategotySelected] = useState([]);
  const [brandSelected, setBrandSelected] = useState([]);
  const [open, setOpen] = useState(false);
  const [Tags] = useState(["پرفروش ترین ها", "تخفیف خورده ها", "جدید ترین ها"]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/src/data/gategories.json")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const [brands] = useState(["برند اول", "برند دوم", "برند سوم", "برند چهارم"]);

  useEffect(() => {
    const start = (startIndex - 1) * increment;
    const end = start + increment;
    setShowProducts(Data.slice(start, end));
  }, [Data, startIndex]);

  const handleCarts = (number) => {
    setStartIndex(number);
  };
  let counterOfPages = Math.ceil(Data.length / increment);

  const ActiveBtn = (number) => {
    setActive(([prev]) => [!prev, number]);
  };

  function userSelectionC(category) {
    setCategotySelected((prev) =>
      prev.includes(category)
        ? prev.filter((Category) => Category !== category)
        : [...prev, category],
    );
  }
  function userSelectionB(brand) {
    setBrandSelected((prev) =>
      prev.includes(brand)
        ? prev.filter((Brand) => Brand !== brand)
        : [...prev, brand],
    );
  }

  function applyFilter() {
    const filtered = Data.filter((item) => {
      const brandCondition =
        brandSelected.length === 0 ? true : brandSelected.includes(item.brand);

      const categoryCondition =
        categotySelected.length === 0
          ? true
          : categotySelected.includes(item.categories);

      return categoryCondition && brandCondition;
    });
    setShowProducts(filtered);
  }

  return (
    <>
      <main className="flex relative justify-between items-start gap-2 md:mt-28">
        {open && (
          <>
            <FilterData />
          </>
        )}

        <aside className="hidden md:flex w-1/5 p-2 flex-col items-start justify-start gap-2 bg-white border rounded border-gray-200">
          <div className="flex justify-start items-center gap-2">
            <img className="w-4" src={iconFilter} />
            <h4>فیلتربندی</h4>
          </div>
          <section className="w-full">
            <form className="w-full flex flex-col gap-3">
              <div>
                <h3 className="w-full flex justify-start items-end gap-1 rounded pb-1 px-1.5">
                  <img className="w-3 h-3 mb-0.5" src={title} />
                  قیمت
                </h3>
              </div>
              <div>
                <h3 className="w-full flex justify-start items-end gap-1rounded pb-1 px-1.5">
                  <img className="w-3 h-3 mb-0.5" src={title} />
                  دسته بندی ها
                </h3>
                {categories.map((item) => {
                  return (
                    <label className="w-full hover:bg-green-primery/10 hover:p-1 rounded transition-all flex justify-between items-center h-9 cursor-pointer">
                      <h5 className="text-neutral-600 text-sm">{item.title}</h5>
                      <input
                        checked={categotySelected.includes(item.id)}
                        onChange={() => userSelectionC(item.id)}
                        type="checkbox"
                      />
                    </label>
                  );
                })}
              </div>
              <div>
                <h3 className="w-full flex justify-start items-end gap-1 rounded pb-1 px-1.5">
                  <img className="w-3 h-3 mb-0.5" src={title} />
                  برند
                </h3>
                {brands.map((item, index) => {
                  return (
                    <label className="w-full hover:bg-green-primery/10 hover:p-1 rounded transition-all flex justify-between items-center h-9 cursor-pointer">
                      <h5 className="text-neutral-600 text-sm">{item}</h5>
                      <input
                        onChange={() => userSelectionB(index + 1)}
                        checked={brandSelected.includes(index + 1)}
                        type="checkbox"
                      />
                    </label>
                  );
                })}
              </div>
              <div className="w-full flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-baseline mt-6">
                <h3 className="self-start text-sm">فقط کالا های موجود</h3>
                <div
                  onClick={() => ActiveBtn(1)}
                  className={`w-16 self-end flex items-center p-1 bg-neutral-200 rounded-2xl cursor-pointer ${
                    active[0] === true && active[1] === 1
                      ? "justify-start"
                      : "justify-end"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full left-0 transition-all ${
                      active[0] === true && active[1] === 1
                        ? "bg-orange"
                        : "bg-neutral-400"
                    }`}
                  ></div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-baseline mt-6">
                <h3 className="self-start text-sm">فقط کالا های تخفیف خورده</h3>
                <div
                  onClick={() => ActiveBtn(2)}
                  className={`w-16 self-end flex items-center p-1 bg-neutral-200 rounded-2xl cursor-pointer ${
                    active[0] === true && active[1] === 2
                      ? "justify-start"
                      : "justify-end"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full left-0 transition-all ${
                      active[0] === true && active[1] === 2
                        ? "bg-orange"
                        : "bg-neutral-400"
                    }`}
                  ></div>
                </div>
              </div>

              <div className="w-full flex justify-between flex-col lg:flex-row items-center gap-1.5 mt-3">
                <div
                  onClick={applyFilter}
                  className="text-xs flex justify-center items-center lg:text-sm w-full lg:w-1/2  h-8 hover:bg-green-primery/80 rounded-md bg-green-primery text-white font-bold cursor-pointer transition-all"
                  type="submit"
                >
                  اعمال فیلتر
                </div>
                <button
                  onClick={() => {
                    setCategotySelected([]);
                    setBrandSelected([]);
                    setShowProducts(Data);
                  }}
                  className="text-xs lg:text-sm w-full lg:w-1/2 pb-2 pt-1.5 rounded-md bg-neutral-300 hover:bg-neutral-200 font-bold cursor-pointer transition-all text-neutral-800"
                  type="reset"
                >
                  بازنشانی
                </button>
              </div>
            </form>
          </section>
        </aside>
        <section className="products w-full md:w-4/5 pb-10 md:pb-0">
          <button
            onClick={() => setOpen(true)}
            className="border md:hidden rounded border-neutral-200 bg-white px-1 py-2 flex justify-between items-center gap-1.5 float-left mb-5 cursor-pointer"
          >
            <img className="w-3" src={iconFilter} />
            <span className="text-xs">فیلتر محصولات</span>
          </button>
          <div className="w-full flex justify-between gap-2 mb-2">
            <div className="flex justify-start items-center gap-2">
              <img className="w-1.5 md:w-2" src={iconTitle} />
              <h2 className="flex justify-center text-sm md:text-lg font-bold gap-0.5">
                صفحه
                <span className="text-green-primery underline">محصولات</span>
              </h2>
            </div>
            <div className="flex justify-center gap-2 items-center">
              {Tags.map((item) => {
                return (
                  <button className="tag cursor-pointer hover:bg-neutral-300 transition-all text-neutral-800 bg-neutral-200 rounded-4xl h-8 text-[0.6rem] md:text-sm px-2">
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1">
            {showProducts.map((item) => (
              <Link to={`/products/${item.id}`}>
                <Product key={item.id} productData={item} />
              </Link>
            ))}
          </div>
          <div className="buttonsContainer w-full flex justify-center items-center gap-2">
            {Array.from({ length: counterOfPages }).map((_, index) => (
              <button
                className={`my-8 flex justify-center items-center text-[0.7rem] md:text-[1rem] rounded md:rounded-md p-1.5 text-lg cursor-pointer w-6 h-6 md:w-12 md:h-12 hover:bg-green-primery hover:text-white transition-all ${
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
