import PizzaIcon from "../svg/PizzaIcon";
import SandwichIcon from "../svg/SandwichIcon";
import BurgerIcon from "../svg/BurgerIcon";
import HeaderNavMenuItem from "./HeaderNavMenuItem";
import DrinkIcon from "../svg/DrinkIcon";
import PersiFoodIcon from "../svg/PersiFoodIcon";

const HeaderNav = ({ items }) => {
  return (
    <nav className="flex justify-evenly mt-8">
      <HeaderNavMenuItem type={1} icon={<PizzaIcon />} title="پیتزا" />
      <HeaderNavMenuItem type={2} icon={<SandwichIcon />} title="ساندویچ" />
      <HeaderNavMenuItem type={3} icon={<PersiFoodIcon />} title="غذای پرسی" />
      <HeaderNavMenuItem type={4} icon={<BurgerIcon />} title="برگر" />
      <HeaderNavMenuItem type={5} icon={<DrinkIcon />} title="نوشیدنی" />
    </nav>
  );
};

export default HeaderNav;
