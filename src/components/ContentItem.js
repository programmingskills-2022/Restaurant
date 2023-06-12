import { useContext, useEffect } from "react";
import Card from "../general/Card";
import CartIcon from "../svg/CartIcon";
import ItemsContext from "../context/ItemsContext";
import CartCrud from "./CartCrud";

const ContentItem = ({ item }) => {
  const { id, image, name, ingredients, price } = item;
  let count = 0;
  const { addCart, calcCountItem } = useContext(ItemsContext);

  useEffect(() => {
    count = calcCountItem(item);
    console.log(count);
  }, []);

  const addHandler = () => {
    const newItem = {
      id,
      name,
      image,
      ingredients,
      price,
    };
    addCart(newItem);
  };

  let content = "";
  count = calcCountItem(item);
  if (count === 0) {
    content = (
      <span className="cursor-pointer" onClick={addHandler}>
        <CartIcon />
      </span>
    );
  } else {
    const editedItem = { ...item, count: count };
    content = <CartCrud item={editedItem} />;
  }
  return (
    <Card kind={0}>
      <div className="flex flex-col items-center py-4">
        <img className="w-1/2 h-auto" src={image} alt={name} />
        <p className="sm:text-lg text-sm font-bold py-2">{name}</p>
        <p className="py-8 px-2 text-sm h-36">{ingredients}</p>
        <div className="flex w-full items-center justify-between px-2">
          <p>{price} تومان</p>
          {content}
        </div>
      </div>
    </Card>
  );
};

export default ContentItem;
