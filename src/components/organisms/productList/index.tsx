//components
import { useEffect, useState } from "react";
import api from "../../../services/api";
import { IProduct } from "../../../store/modules/cart/types";
import { ProductCard } from "../../molecules/productCard";
import { SkelletonEffect } from "../../molecules/skeletonEffect";

//styles
import * as S from "./styles";

export const ProductList: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .get("products?page=1&rows=8&sortBy=id&orderBy=DESC")
      .then((response) => {
        setCatalog(response.data.products);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <S.ProductListContainer>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((product) => (
          <SkelletonEffect
            key={product}
            height="330px"
            width="218px"
            borderRadius="8px"
          />
        ))}
      </S.ProductListContainer>
    );
  }

  return (
    <S.ProductListContainer>
      {catalog.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          photo={product.photo}
        />
      ))}
    </S.ProductListContainer>
  );
};
