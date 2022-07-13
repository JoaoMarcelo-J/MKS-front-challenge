import React from "react";

//styles
import * as S from "./styles";

//images
import closeIcon from "../../../assets/icons/x-icon.svg";

interface CloseButtonProps {
  method: () => void;
  padding?: string;
}

export const CloseButton = ({ method, padding }: CloseButtonProps) => {
  return (
    <S.ImageWrapper onClick={method} padding={padding}>
      <img src={closeIcon} alt="close icon" />
    </S.ImageWrapper>
  );
};
