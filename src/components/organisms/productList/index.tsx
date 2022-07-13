//components
import { ProductCard } from "../../molecules/productCard";

//styles
import * as S from "./styles";

export const ProductList: React.FC = () => {
  return (
    <S.ProductListContainer>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </S.ProductListContainer>
  );
};
