import styled from "styled-components";

interface ImageWrapperProps {
  padding?: string;
}

export const ImageWrapper = styled.div<ImageWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: ${(props) => props.padding || "0"};
  border-radius: 16px;
  background-color: var(--black);
`;
