import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  gap: 20px;
  width: 100%;
  background-color: var(--white);
  padding: 20px;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;

  & > img {
    width: 46px;
    height: 58px;
  }

  h3 {
    font-size: 0.8rem;
    font-weight: 400;
    max-width: 100px;
  }
`;

export const MobileCartItemContainer = styled.div`
  display: flex;
  border-radius: 8px;
  padding: 0 16px;
  gap: 14px;
  align-items: center;
  position: relative;
  background-color: var(--white);
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  flex-direction: column;
  height: 240px;
  width: 260px;

  strong {
    background-color: var(--price-gray);
    color: var(--white);
    padding: 10px;
    border-radius: 5px;
  }

  h3 {
    font-weight: 400;
    font-size: 1.2rem;
  }

  & > img {
    margin-top: 22px;
    width: 80px;
    height: 95px;
  }
`;

export const CartItemsPriceContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 22px;
  justify-content: space-between;
  align-items: center;
`;

export const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(40%, -40%);
`;
