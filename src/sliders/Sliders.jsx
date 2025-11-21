import React, { useEffect } from "react";
import { useRef, useState } from "react";

const Sliders = ({
  items,
  btnPosition,
  NumsOfItems,
  height,
  direction,
  isImage,
}) => {
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
        setMove((prev) => prev - height);
      }
      return newNumber;
    });
  };
  const prevSlide = () => {
    setCounter((prevNumber) => {
      let newNumber = prevNumber - 1;
      console.log(newNumber == NumsOfItems, newNumber, NumsOfItems);
      if (newNumber < 0) {
        newNumber = NumsOfItems;
        let x = height * (NumsOfItems - 1);
        setMove(x);
        console.log(x);
      } else {
        setMove((prev) => prev + height);
      }
      return newNumber;
    });
  };

  useEffect(() => {
    SlideContainer.current.style.transform = `translateY(${move}rem)`;
  }, [move]);

  return (
    <div>
      <div className="container-main relative overflow-hidden h-96 w-full border">
        <div
          ref={SlideContainer}
          className="slides-container transition-all w-full border"
        >
          {items.map((item, index) =>
            isImage ? (
              <img
                className="object-cover h-96 border"
                key={index}
                src={item.slide}
                alt=""
              />
            ) : (
              <div key={index} className="slide"></div>
            )
          )}
        </div>
        <div
          className={`absolute bg-amber-400 h-11 flex z-20 gap-16 ${
            isImage ? "right-2/4" : "left-0"
          }`}
        >
          <button onClick={nextSlide} className="cursor-pointer">
            next
          </button>
          <button onClick={prevSlide} className="cursor-pointer">
            prev
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sliders;
