import React, { useContext } from "react";
import NavItems from "./MenuItems";
import { Link } from "react-router-dom";
import ItemsContext from "../context/ItemsContext";

const Menu = () => {
  const { displayMenuAll, dic, lang } = useContext(ItemsContext);

  return (
    <section
      id="menu"
      className="relative max-w-4xl mx-auto md:my-8 mt-2 mb-4 flex flex-col justify-center "
    >
      <button
        to="/"
        className=" text-xl font-bold hidden md:block hover:text-teal-700"
        onClick={displayMenuAll}
      >
        {lang ? dic[6].fa : dic[6].en}
      </button>
      <NavItems />
    </section>
  );
};

export default Menu;
