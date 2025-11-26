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
        setMove(0);
      } else {
        setMove((prev) => prev - size);
      }
      return newNumber;
    });
  };
  const prevSlide = () => {
   setCounter((prev) => {
    let newNumber = prev - 1
    if (newNumber < 0) {
      newNumber = 0;
      setMove(0)
    }
    else{
      setMove((prev) => prev + size)
    }
    return newNumber;
   })
  };
  
  

  useEffect(() => {
    SlideContainer.current.style.transform = `${
      isVertical ? ` translateY(${move}rem)` : ` translateX(${move}rem)`
    }`;
  }, [move]);

  return (
    <div>
      <div
        className={`container-main relative overflow-hidden ${
          isVertical ? "h-96 w-full border border-orange rounded-4xl" : ""
        }`}
      >
        <div
          ref={SlideContainer}
          className={`slides-container transition-all w-full ${
            isVertical ? "flex flex-col" : "flex justify-start gap-2"
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
                className="slide border border-neutral-300 bg-white h-80 w-56 rounded-xl flex flex-col justify-between p-2 gap-3"
              >
                <img className="h-40 w-full" src={apple} alt="" />
                <span className="text-xl">سیب سبز</span>
                <div className="w-full rounded-md bg-green-lightness p-1 flex justify-between items-center self-end">
                  <div className="flex flex-col justify-start">
                    <span>هرکیلو</span>
                    <b>
                      250,000
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
        className={`w-40 bottom-0 h-11 flex z-20 justify-center gap-4 ${
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
