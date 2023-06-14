import { useContext } from "react";
import ItemsContext from "../context/ItemsContext";
import useHttp from "../hooks/useHttp";

const CartCrud = ({ item, committed }) => {
  const { id, name, image, ingredients, price, count } = item;
  const { addCart, removeCart } = useContext(ItemsContext);

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

  const removeHandler = () => {
    removeCart(id);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        className={`bg-teal-600 text-white text-xl md:text-2xl font-bold px-1 md:px-2 rounded-lg hover:bg-teal-800 ${
          committed ? "hidden" : ""
        }`}
        onClick={addHandler}
      >
        +
      </button>
      <p>{count}</p>
      <button
        className={`bg-teal-600 text-white text-xl md:text-2xl font-bold px-1 md:px-2 rounded-lg hover:bg-teal-800 ${
          committed ? "hidden" : ""
        }`}
        onClick={removeHandler}
      >
        &#x2212;
      </button>
      {committed && <p>عدد</p>}
    </div>
  );
};

export default CartCrud;
