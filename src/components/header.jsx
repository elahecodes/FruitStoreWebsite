import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav className=" bg-amber-200 flex justify-between items-center">
        <ul className="flex">
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
            <Link to="/questions">سوالات پر تکرار</Link>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
