import { createContext, ReactNode, useReducer } from "react";
import { CartItemI, ProductI } from "../components/interfaces/interfaces";

/** ========================= Interfaces ========================= */

interface StateI {
  cartData: CartItemI[];
  cartCount: number;
  status: boolean | null;
  cartPrice: number;
}
interface ActionI {
  type: string;
  payload: any;
}
interface CartContextI extends StateI {
  onAddToCart: (item: ProductI) => void;
  onItemCountUpdate: (item: CartItemI, operator: number) => void;
}

const initialState = {
  cartData: [],
  cartCount: 0,
  status: null,
  cartPrice: 0,
};

/** ========================= Context Created ========================= */

export const CartContext = createContext<CartContextI>({
  ...initialState,
  onAddToCart: (item: ProductI) => {},
  onItemCountUpdate: (item: CartItemI, operator: number) => {},
});

/** ========================= Reducer Function ========================= */

function cartReducer(state: StateI, action: ActionI) {
  const { type, payload } = action;
  const { cartData, cartPrice } = state;
  switch (type) {
    case "addToCart": {
      const itemIndex = cartData.findIndex(
        (item: CartItemI) => item.id === payload.id
      );
      let updatedDetails;
      if (itemIndex !== -1) {
        // already in Cart
        const existing = cartData[itemIndex];
        const itemPrice = Number(existing.price.replace("$", ""));
        const exceptExistingItem = cartData.filter(
          (item) => item.id !== existing.id
        );

        updatedDetails = {
          cartData: [
            ...exceptExistingItem,
            { ...existing, count: existing.count + 1 },
          ],
          cartPrice: cartPrice + itemPrice,
        };
      } else {
        const itemPrice = Number(payload.price.replace("$", ""));

        updatedDetails = {
          cartData: [...cartData, { ...payload, count: 1 }],
          cartPrice: cartPrice + itemPrice,
        };
      }

      return {
        ...state,
        ...updatedDetails,
        cartCount: state.cartCount + 1,
      };
    }

    case "updateCartItemCount": {
      const { operator, item: cartItem } = payload;
      const itemIndex = cartData.findIndex(
        (item: CartItemI) => item.id === cartItem.id
      );
      const existing = cartData[itemIndex];
      const itemPrice = Number(existing.price.replace("$", ""));
      const exceptExistingItem = cartData.filter(
        (item) => item.id !== existing.id
      );
      let count: number, price: number, cartCount: number;
      if (operator === 1) {
        // If Plus (increment)
        count = existing.count + 1;
        price = cartPrice + itemPrice;
        cartCount = state.cartCount + 1;
      } else {
        // If Minus (decrement)
        count = existing.count - 1;
        price = cartPrice - itemPrice;
        cartCount = state.cartCount - 1;
      }
      let updatedDetails;
      if (count <= 0) {
        updatedDetails = {
          cartData: [...exceptExistingItem],
          cartPrice: price,
        };
      } else {
        exceptExistingItem.splice(itemIndex, 0, { ...existing, count });
        updatedDetails = {
          cartData: [...exceptExistingItem],
          cartPrice: price,
        };
      }

      return {
        ...state,
        ...updatedDetails,
        cartCount,
      };
    }

    default:
      return state;
  }
}
type Props = {
  children: ReactNode;
};
const CartContextProvider: React.FC<Props> = (props) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  const handleAddToCart = (item: ProductI) =>
    dispatch({
      type: "addToCart",
      payload: item,
    });

  const handleItemCountUpdate = (item: CartItemI, operator: number) =>
    dispatch({
      type: "updateCartItemCount",
      payload: {
        item,
        operator,
      },
    });

  return (
    <CartContext.Provider
      value={{
        ...cart,
        onAddToCart: handleAddToCart,
        onItemCountUpdate: handleItemCountUpdate,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
