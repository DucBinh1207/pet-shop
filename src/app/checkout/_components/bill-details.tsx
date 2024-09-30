import Input from "@/components/common/input";

export default function BillDetails() {
  const inputField = ({
    id,
    label,
    placeholder,
  }: {
    id: string;
    label: string;
    placeholder: string;
  }) => {
    return (
      <div className="mt-[25px]">
        <span className="clear-right mb-[20px]">
          <label
            className="block pb-[10px] font-quicksand text-[13px] font-semibold leading-[18px] tracking-[0.02em] text-primary"
            htmlFor={id}
          >
            {label} *
          </label>
          <Input
            type="text"
            inputSize="medium_full_width"
            placeholder={placeholder}
            id={id}
          />
        </span>
      </div>
    );
  };

  return (
    <div className="relative flex-1 px-[40px] py-[20px] medium-screen:px-[30px] smallest-screen:w-full smallest-screen:max-w-[400px] smallest-screen:px-0">
      <div className="flex flex-col py-[15px]">
        <h3 className="relative text-left text-[22px] font-medium leading-[1.27px] text-primary">
          Billing details
        </h3>

        <div className="mt-[15px]">
          {inputField({
            id: "name",
            label: "Họ và tên",
            placeholder: "Nhập tên của bạn",
          })}
          {inputField({
            id: "phone",
            label: "Số điện thoại",
            placeholder: "Nhập số điện thoại của bạn",
          })}
          {inputField({
            id: "email",
            label: "Email",
            placeholder: "Nhập email của bạn",
          })}
          {inputField({
            id: "province",
            label: "Tỉnh/ Thành phố",
            placeholder: "Nhập tỉnh/ thành phố của bạn",
          })}
          {inputField({
            id: "district",
            label: "Quận/ Huyện",
            placeholder: "Nhập quận/ huyện của bạn",
          })}
          {inputField({
            id: "ward",
            label: "Xã/ Phường",
            placeholder: "Nhập xã/ phường của bạn",
          })}
          {inputField({
            id: "street",
            label: "Số đường",
            placeholder: "Nhập số đường của bạn",
          })}

          <div className="mt-[25px]">
            <span className="clear-right mb-[20px]">
              <label
                className="block pb-[10px] font-quicksand text-[13px] font-semibold leading-[18px] tracking-[0.02em] text-primary"
                htmlFor="note"
              >
                Ghi chú
              </label>
              <textarea
                className="h-auto min-h-[200px] w-full rounded-[3px] border border-solid border-input_border_color bg-background_color px-[12px] py-[9px] font-quicksand text-[13px] font-medium leading-[16px] tracking-[0.01em] text-primary focus:border-primary focus:outline-none"
                placeholder="Nhập ghi chú về địa chỉ giao hàng của bạn..."
                id="note"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
