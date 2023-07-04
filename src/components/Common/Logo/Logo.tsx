import React from "react";
import css from "./Logo.module.css";

type Props = {
  isDashboardMenu: boolean;
  isShrinked: boolean;
};
const Logo: React.FC<Props> = ({ isDashboardMenu, isShrinked }) => {
  return (
    <div
      className={`${css.logo_wrap} ${
        isDashboardMenu && isShrinked ? css.isShrinked : ""
      }`}
    >
      <span className={css.logo_img}></span>
      <div className={css.site_name_wrap}>
        <span>ProductsKart</span>
        <span>
          {new Date().toLocaleDateString("en-US", {
            weekday: "short",
            day: "2-digit",
            month: "short",
          })}
        </span>
      </div>
    </div>
  );
};

export default Logo;
