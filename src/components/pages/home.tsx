import React from "react";

//components
import { Header } from "../organisms/header";
import { ProductList } from "../organisms/productList";
import { Footer } from "../organisms/footer";

//styles
import * as S from "../../styles/home";

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <S.HomeContainer>
        <ProductList />
      </S.HomeContainer>
      <Footer />
    </>
  );
};
