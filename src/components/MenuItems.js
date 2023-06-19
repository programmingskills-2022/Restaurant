import PizzaIcon from "../svg/PizzaIcon";
import SandwichIcon from "../svg/SandwichIcon";
import BurgerIcon from "../svg/BurgerIcon";
import MenuItem from "./MenuItem";
import DrinkIcon from "../svg/DrinkIcon";
import PersiFoodIcon from "../svg/PersiFoodIcon";
import { useContext } from "react";
import ItemsContext from "../context/ItemsContext";

const HeaderNav = () => {
  const { dic, lang } = useContext(ItemsContext);
  return (
    <nav className="flex justify-evenly mt-8">
      <MenuItem
        type={1}
        icon={<PizzaIcon />}
        title={lang ? dic[11].fa : dic[11].en}
      />
      <MenuItem
        type={2}
        icon={<SandwichIcon />}
        title={lang ? dic[12].fa : dic[12].en}
      />
      <MenuItem
        type={3}
        icon={<PersiFoodIcon />}
        title={lang ? dic[13].fa : dic[13].en}
      />
      <MenuItem
        type={4}
        icon={<BurgerIcon />}
        title={lang ? dic[14].fa : dic[14].en}
      />
      <MenuItem
        type={5}
        icon={<DrinkIcon />}
        title={lang ? dic[15].fa : dic[15].en}
      />
    </nav>
  );
};

export default HeaderNav;
