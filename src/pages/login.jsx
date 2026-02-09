import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import verificationCode from "./verificationCode";
import encryptedPhone from "../assets/images/encryptedPhone.png";

const login = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const input = e.target.value;
    setValue(input.replace(/[^a-zA-Z0-9@._]/g, ""));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      value,
    );
    const inNumber = /^09\d{9}$/.test(value);

    if (isEmail && inNumber) {
      alert("error");
      return;
    }
    navigate("/verificationCode");
  };
  return (
    <div className="w-full flex justify-center items-center mt-6 rounded-2xl">
      <div className="w-full md:w-1/2 flex justify-center flex-col items-center gap-10 h-[40rem]">
        <h3 className="text-[1.2rem] text-neutral-800 font-bold">
          فرم ورود یا ثبت نام
        </h3>
        <form className="w-full md:w-4/5 px-3 flex flex-col gap-5" action="">
          <div className="w-full relative">
            <h4 className="text-[0.9rem] py-4 mb-6">
              لطفا شماره موبایل یا ایمیل خود را وارد کنید
            </h4>
            <input
              id="phoneNumber"
              className="input bg-white w-full h-12 outline-none border border-orange rounded px-2"
              placeholder=" "
              type="text"
              onChange={handleChange}
              value={value}
            />
            <label
              className="absolute text-[0.7rem] text-neutral-500 px-2 bottom-4 right-4 h-5 transition-all"
              htmlFor="phoneNumber"
            >
              شماره تلفن
            </label>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-orange h-12 w-full rounded cursor-pointer text-white"
          >
            ارسال کد
          </button>
        </form>
      </div>
      <div className="hidden md:flex justify-center items-center w-1/2">
        <img className="lg:w-96 md:w-72" src={encryptedPhone} alt="" />
      </div>
    </div>
  );
};

export default login;
