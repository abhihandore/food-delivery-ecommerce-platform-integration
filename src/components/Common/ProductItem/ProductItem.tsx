import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { ProductI } from "../../interfaces/interfaces";
import css from "./ProductItem.module.css";

type Props = {
  product: ProductI;
};

const ProductItem: React.FC<Props> = ({ product }) => {
  const { onAddToCart } = useContext(CartContext);
  return (
    <div className={css.prod__wrap} onClick={() => onAddToCart(product)}>
      <div className={css.prod__img}>
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className={css.prod__details}>
        <strong className={css.prod__name}>{product.name}</strong>
        <p className={css.prod__price}>{product.price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
