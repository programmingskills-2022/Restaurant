import { useContext } from "react";
import ItemsContext from "../context/ItemsContext";
import CartItem from "../components/CartItem";
import CartItemsSum from "./CartItemsSum";
import Card from "../general/Card";

const ProfileOrders = () => {
  const { getProfileOrdersById, loggedUser } = useContext(ItemsContext);
  const profileOrders = getProfileOrdersById(loggedUser.id);

  return (
    <div className="pb-12">
      {profileOrders?.map((profileOrder) => {
        return (
          <div className="max-w-4xl mx-auto flex flex-col gap-2 px-4">
            <p className="text-teal-800 text-sm md:text-lg text-center pt-8 font-bold">
              سفارش شماره {profileOrder.id}
            </p>
            {profileOrder.items.map((item) => (
              <CartItem item={item} committed={true} />
            ))}
            <CartItemsSum totalPrice={profileOrder.totalPrice} />
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default ProfileOrders;
