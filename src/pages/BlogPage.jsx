import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { blogsContext } from "../components/BlogsProvider";
import label from "../assets/icons/label.png";
import Commentss from "../components/Commentss";
import Blog from "../components/blog";
import readMore from "../assets/icons/readMore.png";
const BlogPage = () => {
  let count = 6;
  const Data = useContext(blogsContext);
  const { id } = useParams();
  const blog = Data.find((item) => item.id == Number(id));
  const relatedBlogs = Data.filter((item) => item.id !== blog.id).slice(
    0,
    count,
  );

  return (
    <div className="md:mt-24 mb-20 flex justify-center">
      <div className="max-w-[1530px] w-full">
        <div className="flex justify-between items-start gap-1">
          <div className="rounded-md p-2 bg-white border border-neutral-200">
            <h2 className="title text-sm font-bold lg:text-3xl text-neutral-800 flex justify-start item-center gap-3 mb-6">
              <img className="lg:w-6 lg:h-6 w-4 h-4 mt-2" src={label} alt="" />
              {blog?.title}
            </h2>
            <div className="flex flex-col justify-center items-start">
              <span className="author text-xs lg:text-[1rem]">
                <span className="text-xs lg:text-[1rem]">نویسنده : </span>
                {blog?.author}
              </span>
              <span className="date text-xs lg:text-[1rem]">
                <span className="text-xs lg:text-[1rem]">
                  نوشته شده در تاریخ :
                </span>
                {blog?.date}
              </span>
              <p className="mt-4 font-bold rounded-md p-1.5 lg:text-xl text-sm bg-green-primery text-white">
                {blog?.excerpt}
              </p>
            </div>
          </div>
          <figure className="">
            <img
              className="w-[21rem] border rounded-md border-neutral-200"
              loading="lazy"
              src={blog?.img}
              alt="خواص توت‌فرنگی برای سلامتی"
            />
            <figcaption className="text-neutral-500 text-xs mt-1">
              توت‌فرنگی سرشار از آنتی‌اکسیدان و ویتامین C
            </figcaption>
          </figure>
        </div>
        <section className="description w-full bg-white p-2 border mt-4 border-neutral-200 rounded-md">
          {blog?.sections?.map((item) => (
            <div>
              <h2 className="text-xl text-neutral-800 font-bold mt-4 mb-2 flex justify-start items-center gap-2">
                <div className="bg-green-400 rounded-full w-2 h-2"></div>
                <h5 className="  text-sm lg:text-[1rem]">{item?.heading}</h5>
              </h2>
              <p className="text-neutral-700 text-sm lg:text-[1rem] p-1.5 rounded-md bg-neutral-50">
                {item.content}
              </p>
            </div>
          ))}
        </section>
        <section>
          <Commentss />
        </section>
        <section className="relative-blogs mt-12">
          <div className="w-full flex justify-start items-center h-8 gap-2">
            <img className="w-6" src={readMore} alt="" />
            <h3 className="lg:text-[1.4rem] text-[1.2rem] font-lalezar text-neutral-700">
              همچنین بخوانید ...
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1 mt-3">
            {relatedBlogs.map((item) => (
              <Link to={`/blogsPage/${item.id}`}>
                <Blog key={item.id} item={item} />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;
