import { useContext, useRef, useState } from "react";
import Card from "../general/Card";
import { useNavigate } from "react-router-dom";
import ItemsContext from "../context/ItemsContext";
import Message from "../general/Message";

const Register = () => {
  const nameRef = useRef();
  const addressRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const { existUser, users, sendRequest, userUrl, applyUsers, dic, lang } =
    useContext(ItemsContext);
  const [isCommit, setIsCommit] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const addUser = (e) => {
    e.preventDefault();
    setIsTouched((prev) => true);
    const username = usernameRef.current.value;

    if (existUser(username) !== null) {
      setIsCommit((prev) => false);
    } else {
      const lenght = Object.keys(users).length;
      const id = lenght ? users[lenght - 1].id + 1 : 1;
      const user = {
        id,
        name: nameRef.current.value,
        address: addressRef.current.value,
        username,
        password: passwordRef.current.value,
      };
      sendRequest(
        userUrl,
        "post",
        () => {
          console.log("new user");
        },
        user
      );

      //refresh users
      sendRequest(userUrl, "get", applyUsers);
      setIsCommit((prev) => true);
    }
  };

  let content = "";
  if (isCommit)
    content = <Message message={`حساب کاربری با موفقیت ایجاد شد.`} />;
  else {
    content = (
      <Card>
        <p className="text-center text-2xl p-4">
          {lang ? dic[24].fa : dic[21].en}
        </p>
        <form onSubmit={addUser} className="flex flex-col gap-1 pb-12">
          <label htmlFor="name" className="p-2 mx-4 ">
            {lang ? dic[0].fa : dic[0].en}:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            ref={nameRef}
            required
            className="p-2 mx-4 rounded-lg bg-papayawhip-default border border-teal-800 border-solid text-teal-900 text-lg outline-none md:text-xl"
          />
          <label htmlFor="address" className="p-2 mx-4 ">
            {lang ? dic[1].fa : dic[1].en}:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            ref={addressRef}
            required
            className="p-2 mx-4 rounded-lg bg-papayawhip-default border border-teal-800 border-solid text-teal-900 text-lg outline-none md:text-xl"
          />
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
          {isTouched && !isCommit && (
            <p className="text-red-600 p-4">{lang ? dic[42].fa : dic[42].en}</p>
          )}
          <div className="flex gap-2 justify-center">
            <button
              type="submit"
              className="w-1/3 bg-teal-600 text-white rounded-xl mx-4 p-2 hover:bg-teal-700  text-lg md:text-xl"
            >
              {lang ? dic[25].fa : dic[25].en}
            </button>
            <button
              className="w-1/3 bg-teal-600 text-white rounded-xl mx-4 p-2 hover:bg-teal-700  text-lg md:text-xl"
              onClick={() => navigate(-1)}
            >
              {lang ? dic[23].fa : dic[23].en}
            </button>
          </div>
        </form>
      </Card>
    );
  }
  return <div className="my-24 mx-auto max-w-2xl px-4">{content}</div>;
};

export default Register;
