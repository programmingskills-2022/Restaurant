import { useContext, useEffect, useState } from "react";
import CartIcon from "../svg/CartIcon";
import LocationIcon from "../svg/LocationIcon";
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
    dic,
    lang,
    setLang,
  } = useContext(ItemsContext);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const toggleMenuHandle = () => {
    if (toggleMenu) {
      document.body.classList.add("overflow-y-hidden");
      window.scrollTo({
        top: 0,
        left: 0,
        //behavior: "smooth",
      });
    } else document.body.classList.remove("overflow-y-hidden");

    setToggleMenu((prev) => !toggleMenu);
  };

  const logout = () => {
    toggleMenuHandle();
    clearUser();
  };
  const navToHome = () => {
    displayMenuAll();
    navigate("/");
  };

  const clearUser = () => {
    setLoggedUser((prev) => null);
    clearCart();
  };

  const changeLang = () => {
    setLang((prev) => !lang);
  };
  useEffect(() => {
    console.log(dic);
    //if user login?
    if (loggedUser !== null) setName(loggedUser.name);
  }, [loggedUser]);

  return (
    // "sticky top-0 z-10 md:px-20"
    <header className="md:px-20">
      <section className="fixed top-0 left-0 right-0 z-10 mx-auto flex bg-papayawhip-light items-center justify-between md:px-20 px-4 py-4">
        <div className="flex items-center justify-between">
          {/* hamburger menu is shown in mobile size */}
          <button
            id="hamburger-button"
            className="h-8 w-8 cursor-pointer text-3xl focus:outline-none md:hidden"
            onClick={toggleMenuHandle}
          >
            &#9776;
          </button>
          {/* logo and tel are shown in large size */}
          <figure className="w-12 h-12 hidden md:block">
            <img src="/images/logo.png" alt="تصویر لوگو" />
          </figure>
          <div className="md:flex flex-col items-center hidden px-2 font-bold">
            <p>{lang ? dic[4].fa : dic[4].en}</p>
            <p>38222222</p>
          </div>
        </div>
        {/* nav is shown in large size */}
        <nav className="md:flex items-center lg:gap-6 md:gap-2 lg:text-lg hidden font-bold">
          <Link to="/" className="hover:opacity-60">
            {lang ? dic[5].fa : dic[5].en}
          </Link>
          <Link to="/" className="hover:opacity-60">
            {lang ? dic[6].fa : dic[6].en}
          </Link>
          <Link to="/" className="hover:opacity-60">
            {lang ? dic[7].fa : dic[7].en}
          </Link>
          <Link to="/" className="hover:opacity-60">
            {lang ? dic[8].fa : dic[8].en}
          </Link>
          <Link to="/" className="hover:opacity-60">
            {lang ? dic[9].fa : dic[9].en}
          </Link>
          {loggedUser === null && (
            <Link
              to="/login"
              //className="hover:opacity-60"
              className={`
              ${cartIconClicked ? "animate-wave-item" : ""}
              hover:opacity-60`}
            >
              {lang ? dic[21].fa : dic[21].en}
              {loggedUser?.name}
            </Link>
          )}
          {loggedUser !== null && (
            <>
              <Link to="/login/profile">{lang ? dic[28].fa : dic[28].en}</Link>
              <button onClick={clearUser}>
                {lang ? dic[31].fa : dic[31].en}
              </button>
            </>
          )}
          <button className={`${lang ? "hidden" : ""}`} onClick={changeLang}>
            FA
          </button>
          <button className={`${lang ? "" : "hidden"}`} onClick={changeLang}>
            EN
          </button>
        </nav>
        <div className="flex gap-1 hover:opacity-90 cursor-pointer md:hidden">
          <LocationIcon />
          <p className="text-xl font-bold"> {lang ? dic[26].fa : dic[26].en}</p>
        </div>
        {/* menuIcon for showing all foods */}
        <div className="flex gap-2">
          <button
            className={`md:hidden ${lang ? "hidden" : ""}`}
            onClick={changeLang}
          >
            FA
          </button>
          <button
            className={`md:hidden ${lang ? "" : "hidden"}`}
            onClick={changeLang}
          >
            EN
          </button>
          <button className="md:hidden" onClick={navToHome}>
            <MenuIcon />
          </button>
        </div>
        {/* cart icon is shown in large size */}
        <button className="hover:bg-teal-700 bg-teal-600 text-white lg:px-4 md:px-2 py-2 rounded-xl shadow-xl lg:text-lg hidden md:block relative">
          <div className="rounded-full w-6 h-6 bg-teal-800 absolute top-0 right-0 text-white flex justify-center items-center">
            {totalCount}
          </div>
          <Link
            to="cart"
            className={`flex items-center lg:gap-2 ${lang ? "ltr" : "rtl"}`}
          >
            <span className="w-8 h-8">
              <CartIcon />
            </span>
            {lang ? dic[10].fa : dic[10].en}
          </Link>
        </button>
      </section>
      <section
        id="mobile-menu"
        class={`md:hidden top-0 absolute right-0 ${
          toggleMenu ? "hidden" : ""
        } w-full origin-right animate-open-menu h-full bg-papayawhip-light text-teal-950 text-xl z-50`}
      >
        <button
          id="close-menu"
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
            {lang ? dic[27].fa : dic[27].en}
          </Link>
          <Link
            to="/login/profile"
            class="w-full p-4 text-center hover:opacity-90"
            onClick={toggleMenuHandle}
          >
            {lang ? dic[28].fa : dic[28].en}
          </Link>
          <div class="flex flex-col justify-center items-center gap-2 w-full p-4 text-center hover:opacity-90">
            <p> {lang ? dic[29].fa : dic[29].en}</p>
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
            {lang ? dic[30].fa : dic[30].en}
          </Link>
        </nav>
      </section>
    </header>
  );
};

export default Header;
