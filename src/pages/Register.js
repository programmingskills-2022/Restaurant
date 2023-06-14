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

  const { users, sendRequest, userUrl, applyUsers } = useContext(ItemsContext);
  const [isCommit, setIsCommit] = useState(false);

  const addUser = (e) => {
    e.preventDefault();
    const lenght = Object.keys(users).length;
    const id = lenght ? users[lenght - 1].id + 1 : 1;
    const user = {
      id,
      name: nameRef.current.value,
      address: addressRef.current.value,
      username: usernameRef.current.value,
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

    sendRequest(userUrl, "get", applyUsers);
    setIsCommit((prev) => true);
  };

  let content = "";
  if (isCommit)
    content = <Message message={`حساب کاربری با موفقیت ایجاد شد.`} />;
  else {
    content = (
      <Card>
        <p className="text-center text-2xl p-4"> فرم عضویت</p>
        <form onSubmit={addUser} className="flex flex-col gap-1 pb-12">
          <label htmlFor="name" className="p-2 mx-4 ">
            نام:
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
            آدرس:
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
            کد کاربری:
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
            رمز عبور:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            ref={passwordRef}
            className="p-2 mx-4 rounded-lg bg-papayawhip-default border border-teal-800 border-solid text-teal-900 text-lg md:text-xl outline-none mb-8"
          />
          <div className="flex gap-2 justify-center">
            <button
              type="submit"
              className="w-1/3 bg-teal-600 text-white rounded-xl mx-4 p-2 hover:bg-teal-700  text-lg md:text-xl"
            >
              ثبت
            </button>
            <button
              className="w-1/3 bg-teal-600 text-white rounded-xl mx-4 p-2 hover:bg-teal-700  text-lg md:text-xl"
              onClick={() => navigate(-1)}
            >
              بازگشت
            </button>
          </div>
        </form>
      </Card>
    );
  }
  return <div className="my-24 mx-auto max-w-2xl px-4">{content}</div>;
};

export default Register;
