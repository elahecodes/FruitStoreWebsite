import React, { useEffect, useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { blogsContext } from "./BlogsProvider";
import Blog from "./blog";
const BlogsPage = () => {
  const Data = useContext(blogsContext);
  const [showBlogs, setShowBlogs] = useState([]);
  const [startIndex, setStartIndex] = useState(1);
  const buttons = [
    {
      title: "جدیدترین ها",
      action: () => setShowBlogs([...Data].reverse()),
    },
    {
      title: "پربازدید ترین ها",
      action: () => setShowBlogs(Data.filter((item) => item.view === true)),
    },
  ];

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
    const filtervalue = Data.filter((blog) =>
      blog.title.toLowerCase().includes(searchText),
    );
    setShowBlogs(filtervalue);
  };

  return (
    <main className="md:mt-24 mb-10">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center items-start mb-2 md:mb-8">
        <h2 className="w-1/4">وبلاگ ها</h2>
        <div className="md:w-3/4 md:flex-row-reverse items-end gap-1.5 w-full flex flex-col justify-center items-center md:gap-1.5">
          <div className="flex justify-end items-center gap-1.5">
            {buttons.map((item, index) => (
              <button
                onClick={item.action}
                key={index}
                className="bg-white w-28 text-sm md:text-md text-neutral-800 hover:bg-neutral-50 hover:border-none transition-all md:px-2 h-10 md:p-1 border border-neutral-200 rounded-md cursor-pointer"
              >
                {item.title}
              </button>
            ))}
          </div>
          <form className="w-full" action="">
            <input
              onChange={filterBlogs}
              className="w-full h-10 rounded-md bg-white border border-neutral-200 hover:bg-neutral-100 hover:border-none transition-all px-3 text-sm text-neutral-800 outline-none"
              maxLength={100}
              minLength={5}
              placeholder="جستجو"
              type="text"
              name=""
              id=""
              ref={inputValue}
            />
          </form>
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
    </main>
  );
};

export default BlogsPage;
