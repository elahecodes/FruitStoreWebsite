import React, { useEffect, useState } from "react";

const services = () => {
  const [ctrlElem, setCtrlElem] = useState(null);
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/data/services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      })
      .catch((error) => console.log(error + "خطا در دریافت اطلاهات"));
  }, []);

  const showDescription = (id) => {
    setCtrlElem((prev) => (prev === id ? null : id));
  };
  const hideDescription = () => {
    setCtrlElem((prev) => (prev = null));
  };
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1530px] w-full grid grid-cols-4 py-3 md:py-6 md:px-2 rounded-2xl">
        {services.map((item, index) => (
          <div
            tabIndex={0}
            role="button"
            key={index}
            onMouseEnter={() => showDescription(item.id)}
            onMouseLeave={() => hideDescription()}
            className="services hover:before:rotate-0  md:before:content-['\01F80B'] relative h-16 sm:h-24 md:h-48 rounded-2xl hover:text-white before:w-4 p-2 md:before:w-6 md:before:h-6 md:before:bg-green-secondry hover:before:text-transparent before:text-white md:before:flex before:justify-center before:items-center hover:before:bg-green-secondry before:transition-all before:absolute hover:before:w-[99.5%] hover:before:h-full before:rounded-2xl hover:before:transition-all before:-bottom-6 hover:before:bottom-0 flex transition-all flex-col md:p-0.5 justify-center cursor-pointer gap-2 items-center"
          >
            <span className="icon-container bg-green-secondry/50 rounded-full md:p-3 p-2 z-10">
              <svg className="w-6 md:w-9" viewBox={item.viewBox}>
                <path d={item.d} />
              </svg>
            </span>
            <h5 className="text-[0.7rem] z-10 sm:text-[1rem] md:text-lg">
              {item.title}
            </h5>
            <div
              className={`absolute top-25 md:top-40 ${
                index === 2 || index === 3 ? "left-10" : "right-0"
              } p-2 w-62 rounded-2xl z-30 animate-wiggle text-xs md:text-sm transition-all shadow-2xl border border-neutral-100 text-neutral-700 bg-white overflow-hidden cursor-pointer ${
                ctrlElem === item.id ? "h-auto" : "hidden"
              }`}
            >
              <p className="text-justify z-40">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default services;
