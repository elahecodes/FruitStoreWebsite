import React, { useEffect, useState } from "react";
import star from "../assets/icons/star.png";
import bg from "../assets/background/bg.png";

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("/src/data/comments.json")
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="mt-20 relative">
      <div className="lg:w-[25rem] w-full md:h-96 h-[10rem] bg-green-primery lg:rounded-[5rem] rounded-xl flex justify-between items-start px-9">
        <div className="hidden md:flex font-lalezar text-4xl flex-col items-start justify-center mt-26 text-white text-shadow-neutral-800 text-shadow-2xs">
          نظرات <span>شما عزیزان</span>
        </div>
      </div>
      <div className="lg:w-[80%] w-[95%] h-72 top-10 rounded-xl absolute lg:left-0  flex justify-start items-center overflow-y-hidden overflow-x-scroll snap-x snap-mandatory no-scrollbar scroll-smooth gap-2">
        {comments.map((item) => (
          <div
            key={item.id}
            className="w-40 md:w-60 snap-start h-60 border border-neutral-300 bg-white rounded-xl shrink-0 p-2 flex flex-col justify-start items-start gap-4"
          >
            <div className="w-full flex justify-between items-center">
              <div className="flex justify-start items-center gap-2">
                <img
                  className="hidden md:block w-8 h-8 rounded-full"
                  src={item.img}
                />
                <h6 className="text-xs md:text-sm">کاربر : {item.name}</h6>
              </div>

              <div className="flex justify-center items-center gap-1">
                <img className="md:w-3 w-2" src={star} />
                <img className="md:w-3 w-2" src={star} />
                <img className="md:w-3 w-2" src={star} />
                <img className="md:w-3 w-2" src={star} />
                <img className="md:w-3 w-2" src={star} />
              </div>
            </div>
            <span className="text-xs">23456</span>
            <p className="w-full text-justify bg-neutral-100 text-[0.7rem] md:text-sm p-2 text-neutral-800 rounded">
              {item.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
