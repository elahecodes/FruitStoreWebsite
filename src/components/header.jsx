import ReactDOM from "react-dom";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import shop from "../assets/icons/shop.png";
import user from "../assets/icons/user.png";
import search from "../assets/icons/search.png";
import phone from "../assets/icons/phone.png";
import searchIcon from "../assets/icons/searchIcon.png";
import { CartContext } from "../pages/CartContextProvider";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const { state } = useContext(CartContext);
  const [headerTitles] = useState([
    {
      title: "صفحه اصلی",
      ads: "/home",
    },
    {
      title: "صفحه محصولات",
      ads: "/products",
    },
    ,
    {
      title: "روش های ارسال",
      ads: "/explation",
    },
    ,
    {
      title: "سوال دارم!",
      ads: "/question",
    },
  ]);

 
  return (
    <div>
      <nav className="w-full px-2 md:px-8 md:shadow-2xl h-20 mx-auto flex justify-between items-center md:fixed md:top-0 md:right-0 md:z-20 md:bg-white">
        <div className="">
          <h3 className="text-[0.6rem] lg:text-[1rem]">فروشگاه میوه</h3>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Link to={`/products`}><img className="w-9 md:hidden rotate-y-180 bg-white p-2 rounded border-neutral-200 border" src={search} alt="" /></Link>
          <a href="tel:+989164996303" className="md:hidden border border-neutral-200 h-9 w-9 flex justify-center items-center rounded-md cursor-pointer bg-white">
           <img className="w-10 p-2" src={phone} alt="" />
          </a>
          <button className="md:hidden relative border border-neutral-200 h-9 w-9 flex justify-center items-center rounded-md cursor-pointer bg-white">
            <svg fill="#404040" viewBox="0 0 24 24" width="16" height="16">
              <g id="_01_align_center" data-name="01 align center">
                <path d="M23.259,16.2l-2.6-9.371A9.321,9.321,0,0,0,2.576,7.3L.565,16.35A3,3,0,0,0,3.493,20H7.1a5,5,0,0,0,9.8,0h3.47a3,3,0,0,0,2.89-3.8ZM12,22a3,3,0,0,1-2.816-2h5.632A3,3,0,0,1,12,22Zm9.165-4.395a.993.993,0,0,1-.8.395H3.493a1,1,0,0,1-.976-1.217l2.011-9.05a7.321,7.321,0,0,1,14.2-.372l2.6,9.371A.993.993,0,0,1,21.165,17.605Z" />
              </g>
            </svg>
            {/* <span className="w-5 h-5 bg-orange rounded-full absolute -bottom-3 text-white flex justify-center items-center -right-1 text-xs font-bold">
              
            </span> */}
          </button>
        </div>
        <ul className="hidden md:flex justify-start text-sm gap-4 lg:text-[1.2rem] lg:gap-8">
          {headerTitles.map((item, index) => {
            return (
              <li
                key={index}
                className="hover:underline text-[0.8rem] lg:text-[1rem] underline-offset-2 transition-all"
              >
                <Link to={item.ads}>{item.title}</Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex gap-2.5">
          <button className="border cursor-pointer flex justify-center items-center gap-2.5 p-2 rounded-md bg-white border-gray-lightness">
            <b className="text-neutral-800">09164996303</b>
            <img className="w-6 h-6" src={phone} />
          </button>
          <Link
            to={`/products`}
            className="border cursor-pointer p-2 rounded-md bg-white border-gray-lightness"
          >
            <img className="w-6 h-6" src={search} />
          </Link>

          <Link
            to={"/shopcart"}
            className="relative border cursor-pointer p-2 rounded-md bg-white border-gray-lightness"
          >
            <img className="w-6 h-6" src={shop} />
            <span className="absolute -right-1.5 top-6 text-xs bg-orange p-0.5 w-6 h-6 rounded-full flex justify-center items-center text-white border-3 border-white">
              {state.itemsCounter}
            </span>
          </Link>

          <button className="border cursor-pointer p-2 rounded-md bg-white border-gray-lightness">
            <Link to="/login">
              <img className="w-6 h-6" src={user} />
            </Link>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
