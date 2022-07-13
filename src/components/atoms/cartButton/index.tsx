import React, { useState } from "react";

//components
import { CartDrawer } from "../../organisms/cartDrawer";

//styles
import * as S from "./styles";

//images
import cartIcon from "../../../assets/icons/cart-icon.svg";

export const CartButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleCloseModal() {
    setIsOpen(false);
  }

  function handleOpenModal() {
    setIsOpen(true);
  }

  return (
    <>
      <CartDrawer closeModal={handleCloseModal} isOpen={isOpen} />
      <S.CartButtonContainer onClick={handleOpenModal}>
        <img src={cartIcon} />
        <span>0</span>
      </S.CartButtonContainer>
    </>
  );
};
