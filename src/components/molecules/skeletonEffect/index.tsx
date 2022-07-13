import { SkeletonContainer } from "./styles";

interface SkelletonEffectProps {
  width: number | string;
  height: number | string;
  borderRadius?: number | string;
}

export const SkelletonEffect = ({
  width,
  height,
  borderRadius,
}: SkelletonEffectProps) => {
  return (
    <SkeletonContainer
      width={width}
      height={height}
      borderRadius={borderRadius}
    />
  );
};
