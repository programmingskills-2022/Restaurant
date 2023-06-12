import { useContext, useState } from "react";
import Card from "../general/Card";
import ItemsContext from "../context/ItemsContext";
import CartCrud from "./CartCrud";

const OrderItem = ({ item }) => {
  const { id, name, image, price, count } = item;

  return (
    <Card kind={1}>
      <div className="p-2 mx-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img className="w-20 h-auto" alt="تصویر غذا" src={image} />
          <div className="flex flex-col gap-4">
            <p>{name}</p>
            <p>{price} تومان</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <CartCrud item={item} />
          <p>{count * price} ت</p>
        </div>
      </div>
    </Card>
  );
};

export default OrderItem;
