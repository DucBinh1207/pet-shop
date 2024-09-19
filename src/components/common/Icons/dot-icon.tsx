import { Svg, SvgProps } from "../svg";

export default function DotIcon(props: SvgProps) {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </Svg>
  );
}

