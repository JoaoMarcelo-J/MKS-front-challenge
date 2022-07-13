import React, { useState } from "react";
import * as S from "./styles";

interface IncrementInputProps {
  quantity: number;
}

export const IncrementInput = ({ quantity }: IncrementInputProps) => {
  const [count, setCount] = useState(quantity);

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };

  return (
    <S.IncrementeInputContainer>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
    </S.IncrementeInputContainer>
  );
};
