import React, { useEffect, useRef, useState } from "react";
import shop from "../assets/icons/shopW.png";

const Products = () => {
  let increment = 10;
  const [products, setProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(increment);
  const [showProducts, setShowProducts] = useState([]);
  let [counter, setCounter] = useState([]);
  const ButtonRef = useRef;

  useEffect(() => {
    fetch("/src/data/products.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log(error + "خطا در دریافت اطلاهات"));
  }, []);
  console.log(products);

  const handleCarts = (number) => {
    if (number === 1) {
      let slicedItem = products.slice(startIndex, lastIndex);
      setShowProducts(slicedItem);
    } else {
      let newLastIndex = lastIndex * number;
      let slicedItem = products.slice(newLastIndex - increment, newLastIndex);
      setShowProducts(slicedItem);
    }
  };
  let counterOfPages = Math.ceil(products.length / 10);
  useEffect(() => {
    let page = [];
    for (let index = counterOfPages; index >= 1; index--) {
      page.push(index);
    }
    setCounter(page);
  }, [counterOfPages]);

  return (
    <>
      <div className="w-full grid grid-cols-6 gap-y-4 mt-28">
        {showProducts.map((item, index) => (
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
              <span>{item.id}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="buttonsContainer w-full h-10 border flex justify-center">
        {counter.map((_, index) => {
          return (
            <button
              className="border w-4 h-4"
              key={index}
              onClick={() => handleCarts(index + 1)}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Products;
