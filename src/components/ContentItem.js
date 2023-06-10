import Card from "../general/Card";
import CartIcon from "../svg/CartIcon";

const ContentItem = ({ item }) => {
  const { image, name, ingredients, price } = item;
  return (
    <Card>
      <div className="flex flex-col items-center py-4">
        <img className="w-1/2 h-auto" src={image} alt={name} />
        <p className="sm:text-lg text-sm font-bold py-2">{name}</p>
        <p className="py-8 px-2 text-sm h-36">{ingredients}</p>
        <div className="flex w-full items-center justify-between px-2">
          <p>{price} تومان</p>
          <span className="cursor-pointer">
            <CartIcon />
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ContentItem;
