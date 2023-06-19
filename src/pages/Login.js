import React, { useContext, useEffect, useRef, useState } from "react";
import Card from "../general/Card";
import ItemsContext from "../context/ItemsContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const {
    checkUser,
    loggedUser,
    setCartIconClicked,
    userUrl,
    applyUsers,
    sendRequest,
    dic,
    lang,
  } = useContext(ItemsContext);
  const [touchLogin, setTouchLogin] = useState(false);
  const navigate = useNavigate();

  const checkUserHandle = () => {
    setTouchLogin(true);
    const user = checkUser(
      usernameRef.current.value,
      passwordRef.current.value
    );
    if (user !== null) {
      setCartIconClicked(false);
      console.log(user);
      navigate("/");
    }
  };

  useEffect(() => {
    sendRequest(userUrl, "get", applyUsers);
  }, [loggedUser]);

  return (
    <div className="my-24 mx-auto max-w-2xl px-4">
      <Card>
        <p className="text-center text-2xl p-4">
          {lang ? dic[21].fa : dic[21].en}
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-1 pb-12"
        >
          <label htmlFor="username" className="p-2 mx-4 ">
            {lang ? dic[2].fa : dic[2].en}:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            ref={usernameRef}
            required
            className="p-2 mx-4 rounded-lg bg-papayawhip-default border border-teal-800 border-solid text-teal-900 text-lg outline-none md:text-xl"
          />
          <label htmlFor="password" className="p-2 mx-4">
            {lang ? dic[3].fa : dic[3].en}:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            ref={passwordRef}
            className="p-2 mx-4 rounded-lg bg-papayawhip-default border border-teal-800 border-solid text-teal-900 text-lg md:text-xl outline-none mb-8"
          />
          {touchLogin && loggedUser !== 0 && (
            <p className="text-red-600 p-4">{lang ? dic[43].fa : dic[43].en}</p>
          )}
          <div className="flex gap-2 justify-center">
            <button
              className="w-1/3 bg-teal-600 text-white rounded-xl mx-4 p-2 hover:bg-teal-700 text-lg md:text-xl"
              onClick={checkUserHandle}
            >
              {lang ? dic[21].fa : dic[21].en}
            </button>
            <Link
              to="new"
              className="w-1/3 bg-teal-600 text-white text-center rounded-xl mx-4 p-2 hover:bg-teal-700  text-lg md:text-xl"
            >
              {lang ? dic[22].fa : dic[22].en}
            </Link>
            <button
              className="w-1/3 bg-teal-600 text-white rounded-xl mx-4 p-2 hover:bg-teal-700  text-lg md:text-xl"
              onClick={() => navigate("/")}
            >
              {lang ? dic[23].fa : dic[23].en}
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
