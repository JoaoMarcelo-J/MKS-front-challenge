import React from "react";
import * as S from "./styles";

import appleWatch from "../../../assets/apple-watch.png";
import { CloseButton } from "../../atoms/closeButton";
import { IncrementInput } from "../../atoms/incrementeInput";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";

export const CartItem: React.FC = () => {
  const { width } = useWindowDimensions();
  const isMobile = width > 1024 ? false : true;

  return (
    <>
      {!isMobile ? (
        <S.CartItemContainer>
          <img src={appleWatch} alt="product icon" />
          <h3>Apple Watch Series 4 GPS</h3>
          <IncrementInput />
          <strong>R$399</strong>

          <S.CloseButtonWrapper>
            <CloseButton method={() => {}} padding="6px" />
          </S.CloseButtonWrapper>
        </S.CartItemContainer>
      ) : (
        <S.MobileCartItemContainer>
          <img src={appleWatch} alt="product icon" />
          <h3>Apple Watch Series 4 GPS</h3>
          <S.CartItemsPriceContainer>
            <IncrementInput />
            <strong>R$399</strong>
          </S.CartItemsPriceContainer>

          <S.CloseButtonWrapper>
            <CloseButton method={() => {}} padding="6px" />
          </S.CloseButtonWrapper>
        </S.MobileCartItemContainer>
      )}
    </>
  );
};
