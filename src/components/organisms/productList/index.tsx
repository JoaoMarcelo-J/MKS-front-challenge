//components
import { useCallback, useEffect, useState } from "react";
import api from "../../../services/api";
import { IProduct } from "../../../store/modules/cart/types";
import { ProductCard } from "../../molecules/productCard";
import { useDispatch } from "react-redux";

//styles
import * as S from "./styles";

export const ProductList: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api
      .get("products?page=1&rows=8&sortBy=id&orderBy=DESC")
      .then((response) => {
        setCatalog(response.data.products);
      });
  }, []);

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
