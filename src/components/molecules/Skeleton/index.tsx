import { SkeletonContainer } from "./styles";

interface SkelletonProps {
  width: number | string;
  height: number | string;
  borderRadius?: number | string;
}

export const Skelleton = ({ width, height, borderRadius }: SkelletonProps) => {
  return (
    <SkeletonContainer
      width={width}
      height={height}
      borderRadius={borderRadius}
    />
  );
};
