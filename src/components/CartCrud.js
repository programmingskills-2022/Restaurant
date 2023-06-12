import { useContext } from "react";
import ItemsContext from "../context/ItemsContext";

const CartCrud = ({ item }) => {
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
    <div className="flex items-center gap-4">
      <button
        className="bg-teal-600 text-white text-2xl font-bold px-2 rounded-lg hover:bg-teal-800"
        onClick={addHandler}
      >
        +
      </button>
      <p>{count}</p>
      <button
        className="bg-teal-600 text-white text-2xl font-bold px-2 rounded-lg hover:bg-teal-800"
        onClick={removeHandler}
      >
        &#x2212;
      </button>
    </div>
  );
};

export default CartCrud;
