import { useContext } from "react";
import Card from "../general/Card";
import ItemsContext from "../context/ItemsContext";

const CartItemsSum = ({ totalPrice }) => {
  const { lang, dic } = useContext(ItemsContext);
  return (
    <Card kind={2}>
      <div className="md:px-2 py-4 mx-4 flex justify-between text-sm md:text-lg items-center">
        <div className="flex flex-col gap-4 justify-center items-start">
          <p>{lang ? dic[34].fa : dic[34].en}:</p>
          <p>{lang ? dic[36].fa : dic[36].en}:</p>
          <p>{lang ? dic[37].fa : dic[37].en}:</p>
        </div>
        <div className="flex flex-col gap-4 justify-center items-end">
          <p>{lang ? dic[35].fa : dic[35].en}</p>
          <p>
            {totalPrice} {lang ? dic[33].fa : dic[33].en}
          </p>
          <p>
            {totalPrice} {lang ? dic[33].fa : dic[33].en}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default CartItemsSum;
