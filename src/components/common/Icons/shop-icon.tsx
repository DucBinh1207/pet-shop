import { Svg, SvgProps } from "../Svg";

export default function ShopIcon(props: SvgProps) {
  return (
    <Svg stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor">
        <path d="m16.528 2h-9.0556c-1.2028 0-1.8042 0-2.2875 0.2987-0.48331 0.2987-0.75227 0.83661-1.2902 1.9124l-1.4036 3.5482c-0.32429 0.81976-0.60802 1.786-0.06214 2.4782 0.36622 0.4644 0.9339 0.7625 1.5712 0.7625 1.1046 0 2-0.8954 2-2 0 1.1046 0.89544 2 2 2 1.1046 0 2-0.8954 2-2 0 1.1046 0.89542 2 2 2s2-0.8954 2-2c0 1.1046 0.8954 2 2 2s2-0.8954 2-2c0 1.1046 0.8954 2 2 2 0.6373 0 1.205-0.2981 1.5713-0.7625 0.5459-0.69225 0.2622-1.6584-0.0621-2.4782l-1.4036-3.5482c-0.538-1.0758-0.8069-1.6137-1.2902-1.9124s-1.0847-0.2987-2.2876-0.2987z" />
        <path
          d="m20 21.25h2c0.4142 0 0.75 0.3358 0.75 0.75s-0.3358 0.75-0.75 0.75h-20c-0.41421 0-0.75-0.3358-0.75-0.75s0.33579-0.75 0.75-0.75h2v-8.75c0.74363 0 1.4331-0.2319 2-0.6273 0.56692 0.3954 1.2564 0.6273 2 0.6273 0.74363 0 1.4331-0.2319 2-0.6273 0.5669 0.3954 1.2564 0.6273 2 0.6273s1.4331-0.2319 2-0.6273c0.5669 0.3954 1.2564 0.6273 2 0.6273s1.4331-0.2319 2-0.6273c0.5669 0.3954 1.2564 0.6273 2 0.6273v8.75zm-10.5 0h5v-2.75c0-0.9346 0-1.4019-0.201-1.75-0.1316-0.228-0.321-0.4174-0.549-0.5491-0.3481-0.2009-0.8154-0.2009-1.75-0.2009s-1.4019 0-1.75 0.2009c-0.228 0.1317-0.41739 0.3211-0.54904 0.5491-0.20096 0.3481-0.20096 0.8154-0.20096 1.75v2.75z"
          clip-rule="evenodd"
          fill-rule="evenodd"
        />
      </g>
    </Svg>
  );
}
