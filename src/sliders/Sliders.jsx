import React, { useEffect } from "react";
import { useRef, useState } from "react";
import shop from "../assets/icons/shopW.png";
import apple from "../assets/images/appleImage.png";

const Sliders = ({ items, NumsOfItems, size, isVertical, isImage }) => {
  const [move, setMove] = useState(0);
  const [counter, setCounter] = useState(0);
  const SlideContainer = useRef();

  const nextSlide = () => {
    setCounter((prevNumber) => {
      let newNumber = prevNumber + 1;
      if (newNumber >= NumsOfItems) {
        newNumber = 0;
        setMove(-size * newNumber);
      } else {
        setMove((prev) => prev - size);
      }
      return newNumber;
    });
  };
  const prevSlide = () => {
    setCounter((prev) => {
      let newNumber = prev - 1;
      if (newNumber < 0) {
        newNumber = 0;
        setMove(0);
      } else {
        setMove((prev) => prev + size);
      }
      return newNumber;
    });
  };

  useEffect(() => {
    SlideContainer.current.style.transform = `${
      isVertical ? ` translateY(${move}rem)` : ` translateX(${move}rem)`
    }`;
  }, [move]);

  return (
    <div className="hidden lg:flex relative border">
      <div
        className="container-main h-96 w-full overflow-x-hidden border-orange rounded-4xl">
        <div
          ref={SlideContainer}
          className={`slides-container no-scroll transition-transform duration-300 ease-out w-full ${
            isVertical
              ? "flex flex-col overflow-y-hidden"
              : "flex justify-start gap-2 overflow-x-hidden"
          }`}
        >
          {items.map((item, index) =>
            isImage ? (
              <img
                className="object-cover h-96"
                key={index}
                src={item.slide}
                alt=""
              />
            ) : (
              <div
                key={index}
                className="slide border shrink-0  border-neutral-300 bg-white h-80 w-56 rounded-xl flex flex-col justify-between p-2 gap-3"
              >
                <img className="h-40 w-full" src={item.img} alt="" />
                <span className="text-xl">{item.title}</span>
                <div className="w-full rounded-md bg-green-lightness p-1 flex justify-between items-center self-end">
                  <div className="flex flex-col justify-start">
                    <span>هرکیلو</span>
                    <b>
                      {item.price}
                      <span className="text-xs text-gray-500">تومان</span>
                    </b>
                  </div>
                  <button className="bg-green-primery p-2 rounded-full cursor-pointer hover:shadow-lg hover:shadow-green-primery hover:scale-110 transition-all">
                    <img className="w-6 h-6" src={shop} alt="" />
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div
        className={`w-40 h-11 z-20 justify-center gap-4  ${
          isImage ? "mr-[43%] -mt-6" : "left-0 absolute top-0"
        }`}
      >
        <button
          onClick={nextSlide}
          className="w-12 border bg-white z-10 h-12 rounded-full cursor-pointer"
        >
          next
        </button>
        <button
          onClick={prevSlide}
          className="w-12 border bg-white z-10 h-12 rounded-full cursor-pointer"
        >
          prev
        </button>
      </div>
    </div>
  );
};

export default Sliders;
