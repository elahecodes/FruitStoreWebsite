import React, { useContext } from "react";
import { ProductsContext } from "../pages/productProvider";
import iconTitle from "../assets/icons/icon-title.png";
import arrowLeft from "../assets/icons/arrow-left.png";
import { Link } from "react-router-dom";
import Product from "../pages/product";

const ProductsFour = () => {
  const data = useContext(ProductsContext);
  const products = data.slice(0, 12);
  const diffrent = true;
  return (
    <div className="flex flex-col justify-start xl:items-center items-center rounded-2xl mt-16">
      <div className="max-w-[1530px] w-full flex flex-col gap-5">
        <div className="w-full flex justify-between items-center bg-white px-2 py-1 rounded border border-neutral-100">
          <div className="flex justify-center items-center gap-2">
            <img className="w-2 lg:w-3" src={iconTitle} />
            <h3 className="text-lg md:text-2xl font-lalezar text-neutral-800">
              محصولات تخفیف خورده
            </h3>
          </div>
          <button className="bg-orange text-white px-2 py-1 pb-2 md:pb-2 rounded-md shadow-lg shadow-orange/80 flex justify-between items-center gap-3 cursor-pointer">
            <Link
              to={"/products?sort=offer"}
              className="text-[0.8rem] md:text-[1rem]"
            >
              مشاهده بیشتر
            </Link>
            <img className="w-3 md:w-4 mt-1 md:mt-1" src={arrowLeft} />
          </button>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 md:gap-3">
          {products.map((item) => (
            <Link key={item.id} to={`/products/${item.id}`}>
              <Product diffrent={diffrent} productData={item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsFour;
