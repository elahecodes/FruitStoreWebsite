import ReactDOM from "react-dom";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import shop from "../assets/icons/shop.png";
import user from "../assets/icons/user.png";
import phone from "../assets/icons/phone.png";
import bell from "../assets/icons/bell.png";
import support from "../assets/icons/online.png";
import home from "../assets/icons/home.png";
import blog from "../assets/icons/blog.png";
import box from "../assets/icons/box.png";
import logo from "../assets/images/healthy-food.png";
import { CartContext } from "../pages/CartContextProvider";
import { formatPrice } from "../helper/functions";

const Header = () => {
  const { state } = useContext(CartContext);

  const [headerTitles] = useState([
    {
      icon: home,
      title: "صفحه اصلی",
      ads: "/home",
    },
    {
      icon: box,
      title: "صفحه محصولات",
      ads: "/products",
    },
    {
      icon: blog,
      title: "وبلاگ ها",
      ads: "/blogsPage",
    },
    {
      icon: blog,
      title: "راه های ارتباطی",
      ads: "/blogsPage",
    },
  ]);

  return (
    <header className="flex justify-center items-center w-full">
      {/* هدر گوشی */}
      <div className="w-full max-w-[1530px] px-2 md:px-8 md:shadow-2xl h-20 mx-auto flex justify-between items-center md:fixed md:left-1/2 md:-translate-x-1/2 md:top-0 md:z-20 md:bg-white">
        <div className="w-[10%] flex justify-start items-center gap-8">
          <div className="flex relative justify-start items-center gap-6">
            <Link
              to={`/notifications`}
              className="hidden lg:flex border border-neutral-200 h-9 w-9 justify-center items-center rounded-md cursor-pointer bg-white"
            >
              <img className="w-5" src={bell} />
              <span className="w-2.5 h-2.5 bg-orange rounded-full absolute -bottom-1 text-white flex justify-center items-center -right-1 text-xs font-bold animate-ping"></span>
              <span className="w-2.5 h-2.5 bg-orange rounded-full absolute -bottom-1 text-white flex justify-center items-center -right-1 text-xs font-bold"></span>
            </Link>
          </div>
          <img
            className="w-10 translate-x-10 lg:translate-x-0 lg:w-14"
            src={logo}
            alt=""
          />
        </div>
        <div className="flex justify-center items-center gap-2">
          <Link to={`/Questions`}>
            <img
              className="w-9 md:hidden rotate-y-180 bg-white p-1.5 rounded border-neutral-200 border"
              src={support}
              alt=""
            />
          </Link>
          <a
            href="tel:12345678"
            className="md:hidden border border-neutral-200 h-9 w-9 flex justify-center items-center rounded-md cursor-pointer bg-white"
          >
            <img className="w-10 p-2" src={phone} alt="" />
          </a>
          <Link
            to={`/notifications`}
            className="md:hidden relative border border-neutral-200 h-9 w-9 flex justify-center items-center rounded-md cursor-pointer bg-white"
          >
            <img className="w-5" src={bell} />
            <span className="w-2 h-2 bg-orange rounded-full absolute -bottom-0.5 text-white flex justify-center items-center -right-1 text-xs font-bold animate-ping"></span>
            <span className="w-2 h-2 bg-orange rounded-full absolute -bottom-0.5 text-white flex justify-center items-center -right-1 text-xs font-bold"></span>
          </Link>
        </div>

        {/* هدر لپتاپ */}

        <ul className="hidden md:flex justify-start text-sm gap-4 lg:text-[1.2rem] lg:gap-8 bg-neutral-100 rounded-2xl p-2 ml-10">
          {headerTitles.map((item, index) => {
            return (
              <li
                key={index}
                className="hover:text-green-primery text-[0.8rem] lg:text-sm flex justify-start items-center gap-1.5 transition-all"
              >
                <img className="w-4" src={item.icon} alt="" />
                <Link to={item.ads}>{item.title}</Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex gap-2.5">
          <button className="border cursor-pointer h-9 lg:h-auto flex justify-center items-center gap-2.5 p-2 rounded-md bg-white border-gray-lightness">
            <b className=" text-neutral-800 text-xs lg:text-sm">12345678</b>
            <img className="w-4 h-4 lg:w-6 lg:h-6" src={phone} />
          </button>
          <Link
            to={`/Questions`}
            className="border cursor-pointer h-9 lg:h-auto p-2 rounded-md bg-white border-gray-lightness"
          >
            <img className="w-4 h-4 lg:w-6 lg:h-6" src={support} />
          </Link>

          <Link
            to={"/shopcart"}
            className="relative border cursor-pointer h-9 lg:h-auto p-2 rounded-md bg-white border-gray-lightness"
          >
            <img className="w-4 h-4 lg:w-6 lg:h-6" src={shop} />
            <span className="absolute -right-1.5 top-6 text-xs bg-orange p-0.5 w-5 h-5 rounded-full flex justify-center items-center text-white border-3 border-white">
              {formatPrice(state.itemsCounter)}
            </span>
          </Link>

          <button className="border cursor-pointer h-9 lg:h-auto p-2 rounded-md bg-white border-gray-lightness">
            <Link to="/login">
              <img className="w-4 h-4 lg:w-6 lg:h-6" src={user} />
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
