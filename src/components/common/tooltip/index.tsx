import { ReactNode } from "react";
import TooltipNode from "./_components";

type ToolTipProps = {
  value?: string;
  elmNode?: ReactNode;
};

export default function ToolTip({ value, elmNode }: ToolTipProps) {
  return (
    <div className="group relative inline-block">
      {elmNode}
      <TooltipNode value={value} />
    </div>
  );
}
