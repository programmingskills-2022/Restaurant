import { useContext, useEffect, useState } from "react";
import CartIcon from "../svg/CartIcon";
import LocationIcon from "../svg/LocationIcon";
import HeaderNav from "./MenuItems";
import ItemsContext from "../context/ItemsContext";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "../svg/MenuIcon";

const Header = () => {
  const {
    loggedUser,
    setLoggedUser,
    toggleMenu,
    setToggleMenu,
    totalCount,
    displayMenuAll,
    clearCart,
    cartIconClicked,
  } = useContext(ItemsContext);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const toggleMenuHandle = () => {
    setToggleMenu((prev) => !toggleMenu);
  };

  const logout = () => {
    setLoggedUser((prev) => null);
    setToggleMenu((prev) => !toggleMenu);
  };
  const navToHome = () => {
    displayMenuAll();
    navigate("/");
  };

  const clearUser = () => {
    console.log(loggedUser);
    setLoggedUser((prev) => null);
    clearCart();
  };

  useEffect(() => {
    //if user login?
    if (loggedUser !== null) setName(loggedUser.name);
    console.log(name);
  }, [loggedUser]);

  return (
    // "sticky top-0 z-10 md:px-20"
    <header className="md:px-20">
      <section className="fixed top-0 left-0 right-0 z-10 mx-auto flex bg-papayawhip-light items-center justify-between md:px-20 px-4 py-4">
        <div className="flex items-center justify-between">
          {/* hamburger menu is shown in mobile size */}
          <button
            id="hamburger-button"
            className="relative h-8 w-8 cursor-pointer text-3xl focus:outline-none md:hidden"
            onClick={toggleMenuHandle}
          >
            &#9776;
          </button>
          {/* logo and tel are shown in large size */}
          <figure className="w-12 h-12 hidden md:block">
            <img src="/images/logo.png" alt="تصویر لوگو" />
          </figure>
          <div className="md:flex flex-col items-center hidden px-2 font-bold">
            <p>مرکز تماس </p>
            <p>38222222</p>
          </div>
        </div>
        {/* nav is shown in large size */}
        <nav className="md:flex items-center lg:gap-6 md:gap-2 lg:text-lg hidden font-bold">
          <Link to="/" className="hover:opacity-60">
            خانه
          </Link>
          <Link to="/" className="hover:opacity-60">
            منو سفارش
          </Link>
          <Link to="/" className="hover:opacity-60">
            شعب
          </Link>
          <Link to="/" className="hover:opacity-60">
            تماس با ما
          </Link>
          <Link to="/" className="hover:opacity-60">
            درباره ما
          </Link>
          {loggedUser === null && (
            <Link
              to="/login"
              //className="hover:opacity-60"
              className={`
              ${cartIconClicked ? "animate-wave-item" : ""}
              hover:opacity-60`}
            >
              ورود{loggedUser?.name}
            </Link>
          )}
          {loggedUser !== null && (
            <>
              <Link to="/login/profile">پروفایل</Link>
              <button onClick={clearUser}>خروج از حساب کاربری</button>
            </>
          )}
        </nav>
        <div className="flex gap-1 hover:opacity-90 cursor-pointer md:hidden">
          <LocationIcon />
          <p className="text-xl font-bold"> انتخاب آدرس</p>
        </div>
        {/* menuIcon for showing all foods */}
        <button className="md:hidden" onClick={navToHome}>
          <MenuIcon />
        </button>
        {/* cart icon is shown in large size */}
        <button className="hover:bg-teal-700 bg-teal-600 text-white lg:px-4 md:px-2 py-2 rounded-xl shadow-xl lg:text-lg hidden md:block relative">
          <div className="rounded-full w-6 h-6 bg-teal-800 absolute top-0 right-0 text-white flex justify-center items-center">
            {totalCount}
          </div>
          <Link to="cart" className="flex items-center lg:gap-2">
            <span className="w-8 h-8">
              <CartIcon />
            </span>
            سبد خرید
          </Link>
        </button>
      </section>
      {/* right menu is shown in mobile size */}
      <section
        id="mobile-menu"
        class={`md:hidden top-0 absolute right-0 ${
          toggleMenu ? "hidden" : ""
        } w-full origin-right animate-open-menu h-full overflow-y-hidden bg-papayawhip-light text-teal-950 text-xl z-50`}
      >
        <button
          class="self-end px-4 text-6xl grid w-full place-content-end"
          onClick={toggleMenuHandle}
        >
          &times;
        </button>
        <nav
          class="flex flex-col justify-center items-center p-8"
          aria-label="mobile"
        >
          <img className="w-28 h-32 mt-12" src="/images/logo.png" />
          <Link
            to="/"
            class="w-full p-4 text-center hover:opacity-90"
            onClick={toggleMenuHandle}
          >
            فروشگاه
          </Link>
          <Link
            to="/login/profile"
            class="w-full p-4 text-center hover:opacity-90"
            onClick={toggleMenuHandle}
          >
            پروفایل
          </Link>
          <div class="flex flex-col justify-center items-center gap-2 w-full p-4 text-center hover:opacity-90">
            <p> شماره تماس:</p>
            <p>05138222222</p>
            <div className="flex">
              <a href="https://www.instagram.com/" alt="اینستاگرام">
                <img src="/images/instagram.png" />
              </a>
              <a href="https://www.whatsapp.com/">
                <img src="/images/whatsapp.png" alt="واتساپ" />
              </a>
            </div>
          </div>
          <Link
            to="/"
            class="w-full p-4 text-center hover:opacity-90"
            onClick={logout}
          >
            خروج
          </Link>
        </nav>
      </section>
    </header>
  );
};

export default Header;
