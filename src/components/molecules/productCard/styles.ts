import styled from "styled-components";

export const ProductCardContainer = styled.div`
  position: relative;
  height: 330px;
  width: 218px;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;

  img {
    width: 112px;
    height: 140px;
  }
`;

export const ProductCardContent = styled.div`
  padding: 0 14px;

  & > div {
    display: flex;
    justify-content: space-between;
  }

  h3 {
    max-width: 110px;
    font-weight: 400;
    font-size: 1rem;
  }

  span {
    background-color: var(--price-gray);
    color: var(--white);
    font-weight: 700;
    padding: 4px 6px;
    border-radius: 5px;
    height: fit-content;
    font-size: 1rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 0.625rem;
    color: var(--text-color);
    margin-top: 8px;
  }
`;
