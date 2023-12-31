import { useContext } from "react";
import CartIcon from "../svg/CartIcon";
import HomeIcon from "../svg/HomeIcon";
import UserIcon from "../svg/UserIcon";
import ItemsContext from "../context/ItemsContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { totalCount, loggedUser, cartIconClicked, dic, lang } =
    useContext(ItemsContext);
  return (
    <footer>
      <div className="hidden md:flex justify-evenly items-center py-8">
        <address>
          <img src="/images/enams.png" alt="نماد الکترونیکی" />
        </address>
        <address id="branches" className="flex flex-col items-center">
          <img className="w-24 h-24" src="images/logo.png" />
          <p className="pb-4">{lang ? dic[16].fa : dic[16].en}</p>
          <p>{lang ? dic[17].fa : dic[17].en}</p>
          <p>{lang ? dic[18].fa : dic[18].en}</p>
          <p>{lang ? dic[19].fa : dic[19].en}</p>
        </address>
        <address id="contact" className="flex flex-col items-center">
          <p>{lang ? dic[20].fa : dic[20].en}</p>
          <p>38222222</p>
          <p>info@KhoshmazeGroup.com</p>
          <div className="flex">
            <a href="#">
              <img src="/images/instagram.png" alt="اینستاگرام" />
            </a>
            <a href="#">
              <img src="/images/whatsapp.png" alt="واتساپ" />
            </a>
          </div>
        </address>
      </div>
      <div className="hidden bg-teal-700 text-white md:flex justify-evenly items-center py-2">
        <p>{lang ? dic[32].fa : dic[32].en}</p>
      </div>
      {/* for mobile responsive state */}
      <div className="fixed bottom-0 left-12 right-12 z-20 height-12 md:hidden bg-gray-300 mx-auto rounded-tl-full rounded-tr-full flex items-center justify-evenly text-teal-800">
        <Link to="/">
          <HomeIcon />
        </Link>
        <Link to="cart">
          <div className="rounded-full w-14 h-14 bg-gray-300 flex items-center justify-center transform -translate-y-4 relative">
            <CartIcon />
            <div className="rounded-full w-6 h-6 bg-teal-800 absolute top-0 right-0 text-white flex justify-center items-center">
              {totalCount}
            </div>
          </div>
        </Link>
        <Link
          to="login"
          className={`${cartIconClicked ? "animate-wave-item" : ""}`}
        >
          <UserIcon color={`${loggedUser === null ? "gray" : "teal"}`} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
