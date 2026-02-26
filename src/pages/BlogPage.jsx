import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogsContext } from "../components/BlogsProvider";
import label from "../assets/icons/label.png";
import Commentss from "../components/Commentss";
const BlogPage = () => {
  let count = 4;
  const Data = useContext(blogsContext);
  const { id } = useParams();
  const blog = Data.find((item) => item.id == Number(id));

  return (
    <div className="md:mt-20 mb-6">
      <div className="flex justify-between items-start gap-1">
        <div className="rounded-md p-2 bg-white border border-neutral-200">
          <h2 className="title text-3xl text-neutral-800 flex justify-start item-center gap-3 mb-6">
            <img className="w-6 h-6 mt-2" src={label} alt="" />
            {blog?.title}
          </h2>
          <div className="flex flex-col justify-center items-start">
            <span className="author">
              <span>نویسنده : </span>
              {blog?.author}
            </span>
            <span className="date">
              <span>نوشته شده در تاریخ :</span>
              {blog?.date}
            </span>
            <p className="mt-4 font-bold rounded-md p-1.5 text-xl bg-green-primery text-white">
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
              {item.heading}
            </h2>
            <p className="text-neutral-700 p-1.5 rounded-md bg-neutral-50">
              {item.content}
            </p>
          </div>
        ))}
      </section>
      <section>
        <Commentss/>
      </section>
      <section className="relative-blogs">
        <h3>همچنین بخوانید</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1">
          {Array.from({length : count}).map((_,index)=>(
            <div className="border h-4">1</div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
