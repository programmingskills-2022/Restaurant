import { useContext, useState } from "react";
import ItemsContext from "../context/ItemsContext";
import CartItem from "../components/CartItem";
import CartItemsSum from "../components/CartItemsSum";
import { useNavigate } from "react-router-dom";
import useHttp from "../hooks/useHttp";
import Message from "../general/Message";

const Cart = () => {
  const { cartItems, totalCount, totalPrice, cartUrl, clearCart, loggedUser } =
    useContext(ItemsContext);

  const { error, isLoading, sendRequest } = useHttp();
  const [isCommitted, setIsCommitted] = useState(false);
  const navigate = useNavigate();
  let content = "";

  const navigateHandle = () => {
    navigate(-1);
  };

  const commitCart = () => {
    const order = {
      items: cartItems,
      totalCount,
      totalPrice,
      user: {
        id: 1,
        name: "taraneh",
      },
    };

    console.log(order);
    sendRequest(
      cartUrl,
      "post",
      () => {
        console.log("post");
      },
      order
    );
    setIsCommitted(true);
    clearCart();
  };

  if (totalCount > 0)
    content = (
      <>
        {cartItems?.map((item) => (
          <CartItem item={item} />
        ))}
        <CartItemsSum />
        <div className="flex justify-center gap-2 md:gap-4">
          <button
            className="bg-teal-600 text-white w-1/2 rounded-lg py-2"
            onClick={commitCart}
          >
            ثبت
          </button>
          <button
            className="bg-teal-600 text-white w-1/2 rounded-lg py-2"
            onClick={navigateHandle}
          >
            بازگشت
          </button>
        </div>
      </>
    );
  else if (totalCount === 0 && isCommitted)
    content = <Message message="سفارش شما با موفقیت ثبت شد." />;
  else if (totalCount === 0 && loggedUser !== null) {
    content = <Message message="سبد شما خالی می باشد" />;
  } else if (loggedUser === null)
    content = <Message message="لطفا به حساب کاربری خود وارد شوید" />;
  return (
    <div className="md:px-4 px-2 flex flex-col gap-4 my-24 mx-auto max-w-4xl">
      {content}
    </div>
  );
};

export default Cart;
