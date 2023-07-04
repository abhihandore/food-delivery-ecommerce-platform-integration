import React, { useContext } from "react";
import css from "./CartModal.module.css";
import { MdClose } from "react-icons/md";
import { CartContext } from "../../../context/CartContext";
import CartProduct from "../CartProduct/CartProduct";
import { CartItemI } from "../../interfaces/interfaces";

type Props = {
  onCloseModal: () => void;
};
const CartModal: React.FC<Props> = ({ onCloseModal }) => {
  const { cartData, cartPrice } = useContext(CartContext);

  const taxRate = 0.1;
  const taxAmount = cartPrice * taxRate;
  const totalAmount = cartPrice + taxAmount;
  return (
    <>
      <div className={css.backdrop}></div>
      <div className={css.cart__modal}>
        <div className={css.cart__modal_header}>
          <div className={css.head__details}>
            <h3>My Order</h3>
            <strong>Take Out</strong>
          </div>
          <button className={css.modal__close_btn} onClick={onCloseModal}>
            <MdClose />
          </button>
        </div>
        <div className={css.cart__items_wrap}>
          <ul className={css.cart__items}>
            {cartData.map((cartItem: CartItemI) => {
              return (
                <li key={cartItem.id}>
                  <CartProduct cartItem={cartItem} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className={css.cart__price_total}>
          <table>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>{cartPrice.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Tax (10%)</td>
                <td>{taxAmount.toFixed(2)}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td>{totalAmount.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>

          <button>Print Bills</button>
        </div>
      </div>
    </>
  );
};

export default CartModal;
