import React from "react";
import { useState, useEffect } from "react";
import Sliders from "../sliders/Sliders";
import direction from "/src/assets/icons/direction.png";
import bgOrange from "/src/assets/background/bg-orange.png";

const home = () => {
  const [banners, setBanners] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [directionBanner] = useState("vertical");
  // const [directionProducts] = useState('12')
  let vertical;
  let horizontal;

  useEffect(() => {
    fetch("/src/data/gategories.json")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.log(error + "خطا در دریافت اطلاهات"));
  }, []);
  console.log(categories);

  useEffect(() => {
    fetch("/src/data/data.json")
      .then((res) => res.json())
      .then((data) => {
        setBanners(data);
      })
      .catch((error) => console.log(error + "خطا در دریافت اطلاهات"));
  }, []);
  useEffect(() => {
    fetch("/src/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log(error + "خطا در دریافت اطلاهات"));
  }, []);

  return (
    <div>
      <section className="mt-16">
        <Sliders
          items={banners}
          NumsOfItems={banners.length}
          size={24}
          isVertical={true}
          isImage={true}
        />
      </section>
      <section className="w-full grid grid-cols-2 md:grid-cols-4 mt-20">
        <div className="flex flex-col justify-center  gap-2 items-center">
          <img
            className="w-14 bg-green-secondry/50 rounded-full p-2"
            src={direction}
            alt=""
          />
          <span className="text-2xl">شعب</span>
          <b className="text-3xl">15</b>
        </div>
        <div className="flex flex-col justify-center gap-2  items-center">
          <img
            className="w-14 bg-green-secondry/50 rounded-full p-2"
            src={direction}
            alt=""
          />
          <span className="text-2xl">شعب</span>
          <b className="text-3xl">15</b>
        </div>
        <div className="flex flex-col justify-center gap-2 items-center">
          <img
            className="w-14 bg-green-secondry/50 rounded-full p-2"
            src={direction}
            alt=""
          />
          <span className="text-2xl">شعب</span>
          <b className="text-3xl">15</b>
        </div>
        <div className="flex flex-col justify-center gap-2  items-center">
          <img
            className="w-14 bg-green-secondry/50 rounded-full p-2"
            src={direction}
            alt=""
          />
          <span className="text-2xl">شعب</span>
          <b className="text-3xl">15</b>
        </div>
      </section>
      <section className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-28">
        {categories.map((item) => (
          <div
            key={item.id}
            className="h-48 bg-green-lightness rounded-4xl flex flex-col justify-center items-center hover:bg-green-secondry hover:shadow-2xl hover:border-none hover:shadow-green-secondry transition-all cursor-pointer hover:text-white border border-green-primery gap-7"
          >
            <img
              className="w-16 bg-white p-2 rounded-2xl"
              src={item.img}
              alt=""
            />
            <span className="text-xl">{item.title}</span>
          </div>
        ))}
      </section>
      <section className="mt-20 relative">
        <img className="absolute lg:h-80 md:h-60 h-40 w-full" src={bgOrange} />
        <div className="w-full absolute top-6 z-20 flex flex-col justify-center items-center gap-20">
          <div className="w-full flex justify-between items-center">
            <div className="w-1/3 mr-13">
              <img src="" alt="" />
              <span className="text-white text-2xl font-extrabold">
                محصولات تازه
              </span>
            </div>
            <div className="flex justify-between items-center w-[28%] border">
              <button className="bg-white/20 px-4 pt-2 pb-3 text-xl rounded-3xl text-white">
                مشاهده بیشتر
              </button>
            </div>
          </div>
          <div>
            <Sliders
              items={products}
              NumsOfItems={products.length}
              size={14}
              isVertical={false}
              isImage={false}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default home;
