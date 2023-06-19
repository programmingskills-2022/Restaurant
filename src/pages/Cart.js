import { useContext, useState } from "react";
import ItemsContext from "../context/ItemsContext";
import CartItem from "../components/CartItem";
import CartItemsSum from "../components/CartItemsSum";
import { useNavigate } from "react-router-dom";
import useHttp from "../hooks/useHttp";
import Message from "../general/Message";

const Cart = () => {
  const {
    orders,
    cartItems,
    totalCount,
    totalPrice,
    cartUrl,
    clearCart,
    loggedUser,
    sendRequest,
    applyOrders,
    lang,
    dic,
  } = useContext(ItemsContext);

  //const { error, isLoading, sendRequest } = useHttp();
  const [isCommitted, setIsCommitted] = useState(false);
  const navigate = useNavigate();
  let content = "";

  const navigateHandle = () => {
    navigate(-1);
  };

  const commitCart = () => {
    const lenght = Object.keys(orders).length;
    const id = lenght ? orders[[lenght] - 1].id + 1 : 1;

    const order = {
      id,
      items: cartItems,
      totalCount,
      totalPrice,
      user: {
        id: loggedUser.id,
        username: loggedUser.username,
        name: loggedUser.name,
        address: loggedUser.address,
      },
    };
    //add new order to orders
    sendRequest(
      cartUrl,
      "post",
      () => {
        console.log("post");
      },
      order
    );
    //refresh orders
    sendRequest(cartUrl, "get", applyOrders);
    setIsCommitted(true);
    clearCart();
  };

  if (totalCount > 0)
    content = (
      <>
        {cartItems?.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
        <CartItemsSum totalPrice={totalPrice} />
        <div className="flex justify-center gap-2 md:gap-4">
          <button
            className="bg-teal-600 text-white w-1/2 rounded-lg py-2"
            onClick={commitCart}
          >
            {lang ? dic[25].fa : dic[25].en}
          </button>
          <button
            className="bg-teal-600 text-white w-1/2 rounded-lg py-2"
            onClick={navigateHandle}
          >
            {lang ? dic[23].fa : dic[23].en}
          </button>
        </div>
      </>
    );
  else if (totalCount === 0 && isCommitted)
    content = <Message message={lang ? dic[44].fa : dic[44].en} />;
  else if (totalCount === 0 && loggedUser !== null) {
    content = <Message message={lang ? dic[45].fa : dic[45].en} />;
  } else if (loggedUser === null)
    content = <Message message={lang ? dic[46].fa : dic[46].en} />;
  return (
    <div className="md:px-4 px-2 flex flex-col gap-4 my-24 mx-auto max-w-4xl">
      {content}
    </div>
  );
};

export default Cart;
