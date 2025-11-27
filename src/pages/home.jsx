import React, { useRef } from "react";
import { useState, useEffect } from "react";
import Sliders from "../sliders/Sliders";
import direction from "/src/assets/icons/direction.png";
import bgOrange from "/src/assets/background/bg-orange.png";
import banner from "/src/assets/images/banner.png";
import iconTitle from "/src/assets/icons/icon-title.png";
import arrowLeft from "/src/assets/icons/arrow-left.png";
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
  }, []);

  useEffect(() => {
    fetch("/src/data/gategories.json")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.log(error + "خطا در دریافت اطلاهات"));
  }, []);

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
  const showDescription = (id) => {
    setCtrlElem((prev) => (prev === id ? null : id));
  };

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
      <section className="w-full grid grid-cols-2 md:grid-cols-4 mt-10 py-6 px-2 gap-10 sm:gap-10 md:border rounded-2xl">
        {services.map((item, index) => (
          <div
            key={index}
            onClick={() => showDescription(item.id)}
            className="flex flex-col justify-center cursor-pointer gap-2 items-center"
          >
            <span className="bg-green-secondry/50 rounded-full p-3">
              <svg className="w-6 sm:w-9" viewBox={item.viewBox}>
                <path d={item.d} />
              </svg>
            </span>
            <span className="text-xs sm:text-[1rem] md:text-lg">
              {item.title}
            </span>
            <div
              className={`w-full overflow-hidden cursor-pointer animate-opacityAnime ${
                ctrlElem === item.id ? "h-72" : "h-0"
              }`}
            >
              <p className="text-justify">{item.description}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="w-full grid grid-cols-3 lg:grid-cols-6 gap-8 mt-28">
        {categories.map((item) => (
          <div
            key={item.id}
            className="md:h-48 h-28 sm:h-36 bg-green-lightness rounded-4xl flex flex-col justify-center items-center hover:bg-green-secondry hover:shadow-2xl hover:border-none hover:shadow-green-secondry transition-all cursor-pointer hover:text-white border border-green-primery gap-3 md:gap-7"
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
      </section>
      <section className="mt-20 relative">
        <img
          className="absolute z-0 top-0 lg:h-80 md:h-60 h-40 w-full"
          src={bgOrange}
        />
        <div className="w-full flex flex-col justify-center items-center gap-20">
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
      <section className="w-full my-0 mx-auto flex flex-col justify-between items-start mt-24 gap-6">
        <div className="w-full flex justify-between items-start">
          <div className="flex justify-between items-start gap-2">
            <img className="w-4" src={iconTitle} alt="" />
            <h3 className="text-4xl font-bold">
              سلامتی و
              <br />
              <span className="text-green-primery"> حال خوب</span>
            </h3>
          </div>
          <button className="bg-orange text-white px-2 py-1 pb-3 rounded-md shadow-lg shadow-orange/80 flex justify-between items-center gap-3 cursor-pointer">
            <span>مشاهده بیشتر </span>
            <img className="w-4 mt-2" src={arrowLeft} alt="" />
          </button>
        </div>
        <div className="banner flex justify-end gap-4">
          <img className="w-2/3" src={banner} alt="" />
          <img className="w-2/3" src={banner} alt="" />
        </div>
      </section>
      <section className=""></section>
    </div>
  );
};

export default Home;
