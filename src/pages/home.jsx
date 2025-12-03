import React, { useRef } from "react";
import { useState, useEffect } from "react";
import Sliders from "../sliders/Sliders";
import direction from "/src/assets/icons/direction.png";
import bgOrange from "/src/assets/background/bg-orange.png";
import bgGreen from "/src/assets/background/bg-green.png";
import banner from "/src/assets/images/banner.png";
import iconTitle from "/src/assets/icons/icon-title.png";
import arrowLeft from "/src/assets/icons/arrow-left.png";
import shop from "../assets/icons/shopW.png";
import iconTitleW from '../assets/icons/icon-title-white.png'
const Home = () => {
  const [banners, setBanners] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);
  const [ctrlElem, setCtrlElem] = useState(null);
  const description = useRef();

  useEffect(() => {
    fetch("/src/data/services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      })
      .catch((error) => console.log(error + "خطا در دریافت اطلاهات"));

    fetch("/src/data/gategories.json")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.log(error + "خطا در دریافت اطلاهات"));

    fetch("/src/data/data.json")
      .then((res) => res.json())
      .then((data) => {
        setBanners(data);
      })
      .catch((error) => console.log(error + "خطا در دریافت اطلاهات"));

    fetch("/src/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log(error + "خطا در دریافت اطلاهات"));
  }, []);

  const showDescription = (id) => {
    setCtrlElem((prev) => (prev === id ? null : id));
  };

  return (
    <div className="mb-20">
      <section className="mt-16">
        <Sliders
          items={banners}
          NumsOfItems={banners.length}
          size={24}
          isVertical={true}
          isImage={true}
        />

        <div className="lg:hidden w-full h-52 snap-x snap-mandatory rounded-2xl flex items-center overflow-x-scroll overflow-y-hidden gap-2">
          {banners.map((item, index) => (
            <img
              className="snap-start rounded-2xl h-52 w-[95%] border shrink-0"
              key={index}
              src={item.slide}
              alt=""
            />
          ))}
        </div>
      </section>
      <section className="w-full grid grid-cols-4 md:grid-cols-4 py-6 px-2 rounded-2xl">
        {services.map((item, index) => (
          <div
            tabIndex={0}
            role="button"
            key={index}
            onClick={() => showDescription(item.id)}
            className="services before:content-['\01F80B'] z-0 relative h-48 rounded-2xl before:w-6 before:h-6 before:bg-transparent before:text-transparent focus:before:text-white before:flex before:justify-center before:items-center hover:bg-green-primery/30 hover:before:text-white  focus:before:bg-green-secondry hover:before:bg-green-secondry before:transition-all before:absolute focus:before:w-full focus:before:h-full before:rounded-2xl focus:before:transition-all before:bottom-2 flex transition-all flex-col p-0.5  justify-center cursor-pointer gap-2 items-center"
          >
            <span className="bg-green-secondry/50 rounded-full p-3 z-10">
              <svg className="w-6 sm:w-9" viewBox={item.viewBox}>
                <path d={item.d} />
              </svg>
            </span>
            <h5 className="text-xs z-10 sm:text-[1rem] md:text-lg">{item.title}</h5>
            <div
              className={`absolute top-40 ${
                index === 2 || index === 3 ? "left-10" : "right-0"
              } p-2 w-62 rounded-2xl animate-wiggle text-sm transition-all shadow-2xl border-t-2 border-t-green-primery z-20 text-neutral-700 bg-white/30 overflow-hidden cursor-pointer backdrop-blur-sm ${
                ctrlElem === item.id ? "h-auto" : "hidden"
              }`}
            >
              <p className="text-justify">{item.description}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="w-full flex flex-col gap-5">
        <div className="flex justify-start items-center gap-1.5">
          <img className="w-2" src={iconTitle} alt="" />
          <h3 className="text-lg md:text-xl font-extrabold">دسته بندی ها</h3>
        </div>
        <div className="w-full grid grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((item) => (
            <div
              tabIndex={0}
              role="button"
              key={item.id}
              className="md:h-48 h-28 sm:h-36 bg-green-lightness rounded-4xl flex flex-col justify-center items-center hover:bg-green-secondry hover:shadow-2xl hover:border-none hover:shadow-green-secondry hover:text-white   focus:bg-green-secondry focus:shadow-2xl focus:border-none focus:shadow-green-secondry transition-all cursor-pointer focus:text-white border border-green-primery gap-3 md:gap-7"
            >
              <img
                className="w-9 sm:w-12 md:w-16 bg-white p-1 sm:p-2 rounded-xl md:rounded-2xl"
                src={item.img}
                alt=""
              />
              <span className="text-xs sm:text-[1rem] lg:text-xl">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-15 relative h-[22rem]">
        <img
          className="absolute z-0 top-0 lg:h-80 md:h-60 h-64 w-full"
          src={bgOrange}
        />
        <div className="w-full absolute flex flex-col justify-center items-center gap-20">
          <div className="w-full right-0 flex justify-between items-center absolute top-3 px-3">
            <div className="flex justify-center items-center gap-1">
              <img className="w-2" src={iconTitleW} alt="" />
              <h4 className="md:text-white text-lg md:text-xl font-extrabold">
                محصولات تازه
              </h4>
            </div>
            <div className="flex justify-end items-center">
              <button className="bg-white/20 text-white px-2 py-1 pb-2 md:pb-3 rounded-md md:rounded-3xl shadow-lg shadow-orange/80 flex justify-between items-center gap-3 cursor-pointer">
                <span className="text-[0.8rem] md:text-[1rem]">مشاهده بیشتر </span>
                <img className="w-4 mt-2" src={arrowLeft} alt="" />
              </button>
            </div>
          </div>
          <div className="w-[97%] absolute top-10 overflow-x-scroll snap-mandatory snap-x py-10 flex justify-start items-center gap-2">
            {products.map((item, index) => (
              <div
                key={index}
                className="slide w-44 md:w-56 h-62 md:h-80 snap-end hover:shadow-2xl transition-all cursor-pointer border shrink-0  border-neutral-300 bg-white rounded-xl flex flex-col justify-between p-2 gap-3"
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
        </div>
      </section>
      <section className="w-full my-0 mx-auto flex flex-col justify-between items-start mt-24 gap-6">
        <div className="w-full flex justify-between items-start">
          <div className="flex justify-center items-start gap-2">
            <img className="w-2 sm:w-2 lg:w-4 mt-1.5" src={iconTitle} alt="" />
            <h3 className="lg:text-4xl text-xl font-bold">
              سلامتی و
              <br />
              <span className="text-green-primery"> حال خوب</span>
            </h3>
          </div>
          <button className="bg-orange text-white px-2 py-1 pb-2 md:pb-3  rounded-md shadow-lg shadow-orange/80 flex justify-between items-center gap-3 cursor-pointer">
            <span className="text-[0.8rem] md:text-[1rem]">مشاهده بیشتر </span>
            <img className="w-4 mt-2" src={arrowLeft} alt="" />
          </button>
        </div>
        <div className="banner flex flex-col md:flex-row rounded-2xl justify-end gap-4">
          <img
            className="md:w-2/3 hover:shadow-2xl cursor-pointer  rounded-2xl transition-all"
            src={banner}
            alt=""
          />
          <img
            className="md:w-2/3 hover:shadow-2xl cursor-pointer  rounded-2xl transition-all"
            src={banner}
            alt=""
          />
        </div>
      </section>
       <div className="w-full mt-20 flex justify-between items-center gap-2">
          <div className="flex justify-center items-center gap-2">
            <img className="w-2" src={iconTitle} alt="" />
            <h3 className="text-lg md:text-xl font-extrabold">میوه های پر فروش</h3>
          </div>
          <button className="bg-orange text-white px-2 py-1 pb-2 md:pb-3  rounded-md shadow-lg shadow-orange/80 flex justify-between items-center gap-3 cursor-pointer">
            <span className="text-[0.8rem] md:text-[1rem]">مشاهده بیشتر </span>
            <img className="w-3 md:w-4 mt-1 md:mt-2" src={arrowLeft} alt="" />
          </button>
        </div>
      <section className="mt-10 bg-green-primery p-4 rounded-2xl">
        <div className="w-full overflow-x-scroll flex justify-start items-center mt-10 gap-1">
          {products.map((item, index) => (
            <div
              key={index}
              className="slide w-44 md:w-56 h-62 md:h-80 hover:border-green-secondry border-green-primery border-2 shrink-0 transition-all cursor-pointer border-neutral-300 bg-white rounded-xl flex flex-col justify-between p-2 gap-3"
            >
              <img className="h-40 w-full" src={item.img} alt="" />
              <span className="text-xl">{item.title}</span>
              <div className="w-full rounded-md bg-green-lightness p-1 flex justify-between items-center self-end">
                <div className="flex flex-col justify-start">
                  <span>هرکیلو</span>
                  <b>
                    {item.price}
                    <span className="text-xs text-gray-500 mr-1.5">تومان</span>
                  </b>
                </div>
                <button className="bg-green-primery p-2 rounded-full cursor-pointer hover:shadow-lg hover:shadow-green-primery hover:scale-110 transition-all">
                  <img className="w-6 h-6" src={shop} alt="" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="">
      
      </section>
    </div>
  );
};

export default Home;
