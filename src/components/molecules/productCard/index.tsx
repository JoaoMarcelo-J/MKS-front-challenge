import React from "react";

//components
import { CardButton } from "../../atoms/cardButton";

//styles
import * as S from "./styles";

//images
import ProductImage from "../../../assets/apple-watch.png";

export const ProductCard: React.FC = () => {
  return (
    <S.ProductCardContainer>
      <S.ImageWrapper>
        <img src={ProductImage} alt="Product Image" />
      </S.ImageWrapper>

      <S.ProductCardContent>
        <div>
          <h3>Apple Watch Series 4 GPS</h3>
          <span>R$399</span>
        </div>
        <p>Redesigned from scratch and completely revised.</p>
      </S.ProductCardContent>
      <CardButton />
    </S.ProductCardContainer>
  );
};
