import styled from "styled-components";

export const IncrementeInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.3px solid var(--input-gray);
  border-radius: 4px;
  padding: 3px;

  span {
    font-size: 0.8rem;
    text-align: center;
    width: 26px;
    border-right: 0.2px solid #bfbfbf;
    border-left: 0.2px solid #bfbfbf;
  }

  button {
    margin: 0 4px;
    border: none;
    background-color: transparent;
  }
`;
