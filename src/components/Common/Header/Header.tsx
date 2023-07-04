import React from "react";
import HeaderRightMenus from "./HeaderRightMenus/HeaderRightMenus";
import Search from "./Search/Search";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <Search />
      <HeaderRightMenus />
    </header>
  );
};

export default Header;
