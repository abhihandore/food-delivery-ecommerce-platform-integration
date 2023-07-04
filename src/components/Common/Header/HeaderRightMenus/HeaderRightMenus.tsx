import { MdShare, MdChatBubbleOutline } from "react-icons/md";
import { PiDotsNine, PiPencilSimpleLineDuotone } from "react-icons/pi";
import css from "./HeaderRightMenus.module.css";

const TOP__HEADER: any = {
  chat: {
    label: "Chat",
    menuIcon: <MdChatBubbleOutline />,
    class: css.chat_menu,
  },
  more: {
    label: "More",
    menuIcon: <PiDotsNine />,
    class: css.more_menu,
  },
  share: {
    label: "Share",
    menuIcon: <MdShare />,
    class: css.share__btn,
  },
  notes: {
    label: "Your Notes",
    menuIcon: <PiPencilSimpleLineDuotone />,
    class: css.notes__btn,
  },
};
const HeaderRightMenus = () => {
  return (
    <nav>
      <ul className={css.menu__list}>
        {Object.keys(TOP__HEADER).map((menu: string) => {
          return (
            <li key={menu} className={css.menu__list_item} data-element={menu}>
              <button className={TOP__HEADER[menu].class}>
                {TOP__HEADER[menu].menuIcon}
                <span>{TOP__HEADER[menu].label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default HeaderRightMenus;
