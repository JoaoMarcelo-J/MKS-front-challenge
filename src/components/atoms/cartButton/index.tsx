import React, { useState } from "react";

//components
import { CartDrawer } from "../../organisms/cartDrawer";

//styles
import * as S from "./styles";

//images
import cartIcon from "../../../assets/icons/cart-icon.svg";
import { useSelector } from "react-redux";
import { IState } from "../../../store";
import { ICartItem } from "../../../store/modules/cart/types";

export const CartButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);

  console.log(cart);

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
        <span>{cart.length}</span>
      </S.CartButtonContainer>
    </>
  );
};
