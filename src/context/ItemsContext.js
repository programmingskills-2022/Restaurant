import { createContext, useEffect, useState } from "react";
import useHttp from "../hooks/useHttp";

const ItemsContext = createContext({});

export const DataProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [type, setType] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(true); //when false menu is shown, true is not shown

  const url = "https://resta-cxv7.onrender.com/items";
  // "http://localhost:3500/items";

  const applyData = (fetchedItems) => {
    setItems(fetchedItems);
  };

  const {
    error,
    isLoading,
    sendRequest: fetchItems,
  } = useHttp(url, "get", applyData);

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <ItemsContext.Provider
      value={{
        items,
        error,
        isLoading,
        type,
        setType,
        toggleMenu,
        setToggleMenu,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsContext;
