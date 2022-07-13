import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../../store/modules/cart/actions";
import { IProduct } from "../../../store/modules/cart/types";

//components
import { CardButton } from "../../atoms/cardButton";

//styles
import * as S from "./styles";

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  photo: string;
  product: IProduct;
}

export const ProductCard = ({
  name,
  description,
  price,
  photo,
  product,
}: ProductCardProps) => {
  return (
    <S.ProductCardContainer>
      <S.ImageWrapper>
        <img src={photo} alt="Product Image" />
      </S.ImageWrapper>

      <S.ProductCardContent>
        <div>
          <h3>{name}</h3>
          <span>R${price}</span>
        </div>
        <p>{description}</p>
      </S.ProductCardContent>
      <CardButton product={product} />
    </S.ProductCardContainer>
  );
};
