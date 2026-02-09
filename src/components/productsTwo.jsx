import React , {useContext} from "react";
import { ProductsContext } from "../pages/productProvider";
import iconTitle from "/src/assets/icons/icon-title.png";
import arrowLeft from "/src/assets/icons/arrow-left.png";
import { Link } from "react-router-dom";
import shop from "../assets/icons/shopW.png";
const productsTwo = () => {
  const data = useContext(ProductsContext);
  return (
    <div className="mt-10 p-4 rounded-2xl">
      <div className="w-full flex justify-between items-center gap-2 bg-white px-2 py-1.5 rounded border border-neutral-100">
        <div className="flex justify-center items-center gap-2">
          <img className="w-2" src={iconTitle} />
          <h3 className="text-lg md:text-2xl font-lalezar text-neutral-800">
            میوه های پر فروش
          </h3>
        </div>
        <button className="bg-orange text-white px-2 py-1 pb-2 md:pb-2 rounded-md shadow-lg shadow-orange/80 flex justify-between items-center gap-3 cursor-pointer">
          <span className="text-[0.8rem] md:text-[1rem]">مشاهده بیشتر </span>
          <img className="w-3 md:w-4 mt-1 md:mt-" src={arrowLeft} />
        </button>
      </div>
      <div className="p-4 bg-green-primery rounded-2xl mt-6">
        <div className="w-full overflow-x-scroll bg-green-primery gap-1 rounded-xl snap-mandatory snap-x no-scrollbar flex justify-start items-center scrollbar-custom top-10 scrollbar-custom">
          {data.map((item) => (
            <Link to={`/productPage/${item.id}`}>
              <div
                key={item.id}
                className="slide snap-start w-44 md:w-56 h-62 md:h-80 hover:border-green-secondry border-green-primery border-2 shrink-0 transition-all cursor-pointer border-neutral-300 bg-white rounded-xl flex flex-col justify-between p-2 gap-3"
              >
                <div className="w-full h-44 overflow-hidden">
                  <img className="w-full" src={item?.imgOne} alt="image" />
                </div>
                <span className="text-xl">{item.title}</span>
                <div className="w-full rounded-md bg-green-lightness p-1 flex justify-between items-center self-end">
                  <div className="flex flex-col justify-start">
                    <span>هرکیلو</span>
                    <b>
                      {item.price}
                      <span className="text-xs text-gray-500 mr-1.5">
                        تومان
                      </span>
                    </b>
                  </div>
                  <button className="bg-green-primery p-2 rounded-full cursor-pointer hover:shadow-lg hover:shadow-green-primery hover:scale-110 transition-all">
                    <img className="w-6 h-6" src={shop} />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default productsTwo;
