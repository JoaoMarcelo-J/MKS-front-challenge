import React from "react";

//components
import { CartButton } from "../../atoms/cartButton";

//styles
import * as S from "./styles";

export const Header: React.FC = () => {
  return (
    <S.HeaderContainer>
      <S.TextLogo>
        <h1>MKS</h1>
        <span>Sistemas</span>
      </S.TextLogo>
      <CartButton />
    </S.HeaderContainer>
  );
};
