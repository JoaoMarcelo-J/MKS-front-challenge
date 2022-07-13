import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addProductToCart,
  decrementProductToCart,
} from "../../../store/modules/cart/actions";
import { IProduct } from "../../../store/modules/cart/types";
import * as S from "./styles";

interface IncrementInputProps {
  quantity: number;
  product: IProduct;
}

export const IncrementInput = ({ quantity, product }: IncrementInputProps) => {
  const dispatch = useDispatch();

  const handleAddProductToCart = React.useCallback(
    (product: IProduct) => {
      dispatch(addProductToCart(product));
    },
    [dispatch]
  );

  const handleDecrementProductToCart = React.useCallback(
    (product: IProduct) => {
      dispatch(decrementProductToCart(product));
    },
    [dispatch]
  );

  return (
    <S.IncrementeInputContainer>
      <button onClick={() => handleDecrementProductToCart(product)}>-</button>
      <span>{quantity}</span>
      <button onClick={() => handleAddProductToCart(product)}>+</button>
    </S.IncrementeInputContainer>
  );
};
