import { Reducer } from "redux";
import { IcartState } from "./types";
import produce from "immer";

const INITIAL_STATE: IcartState = {
  items: [],
};

const cart: Reducer<IcartState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_PRODUCT_TO_CART": {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(
          (item) => item.product.id === product.id
        );

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity += 1;
        } else {
          draft.items.push({ product, quantity: 1 });
        }

        break;
      }
      case "DECREMENT_PRODUCT_TO_CART": {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(
          (item) => item.product.id === product.id
        );

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity -= 1;
        }
        if (draft.items[productInCartIndex].quantity === 0) {
          draft.items.splice(productInCartIndex, 1);
        }

        break;
      }
      case "DELETE_PRODUCT_TO_CART": {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(
          (item) => item.product.id === product.id
        );

        if (productInCartIndex >= 0) {
          draft.items.splice(productInCartIndex, 1);
        }

        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default cart;
