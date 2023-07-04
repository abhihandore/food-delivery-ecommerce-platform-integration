import Logo from "../Common/Logo/Logo";
import css from "./Sidebar.module.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import burgurWebp from "../Assets/images/burgur.webp";
import burgurPng from "../Assets/images/burgur.png";
import { VscSettings } from "react-icons/vsc";
import SidebarMenus from "./SidebarMenus/SidebarMenus";
import ThemeToggleButton from "./ThemeToggleButton/ThemeToggleButton";
import React from "react";

type Props = {
  onToggleSidebar: (flag: number) => void;
  toggleState: any;
};

const Sidebar: React.FC<Props> = ({ onToggleSidebar, toggleState }) => {
  const isShrinked = !toggleState.status;
  return (
    <ul
      className={`${css.sidebar_wrapper} ${isShrinked ? css.isShrinked : ""}`}
    >
      <li className={css.top__logo}>
        <Logo isDashboardMenu={true} isShrinked={isShrinked} />
        <button
          className={css.toggle__sidebar_btn}
          onClick={() => onToggleSidebar(!toggleState.fixed ? 1 : 0)}
        >
          {!toggleState.fixed ? <FiChevronRight /> : <FiChevronLeft />}
        </button>
      </li>
      <li className={css.current__menu}>
        <picture className={css.current__menu_img}>
          <source srcSet={burgurWebp} type="image/webp" />
          <source srcSet={burgurPng} type="image/png" />
          <img src={burgurPng} alt="Burgur" loading="lazy" />
        </picture>

        <div className={css.current__menu_setting}>
          <span className={css.sub_title}>Menu</span>
          <button>
            <span className={css.icon}>
              <VscSettings />
            </span>
            <span>Filter</span>
          </button>
          <h4>Burger</h4>
        </div>
      </li>
      <SidebarMenus isShrinked={isShrinked} />
      <li className={css.theme__change}>
        <ThemeToggleButton isShrinked={isShrinked} />
      </li>
    </ul>
  );
};

export default Sidebar;
