import Button from "@/components/common/button";
import EyeIcon from "@/components/common/icons/eye-icon";
import ToolTip from "@/components/common/tooltip";

type props = {
  RedirectOrderDetail: () => void;
};

export default function OrderCard({ RedirectOrderDetail }: props) {
  return (
    <tr className="xxx-smallest-screen:block mb-[10px]">
      <td className="xxx-smallest-screen:flex xxx-smallest-screen:justify-center py-[7px] pr-[15px]">
        <div
          onClick={RedirectOrderDetail}
          className="cursor-pointer font-bold text-primary hover:text-secondary"
        >
          #PH1244721
        </div>
      </td>

      <td className="xxx-smallest-screen:flex xxx-smallest-screen:justify-center py-[7px] pr-[15px]">3</td>
      <td className="xxx-smallest-screen:flex xxx-smallest-screen:justify-center py-[7px] pr-[15px]">Sunday,April 21,2024</td>
      <td className="xxx-smallest-screen:flex xxx-smallest-screen:justify-center py-[7px] pr-[15px]">$330</td>
      <td className="xxx-smallest-screen:flex xxx-smallest-screen:justify-center py-[7px] pr-[15px]">Processing</td>
      <td className="xxx-smallest-screen:flex xxx-smallest-screen:justify-center py-[7px] text-center">
        <ToolTip
          value="View Order"
          element={
            <Button
              size="none"
              variant="none"
              onClick={RedirectOrderDetail}
              startIcon={
                <EyeIcon
                  size={18}
                  className="fill-current text-primary hover:text-secondary"
                />
              }
            />
          }
        ></ToolTip>
      </td>
    </tr>
  );
}
