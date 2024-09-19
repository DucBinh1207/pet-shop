import { ReactNode } from "react";
import TooltipNode from "./_components";

type ToolTipProps = {
  value?: string;
  button?: ReactNode;
};

export default function ToolTip({ value, button }: ToolTipProps) {
  return (
    <div className="group relative flex flex-1">
      {button}
      <TooltipNode value={value} />
    </div>
  );
}
