import React, { useEffect, useState } from "react";
import { GetNotification } from "../api/api";
import buyIcon from "../assets/icons/buy.png";
import newIcon from "../assets/icons/new.png";
import cartIcon from "../assets/icons/cart.png";
import discountIcon from "../assets/icons/off_01.png";
import titleIcon from "../assets/icons/tag.png";
import festivalIcon from "../assets/icons/starf.png";

const Notification = () => {
  const [notifications, setNotification] = useState([]);
  const [selectedNews, setSelectedNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const Data = [
    {
      title: " همه پیام ها",
      icon: titleIcon,
      action: () => setSelectedNews(notifications),
    },
    {
      title: " خرید ها",
      icon: buyIcon,
      action: () => filterBy("purchases"),
    },
    {
      title: "  جشنواره ها",
      icon: festivalIcon,
      action: () => filterBy("festival"),
    },
    {
      title: "  تخفیف ها",
      icon: discountIcon,
      action: () => filterBy("discount"),
    },
  ];

  useEffect(() => {
    const fetchNotification = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await GetNotification();
        setSelectedNews(response);
        setNotification(response);
      } catch (error) {
        setError(error);
        console.error("خطا در دریافت اعلان ها");
      } finally {
        setLoading(false);
      }
    };
    fetchNotification();
  }, []);

  const filterBy = (key) => {
    const filtered = notifications.filter((news) => news[key] === true);
    setSelectedNews(filtered);
  };
  if (loading) return <h4>درحال دریافت اعلان ها</h4>;

  if (error) return <h4>خطا در دریافت اعلان ها</h4>;

  function getClass(item) {
    if (item.discount) {
      return "w-8 bg-yellow-200 p-2 rounded-md";
    } else if (item.festival) {
      return "w-8 bg-green-primery/30 p-1 rounded-md";
    } else if (item.purchases) {
      return "w-8 bg-red-200 p-1 rounded-md";
    } else {
      return "w-8 bg-blue-200 p-1 rounded-md";
    }
  }
  return (
    <main className="w-full flex justify-center items-center md:mt-28">
      <div className="max-w-[1530px] w-full">
        <div className="w-full flex justify-between sm:justify-center items-center sm:gap-2 gap-1 mb-4">
          {Data.map((item, index) => (
            <button
              key={index}
              onClick={() => item.action()}
              className="md:w-32 text-[0.6rem] hover:border-neutral-200 transition-all md:text-[0.9rem] w-22 md:h-10 h-8 text-neutral-700 cursor-pointer px-2 border border-neutral-100 rounded-2xl shadow bg-white flex justify-start gap-1 lg:gap-2 items-center"
            >
              <img className="w-3 md:w-5" src={item.icon} alt="" />
              <span>{item.title}</span>
            </button>
          ))}
        </div>
        <div className="w-full md:h-[32rem] h-[37rem] overflow-y-scroll no-scrollbar gap-2 bg-white md:p-2 rounded-lg md:mb-8 border border-neutral-100">
          {selectedNews.length > 0 && notifications.length > 0 ? (
            selectedNews.map((item) => (
              <div className="w-full mb-2 bg-white border border-neutral-100 md:border-none flex justify-start items-center md:justify-center gap-4 cursor-pointer hover:bg-neutral-100 transition-all p-1 rounded-md">
                <img className={getClass(item)} src={item.img} alt="" />
                <div className="flex flex-col">
                  <h3 className="">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full flex justify-center items-center">
              <h4 className="mt-32 font-lalezar text-2xl text-neutral-800">
                اعلانی وجود ندارد!{" "}
              </h4>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Notification;
