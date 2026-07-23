import React, { useEffect, useState, useContext, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "./productProvider";
import Product from "./product.jsx";
import iconTitle from "../assets/icons/icon-title.png";
import iconFilter from "../assets/icons/panel.png";
import title from "../assets/icons/tag.png";
import { useSearchParams } from "react-router-dom";
import PriceRange from "../components/range.jsx";

const Products = () => {
  const Data = useContext(ProductsContext);
  const [serchParams] = useSearchParams();
  const categoryFormURL = serchParams.get("category");
  const bestSellingProducts = serchParams.get("isbest");
  const offer = serchParams.get("sort");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeBtnOne, setActiveBtnOne] = useState([false, null]);
  const [activeBtnTwo, setActiveBtnTwo] = useState([false, null]);
  const [categotySelected, setCategotySelected] = useState([]);
  const [brandSelected, setBrandSelected] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const inputValue = useRef(null);
  const itemsPerPage = 15;
  const diffrent = true;

  const userSelectionC = (category) => {
    setCategotySelected((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  // 4. تابع انتخاب برند (چندگانه) - باگ حذف اصلاح شد
  const userSelectionB = (brand) => {
    setBrandSelected((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand) // اصلاح: brand با b کوچک
        : [...prev, brand],
    );
  };

  const filteredProducts = useMemo(() => {
    return Data.filter((product) => {
      if (searchTerm && !product.title.toLowerCase().includes(searchTerm)) {
        return false;
      }
      if (
        categotySelected.length > 0 &&
        !categotySelected.includes(product.categories)
      ) {
        return false;
      }
      if (brandSelected.length > 0 && !brandSelected.includes(product.brand)) {
        return false;
      }
      if (
        bestSellingProducts &&
        !bestSellingProducts.includes(product.bestseller)
      ) {
        return false;
      }
      return true;
    });
  }, [
    Data,
    offer,
    searchTerm,
    categotySelected,
    brandSelected,
    bestSellingProducts,
    categoryFormURL,
  ]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const currentProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    return filteredProducts.slice(start, end);
  }, [filteredProducts, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [
    searchTerm,
    categotySelected,
    brandSelected,
    bestSellingProducts,
    offer,
    categoryFormURL,
  ]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  const handleSearchChange = () => {
    setSearchTerm(inputValue.current.value || "");
  };

  useEffect(() => {
    if (categoryFormURL) {
      setCategotySelected([Number(categoryFormURL)]);
    }
  }, [categoryFormURL]);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/data/gategories.json")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const [brands] = useState(["برند اول", "برند دوم", "برند سوم", "برند چهارم"]);

  const activeBtnOneFunc = (number) => {
    setActiveBtnOne(([prev]) => [!prev, number]);
  };
  const activeBtnTwoFunc = (number) => {
    setActiveBtnTwo(([prev]) => [!prev, number]);
  };

  return (
    <main className="w-full relative flex justify-center items-center">
      <div className="max-w-[1530px] w-full flex relative justify-between items-start gap-2 md:mt-24">
        {open && (
          <div className="absolute -top-18 w-full border border-white rounded-2xl h-[44rem] shadow-2xl overflow-y-scroll no-scrollbar">
            <section className="rounded-xl flex w-full p-2 flex-col items-start justify-start gap-2 bg-white">
              <div className="w-full mt-3 flex justify-center items-center gap-2 mb-2">
                <img className="w-4" src={iconFilter} />
                <h4 className="text-neutral-600 text-sm">فیلتربندی</h4>
              </div>
              <div className="w-full bg-neutral-50 p-2 rounded-md">
                <form className="w-full flex flex-col gap-3">
                  <div>
                    <h3 className="w-full flex justify-start items-end gap-1 bg-green-primery/20 text-neutral-700 text-sm rounded py-2 px-1.5">
                      <img className="w-3 h-3 mb-1" src={title} />
                      محدوده قیمت
                    </h3>
                    <PriceRange />
                  </div>
                  <div>
                    <h3 className="w-full flex justify-start items-end gap-1 bg-green-primery/20 text-neutral-700 text-sm rounded py-2 px-1.5">
                      <img className="w-3 h-3 mb-1" src={title} />
                      دسته بندی ها
                    </h3>
                    {categories.map((item, index) => {
                      return (
                        <label
                          key={index}
                          className="w-full hover:bg-green-primery/10 hover:p-1 rounded transition-all flex justify-between items-center h-9 cursor-pointer"
                        >
                          <h5 className="text-neutral-600 text-sm">
                            {item.title}
                          </h5>
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
                    <h3 className="w-full flex justify-start items-end gap-1 bg-green-primery/20 text-neutral-700 rounded py-2 px-1.5">
                      <img className="w-3 h-3 mb-1.5" src={title} />
                      برند
                    </h3>
                    {brands.map((item, index) => {
                      return (
                        <label
                          key={index}
                          className="w-full hover:bg-green-primery/10 hover:p-1 rounded transition-all flex justify-between items-center h-9 cursor-pointer"
                        >
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
                  <div className="w-full flex gap-4 lg:gap-0 lg:flex-row justify-between items-baseline mt-6">
                    <h3 className="self-start text-sm">فقط کالا های موجود</h3>
                    <div
                      onClick={() => activeBtnOneFunc(1)}
                      className={`w-16 self-end flex items-center p-1 bg-neutral-200 rounded-2xl cursor-pointer ${
                        activeBtnOne[0] === true && activeBtnOne[1] === 1
                          ? "justify-start"
                          : "justify-end"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full left-0 transition-all ${
                          activeBtnOne[0] === true && activeBtnOne[1] === 1
                            ? "bg-orange"
                            : "bg-neutral-400"
                        }`}
                      ></div>
                    </div>
                  </div>
                  <div className="w-full flex gap-4 lg:gap-0 lg:flex-row justify-between items-baseline mt-6">
                    <h3 className="self-start text-sm">
                      فقط کالا های تخفیف خورده
                    </h3>
                    <div
                      onClick={() => activeBtnTwoFunc(2)}
                      className={`w-16 self-end flex items-center p-1 bg-neutral-200 rounded-2xl cursor-pointer ${
                        activeBtnTwo[0] === true && activeBtnTwo[1] === 2
                          ? "justify-start"
                          : "justify-end"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full left-0 transition-all ${
                          activeBtnTwo[0] === true && activeBtnTwo[1] === 2
                            ? "bg-orange"
                            : "bg-neutral-400"
                        }`}
                      ></div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="w-full flex justify-end items-center gap-2">
                <button
                  className="w-1/2 cursor-pointer h-10 hover:bg-green-primery/80 bg-green-primery transition-all text-white px-2 rounded-md pb-1"
                  onClick={() => setOpen(false)}
                >
                  اعمال
                </button>
                <button
                  className="w-1/2 cursor-pointer h-10 hover:bg-red-500/80 bg-gray-500 transition-all text-white px-2 rounded-md pb-1"
                  onClick={() => setOpen(false)}
                >
                  بستن
                </button>
              </div>
            </section>
          </div>
        )}

        <aside className="hidden md:flex w-1/5 p-2 flex-col items-start justify-start gap-2 bg-white border rounded border-gray-200">
          <div className="w-full flex justify-center items-center gap-2 mb-2">
            <img className="w-3" src={iconFilter} />
            <h4 className="text-neutral-600 text-xs">فیلتربندی</h4>
          </div>
          <section className="w-full bg-neutral-50 p-2 rounded-md">
            <form className="w-full flex flex-col gap-3">
              <div>
                <h3 className="w-full flex justify-start items-end gap-1 bg-green-primery/20 text-neutral-700 text-sm rounded py-2 px-1.5">
                  <img className="w-3 h-3 mb-1" src={title} />
                  محدوده قیمت
                </h3>
                <PriceRange />
              </div>
              <div>
                <h3 className="w-full flex justify-start items-end gap-1 bg-green-primery/20 text-neutral-700 text-sm rounded py-2 px-1.5">
                  <img className="w-3 h-3 mb-1" src={title} />
                  دسته بندی ها
                </h3>
                {categories.map((item, index) => {
                  return (
                    <label
                      key={index}
                      className="w-full hover:bg-green-primery/10 hover:p-1 rounded transition-all flex justify-between items-center h-9 cursor-pointer"
                    >
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
                <h3 className="w-full flex justify-start items-end gap-1 bg-green-primery/20 text-neutral-700 rounded py-2 px-1.5">
                  <img className="w-3 h-3 mb-1.5" src={title} />
                  برند
                </h3>
                {brands.map((item, index) => {
                  return (
                    <label
                      key={index}
                      className="w-full hover:bg-green-primery/10 hover:p-1 rounded transition-all flex justify-between items-center h-9 cursor-pointer"
                    >
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
                  onClick={() => activeBtnOneFunc(1)}
                  className={`w-16 self-end flex items-center p-1 bg-neutral-200 rounded-2xl cursor-pointer ${
                    activeBtnOne[0] === true && activeBtnOne[1] === 1
                      ? "justify-start"
                      : "justify-end"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full left-0 transition-all ${
                      activeBtnOne[0] === true && activeBtnOne[1] === 1
                        ? "bg-orange"
                        : "bg-neutral-400"
                    }`}
                  ></div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-baseline mt-6">
                <h3 className="self-start text-sm">فقط کالا های تخفیف خورده</h3>
                <div
                  onClick={() => activeBtnTwoFunc(2)}
                  className={`w-16 self-end flex items-center p-1 bg-neutral-200 rounded-2xl cursor-pointer ${
                    activeBtnTwo[0] === true && activeBtnTwo[1] === 2
                      ? "justify-start"
                      : "justify-end"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full left-0 transition-all ${
                      activeBtnTwo[0] === true && activeBtnTwo[1] === 2
                        ? "bg-orange"
                        : "bg-neutral-400"
                    }`}
                  ></div>
                </div>
              </div>
            </form>
          </section>
        </aside>
        <section className="products w-full md:w-4/5 pb-10 md:pb-0">
          <div className="w-full flex flex-col md:flex-row md:mb-4 gap-2 md:gap-0">
            <div className="w-full md:w-1/3 flex justify-between items-center gap-4 md:gap-2">
              <div className="flex justify-start items-center gap-2">
                <img className="w-1.5 md:w-2" src={iconTitle} />
                <h2 className="flex justify-center text-sm md:text-lg font-bold gap-0.5">
                  صفحه
                  <span className="text-green-primery underline">محصولات</span>
                </h2>
              </div>
              <button
                onClick={() => setOpen(true)}
                className="border md:hidden rounded border-neutral-200 bg-white px-1 py-2 flex justify-between items-center gap-1.5 float-left cursor-pointer"
              >
                <img className="w-3" src={iconFilter} />
                <span className="text-xs">فیلتر محصولات</span>
              </button>
            </div>
            <form className="w-full mb-3 md:mb-0" action="">
              <input
                onChange={handleSearchChange}
                value={searchTerm}
                ref={inputValue}
                placeholder="سرچ محصول ..."
                maxLength={50}
                minLength={5}
                className="w-full h-10 rounded-xl px-3 text-sm outline-none transition-all bg-white border border-neutral-200"
                type="text"
              />
            </form>
          </div>
          {currentProducts.length > 0 ? (
            <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-1">
              {currentProducts.map((item, index) => (
                <Link key={index + 1} to={`/products/${item.id}`}>
                  <Product diffrent={diffrent} productData={item} />
                </Link>
              ))}
            </div>
          ) : (
            <p className="w-full flex justify-center text-2xl translate-y-56">
              محصولی یافت نشد!
            </p>
          )}

          <div className="buttonsContainer w-full flex justify-center items-center gap-2 mb-10">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index + 1}
                className={`my-8 flex justify-center items-center text-[1rem] md:text-[1rem] rounded md:rounded-md p-1.5 text-lg cursor-pointer w-11 h-12 md:w-12 md:h-12 hover:bg-green-primery hover:text-white transition-all ${
                  currentPage === index + 1
                    ? "bg-green-primery text-white"
                    : "bg-neutral-300 text-neutral-800"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Products;
