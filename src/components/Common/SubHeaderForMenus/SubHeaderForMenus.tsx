import React from "react";
import css from "./SubHeaderForMenus.module.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const SubHeaderForMenus = () => {
  return (
    <div className={css.sub__header}>
      <button className={css.back_to}>
        <FiChevronLeft />
      </button>
      <div className={css.sub__header_details}>
        <h1 className={css.sub__head_title}>Hamburger</h1>
        <strong className={css.sub__head_subtitle}>
          Discover whatever you need easily
        </strong>
      </div>
      <ul className={css.burger__menu}>
        {["Menu", "Food", "Burger", "Hamburger"].map(
          (menu: string, index: number, arr: string[]) => {
            return (
              <li key={`menu-${index}`}>
                <span>{menu}</span>
                {index !== arr.length - 1 && <FiChevronRight />}
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default SubHeaderForMenus;
