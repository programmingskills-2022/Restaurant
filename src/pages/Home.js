import { useContext, useEffect, useState } from "react";
import AddressBtn from "../components/AddressBtn";
import Contents from "../components/Contents";
import Spinner from "../svg/Spinner";
import ItemsContext from "../context/ItemsContext";
import Nav from "../components/Nav";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const Home = () => {
  const { items, error, isLoading, type, lang, dic } = useContext(ItemsContext);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (type !== 0 && type !== null) {
      const filtered = items.filter((item) => item.type === type);
      setFilteredItems((prev) => filtered);
    } else setFilteredItems((prev) => items);
  }, [type, items]);

  let content = "";
  if (isLoading) {
    content = <Spinner />;
  } else if (error) {
    content = <p className="text-xl text-center p-12">{error}</p>;
  } else if (!filteredItems.length) {
    content = (
      <p className="text-xl text-center p-12">
        {lang ? dic[47].fa : dic[47].en}
      </p>
    );
  } else content = <Contents items={filteredItems} />;

  return (
    <div>
      <Nav />
      <hr className="pt-12 bg-black border border-double shadow-xl md:hidden" />
      <Menu />
      {/* <AddressBtn /> */}
      {content}
      <hr className="hidden md:block border border-double" />
      <Footer />
    </div>
  );
};

export default Home;
