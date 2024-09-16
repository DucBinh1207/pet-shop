import { Svg, SvgProps } from "../Svg";

export default function FoodIcon(props: SvgProps) {
  return (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      version="1.1"
      id="Layer_1"
      viewBox="0 0 512 512"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0" />

      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        <path d="M434.158,410.319c10.065-49.313,15.227-103.397,14.969-157.867c-0.245-52.162-5.402-103.795-14.971-150.77H77.839 C67.777,151,62.616,205.085,62.872,259.553c0.244,52.169,5.399,103.801,14.966,150.766H434.158z M255.996,360.542 c-41.185,0-76.943-12.417-76.943-53.079c0-37.899,34.516-68.732,76.943-68.732s76.943,30.833,76.943,68.732 C332.939,348.103,297.22,360.542,255.996,360.542z M336.298,176.982c22.98-3.959,44.792,11.441,48.748,34.429 c4.422,25.685-15.261,49.346-41.647,49.346c-19.97,0-37.953-14.25-41.529-35.027C297.913,202.746,313.311,180.94,336.298,176.982z M255.996,149.072c23.269,0,42.201,18.931,42.201,42.201s-18.931,42.201-42.201,42.201s-42.201-18.931-42.201-42.201 S232.728,149.072,255.996,149.072z M168.534,176.372c23.269,0,42.201,18.931,42.201,42.201c0,23.269-18.931,42.201-42.201,42.201 s-42.201-18.931-42.201-42.201C126.334,195.303,145.265,176.372,168.534,176.372z" />
        <path d="M77.467,65.961h357.062l10.46-43.967C447.657,10.776,439.135,0,427.613,0H84.382C72.85,0,64.34,10.784,67.006,21.995 L77.467,65.961z" />
        <path d="M434.528,446.04H77.467l-10.459,43.965C64.338,501.224,72.86,512,84.382,512h343.23c11.532,0,20.042-10.784,17.376-21.995 L434.528,446.04z" />
      </g>
    </Svg>
  );
}
