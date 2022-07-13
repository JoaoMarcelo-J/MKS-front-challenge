import styled from "styled-components";

interface SkeletonContainerProps {
  width: string | number;
  height: string | number;
  borderRadius?: string | number;
}

export const SkeletonContainer = styled.div<SkeletonContainerProps>`
  background-image: linear-gradient(
    -90deg,
    var(--hover-gray) 0%,
    var(--input-gray) 50%,
    var(--hover-gray) 100%
  );
  background-size: 400% 400%;
  animation: shimer 1.2s ease-in-out infinite;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};

  @keyframes shimer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;
