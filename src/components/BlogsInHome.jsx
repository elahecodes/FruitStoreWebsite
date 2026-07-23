import React, { useContext } from "react";
import { blogsContext } from "./BlogsProvider";
import titleIcon from "../assets/icons/icon-title.png";
import { Link } from "react-router-dom";
import arrowLeft from "../assets/icons/arrow-left.png";
import Blog from "./blog";
const isGrid = false;
const BlogsInHome = () => {
  const Data = useContext(blogsContext);
  const OthersBlogs = Data.slice(1, 8);
  const mainItem = Data.slice(0);
  const mainId = mainItem[0].id;
  return (
    <>
      <div className="flex w-full justify-center mt-10 gap-6">
        <div className="lg:max-w-[1530px] w-full flex items-start flex-col">
          <div className="w-full flex justify-between items-center bg-white px-2 py-1 rounded border border-neutral-100 mb-3">
            <div className="flex justify-center items-center gap-2">
              <img className="w-2 lg:w-3" src={titleIcon} />
              <h3 className="text-lg md:text-2xl font-lalezar text-neutral-800">
                وبلاگ ها
              </h3>
            </div>
            <button className="bg-orange text-white px-2 py-1 pb-2 md:pb-2 rounded-md shadow-lg shadow-orange/80 flex justify-between items-center gap-3 cursor-pointer">
              <Link to={`/blogspage`} className="text-[0.8rem] md:text-[1rem]">
                مشاهده بیشتر
              </Link>
              <img className="w-3 md:w-4 mt-1 md:mt-1" src={arrowLeft} />
            </button>
          </div>
          <div className="w-full hidden lg:flex justify-between items-start gap-2 bg-white mt-6 p-3 rounded-md border border-neutral-200">
            <Link
              to={`/BlogsPage/${mainId}`}
              className="w-3/6 cursor-pointer border h-full border-neutral-200 transition-all hover:bg-neutral-200 bg-neutral-50 p-2 rounded-xl"
            >
              <div className="w-full flex justify-between items-start">
                <div className="flex flex-col items-start gap-3">
                  <h2 className="text-2xl">{Data[0].title}</h2>
                  <span className="text-sm text-neutral-500">
                    {Data[0].date}
                  </span>
                </div>
                <img className="w-36 mr-32" src={Data[0].img} alt="" />
              </div>
              <p className="text-sm text-justify my-4 text-neutral-700">
                {Data[0].sections[0].content}
              </p>
              <span className="text-orange">برای مطالعه بیشتر کلیک کنید</span>
            </Link>

            <div className="w-3/6 h-80 overflow-y-scroll no-scrollbar flex flex-col gap-1.5">
              {OthersBlogs.map((item, index) => (
                <Link to={`/blogsPage/${item.id}`}>
                  <div
                    key={index}
                    className="flex justify-start transition-all w-full gap-1 h-20 hover:bg-neutral-100 cursor-pointer items-center p-1 border border-neutral-200 rounded-xl"
                  >
                    <img className="w-24 rounded-md" src={item.img} alt="" />
                    <div className="w-full flex flex-col border-r-2  border-neutral-200 pr-2 justify-start items-start">
                      <div className="flex justify-between items-center w-full">
                        <h2>{item?.title}</h2>
                        <span className="text-neutral-600 text-xs">
                          {item.date}
                        </span>
                      </div>
                      <p className="text-neutral-700 text-sm">{item.excerpt}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden w-full bg-white p-5 rounded-lg flex justify-between items-center gap-2">
        <div className="w-[58rem] overflow-scroll flex justify-between items-center overflow-x-scroll snap-mandatory snap-x no-scrollbar gap-2">
          {Data.slice(0, 10).map((item, index) => (
            <Link to={`/blogsPage/${item.id}`}>
              <Blog isGrid={isGrid} item={item} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogsInHome;
