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
    <div className="md:mt-20 mb-10">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center items-start mb-8">
        <h2 className="w-1/4">وبلاگ ها</h2>
        <div className="w-3/4 flex justify-center items-center">
          <form className="" action="">
            <input
              onChange={filterBlogs}
              className="md:w-full h-10 rounded-md bg-white border border-neutral-200 hover:bg-neutral-100 hover:border-none transition-all px-3 text-sm text-neutral-800 outline-none"
              maxLength={100}
              minLength={5}
              placeholder="جستجو"
              type="text"
              name=""
              id=""
              ref={inputValue}
            />
          </form>
          <div className=" flex justify-end items-center gap-1.5">
            <button className="bg-white text-sm md:text-md text-neutral-800 hover:bg-neutral-50 hover:border-none transition-all md:px-2 h-10 md:p-1 border border-neutral-200 rounded-md cursor-pointer">
              جدیدترین ها
            </button>
            <button className="bg-white text-sm md:text-md text-neutral-800 hover:bg-neutral-50 hover:border-none transition-all md:px-2 h-10 md:p-1 border border-neutral-200 rounded-md cursor-pointer">
              پربازدیدترین ها
            </button>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1 ">
        {showBlogs.map((item) => (
          <Link to={`/blogsPage/${item.id}`}>
            <Blog item={item} />
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

export default BlogsPage;
