import { IProduct } from "./types";

export function addProductToCart(product: IProduct) {
  return {
    type: "ADD_PRODUCT_TO_CART",
    payload: {
      product,
    },
  };
}

export function decrementProductToCart(product: IProduct) {
  return {
    type: "DECREMENT_PRODUCT_TO_CART",
    payload: {
      product,
    },
  };
}

export function deleteProductToCart(product: IProduct) {
  return {
    type: "DELETE_PRODUCT_TO_CART",
    payload: {
      product,
    },
  };
}
