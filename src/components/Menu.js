import React from "react";
import NavItems from "./MenuItems";

const Menu = () => {
  return (
    <section id="menu" className="relative max-w-4xl mx-auto my-8 ">
      <h2 className="text-center text-xl font-bold hidden md:block">
        منوی سفارش
      </h2>
      <NavItems />
    </section>
  );
};

export default Menu;
