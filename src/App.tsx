import { useState } from "react";
import TextInput from "./components/TextInput";
import PasswordInput from "./components/PasswordInput";
import Button from "./components/Button";

const Logo = (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
    <path
      d="M5 26a1 1 0 0 1-1-1v-7a1 1 0 0 1 2 0v7a1 1 0 0 1-1 1Z"
      fill="#0e6ae0"
      className="fill-0e6ae0"
    ></path>
    <path
      d="M6.5 26.5a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42l8-8a1 1 0 0 1 1.42 1.42l-8 8a1 1 0 0 1-.71.29ZM14.59 15.59a1 1 0 0 1-.71-.3L5.71 7.12a1 1 0 0 1 1.41-1.41l8.17 8.17a1 1 0 0 1 0 1.41 1 1 0 0 1-.7.3Z"
      fill="#0e6ae0"
      className="fill-0e6ae0"
    ></path>
    <path
      d="M14 6H7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2ZM25 6h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2ZM25 28h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2ZM27 15a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v7a1 1 0 0 1-1 1ZM27 26a1 1 0 0 1-1-1v-7a1 1 0 0 1 2 0v7a1 1 0 0 1-1 1Z"
      fill="#0e6ae0"
      className="fill-0e6ae0"
    ></path>
    <circle
      cx="16"
      cy="5"
      r="3"
      fill="#008bf5"
      className="fill-0593ff"
    ></circle>
    <circle
      cx="16"
      cy="16"
      r="3"
      fill="#008bf5"
      className="fill-0593ff"
    ></circle>
    <circle
      cx="16"
      cy="27"
      r="3"
      fill="#008bf5"
      className="fill-0593ff"
    ></circle>
    <circle cx="5" cy="5" r="3" fill="#008bf5" className="fill-0593ff"></circle>
    <circle
      cx="5"
      cy="16"
      r="3"
      fill="#008bf5"
      className="fill-0593ff"
    ></circle>
    <circle
      cx="5"
      cy="27"
      r="3"
      fill="#008bf5"
      className="fill-0593ff"
    ></circle>
    <circle
      cx="27"
      cy="5"
      r="3"
      fill="#008bf5"
      className="fill-0593ff"
    ></circle>
    <circle
      cx="27"
      cy="16"
      r="3"
      fill="#008bf5"
      className="fill-0593ff"
    ></circle>
    <circle
      cx="27"
      cy="27"
      r="3"
      fill="#008bf5"
      className="fill-0593ff"
    ></circle>
  </svg>
);

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  //******************************************************** */

  const UserNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  const PasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const OnSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // alert("")
  };

  return (
    <div className="w-screen h-screen bg-[#0F172A] p-10 flex justify-center items-center">
      <div className="md:w-1/2 max-md:w-full h-auto pb-10 pt-5 rounded-md p-2 shrink shadow-slate-200 shadow-md flex flex-col items-center">
        <div className="w-full h-40 flex justify-center items-start">
          {Logo}
        </div>
        <form
          onSubmit={OnSubmitHandler}
          className="w-full h-full flex flex-col gap-5 md:w-3/4"
        >
          <div>
            <TextInput
              onChange={UserNameHandler}
              value={userName}
              placeholder="نام کاربری"
            />
          </div>
          <div>
            <PasswordInput
              placeholder="رمز عبور"
              value={password}
              onChange={PasswordHandler}
            />
          </div>
          <div>
            <Button type="submit" text="ورود" />
          </div>
        <div className="text-blue-400 mt-5 flex justify-between pl-5 w-full"><a href="#">گذرواژه خود را فراموش کردید؟</a><a href="#">ثبت نام</a></div>
        <hr />
        </form>
      </div>
    </div>
  );
}

export default App;
