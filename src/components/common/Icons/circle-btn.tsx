import { Svg, SvgProps } from "../svg";

export default function CircleBtn(props: SvgProps) {
  return (
    <Svg viewBox="0 0 150 150" {...props}>
      <defs>
        <path
          id="curve"
          d="
        M 75, 75
        m -57.3, 0
        a 57.3,57.3 0 1,1 114.6,0
        a 57.3,57.3 0 1,1 -114.6,0"
          fill="#ffffff"
        ></path>
      </defs>
      <text className="origin-center animate-text_rotation tracking-[0.5px]">
        <textPath
          href="#curve"
          className="font-quicksand text-[12px] font-bold leading-[1] tracking-[0.5px]"
          fill="#372384"
        >
          10 YEARS OF EXPERIENCE・TOP PET CARE SPECIALISTS・
        </textPath>
      </text>
    </Svg>
  );
}
