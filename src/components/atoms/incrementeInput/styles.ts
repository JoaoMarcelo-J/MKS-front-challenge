import styled from "styled-components";

export const IncrementeInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.3px solid var(--input-gray);
  border-radius: 4px;
  padding: 3px;

  @media (max-width: 768px) {
    width: 100px;
    height: 34px;
  }

  span {
    font-size: 0.8rem;
    text-align: center;
    width: 26px;
    border-right: 0.2px solid #bfbfbf;
    border-left: 0.2px solid #bfbfbf;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  button {
    margin: 0 4px;
    border: none;
    background-color: transparent;

    @media (max-width: 768px) {
      margin: 0 10px;
      font-size: 1.2rem;
    }
  }
`;
