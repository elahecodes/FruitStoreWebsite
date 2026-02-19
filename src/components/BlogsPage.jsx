import React, { useEffect, useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { blogsContext } from "./BlogsProvider";
import Blog from "./blog";
const BlogsPage = () => {
  const Data = useContext(blogsContext);
  const [showBlogs, setShowBlogs] = useState([]);
  const [startIndex, setStartIndex] = useState(1);

  const inputValue = useRef(null);
  const increment = 24;
  let counterOfPages = Math.ceil(Data.length / increment);
  useEffect(() => {
    const start = (startIndex - 1) * increment;
    const end = start + increment;
    setShowBlogs(Data.slice(start, end));
  }, [Data, startIndex]);

  const handleCarts = (number) => {
    setStartIndex(number);
  };

  const filterBlogs = () => {
    const searchText = inputValue.current.value.toLowerCase();
    if (!searchText) {
      setShowBlogs(Data.slice(startIndex, increment));
      return;
    }
    const filtervalue = Data.filter((blog) =>
      blog.title.toLowerCase().includes(searchText),
    );
    setShowBlogs(filtervalue);
  };

  return (
    <div className="mt-20">
      <div className="flex justify-between items-center mb-8">
        <h2 className="w-1/4">وبلاگ ها</h2>
        <form className="w-2/4" action="">
          <input
            onChange={filterBlogs}
            className=" w-full h-10 rounded-full bg-neutral-100 border border-neutral-200 hover:bg-neutral-100 hover:border-none transition-all px-3 text-sm text-neutral-800 outline-none"
            maxLength={100}
            minLength={5}
            placeholder="جستجو"
            type="text"
            name=""
            id=""
            ref={inputValue}
          />
        </form>
        <div className="w-1/4 flex justify-end items-center gap-1.5">
          <button className="bg-neutral-100 text-md text-neutral-800 hover:bg-neutral-50 hover:border-none transition-all px-2 h-10 p-1 border border-neutral-200 rounded-full cursor-pointer">
            جدیدترین ها
          </button>
          <button className="bg-neutral-100 text-md text-neutral-800 hover:bg-neutral-50 hover:border-none transition-all px-2 h-10 p-1 border border-neutral-200 rounded-full cursor-pointer">
            پربازدیدترین ها
          </button>
        </div>
      </div>
      <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 ">
        {showBlogs.map((item) => (
          <Blog item={item} />
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

export default BlogsPage;
