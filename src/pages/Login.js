import React, { useContext, useRef, useState } from "react";
import Card from "../general/Card";
import ItemsContext from "../context/ItemsContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const { existUser, loggedUser, setCartIconClicked } =
    useContext(ItemsContext);
  const [touchLogin, setTouchLogin] = useState(false);
  const navigate = useNavigate();

  const existUserHandle = () => {
    setTouchLogin(true);
    const user = existUser(
      usernameRef.current.value,
      passwordRef.current.value
    );
    if (user !== null) {
      setCartIconClicked(false);
      navigate("/");
    }
  };

  return (
    <div className="my-24 mx-auto max-w-2xl px-4">
      <Card>
        <p className="text-center text-2xl p-4"> ورود با نام کاربری</p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-1 pb-12"
        >
          <label htmlFor="name" className="p-2 mx-4 ">
            کد کاربری:
          </label>
          <input
            type="text"
            ref={usernameRef}
            required
            className="p-2 mx-4 rounded-lg bg-papayawhip-default border border-teal-800 border-solid text-teal-900 text-lg outline-none md:text-xl"
          />
          <label htmlFor="name" className="p-2 mx-4">
            رمز عبور:
          </label>
          <input
            type="password"
            required
            ref={passwordRef}
            className="p-2 mx-4 rounded-lg bg-papayawhip-default border border-teal-800 border-solid text-teal-900 text-lg md:text-xl outline-none mb-8"
          />
          {touchLogin && loggedUser !== 0 && (
            <p className="text-red-600 p-4">کد کاربری یا رمز عبور اشتباه است</p>
          )}
          <div className="flex gap-2 justify-center">
            <button
              className="w-1/3 bg-teal-600 text-white rounded-xl mx-4 p-2 hover:bg-teal-700 text-lg md:text-xl"
              onClick={existUserHandle}
            >
              ورود
            </button>
            <button className="w-1/3 bg-teal-600 text-white rounded-xl mx-4 p-2 hover:bg-teal-700  text-lg md:text-xl">
              عضویت
            </button>
            <button
              className="w-1/3 bg-teal-600 text-white rounded-xl mx-4 p-2 hover:bg-teal-700  text-lg md:text-xl"
              onClick={() => navigate("/")}
            >
              بازگشت
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
