import React, { useEffect, useState } from "react";
import { ProductI } from "../../interfaces/interfaces";
import ProductItem from "../ProductItem/ProductItem";
import css from "./ProductsGrid.module.css";

const ProductsGrid = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={css.prod__grid}>
      {products.map((product: ProductI) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default React.memo(ProductsGrid);
