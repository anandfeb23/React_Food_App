import { useState } from "react";
import logoSvg from "./logo.svg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  //Subscribing to the store using the selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-gray-100 shadow-sm m-2">
      <div className="logo-container">
        <Link to="/">
          <img src={logoSvg} alt="App Logo" className="w-36 mx-4" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex  px-4 mx-4 gap-8 text-xl">
          <li className="text-sm">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
          <li>
            <Link to="/cart">
              <i class="ri-shopping-cart-2-fill"></i>
              <span className="ml-1 ">({cartItems.length})</span>
            </Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
