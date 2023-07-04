import css from "./ThemeToggleButton.module.css";
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
import { useContext } from "react";
import ThemeContext from "../../../context/ThemeProvider";

type Props = {
  isShrinked: boolean;
};
const ThemeToggleButton: React.FC<Props> = ({ isShrinked }) => {
  const { onThemeToggle } = useContext(ThemeContext);
  return (
    <div className={`${css.toggle__btn} ${isShrinked ? css.isShrinked : ""}`}>
      <input
        className={css.checkbox}
        type="checkbox"
        id="checkbox"
        onChange={() => onThemeToggle()}
      />
      <label className={css.checkbox_label} htmlFor="checkbox">
        <span className={css.dark__theme_label}>
          <MdOutlineLightMode />
          <span>Light</span>
        </span>
        <span className={css.light__theme_label}>
          <CiDark />
          <span>Dark</span>
        </span>
        <span className={css.box}></span>
      </label>
    </div>
  );
};

export default ThemeToggleButton;
