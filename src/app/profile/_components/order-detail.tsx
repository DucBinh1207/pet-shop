import Link from "next/link";

export default function OrderDetail() {
  return (
    <div className="flex flex-col">
      <h3 className="mb-[10px]">
        Đơn hàng #
        <span className="font-bold uppercase text-black">PH1244721</span>
        &nbsp;được đặt vào&nbsp;
        <span className="font-bold capitalize text-black">
          Chủ nhật, ngày 21, tháng 4 năm 2024
        </span>
        &nbsp;và đang&nbsp;
        <span className="font-bold capitalize text-black">chờ thanh toán</span>.
      </h3>

      <div className="mb-[45px] mt-[30px] flex flex-col">
        <h2 className="mb-[35px] text-[22px] font-medium leading-[28px] text-primary">
          Chi tiết đơn hàng
        </h2>

        <table className="xxx-smallest-screen:block">
          <thead className="xxx-smallest-screen:hidden">
            <tr className="uppercase xxx-smallest-screen:block">
              <th className="w-[70%] border-b border-solid border-light_gray_color_second pb-[15px] text-left text-[13px] font-normal leading-[1]">
                sản phẩm
              </th>
              <th className="border-b border-solid border-light_gray_color_second pb-[15px] text-right text-[13px] font-normal leading-[1]">
                tổng cổng
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="xxx-smallest-screen:block">
              <td className="w-[70%] pb-[6px] pt-[15px] text-left text-[13px] font-normal leading-[1]">
                <div className="flex flex-col">
                  <div className="text-[14px] leading-[1.27] text-primary">
                    <Link href="/pets/{id}" className="hover:text-secondary">
                      Husky
                    </Link>
                    <span> ×&nbsp;3 </span>
                  </div>
                </div>
              </td>

              <td className="pb-[6px] pt-[15px] text-right font-quicksand text-[17px] font-bold leading-[1] tracking-[0.01em] text-primary">
                <span>15.000.000</span>&nbsp;VND
              </td>
            </tr>

            <tr className="xxx-smallest-screen:block">
              <td className="w-[70%] border-b border-solid border-light_gray_color_second pb-[15px] pt-[6px] text-left text-[13px] font-normal leading-[1]">
                <div className="flex flex-col">
                  <div className="text-[14px] leading-[1.27] text-primary">
                    <Link href="/pets/{id}" className="hover:text-secondary">
                      Thức ăn cho chó
                    </Link>
                    <span> ×&nbsp;2 </span>
                  </div>
                  <ul className="mt-[5px] flex gap-[10px]">
                    <li>
                      <span className="capitalize">Cân nặng : </span>
                      <span className="text-primary"> 5kg </span>
                    </li>
                    <li>
                      <span className="capitalize">Nguyên liệu : </span>
                      <span className="text-primary"> beef </span>
                    </li>
                  </ul>
                </div>
              </td>

              <td className="border-b border-solid border-light_gray_color_second pb-[15px] pt-[6px] text-right font-quicksand text-[17px] font-bold leading-[1] tracking-[0.01em] text-primary">
                <span>500.000</span>&nbsp;VND
              </td>
            </tr>
          </tbody>

          <tfoot>
            <tr className="uppercase xxx-smallest-screen:block">
              <th className="w-[70%] border-b border-solid border-light_gray_color_second text-left text-[13px] font-normal leading-[1]">
                Tổng phụ :
              </th>
              <td className="border-b border-solid border-light_gray_color_second py-[15px] text-right text-[17px] font-bold leading-[1] tracking-[0.01em] text-primary">
                <span>15.500.000</span> vnd
              </td>
            </tr>

            <tr className="uppercase xxx-smallest-screen:block">
              <th className="w-[70%] border-b border-solid border-light_gray_color_second text-left text-[13px] font-normal leading-[1]">
                Vận chuyện :
              </th>
              <td className="border-b border-solid border-light_gray_color_second py-[15px] text-right text-[17px] font-bold leading-[1] tracking-[0.01em] text-primary">
                <span>50.000</span> vnd
              </td>
            </tr>

            <tr className="xxx-smallest-screen:block">
              <th className="w-[70%] border-b border-solid border-light_gray_color_second text-left text-[13px] font-normal uppercase leading-[1]">
                Phương thức thanh toán :
              </th>
              <td className="border-b border-solid border-light_gray_color_second py-[15px] text-right text-[15px] font-normal leading-[1.5] tracking-[0.01em] text-primary">
                Chuyển khoản online
              </td>
            </tr>

            <tr className="xxx-smallest-screen:block">
              <th className="w-[70%] border-b border-solid border-light_gray_color_second text-left text-[13px] font-normal uppercase leading-[1]">
                Tổng :
              </th>
              <td className="border-b border-solid border-light_gray_color_second py-[15px] text-right font-quicksand text-[24px] font-bold leading-[23px] tracking-[-0.02em] text-secondary">
                <span>15.550.000</span> VND
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="mb-[40px] flex flex-wrap">
        <div className="flex w-[220px] flex-col">
          <h2 className="mb-[35px] text-[22px] font-medium leading-[28px] text-primary">
            Chi tiết hóa đơn
          </h2>
          <ul className="flex flex-col">
            <li>Tran Duc Binh</li>
            <li>0123 987 456</li>
            <li>example@gmail.com</li>
            <li>Viet nam</li>
          </ul>
        </div>

        <div className="flex w-[220px] flex-col">
          <h2 className="mb-[35px] text-[22px] font-medium leading-[28px] text-primary">
            Địa chỉ
          </h2>
          <ul className="flex flex-col">
            <li>Da Nang</li>
            <li>Lien Chieu</li>
            <li>Hoa Khanh Bac</li>
            <li>54 Nguyen Luong Bang</li>
          </ul>
        </div>
      </div>

      <div>
        <p>
          <i className="font-bold">Ghi chú</i> : Đồ dễ vỡ shipper cẩn thận giúp em,
          nếu không liên lạc được thì gọi cho số 0555666777
        </p>
      </div>
    </div>
  );
}
