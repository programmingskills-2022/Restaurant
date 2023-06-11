import { useContext } from "react";
import PizzaIcon from "../svg/PizzaIcon";
import SandwichIcon from "../svg/SandwichIcon";
import ItemsContext from "../context/ItemsContext";

const HeaderNavMenuItem = ({ icon, title, type }) => {
  const { setType } = useContext(ItemsContext);

  const changeItemType = () => {
    setType(type);
  };

  return (
    <div
      className="flex flex-col items-center gap-2 cursor-pointer 
    "
      onClick={changeItemType}
    >
      <div className="w-16 h-16 bg-teal-100 rounded-xl border border-solid border-slate-500 shadow-xl flex items-center justify-center radialteal opacity-90 hover:opacity-100 md:w-24 md:h-24">
        {icon}
      </div>
      <p className="md:text-lg">{title}</p>
    </div>
  );
};

export default HeaderNavMenuItem;
