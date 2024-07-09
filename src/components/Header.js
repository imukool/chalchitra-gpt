import React from "react";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44 h-24" src={logo} alt="logo" />
    </div>
  );
};

export default Header;
