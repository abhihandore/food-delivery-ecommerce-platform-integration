import { useContext } from "react";
import { ImCart } from "react-icons/im";
import { CartContext } from "../../../context/CartContext";
import css from "./CartButton.module.css";

type Props = {
  onModalOpen: () => void;
};
const CartButton: React.FC<Props> = ({ onModalOpen }) => {
  const { cartCount } = useContext(CartContext);
  return (
    <button className={css.cart__btn} title="Cart" onClick={onModalOpen}>
      <ImCart />
      {Boolean(cartCount) && (
        <span className={css.cart__count}>{cartCount}</span>
      )}
    </button>
  );
};

export default CartButton;
