import { useContext, useState } from "react";
import Card from "../general/Card";
import ItemsContext from "../context/ItemsContext";
import CartCrud from "./CartCrud";

const CartItem = ({ item, committed }) => {
  const { id, name, image, price, count } = item;
  const { lang, dic } = useContext(ItemsContext);

  return (
    <Card kind={1}>
      <div className="p-2 md:mx-4 flex justify-between items-center text-sm md:text-lg">
        <div className="flex items-center gap-4">
          <img className="w-16 md-w-20 h-auto" alt="تصویر غذا" src={image} />
          <div className="flex flex-col gap-4">
            <p>{name}</p>
            <p>
              {price} {lang ? dic[33].fa : dic[33].en}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <CartCrud item={item} committed={committed} />
          <p>
            {count * price} {lang ? dic[38].fa : dic[38].en}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default CartItem;
