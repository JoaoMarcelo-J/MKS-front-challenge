import React, { useState } from "react";
import * as S from "./styles";

export const IncrementInput: React.FC = () => {
  const [count, setCount] = useState(0);

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
