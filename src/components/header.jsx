import React from "react";
import { Link } from "react-router-dom";
import shop from '../assets/icons/shop.png'
import user from '../assets/icons/user.png'
import search from '../assets/icons/search.png'
import phone from '../assets/icons/phone.png'

const Header = () => {
  return (
    <div>
      <nav className=" flex justify-between items-center">
        <ul className="flex gap-8">
          <li>
            <Link to="/products">محصولات</Link>
          </li>
          <li>
            <Link to="/blogs">وبلاگ ها</Link>
          </li>
          <li>
            <Link to="/aboutUs">درباره ما</Link>
          </li>
          <li>
            <Link to="/comments">نظرات</Link>
          </li>
          <li>
            <Link to="/questions">سوالات پر تکرار</Link>
          </li>
        </ul>
        <div className="flex gap-2.5">
          <button className="border p-2 rounded-md bg-white border-gray-lightness"><img className="w-6 h-6" src={phone} alt="" /></button>
          <button className="border p-2 rounded-md bg-white border-gray-lightness"><img className="w-6 h-6" src={search} alt="" /></button>
          <button className="border p-2 rounded-md bg-white border-gray-lightness"><img className="w-6 h-6" src={shop} alt="" /></button>
          <button className="border p-2 rounded-md bg-white border-gray-lightness"><img className="w-6 h-6" src={user} alt="" /></button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
