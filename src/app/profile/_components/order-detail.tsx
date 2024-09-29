import Link from "next/link";

export default function OrderDetail() {
  return (
    <div className="flex flex-col">
      <h3 className="mb-[10px]">
        Order #<span className="font-bold uppercase text-black">PH1244721</span>
        &nbsp;was placed on&nbsp;
        <span className="font-bold capitalize text-black">
          Sunday,April 21,2024
        </span>
        &nbsp;and is currently&nbsp;
        <span className="font-bold capitalize text-black">processing</span>.
      </h3>

      <div className="mb-[45px] mt-[30px] flex flex-col">
        <h2 className="mb-[35px] text-[22px] font-medium leading-[28px] text-primary">
          Order Details
        </h2>

        <table className="xxx-smallest-screen:block">
          <thead className="xxx-smallest-screen:hidden">
            <tr className="uppercase xxx-smallest-screen:block">
              <th className="w-[70%] border-b border-solid border-light_gray_color_second pb-[15px] text-left text-[13px] font-normal leading-[1]">
                product
              </th>
              <th className="border-b border-solid border-light_gray_color_second pb-[15px] text-right text-[13px] font-normal leading-[1]">
                total
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
                      Dog food
                    </Link>
                    <span> ×&nbsp;2 </span>
                  </div>
                  <ul className="mt-[5px] flex gap-[10px]">
                    <li>
                      <span className="capitalize">weight : </span>
                      <span className="text-primary"> 5kg </span>
                    </li>
                    <li>
                      <span className="capitalize">Ingredient : </span>
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
                subtotal :
              </th>
              <td className="border-b border-solid border-light_gray_color_second py-[15px] text-right text-[17px] font-bold leading-[1] tracking-[0.01em] text-primary">
                <span>15.500.000</span> vnd
              </td>
            </tr>

            <tr className="uppercase xxx-smallest-screen:block">
              <th className="w-[70%] border-b border-solid border-light_gray_color_second text-left text-[13px] font-normal leading-[1]">
                Shipping :
              </th>
              <td className="border-b border-solid border-light_gray_color_second py-[15px] text-right text-[17px] font-bold leading-[1] tracking-[0.01em] text-primary">
                <span>50.000</span> vnd
              </td>
            </tr>

            <tr className="xxx-smallest-screen:block">
              <th className="w-[70%] border-b border-solid border-light_gray_color_second text-left text-[13px] font-normal uppercase leading-[1]">
                payment method :
              </th>
              <td className="border-b border-solid border-light_gray_color_second py-[15px] text-right text-[15px] font-normal leading-[1.5] tracking-[0.01em] text-primary">
                Direct bank transfer
              </td>
            </tr>

            <tr className="xxx-smallest-screen:block">
              <th className="w-[70%] border-b border-solid border-light_gray_color_second text-left text-[13px] font-normal uppercase leading-[1]">
                Total :
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
            Bill Detail
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
            Address Detail
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
          <i className="font-bold">Note</i> : Đồ dễ vỡ shipper cẩn thận giúp em,
          nếu không liên lạc được thì gọi cho số 0555666777
        </p>
      </div>
    </div>
  );
}
