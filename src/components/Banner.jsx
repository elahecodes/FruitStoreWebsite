import React, { useState, useEffect } from "react";

const Banner = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetch("/src/data/data.json")
      .then((res) => res.json())
      .then((data) => {
        setBanners(data);
      })
      .catch((error) => console.log(error + "خطا در دریافت اطلاهات"));
  }, []);
  return (
    <div className="mt-5 md:mt-10">
      <div className="w-full pb-10 scroll-smooth scrollbar-custom snap-x snap-mandatory rounded-2xl flex items-center overflow-x-scroll overflow-y-hidden gap-2">
        {banners.map((item, index) => (
          <img
            className="snap-start border border-red-500 rounded-2xl h-40 md:h-[25rem] w-full shrink-0"
            key={index}
            src={item.slide}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
