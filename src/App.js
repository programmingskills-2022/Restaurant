import { Fragment, useContext, useEffect, useState } from "react";
import "./App.css";
import AddressBtn from "./components/AddressBtn";
import Header from "./components/Header";
import Contents from "./components/Contents";
import Spinner from "./svg/Spinner";
import ItemsContext from "./context/ItemsContext";
import Footer from "./components/Footer";

function App() {
  const { items, error, isLoading, type } = useContext(ItemsContext);
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
    content = <p className="text-xl text-center p-12">هیچ منویی موجود نیست</p>;
  } else content = <Contents items={filteredItems} />;

  return (
    <div className="font-vazir">
      <Header items={filteredItems} />
      {/* <AddressBtn /> */}
      {content}
      <hr className="hidden md:block border border-double" />
      <Footer />
    </div>
  );
}

export default App;
