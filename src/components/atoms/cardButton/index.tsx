import React from "react";

//images
import shoppingIcon from "../../../assets/icons/shopping-bag.svg";

//styles
import * as S from "./styles";

export const CardButton: React.FC = () => {
  return (
    <S.CardButtonContainer>
      <img src={shoppingIcon} alt="buy icon" />
      COMPRAR
    </S.CardButtonContainer>
  );
};
