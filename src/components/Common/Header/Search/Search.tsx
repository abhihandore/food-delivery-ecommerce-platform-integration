import React from "react";
import { CiSearch } from "react-icons/ci";
import css from "./Search.module.css";
import { PiSlackLogoLight } from "react-icons/pi";
const Search = () => {
  return (
    <form className={css.search__form}>
      <div className={css.search__wrap}>
        <CiSearch />
        <input
          type="search"
          className="search"
          placeholder="Search menu..."
          id="search-field"
        />
        <button type="submit" className="submit">
          <PiSlackLogoLight />
        </button>
      </div>
    </form>
  );
};

export default Search;
