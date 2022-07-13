import styled from "styled-components";

export const DrawerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 20px;
  }

  h2 {
    text-align: left;
    color: var(--white);
    max-width: 180px;
  }
`;

export const DrawerBody = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: auto;
  max-height: 520px;
  padding: 30px;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 20px;
    max-height: 640px;
  }

  @media (max-height: 740px) {
    max-height: 410px;
  }

  @media (min-height: 1100px) {
    max-height: 900px;
  }
`;

export const DrawerFooter = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 0;
  color: var(--white);
  font-size: 1.75rem;

  div {
    display: flex;
    height: 80px;
    align-items: center;
    justify-content: space-around;
  }

  button {
    background-color: var(--black);
    color: var(--white);
    border: none;
    height: 80px;
    font-size: 1.25rem;
    width: 100%;
  }
`;
