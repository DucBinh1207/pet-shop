import InputField from "./input-field";

export default function BillDetails() {
  return (
    <div className="relative flex-1 px-[40px] py-[20px] medium-screen:px-[30px] smallest-screen:w-full smallest-screen:max-w-[400px] smallest-screen:px-0">
      <div className="flex flex-col py-[15px]">
        <h3 className="relative text-left text-[22px] font-medium leading-[1.27px] text-primary">
          Billing details
        </h3>

        <div className="mt-[15px]">
          <InputField
            id='"name'
            label="Họ và tên"
            placeholder="Nhập tên của bạn "
          />

          <InputField
            id="phone"
            label="Số điện thoại"
            placeholder="Nhập số điện thoại của bạn "
          />

          <InputField
            id="email"
            label="Email"
            placeholder="Nhập email của bạn "
          />

          <InputField
            id="province"
            label="Tỉnh/ Thành phố"
            placeholder="Nhập tỉnh/ thành phố "
          />

          <InputField
            id="district"
            label="Quận/ Huyện"
            placeholder="Nhập quận/ huyện "
          />

          <InputField
            id="ward"
            label="Xã/ Phường"
            placeholder="Nhập xã/ phường "
          />

          <InputField
            id="street"
            label="Số đường"
            placeholder="Nhập số đường "
          />

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
