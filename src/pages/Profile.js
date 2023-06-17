import { useContext, useState } from "react";
import ProfileAccount from "../components/ProfileAccount";
import ProfileOrders from "../components/ProfileOrders";
import { useNavigate } from "react-router-dom";
import ItemsContext from "../context/ItemsContext";
import Message from "../general/Message";

const Profile = () => {
  const { loggedUser } = useContext(ItemsContext);
  const [isProfileOrders, setIsProfileOrders] = useState(false);
  const navigate = useNavigate();

  const setIsProfileOrdersHandle = () => {
    setIsProfileOrders(true);
  };
  const setIsNotProfileOrdersHandle = () => {
    setIsProfileOrders(false);
  };

  let content = "";
  if (loggedUser === null)
    content = (
      <div className="py-20 px-4 max-w-4xl mx-auto">
        <Message message="لطفا به حساب کاربری خود وارد شوید." />
      </div>
    );
  else
    content = (
      <>
        <div className="pt-24 pb-8 flex justify-center max-w-4xl mx-4 md:mx-auto gap-2 md:gap-8 ">
          <button
            className="w-1/3 bg-teal-600 hover:bg-teal-700 py-2 md:p-4 text-sm md:text-lg rounded-lg md:rounded-xl text-white"
            onClick={setIsNotProfileOrdersHandle}
          >
            اطلاعات حساب کاربری
          </button>
          <button
            className="w-1/3 bg-teal-600 hover:bg-teal-700 py-2 md:p-4 text-sm md:text-lg rounded-lg md:rounded-xl text-white"
            onClick={setIsProfileOrdersHandle}
          >
            سوابق سفارشات
          </button>
          <button
            className="w-1/3 bg-teal-600 hover:bg-teal-700 py-2 md:p-4 text-sm md:text-lg rounded-lg md:rounded-xl text-white"
            onClick={() => navigate("/")}
          >
            بازگشت
          </button>
        </div>
        {!isProfileOrders && <ProfileAccount />}
        {isProfileOrders && <ProfileOrders />}
      </>
    );

  return <div className="py-8">{content}</div>;
};

export default Profile;
