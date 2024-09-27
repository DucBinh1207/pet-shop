import { Svg, SvgProps } from "../svg";

export default function SupplyIcon(props: SvgProps) {
  return (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      version="1.1"
      id="Layer_1"
      viewBox="0 0 64 64"
      enableBackground="new 0 0 64 64"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        <g>
          <path
            fill="currentColor"
            d="M60,0H4C1.789,0,0,1.789,0,4v8c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4V4C64,1.789,62.211,0,60,0z"
          />
          <path
            fill="currentColor"
            d="M4,24v36c0,2.211,1.789,4,4,4h48c2.211,0,4-1.789,4-4V24H4z M40,40H24c-2.211,0-4-1.789-4-4s1.789-4,4-4h16 c2.211,0,4,1.789,4,4S42.211,40,40,40z"
          />
        </g>
      </g>
    </Svg>
  );
}
