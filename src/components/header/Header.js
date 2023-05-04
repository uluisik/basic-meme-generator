import React from "react";
import "./Header.css";
const Header = ({ name }) => {
  return (
    <header className="header">
      <p>{name}</p>
    </header>
  );
};

export default Header;
