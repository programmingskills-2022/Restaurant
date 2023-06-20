import { createContext, useEffect, useState } from "react";
import useHttp from "../hooks/useHttp";
import { useReducer } from "react";

const ItemsContext = createContext({});
const url = "https://resta-cxv7.onrender.com/items";
const cartUrl = "https://resta-cxv7.onrender.com/orders";
const userUrl = "https://resta-cxv7.onrender.com/users";
//"https://resta-cxv7.onrender.com/items";
//"https://resta-cxv7.onrender.com/orders";
// "http://localhost:3500/items";
// "http://localhost:3500/orders";

const dic = [
  { en: "Name", fa: "نام" },
  { en: "Address", fa: "آدرس" },
  { en: "Username", fa: "کد کاربری" },
  { en: "Password", fa: "رمز عبور" },
  { en: "Call center", fa: "مرکز تماس" },
  { en: "Home", fa: "خانه" },
  { en: "Menu", fa: "منوی سفارش" },
  { en: "Branches", fa: "شعب" },
  { en: "Contact Us", fa: "تماس با ما" },
  { en: "About Us", fa: "درباره ما" },
  { en: "Cart", fa: "سبد خرید" },
  { en: "Pizza", fa: "پیتزا" },
  { en: "Sandwich", fa: "ساندویچ" },
  { en: "Perci food", fa: "غذای پرسی" },
  { en: "Burger", fa: "برگر" },
  { en: "Beverage", fa: "نوشیدنی" },
  { en: "Delicous Food Group", fa: "مجموعه غذایی خوشمزه" },
  { en: "Central branch: Jam St.", fa: "شعبه مرکزی : خیابان جم" },
  { en: "Branch 1: Hafte Tir St.", fa: "شعبه 1 : خیابان هفت تیر" },
  { en: "Branch 2: Vakil Abad Blv.", fa: "شعبه 2 : بلوار وکیل آباد" },
  { en: "Our ways of communication", fa: "راههای ارتباطی ما" },
  { en: "Login", fa: "ورود" },
  { en: "sign up", fa: "عضویت" },
  { en: "Back", fa: "بازگشت" },
  { en: "Membership Form", fa: "فرم ثبت نام" },
  { en: "Register", fa: "ثبت" },
  { en: "Choose an address", fa: "انتخاب آدرس" },
  { en: "Home", fa: "فروشگاه" },
  { en: "Profile", fa: "پروفایل" },
  { en: "Contact no.", fa: "شماره تماس:" },
  { en: "Close", fa: "خروج" },
  { en: "Sign out", fa: "خروج از حساب کاربری" },
  {
    en: "All rights Reserved to Delicios Food Group.",
    fa: "کلیه حقوق مادی معنوی این سایت متعلق به مجموعه خوشمزه می باشد",
  },
  { en: "T", fa: "تومان" },
  { en: "ُShipping Cost", fa: "هزینه ارسال" },
  { en: "ّFree", fa: "رایگان" },
  { en: "Sum", fa: "جمع کل" },
  { en: "Payment Amount", fa: "مبلغ قابل پرداخت" },
  { en: "T", fa: "ت " },
  { en: "Order no.", fa: "سفارش شماره" },
  { en: "Order Records", fa: "سوابق سفارشات" },
  { en: "َAccount Information", fa: "اطلاعات حساب کاربری" },
  {
    en: "َAn account has already been created with this username.",
    fa: "با این کد کاربری قبلا حساب کاربری ایجاد شده است.",
  },
  {
    en: "َUsername or password is incorrect.",
    fa: "کد کاربری یا رمز عبور اشتباه است.",
  },
  {
    en: "َYour order has been successfully placed.",
    fa: "سفارش شما با موفقیت ثبت شد.",
  },
  {
    en: "َYour cart is empty",
    fa: "سبد شما خالی می باشد.",
  },
  {
    en: "َPlease login to your account.",
    fa: "لطفا به حساب کاربری خود وارد شوید.",
  },
  {
    en: "َThere is no menu available.",
    fa: "هیچ منوی موجود نیست.",
  },
  { en: "no.", fa: "عدد" },
  {
    en: "َThe account was created successfully.",
    fa: "حساب کاربری با موفقیت ایجاد شد",
  },
];

export const DataProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(null);
  //items difination
  const [items, setItems] = useState([]);
  const [users, setUsers] = useState([]);
  //const [dic, setDic] = useState([]);
  const [orders, setOrders] = useState([]);
  //  const [Cart, setCart] = useState([]);
  const [type, setType] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(true); //when false menu is shown, true is not shown
  const [cartIconClicked, setCartIconClicked] = useState(false);

  const [lang, setLang] = useState(true); //false for En, true for Fa

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

  const applyOrders = (fetchedOrders) => {
    setOrders(fetchedOrders);
  };

  const existUser = (username) => {
    const user = users.find((user) => user.username === username);
    if (user !== null && typeof user !== "undefined") {
      setLoggedUser((prev) => user);
      return user;
    } else return null;
  };

  const checkUser = (username, password) => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user !== null && typeof user !== "undefined") {
      setLoggedUser((prev) => user);
      return user;
    } else return null;
  };

  const { error, isLoading, sendRequest } = useHttp();

  useEffect(() => {
    sendRequest(url, "get", applyItems);
    sendRequest(userUrl, "get", applyUsers);
    sendRequest(cartUrl, "get", applyOrders);
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

  const getProfileOrdersById = (userId) => {
    const tempProfileOrders = orders.filter(
      (order) => order.user.id === userId
    );

    const profileOrders = tempProfileOrders.sort(
      (order1, order2) => order2.id - order1.id
    );
    return profileOrders;
  };

  return (
    <ItemsContext.Provider
      value={{
        cartUrl,
        userUrl,
        items,
        users,
        orders,
        dic,
        loggedUser,
        setLoggedUser,
        error,
        isLoading,
        type,
        setType,
        toggleMenu,
        setToggleMenu,
        lang,
        setLang,
        cartItems: cartState.items,
        totalCount: cartState.totalCount,
        totalPrice: cartState.totalPrice,
        addCart: addCartHandler,
        removeCart: removeCartHandler,
        clearCart: clearCartHandler,
        calcCountItem,
        displayMenuAll,
        existUser,
        checkUser,
        cartIconClicked,
        setCartIconClicked,
        sendRequest,
        applyOrders,
        applyUsers,
        getProfileOrdersById,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsContext;
