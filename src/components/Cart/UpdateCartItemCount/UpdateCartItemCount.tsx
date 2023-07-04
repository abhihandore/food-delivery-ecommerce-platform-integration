import React from "react";
import { CiSquareMinus } from "react-icons/ci";
import css from "./UpdateCartItemCount.module.css";
import { BsPlusSquareFill } from "react-icons/bs";
type Props = {
  count: number;
  onUpdateRequest: (flag: number) => void;
};
const UpdateCartItemCount: React.FC<Props> = ({ count, onUpdateRequest }) => {
  return (
    <div className={css.update__count_wrap}>
      <button className={css.minus} onClick={() => onUpdateRequest(0)}>
        <CiSquareMinus />
      </button>
      <span>{count}</span>
      <button className={css.plus} onClick={() => onUpdateRequest(1)}>
        <BsPlusSquareFill />
      </button>
    </div>
  );
};

export default UpdateCartItemCount;
