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

  const openForm = () => {
    setOpen(true);
  };
  return (
    <div>
      <div
        onClick={() => {
          setOpen(false);
        }}
        className={`${
          isOpen
            ? "md:block transition-all absolute top-0 right-0 bg-neutral-600/45  w-full h-full z-30"
            : ""
        }`}
      ></div>
      <form
        className={`fixed border-2 border-green-primery px-9 gap-6 flex flex-col justify-center items-start rounded-lg bg-white w-1/2 h-1/2 left-1/2 -translate-x-1/2 z-40
    ${
      isOpen
        ? " transition-all duration-1000"
        : "transition-all duration-1000 -translate-y-[33rem]"
    }`}
        action=""
      >
        <label className="flex justify-start items-center gap-1.5" htmlFor="">
          <img className="w-5 h-5" src={searchIcon} />
          <span className="text-neutral-700">عبارت مورد نظر را وارد کنید</span>
        </label>
        <input
          placeholder="جستجو ..."
          type="text"
          className="w-full outline-none bg-neutral-100 h-13 rounded-lg px-2"
        />
      </form>
      <nav className="w-full px-2 md:px-8 md:shadow-2xl h-20 mx-auto flex justify-between items-center md:fixed md:top-0 md:right-0 md:bg-white z-20">
        <form className="md:hidden w-[74%] h-9" action="">
          <input
            className="md:hidden w-full h-full bg-neutral-100 border border-neutral-200 rounded-md px-2 text-xs outline-none"
            placeholder="جستجو محصول"
            type="text"
          />
        </form>
        <button className="md:hidden border border-neutral-200 h-9 w-9 flex justify-center items-center rounded-md cursor-pointer bg-neutral-100">
          <svg
            fill="#404040"
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="16"
            height="16"
          >
            <path d="M22.17,1.82l-1.05-.91c-1.21-1.21-3.17-1.21-4.38,0-.03,.03-1.88,2.44-1.88,2.44-1.14,1.2-1.14,3.09,0,4.28l1.16,1.46c-1.46,3.31-3.73,5.59-6.93,6.95l-1.46-1.17c-1.19-1.15-3.09-1.15-4.28,0,0,0-2.41,1.85-2.44,1.88-1.21,1.21-1.21,3.17-.05,4.33l1,1.15c1.15,1.15,2.7,1.78,4.38,1.78,7.64,0,17.76-10.13,17.76-17.76,0-1.67-.63-3.23-1.83-4.42ZM6.24,22c-1.14,0-2.19-.42-2.91-1.15l-1-1.15c-.41-.41-.43-1.08-.04-1.51,0,0,2.39-1.84,2.42-1.87,.41-.41,1.13-.41,1.55,0,.03,.03,2.04,1.64,2.04,1.64,.28,.22,.65,.28,.98,.15,4.14-1.58,7.11-4.54,8.82-8.81,.13-.33,.08-.71-.15-1,0,0-1.61-2.02-1.63-2.04-.43-.43-.43-1.12,0-1.55,.03-.03,1.87-2.42,1.87-2.42,.43-.39,1.1-.38,1.56,.08l1.05,.91c.77,.77,1.2,1.82,1.2,2.96,0,6.96-9.77,15.76-15.76,15.76Z" />
          </svg>
        </button>
        <button className="md:hidden relative border border-neutral-200 h-9 w-9 flex justify-center items-center rounded-md cursor-pointer bg-neutral-100">
          <svg fill="#404040" viewBox="0 0 24 24" width="16" height="16">
            <g id="_01_align_center" data-name="01 align center">
              <path d="M23.259,16.2l-2.6-9.371A9.321,9.321,0,0,0,2.576,7.3L.565,16.35A3,3,0,0,0,3.493,20H7.1a5,5,0,0,0,9.8,0h3.47a3,3,0,0,0,2.89-3.8ZM12,22a3,3,0,0,1-2.816-2h5.632A3,3,0,0,1,12,22Zm9.165-4.395a.993.993,0,0,1-.8.395H3.493a1,1,0,0,1-.976-1.217l2.011-9.05a7.321,7.321,0,0,1,14.2-.372l2.6,9.371A.993.993,0,0,1,21.165,17.605Z" />
            </g>
          </svg>
          <span className="w-5 h-5 bg-orange rounded-full absolute -bottom-3 text-white flex justify-center items-center -right-1 text-xs font-bold">
            12
          </span>
        </button>
        <ul className="hidden md:flex justify-start text-sm gap-4 lg:text-[1.2rem] lg:gap-8">
          {headerTitles.map((item, index) => {
            return (
              <li
                key={index}
                className="hover:underline text-[1rem] underline-offset-2 transition-all"
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
          <button
            onClick={openForm}
            className="border cursor-pointer p-2 rounded-md bg-white border-gray-lightness"
          >
            <img className="w-6 h-6" src={search} />
          </button>

          <Link to={"/shopcart"} className="relative border cursor-pointer p-2 rounded-md bg-white border-gray-lightness">
            <img className="w-6 h-6" src={shop} />
            <span className="absolute -right-1.5 top-6 text-xs bg-orange p-0.5 w-6 h-6 rounded-full flex justify-center items-center text-white border-3 border-white">{state.itemsCounter}</span>
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
