import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 120px;
  padding: 28px 66px;
  background-color: var(--brand-color);

  @media (max-width: 768px) {
    padding: 14px 28px;
  }
`;

export const TextLogo = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  color: var(--white);

  h1 {
    font-size: 2.5rem;
    font-weight: 600;
  }

  span {
    font-size: 1.25rem;
    font-weight: 300;
    display: block;
    margin-bottom: 5px;
  }
`;
