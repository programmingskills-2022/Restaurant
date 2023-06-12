import { useContext } from "react";
import ItemsContext from "../context/ItemsContext";
import CartItem from "../components/CartItem";
import CartItemsSum from "../components/CartItemsSum";

const Cart = () => {
  const { cartItems, totalCount } = useContext(ItemsContext);

  let content = "";
  if (totalCount > 0)
    content = (
      <>
        {cartItems?.map((item) => (
          <CartItem item={item} />
        ))}
        <CartItemsSum />
      </>
    );
  else content = <p className="text-center">سبد شما خالی می باشد</p>;
  return (
    <div className="px-4 flex flex-col gap-4 my-24 mx-auto max-w-4xl">
      {content}
    </div>
  );
};

export default Cart;
