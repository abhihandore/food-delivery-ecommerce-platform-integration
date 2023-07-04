import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import css from "./CartProduct.module.css";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import UpdateCartItemCount from "../UpdateCartItemCount/UpdateCartItemCount";
import { CartItemI } from "../../interfaces/interfaces";
type Props = {
  cartItem: CartItemI;
};
const CartProduct: React.FC<Props> = ({ cartItem }) => {
  const { onItemCountUpdate } = useContext(CartContext);
  return (
    <div className={css.cart__item_wrap}>
      <div className={css.cart__item_img}>
        <img src={cartItem.image} alt={cartItem.name} loading="lazy" />
      </div>
      <div className={css.cart__item_detail}>
        <div className={css.top}>
          <h3>{cartItem.name}</h3>
          <BiDotsHorizontalRounded />
        </div>
        <div className={css.bottom}>
          <strong>{cartItem.price}</strong>
          <UpdateCartItemCount
            count={cartItem.count}
            onUpdateRequest={(flag) => onItemCountUpdate(cartItem, flag)}
          />
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
