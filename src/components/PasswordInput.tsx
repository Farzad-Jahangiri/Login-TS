import React, { useState } from "react";

export type textInputProps = {
  placeholder: string;
  erorr:boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const UnSee = (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 cursor-pointer"
  >
    <path
      d="M8.109 20.891C4.617 18.831 3 16 3 16s4-7 13-7c1.305 0 2.504.147 3.601.399l-.85.85A15.107 15.107 0 0 0 16 10c-8 0-11.8 6-11.8 6s1.515 2.392 4.645 4.155l-.736.736Zm4.29 1.71c1.097.252 2.296.399 3.601.399 9 0 13-7 13-7s-1.617-2.83-5.109-4.891l-.736.736C26.285 13.608 27.8 16 27.8 16S24 22 16 22c-.98 0-1.897-.09-2.752-.248l-.85.85Zm7.5-7.5a4 4 0 0 1-4.797 4.797L16 19a2.99 2.99 0 0 0 2.121-.879A2.99 2.99 0 0 0 19 16l.899-.899Zm-3-3a4 4 0 0 0-4.797 4.797L13 16c0-.768.293-1.536.879-2.121A2.99 2.99 0 0 1 16 13l.899-.899ZM24 7 7 24l1 1L25 8l-1-1Z"
      fill="#0073ff"
      fillRule="evenodd"
      className="fill-157efb"
    ></path>
  </svg>
);

const See = (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 cursor-pointer"
  >
    <path
      d="M16 9C7 9 3 16 3 16s4 7 13 7 13-7 13-7-4-7-13-7Zm0 1c-8 0-11.8 6-11.8 6S8 22 16 22s11.8-6 11.8-6S24 10 16 10Zm0 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill="#0073ff"
      fillRule="evenodd"
      className="fill-157efb"
    ></path>
  </svg>
);

function PasswordInput(props: textInputProps) {
  const [focuse, setFocuse] = useState(false);
  const [showPass, setShowPass] = useState(UnSee)

  return (
    <div
      onClick={() => {
        setFocuse(true);
      }}
      onBlur={() => {
        setFocuse(false);
      }}
      className={`relative w-full flex border ${props.erorr?"border-[#FF0000] animate-pulse":""} ${
        focuse ? "border-[#0000FF] shadow-sm shadow-[#0000FF]" : ""
      } justify-start items-center rounded-md`}
      dir="rtl"
    >
      <label
        htmlFor="passwordInput"
        className={`text-[#778599] absolute right-[2%] ${
          focuse || props.value ? "top-[-30%] bg-[#0F172A]" : ""
        }`}
      >
        {props.placeholder}
      </label>
      <span className="absolute left-2" onClick={()=>{setShowPass(prev=>prev==UnSee?See:UnSee)}}>{showPass}</span>
      <input
        onChange={props.onChange}
        value={props.value}
        id="passwordInput"
        type={`${showPass==UnSee?"password":"text"}`}
        className={`w-full outline-none border-0 bg-inherit p-5 text-white`}
      />
    </div>
  );
}

export default PasswordInput;
