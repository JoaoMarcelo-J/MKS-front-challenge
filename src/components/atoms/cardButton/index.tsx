import React from "react";
import { useDispatch } from "react-redux";

//images
import shoppingIcon from "../../../assets/icons/shopping-bag.svg";
import { addProductToCart } from "../../../store/modules/cart/actions";
import { IProduct } from "../../../store/modules/cart/types";

//styles
import * as S from "./styles";

interface CardButtonProps {
  product: IProduct;
}

export const CardButton = ({ product }: CardButtonProps) => {
  const dispatch = useDispatch();

  const handleAddProductToCart = React.useCallback(
    (product: IProduct) => {
      dispatch(addProductToCart(product));
    },
    [dispatch]
  );

  return (
    <S.CardButtonContainer onClick={() => handleAddProductToCart(product)}>
      <img src={shoppingIcon} alt="buy icon" />
      COMPRAR
    </S.CardButtonContainer>
  );
};
