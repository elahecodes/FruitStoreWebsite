import React, { useEffect, useState, useContext, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { blogsContext } from "./BlogsProvider";
import titleIcon from "../assets/icons/icon-title.png";
import Blog from "./blog";
import btnIcon from "../assets/icons/label.png";
import circular from "../assets/icons/circular.png";
const BlogsPage = () => {
  const Data = useContext(blogsContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState("default");
  const increment = 10;
  const inputValue = useRef(null);

  const filterBlogs = useMemo(() => {
    let blogs = [...Data];
    if (searchTerm) {
      blogs = blogs.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }
    if (sortType === "lastest") {
      blogs.reverse();
    }
    if (sortType === "popular") {
      blogs = blogs.filter((item) => item.view === true);
    }
    return blogs;
  }, [searchTerm, sortType, Data]);

  const totalPages = Math.ceil(filterBlogs.length / increment);

  const currentBlogs = useMemo(() => {
    const start = (currentPage - 1) * increment;
    const end = start + increment;
    return filterBlogs.slice(start, end);
  }, [currentPage, filterBlogs]);

  const handleSearchTerm = () => {
    setSearchTerm(inputValue.current.value || "");
  };

  const handleCurrentPage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const buttons = [
    {
      title: "جدیدترین ها",
      action: () => setSortType("lastest"),
      icon: btnIcon,
    },
    {
      title: "پربازدید ترین ها",
      action: () => setSortType("popular"),
      icon: btnIcon,
    },
  ];
  return (
    <main className="md:mt-26 mb-10 flex justify-center items-center">
      <div className="max-w-[1530px] w-full">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center items-start mb-2 md:mb-4">
          <div className="w-full flex flex-col justify-center gap-2">
            <div className="w-full flex justify-between items-center">
              <div className="flex justify-start items-center gap-2 text-neutral-800">
                <img className="w-2 lg:w-3" src={titleIcon} alt="" />
                <h2 className="lg:text-[1.5rem] font-bold font-lalezar">
                  وبلاگ ها
                </h2>
              </div>
              <div className="flex justify-center items-center gap-1">
                {buttons.map((item, index) => (
                  <button
                    onClick={item.action}
                    key={index}
                    className="w-32 pb-1 text-xs transition-all md:text-[0.9rem] w-20 md:h-10 h-8 text-neutral-700 cursor-pointer px-2 border border-neutral-200 rounded-xl bg-white flex justify-start items-center gap-2"
                  >
                    <img className="w-3" src={btnIcon} alt="" />
                    <span>{item.title}</span>
                  </button>
                ))}
              </div>
            </div>

            <form className="w-full" action="">
              <input
                onChange={handleSearchTerm}
                className="w-full h-10 rounded-xl border border-neutral-200 bg-white transition-all px-3 text-sm text-neutral-800 outline-none"
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
          {currentBlogs.map((item) => (
            <Link key={item.id} to={`/blogsPage/${item.id}`}>
              <Blog item={item} />
            </Link>
          ))}
        </div>
        <div className="buttonsContainer w-full flex justify-center items-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              className={`my-8 flex justify-center items-center text-[1rem] rounded md:rounded-md p-1.5 text-lg cursor-pointer w-12 h-12 hover:bg-green-primery hover:text-white transition-all ${
                currentPage === index + 1
                  ? "bg-green-primery text-white"
                  : "bg-neutral-300 text-neutral-800"
              }`}
              onClick={() => handleCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogsPage;
