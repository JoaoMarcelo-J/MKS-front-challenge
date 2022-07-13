import styled from "styled-components";

export const CartButtonContainer = styled.button`
  position: relative;
  display: flex;
  border: none;
  gap: 1rem;
  border-radius: 8px;
  padding: 15px;
  color: var(--black);
  background-color: var(--white);
  font-weight: 800;

  &:hover {
    background-color: var(--hover-gray);
    transition: background-color 0.2s ease-in-out;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 10px;
  border-radius: 16px;
  background-color: var(--black);
`;
