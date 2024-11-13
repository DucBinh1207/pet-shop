import Button from "@/components/common/button";
import EyeIcon from "@/components/common/icons/eye-icon";
import ToolTip from "@/components/common/tooltip";

type props = {
  RedirectOrderDetail: () => void;
};

export default function OrderCard({ RedirectOrderDetail }: props) {
  return (
    <tr className="mb-[10px] xx-smallest-screen:block">
      <td className="py-[7px] pr-[15px] xx-smallest-screen:flex xx-smallest-screen:justify-center">
        <div
          onClick={RedirectOrderDetail}
          className="cursor-pointer font-bold text-primary hover:text-secondary"
        >
          #PH1244721
        </div>
      </td>

      <td className="py-[7px] pr-[15px] xx-smallest-screen:flex xx-smallest-screen:justify-center">
        3 sản phẩm
      </td>
      <td className="py-[7px] pr-[15px] text-center xx-smallest-screen:flex xx-smallest-screen:justify-center">
        Chủ nhật, ngày 21, tháng 4 năm 2024
      </td>
      <td className="py-[7px] pr-[15px] xx-smallest-screen:flex xx-smallest-screen:justify-center">
        10.000.000 VND
      </td>
      <td className="py-[7px] pr-[15px] xx-smallest-screen:flex xx-smallest-screen:justify-center">
        Chờ thanh toán
      </td>
      <td className="py-[7px] text-center xx-smallest-screen:flex xx-smallest-screen:justify-center">
        <ToolTip
          value="Xem đơn hàng"
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
        />
      </td>
    </tr>
  );
}
