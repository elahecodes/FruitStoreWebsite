import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [showProducts, setShowProducts] = useState([]);
  let counterOfPages = Math.ceil(Data.length / increment);

  useEffect(() => {
    const start = (startIndex - 1) * increment;
    const end = start + increment;
    setShowProducts(Data.slice(start, end));
  }, [Data, startIndex]);
  return (
    <div>
      <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1">
        {showProducts.map((item) => (
          <Link to={`/products/${item.id}`}>
            <Product key={item.id} productData={item} />
          </Link>
        ))}
      </div>
      <div className="buttonsContainer w-full flex justify-center items-center gap-2">
        {Array.from({ length: counterOfPages }).map((_, index) => (
          <button
            className={`my-8 flex justify-center items-center text-[0.7rem] md:text-[1rem] rounded md:rounded-md p-1.5 text-lg cursor-pointer w-6 h-6 md:w-12 md:h-12 hover:bg-green-primery hover:text-white transition-all ${
              startIndex === index + 1
                ? "bg-green-primery text-white"
                : "bg-neutral-300 text-neutral-800"
            }`}
            onClick={() => handleCarts(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
