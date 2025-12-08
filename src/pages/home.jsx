import React, { useMemo, useRef } from "react";
import { useState, useEffect } from "react";
import Sliders from "../sliders/Sliders";
import direction from "/src/assets/icons/direction.png";
import bgOrange from "/src/assets/background/bg-orange.png";
import bgGreen from "/src/assets/background/bg-green.png";
import banner from "/src/assets/images/banner.png";
import iconTitle from "/src/assets/icons/icon-title.png";
import arrowLeft from "/src/assets/icons/arrow-left.png";
import shop from "../assets/icons/shopW.png";
import iconTitleW from "../assets/icons/icon-title-white.png";
import { createPortal } from "react-dom";
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
  const hideDescription = () => {
    setCtrlElem((prev) => (prev = null));
  };
  // const element = useMemo(() => document.createElement("div"), []);

  // useEffect(() => {
  //   const root = document.getElementById("modal-root");
  //   root.appendChild(element);
  //   return () => root.removeChild(element);
  // }, [element]);

  return (
    <div className="mb-20">
      <button className="flex justify-start items-center gap-1.5 md:mt-30 cursor-pointer">
        <svg fill="#404040" viewBox="0 0 512 512" width="20" height="20">
          <g id="_01_align_center">
            <path d="M255.104,512.171l-14.871-12.747C219.732,482.258,40.725,327.661,40.725,214.577c0-118.398,95.981-214.379,214.379-214.379   s214.379,95.981,214.379,214.379c0,113.085-179.007,267.682-199.423,284.932L255.104,512.171z M255.104,46.553   c-92.753,0.105-167.918,75.27-168.023,168.023c0,71.042,110.132,184.53,168.023,236.473   c57.892-51.964,168.023-165.517,168.023-236.473C423.022,121.823,347.858,46.659,255.104,46.553z" />
            <path d="M255.104,299.555c-46.932,0-84.978-38.046-84.978-84.978s38.046-84.978,84.978-84.978s84.978,38.046,84.978,84.978   S302.037,299.555,255.104,299.555z M255.104,172.087c-23.466,0-42.489,19.023-42.489,42.489s19.023,42.489,42.489,42.489   s42.489-19.023,42.489-42.489S278.571,172.087,255.104,172.087z" />
          </g>
        </svg>

        <h3 className="text-neutral-600 text-sm">
          ارسال به استان خوزستان شهر اهواز
        </h3>
      </button>
      <section className="mt-5 md:mt-10">
        <div className="w-full h-52 md:h-[25rem] pb-10 scroll-smooth scrollbar-custom snap-x snap-mandatory rounded-2xl flex items-center overflow-x-scroll overflow-y-hidden gap-2">
          {banners.map((item, index) => (
            <img
              className="snap-start border border-red-500 rounded-2xl h-52 md:h-auto w-[95%] shrink-0"
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
            onMouseEnter={() => showDescription(item.id)}
            onMouseLeave={() => hideDescription()}
            className="services before:content-['\01F80B'] z-0 relative h-24 md:h-48 rounded-2xl hover:text-white before:w-5 md:before:w-6 md:before:h-6 before:h-5 before:bg-green-secondry hover:before:text-transparent before:text-white before:flex before:justify-center before:items-center hover:before:bg-green-secondry before:transition-all before:absolute hover:before:w-full hover:before:h-full before:rounded-2xl hover:before:transition-all before:-bottom-6 flex transition-all flex-col p-0.5  justify-center cursor-pointer gap-2 items-center"
          >
            <span className="icon-container bg-green-secondry/50 rounded-full p-3 z-10">
              <svg className="w-6 sm:w-9" viewBox={item.viewBox}>
                <path d={item.d} />
              </svg>
            </span>
            <h5 className="text-xs z-10 sm:text-[1rem] md:text-lg">
              {item.title}
            </h5>
            <div
              className={`absolute top-25 md:top-40 ${
                index === 2 || index === 3 ? "left-10" : "right-0"
              } p-2 w-62 rounded-2xl z-30 animate-wiggle text-sm transition-all shadow-2xl border-t-2 border-t-green-primery text-neutral-700 bg-white/30 overflow-hidden cursor-pointer backdrop-blur-sm ${
                ctrlElem === item.id ? "h-auto" : "hidden"
              }`}
            >
              <p className="text-justify z-20">{item.description}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="w-full flex flex-col gap-5 mt-8">
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
              <h4 className="text-white text-lg md:text-xl font-extrabold">
                محصولات تازه
              </h4>
            </div>
            <div className="flex justify-end items-center">
              <button className="bg-white/20 text-white px-2 py-1 pb-2 md:pb-3 rounded-md md:rounded-3xl shadow-lg shadow-orange/80 flex justify-between items-center gap-3 cursor-pointer">
                <span className="text-[0.8rem] md:text-[1rem]">
                  مشاهده بیشتر{" "}
                </span>
                <img className="w-4 mt-2" src={arrowLeft} alt="" />
              </button>
            </div>
          </div>
          <div className="w-[97%] absolute top-10 overflow-x-scroll snap-mandatory snap-x pt-10 pb-3 scrollbar-custom flex justify-start items-center gap-1">
            {products.map((item, index) => (
              <div
                key={index}
                className="slide w-44 md:w-56 h-62 md:h-80 snap-end hover:border-orange transition-all cursor-pointer border shrink-0  border-neutral-300 bg-white rounded-xl flex flex-col justify-between p-2 gap-3"
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
      <section className="w-full my-0 mx-auto flex flex-col justify-between items-start mt-30 gap-6">
        <div className="w-full flex justify-between items-start">
          <div className="flex justify-center items-start gap-2">
            <img className="w-2 sm:w-2 lg:w-4 mt-1.5" src={iconTitle} alt="" />
            <h3 className="lg:text-4xl text-xl font-bold">
              سلامتی و
              <br />
              <span className="text-green-primery"> حال خوب</span>
            </h3>
          </div>
          <button className="bg-orange text-white px-2 py-1 pb-2 md:pb-3 rounded-md shadow-lg shadow-orange/80 flex justify-between items-center gap-3 cursor-pointer">
            <span className="text-[0.8rem] md:text-[1rem]">مشاهده بیشتر </span>
            <img className="w-4 mt-2" src={arrowLeft} alt="" />
          </button>
        </div>
        <div className="banner flex flex-col md:flex-row rounded-2xl justify-end gap-4">
          <img
            className="md:w-[50%] hover:shadow-2xl cursor-pointer  rounded-2xl transition-all"
            src={banner}
            alt=""
          />
          <img
            className="md:w-[50%] hover:shadow-2xl cursor-pointer  rounded-2xl transition-all"
            src={banner}
            alt=""
          />
        </div>
      </section>
      <div className="w-full mt-20 flex justify-between items-center gap-2">
        <div className="flex justify-center items-center gap-2">
          <img className="w-2" src={iconTitle} alt="" />
          <h3 className="text-lg md:text-xl font-extrabold">
            میوه های پر فروش
          </h3>
        </div>
        <button className="bg-orange text-white px-2 py-1 pb-2 md:pb-3  rounded-md shadow-lg shadow-orange/80 flex justify-between items-center gap-3 cursor-pointer">
          <span className="text-[0.8rem] md:text-[1rem]">مشاهده بیشتر </span>
          <img className="w-3 md:w-4 mt-1 md:mt-2" src={arrowLeft} alt="" />
        </button>
      </div>
      <section className="mt-10 bg-green-primery p-4 rounded-2xl">
        <div className="w-full overflow-x-scroll snap-mandatory snap-x flex justify-start items-center mt-10 gap-1 scrollbar-custom pb-3 top-10 scrollbar-custom">
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
      <section className=""></section>
    </div>
  );
};

export default Home;
