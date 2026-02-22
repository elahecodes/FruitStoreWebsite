import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogsContext } from "../components/BlogsProvider";
import label from '../assets/icons/label.png';
const BlogPage = () => {
  const Data = useContext(blogsContext);
  const { id } = useParams();
  const blog = Data.find((item) => item.id == Number(id));

  return (
    <div className="mt-20 mb-6">
      <div className="flex justify-between items-start gap-1">
        <h2 className="title text-3xl text-neutral-800 flex justify-start item-center gap-3 mb-6"><img className="w-6 h-6 mt-2" src={label} alt="" />{blog?.title}</h2>
        <div className="flex gap-8">
          <span className="author">
            <span>نویسنده : </span>
            {blog?.author}
          </span>
          <span className="date">
            <span>نوشته شده در تاریخ :</span>
            {blog?.date}
          </span>
        </div>
      </div>
      <figure className="my-8">
        <img
        className="border w-[13rem] rounded-md border-orange"
          loading="lazy"
          src={blog?.img}
          alt="خواص توت‌فرنگی برای سلامتی"
        />
        <figcaption className="text-neutral-500 text-sm">توت‌فرنگی سرشار از آنتی‌اکسیدان و ویتامین C</figcaption>
      </figure>
      <section>
        <p className="border text-xl">{blog?.excerpt}</p>
      </section>
      <section className="description w-full bg-white p-2 border border-neutral-200 rounded-md">
        {blog?.sections?.map((item) => (
          <div>
            <h2 className="text-xl text-neutral-800 font-bold mt-4 mb-2 ">{item.heading}</h2>
            <p className="text-neutral-800 p-1.5 rounded-md">{item.content}</p>
          </div>
        ))}
      </section>
      <div className="relative-blogs"></div>
    </div>
  );
};

export default BlogPage;
