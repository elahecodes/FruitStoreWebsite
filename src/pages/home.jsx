import React from "react";
import { useState, useEffect } from "react";
import Sliders from "../sliders/Sliders";

const home = () => {
  const [banners, setBanners] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => {
        setBanners(data);
      })
      .catch((error) => console.log(error + "خطا در دریافت اطلاهات"));
  });
  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log(error + "خطا در دریافت اطلاهات"));
  });

  return (
    <div>
      <section>
        <Sliders
          items={banners}
          btnPosition={botton}
          NumsOfItems={4}
          width={100}
          direction={vertical}
          isImage={true}
        />
      </section>
    </div>
  );
};

export default home;
