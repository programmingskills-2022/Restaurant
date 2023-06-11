import PizzaIcon from "../svg/PizzaIcon";
import SandwichIcon from "../svg/SandwichIcon";
import BurgerIcon from "../svg/BurgerIcon";
import MenuItem from "./MenuItem";
import DrinkIcon from "../svg/DrinkIcon";
import PersiFoodIcon from "../svg/PersiFoodIcon";

const HeaderNav = () => {
  return (
    <nav className="flex justify-evenly mt-8">
      <MenuItem type={1} icon={<PizzaIcon />} title="پیتزا" />
      <MenuItem type={2} icon={<SandwichIcon />} title="ساندویچ" />
      <MenuItem type={3} icon={<PersiFoodIcon />} title="غذای پرسی" />
      <MenuItem type={4} icon={<BurgerIcon />} title="برگر" />
      <MenuItem type={5} icon={<DrinkIcon />} title="نوشیدنی" />
    </nav>
  );
};

export default HeaderNav;
