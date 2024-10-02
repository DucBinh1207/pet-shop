import Button from "@/components/common/button";
import EyeIcon from "@/components/common/icons/eye-icon";
import ToolTip from "@/components/common/tooltip";

type props = {
  RedirectOrderDetail: () => void;
};

export default function OrderCard({ RedirectOrderDetail }: props) {
  return (
    <tr className="mb-[10px] xxx-smallest-screen:block">
      <td className="py-[7px] pr-[15px] xxx-smallest-screen:flex xxx-smallest-screen:justify-center">
        <div
          onClick={RedirectOrderDetail}
          className="cursor-pointer font-bold text-primary hover:text-secondary"
        >
          #PH1244721
        </div>
      </td>

      <td className="py-[7px] pr-[15px] xxx-smallest-screen:flex xxx-smallest-screen:justify-center">
        3
      </td>
      <td className="py-[7px] pr-[15px] xxx-smallest-screen:flex xxx-smallest-screen:justify-center">
        Sunday,April 21,2024
      </td>
      <td className="py-[7px] pr-[15px] xxx-smallest-screen:flex xxx-smallest-screen:justify-center">
        $330
      </td>
      <td className="py-[7px] pr-[15px] xxx-smallest-screen:flex xxx-smallest-screen:justify-center">
        Processing
      </td>
      <td className="py-[7px] text-center xxx-smallest-screen:flex xxx-smallest-screen:justify-center">
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
