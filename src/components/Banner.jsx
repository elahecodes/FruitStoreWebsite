import React, { useState, useEffect, useRef } from "react";
import leftWhite from "../assets/icons/left_white.png";
import rightWhite from "../assets/icons/right_white.png";
const Banner = () => {
  const [bannersMobile, setBannersMobile] = useState([]);
  const [bannersLaptop, setbannersLaptop] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRefs = useRef([]);
  const container = useRef(null);

  useEffect(() => {
    fetch("/data/bannersMobile.json")
      .then((res) => res.json())
      .then((data) => {
        setBannersMobile(data);
      });

    fetch("/data/bannersLaptop.json")
      .then((res) => res.json())
      .then((data) => {
        setbannersLaptop(data);
      })
      .catch((error) => console.log(error + " خطا در دریافت اطلاعات"));
  }, []);

  const goToSlide = (index) => {
    const slide = slideRefs.current[index];
    if (!slide || !container.current) return;

    container.current.scrollTo({
      left: slide.offsetLeft,
      behavior: "smooth",
    });

    setCurrentIndex(index);
  };

  const prev = () => {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    }
  };

  const next = () => {
    if (currentIndex < bannersLaptop.length - 1) {
      goToSlide(currentIndex + 1);
    }
  };

  return (
    <div className="w-full mt-5 md:mt-10 flex justify-center">
      <div className="max-w-[1530px]  w-full">
        <div
          ref={container}
          className="slideContainer lg:hidden pb-10 relative scroll-smooth no-scrollbar snap-x snap-mandatory flex items-center overflow-x-scroll gap-2"
        >
          {bannersMobile.map((item, index) => {
            return (
              <div
                key={index}
                ref={(element) => (slideRefs.current[index] = element)}
                className="slide snap-start rounded-2xl w-full shrink-0"
              >
                <img
                  className="w-full rounded-xl"
                  src={item.slideMobile}
                  alt={`slide-${index}`}
                />
              </div>
            );
          })}
        </div>

        <div
          ref={container}
          className="slideContainer hidden pb-10 relative scroll-smooth no-scrollbar snap-x snap-mandatory lg:flex items-center overflow-x-scroll gap-2"
        >
          {bannersLaptop.map((item, index) => {
            return (
              <div
                key={index}
                ref={(element) => (slideRefs.current[index] = element)}
                className="slide snap-start rounded-2xl w-full shrink-0"
              >
                <img
                  className="w-full rounded-2xl"
                  src={item.slideLaptop}
                  alt={`slide-${index}`}
                />
              </div>
            );
          })}
        </div>
        <div className="hidden lg:flex w-full justify-center items-center gap-2">
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className={`w-12 h-12 rounded-full bg-orange flex justify-center items-center transition-all ${currentIndex === 0 ? "bg-orange/50 cursor-default" : "bg-orange  cursor-pointer"}`}
          >
            <img src={rightWhite} alt="" />
          </button>

          <button
            onClick={next}
            disabled={currentIndex === bannersLaptop.length - 1}
            className={`w-12 h-12 rounded-full bg-orange flex justify-center items-center transition-all ${currentIndex === bannersLaptop.length - 1 ? "bg-orange/50 cursor-default" : "bg-orange  cursor-pointer"}`}
          >
            <img src={leftWhite} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
