import React from "react";
import * as S from "./styles";

import { CloseButton } from "../../atoms/closeButton";
import { IncrementInput } from "../../atoms/incrementeInput";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import { IProduct } from "../../../store/modules/cart/types";
import { deleteProductToCart } from "../../../store/modules/cart/actions";
import { useDispatch } from "react-redux";

interface CartItemProps {
  photo: string;
  name: string;
  price: number;
  quantity: number;
  product: IProduct;
}

export const CartItem = ({
  photo,
  name,
  price,
  quantity,
  product,
}: CartItemProps) => {
  const { width } = useWindowDimensions();
  const isMobile = width > 1024 ? false : true;
  const dispatch = useDispatch();

  const handleRemoveProductToCart = React.useCallback(
    (product: IProduct) => {
      dispatch(deleteProductToCart(product));
    },
    [dispatch]
  );

  const handleRemoveEvent = () => {
    handleRemoveProductToCart(product);
  };

  return (
    <>
      {!isMobile ? (
        <S.CartItemContainer>
          <img src={photo} alt="product icon" />
          <h3>{name}</h3>
          <IncrementInput quantity={quantity} product={product} />
          <strong>{`R$${price * quantity}`}</strong>

          <S.CloseButtonWrapper>
            <CloseButton method={handleRemoveEvent} padding="6px" />
          </S.CloseButtonWrapper>
        </S.CartItemContainer>
      ) : (
        <S.MobileCartItemContainer>
          <img src={photo} alt="product icon" />
          <h3>{name}</h3>
          <S.CartItemsPriceContainer>
            <IncrementInput quantity={quantity} product={product} />
            <strong>{`R$${price * quantity}`}</strong>
          </S.CartItemsPriceContainer>

          <S.CloseButtonWrapper>
            <CloseButton method={handleRemoveEvent} padding="6px" />
          </S.CloseButtonWrapper>
        </S.MobileCartItemContainer>
      )}
    </>
  );
};
