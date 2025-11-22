import React from "react";
import { useState, useEffect } from "react";
import Sliders from "../sliders/Sliders";
import direction from '/src/assets/icons/direction.png'
const home = () => {
  const [banners, setBanners] = useState([]);
  const [categories , setCategories] = useState([])
  // const [products, setProducts] = useState([]);
  const [directionBanner] = useState('vertical')
  // const [directionProducts] = useState('12')


  useEffect(() => {
    fetch("/src/data/gategories.json")
    .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.log(error + "خطا در دریافت اطلاهات"));
    },[]);
  console.log(categories);
  
  useEffect(() => {
    fetch("/src/data/data.json")
    .then((res) => res.json())
      .then((data) => {
        setBanners(data);
      })
      .catch((error) => console.log(error + "خطا در دریافت اطلاهات"));
    },[]);
    // useEffect(() => {
      //   fetch("")
      //     .then((res) => res.json())
      //     .then((data) => {
        //       setProducts(data);
        //     })
        //     .catch((error) => console.log(error + "خطا در دریافت اطلاهات"));
        // },[]);
        
  return (
    <div>
      <section className="mt-16">
        <Sliders
          items={banners}
          NumsOfItems={banners.length}
          height={24}
          direction={directionBanner}
          isImage={true}
        />
      </section>
      <section className="w-full grid grid-cols-2 md:grid-cols-4 mt-10">
        <div className="border flex flex-col justify-center  gap-2 items-center">
          <img className="w-14 bg-green-secondry/50 rounded-full p-2" src={direction} alt="" />
          <span className="text-2xl">شعب</span>
          <b className="text-3xl">15</b>
        </div>
         <div className="border flex flex-col justify-center gap-2  items-center">
          <img className="w-14 bg-green-secondry/50 rounded-full p-2" src={direction} alt="" />
          <span className="text-2xl">شعب</span>
          <b className="text-3xl">15</b>
        </div>
         <div className="border flex flex-col justify-center gap-2 items-center">
          <img className="w-14 bg-green-secondry/50 rounded-full p-2" src={direction} alt="" />
          <span className="text-2xl">شعب</span>
          <b className="text-3xl">15</b>
        </div>
         <div className="border flex flex-col justify-center gap-2  items-center">
          <img className="w-14 bg-green-secondry/50 rounded-full p-2" src={direction} alt="" />
          <span className="text-2xl">شعب</span>
          <b className="text-3xl">15</b>
        </div>
      </section>
      <section className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-12">
        {categories.map((item => (
          <div key={item.id} className="h-48 bg-green-lightness rounded-4xl flex flex-col justify-center items-center hover:bg-green-secondry transition-all cursor-pointer hover:text-white border border-green-primery gap-7">
            <img className="w-16 bg-white p-2 rounded-2xl" src={item.img} alt="" />
            <span className="text-xl">{item.title}</span>
          </div>
        )))}
      </section>
    </div>
  );
};

export default home;
