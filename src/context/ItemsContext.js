import { createContext, useEffect, useState } from "react";
import useHttp from "../hooks/useHttp";
import { useReducer } from "react";

const ItemsContext = createContext({});
const url = "http://localhost:3500/items";
const cartUrl = "http://localhost:3500/orders";
const userUrl = "http://localhost:3500/users";
//"https://resta-cxv7.onrender.com/items";
//"https://resta-cxv7.onrender.com/orders";
// "http://localhost:3500/items";
// "http://localhost:3500/orders";

export const DataProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(null);
  //items difination
  const [items, setItems] = useState([]);
  const [users, setUsers] = useState([]);
  const [Cart, setCart] = useState([]);
  const [type, setType] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(true); //when false menu is shown, true is not shown
  const [cartIconClicked, setCartIconClicked] = useState(false);

  //orders difination
  const initCartState = {
    items: [],
    totalCount: 0,
    totalPrice: 0,
  };

  const reducer = (state, action) => {
    let updateItems = [];
    let tempItem;
    let totalCount = 0;
    let totalPrice = 0;
    let itemIndex;

    switch (action.type) {
      case "LOAD":
        updateItems = action.cart?.items;
        totalPrice = action.cart?.totalPrice;
        totalCount = action.cart?.totalCount;
        return { items: updateItems, totalCount, totalPrice };

      case "ADD":
        if (!state.items) {
          tempItem = { ...action.item, count: 1 };
          updateItems.push(tempItem);
          totalCount = 1;
          totalPrice = action.item.price;
        } else {
          itemIndex = state.items?.findIndex(
            (item) => item.id === action.item.id
          );
          if (itemIndex !== -1) {
            const item = state.items[itemIndex];
            //item is added before and it's count must be just added by 1
            tempItem = { ...action.item, count: item.count + 1 };
            updateItems = [...state.items];
            updateItems[itemIndex] = tempItem;
          } else {
            //item is new and must be added
            tempItem = { ...action.item, count: 1 };
            updateItems = [...state.items];
            updateItems.push(tempItem);
          }
          totalCount = state.totalCount + 1;
          totalPrice = state.totalPrice + action.item.price;
        }
        return { items: updateItems, totalCount, totalPrice };

      case "REMOVE":
        itemIndex = state.items?.findIndex((item) => item.id === action.id);
        const item = state.items[itemIndex];
        //check if count of this item is more than 1
        if (item.count > 1) {
          tempItem = { ...item, count: item.count - 1 };
          updateItems = [...state.items];
          updateItems[itemIndex] = tempItem;
        }
        //check if there is just 1 item count
        else {
          tempItem = { ...item };
          updateItems = [...state.items];
          updateItems = updateItems.filter((item) => item.id !== action.id);
        }
        totalCount = state.totalCount - 1;
        totalPrice = state.totalPrice - tempItem.price;
        return { items: updateItems, totalCount, totalPrice };

      case "EDIT":
        return console.log("EDIT");

      case "CLEAR":
        return initCartState;
      default:
        return initCartState;
    }
  };

  const [cartState, dispatchCartAction] = useReducer(reducer, initCartState);

  //add new item
  const addCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  //remove item from cart.items
  const removeCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id });
  };

  const applyItems = (fetchedItems) => {
    setItems(fetchedItems);
  };

  const applyUsers = (fetchedUsers) => {
    setUsers(fetchedUsers);
  };

  const existUser = (username, password) => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    console.log(user);
    if (user !== null && typeof user !== "undefined") {
      setLoggedUser((prev) => user);
      return user;
    } else return null;
  };

  const { error, isLoading, sendRequest: fetchItems } = useHttp();

  const applyCart = (fetchedCart) => {
    dispatchCartAction({ type: "LOAD", cart: fetchedCart });
  };

  const { cartError, cartIsLoading, sendRequest: fetchCart } = useHttp();

  useEffect(() => {
    fetchItems(url, "get", applyItems);
    fetchItems(userUrl, "get", applyUsers);
    clearCartHandler();
  }, []);

  const calcCountItem = (checkItem) => {
    const cartItems = cartState?.items;
    if (cartItems) {
      const itemIndex = cartItems?.findIndex(
        (item) => item.id === checkItem.id
      );
      if (itemIndex !== -1) {
        return cartItems[itemIndex].count;
      } else return 0;
    } else return 0;
  };

  const displayMenuAll = () => {
    setType(0);
  };

  return (
    <ItemsContext.Provider
      value={{
        cartUrl,
        items,
        users,
        loggedUser,
        setLoggedUser,
        error,
        isLoading,
        type,
        setType,
        toggleMenu,
        setToggleMenu,
        //cart data
        cartError,
        cartIsLoading,
        // getOrderByUserId,
        cartItems: cartState.items,
        totalCount: cartState.totalCount,
        totalPrice: cartState.totalPrice,
        addCart: addCartHandler,
        removeCart: removeCartHandler,
        clearCart: clearCartHandler,
        calcCountItem,
        displayMenuAll,
        existUser,
        cartIconClicked,
        setCartIconClicked,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsContext;
