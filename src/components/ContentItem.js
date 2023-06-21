import { useContext, useEffect } from "react";
import Card from "../general/Card";
import CartIcon from "../svg/CartIcon";
import ItemsContext from "../context/ItemsContext";
import CartCrud from "./CartCrud";
import Message from "../general/Message";

const ContentItem = ({ item }) => {
  const { id, image, FaName, EnName, FaIngredients, EnIngredients, price } =
    item;
  let count = 0;
  const {
    addCart,
    calcCountItem,
    loggedUser,
    setCartIconClicked,
    lang,
    dic,
    formatNum,
  } = useContext(ItemsContext);

  const addHandler = () => {
    const newItem = {
      id,
      FaName,
      EnName,
      image,
      FaIngredients,
      EnIngredients,
      price,
    };
    if (loggedUser !== null) {
      addCart(newItem);
    } else setCartIconClicked(true);
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
    content = <CartCrud item={editedItem} committed={false} />;
  }
  return (
    <Card kind={0}>
      <div
        className={`flex flex-col items-center py-4 ${lang ? "rtl" : "ltr"}`}
      >
        <img className="w-1/2 h-auto" src={image} alt={FaName} />
        <p className="md:text-lg text-xs font-bold py-2">
          {lang ? FaName : EnName}
        </p>
        <p className="py-8 px-2 text-sm h-36">
          {lang ? FaIngredients : EnIngredients}
        </p>
        <div className="flex w-full items-center justify-between text-sm md:text-lg md:px-2 px-1">
          <div className="flex justify-center items-center gap-1">
            <p className="md:text-lg">{formatNum(price)}</p>
            <p className="md:text-sm">{lang ? dic[33].fa : dic[33].en}</p>
          </div>
          {content}
        </div>
      </div>
    </Card>
  );
};

export default ContentItem;
