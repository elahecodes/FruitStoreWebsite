import React, { useState, useEffect } from "react";
import iconTitle from "/src/assets/icons/icon-title.png";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/src/data/gategories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error + " خطا در دریافت اطلاعات"));
  }, []);

  const handleCategory = (categoryID) => {
    navigate(`/products?category=${categoryID}`);
  };

  return (
    <div className="w-full flex flex-col gap-5 mt-8">
      <div className="flex justify-start items-center gap-1.5">
        <img className="w-2" src={iconTitle} />
        <h3 className="text-lg md:text-2xl font-lalezar text-neutral-800">
          دسته بندی ها
        </h3>
      </div>
      <div className="w-full grid grid-cols-3 lg:grid-cols-6 gap-3">
        {categories.map((item) => (
          <div
            onClick={() => handleCategory(item.id)}
            tabIndex={0}
            role="button"
            key={item.id}
            className="md:h-48 h-28 sm:h-36 bg-green-lightness rounded-4xl flex flex-col justify-center items-center hover:bg-green-secondry hover:shadow-2xl hover:border-none hover:shadow-green-secondry hover:text-white focus:bg-green-secondry focus:shadow-2xl focus:border-none focus:shadow-green-secondry transition-all cursor-pointer focus:text-white border border-green-primery gap-3 md:gap-7"
          >
            <img
              className="w-9 sm:w-12 md:w-16 bg-white p-1 sm:p-2 rounded-xl md:rounded-2xl"
              src={item.img}
            />
            <span className="text-xs sm:text-[1rem] lg:text-xl">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
