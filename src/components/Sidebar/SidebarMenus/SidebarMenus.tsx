import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import css from "./SidebarMenus.module.css";
import { BiSolidDashboard } from "react-icons/bi";
import { PiNotepad } from "react-icons/pi";
import { LuTimer } from "react-icons/lu";
import { LiaWalletSolid } from "react-icons/lia";
import { CiPercent } from "react-icons/ci";
import { FiSettings } from "react-icons/fi";
import { MdOutlineRateReview } from "react-icons/md";
const SIDEBAR_MENU: any = {
  dashboardMenu: {
    label: "MENU DASHBOARD",
    list: [
      {
        label: "Dashboard",
        menuIcon: <BiSolidDashboard />,
        tag: null,
        uri: "/",
        isActive: true,
      },
      {
        label: "Menus",
        menuIcon: <PiNotepad />,
        tag: "New",
        uri: "/menus",
        isActive: false,
      },
      {
        label: "History",
        menuIcon: <LuTimer />,
        tag: null,
        uri: "/history",
        isActive: false,
      },
      {
        label: "Wallet",
        menuIcon: <LiaWalletSolid />,
        tag: null,
        uri: "/wallet",
        isActive: false,
      },
      {
        label: "Promotion",
        menuIcon: <CiPercent />,
        tag: "12+",
        uri: "/promotion",
        isActive: false,
      },
    ],
  },
  generalMenu: {
    label: "GENERAL",
    list: [
      {
        label: "Settings",
        menuIcon: <FiSettings />,
        tag: null,
        uri: "/settings",
        isActive: false,
      },
      {
        label: "Give Rating",
        menuIcon: <MdOutlineRateReview />,
        tag: null,
        uri: "/rating",
        isActive: false,
      },
    ],
  },
};

type Props = {
  isShrinked: boolean;
};
const SidebarMenus: React.FC<Props> = ({ isShrinked }) => {
  return (
    <>
      {Object.keys(SIDEBAR_MENU).map((menuKey: string) => {
        return (
          <li
            key={menuKey}
            className={`${css.menus} ${isShrinked ? css.isShrinked : ""}`}
          >
            <div className={css.menu__head}>
              <strong>{SIDEBAR_MENU[menuKey].label}</strong>
              <button className={css.menu__btn}>
                <BiDotsHorizontalRounded />
              </button>
            </div>

            <nav className={css.nav}>
              <ul className={css.nav__list}>
                {SIDEBAR_MENU[menuKey].list.map((subMenu: any) => {
                  return (
                    <li
                      className={`${css.nav__list_item} ${
                        subMenu.isActive ? css.active : ""
                      } `}
                      key={subMenu.label}
                    >
                      <a href={subMenu.uri} className={css.link}>
                        {subMenu.menuIcon}

                        <strong>{subMenu.label}</strong>
                        {subMenu.tag && (
                          <span className={css.tag}>{subMenu.tag}</span>
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </li>
        );
      })}
    </>
  );
};

export default SidebarMenus;
