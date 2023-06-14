import { useContext } from "react";
import Card from "../general/Card";
import ItemsContext from "../context/ItemsContext";

const CartItemsSum = ({ totalPrice }) => {
  //const { totalPrice } = useContext(ItemsContext);
  return (
    <Card kind={2}>
      <div className="md:px-2 py-4 mx-4 flex justify-between text-sm md:text-lg items-center">
        <div className="flex flex-col gap-4 justify-center items-start">
          <p>هزینه ارسال:</p>
          <p>جمع کل:</p>
          <p>مبلغ قابل پرداخت:</p>
        </div>
        <div className="flex flex-col gap-4 justify-center items-end">
          <p>رایگان</p>
          <p>{totalPrice} تومان</p>
          <p>{totalPrice} تومان</p>
        </div>
      </div>
    </Card>
  );
};

export default CartItemsSum;
