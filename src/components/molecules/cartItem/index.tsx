import React from "react";
import * as S from "./styles";

import appleWatch from "../../../assets/apple-watch.png";
import { CloseButton } from "../../atoms/closeButton";
import { IncrementInput } from "../../atoms/incrementeInput";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";

interface CartItemProps {
  photo: string;
  name: string;
  price: number;
  quantity: number;
}

export const CartItem = ({ photo, name, price, quantity }: CartItemProps) => {
  const { width } = useWindowDimensions();
  const isMobile = width > 1024 ? false : true;

  return (
    <>
      {!isMobile ? (
        <S.CartItemContainer>
          <img src={photo} alt="product icon" />
          <h3>{name}</h3>
          <IncrementInput quantity={quantity} />
          <strong>{price}</strong>

          <S.CloseButtonWrapper>
            <CloseButton method={() => {}} padding="6px" />
          </S.CloseButtonWrapper>
        </S.CartItemContainer>
      ) : (
        <S.MobileCartItemContainer>
          <img src={photo} alt="product icon" />
          <h3>{name}</h3>
          <S.CartItemsPriceContainer>
            <IncrementInput quantity={quantity} />
            <strong>{price}</strong>
          </S.CartItemsPriceContainer>

          <S.CloseButtonWrapper>
            <CloseButton method={() => {}} padding="6px" />
          </S.CloseButtonWrapper>
        </S.MobileCartItemContainer>
      )}
    </>
  );
};
