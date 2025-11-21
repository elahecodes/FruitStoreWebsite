import React from "react";
import { useState, useEffect } from "react";
import Sliders from "../sliders/Sliders";

const home = () => {
  const [banners, setBanners] = useState([]);
  // const [products, setProducts] = useState([]);
  const [directionBanner] = useState('vertical')
  // const [directionProducts] = useState('12')


  
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
      <section>
        <Sliders
          items={banners}
          NumsOfItems={banners.length}
          height={24}
          direction={directionBanner}
          isImage={true}
        />
      </section>
    </div>
  );
};

export default home;
