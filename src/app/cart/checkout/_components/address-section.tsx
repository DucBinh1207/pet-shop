import useProvinces from "@/hooks/address/useProvince";
import { ChangeEvent, useState } from "react";
import District from "./districts";
import { FieldErrors, UseFormSetValue, UseFormTrigger } from "react-hook-form";

type props = {
  setValue: UseFormSetValue<{
    name: string;
    telephoneNumber: string;
    email: string;
    province: string;
    district: string;
    ward: string;
    street: string;
    paymentMethod: string;
    note?: string | undefined;
  }>;
  errors: FieldErrors<{
    name: string;
    telephoneNumber: string;
    email: string;
    province: string;
    district: string;
    ward: string;
    street: string;
    paymentMethod: string;
    note?: string | undefined;
  }>;
  trigger: UseFormTrigger<{
    name: string;
    telephoneNumber: string;
    email: string;
    province: string;
    district: string;
    ward: string;
    street: string;
    paymentMethod: string;
    note?: string | undefined;
  }>;
};

export default function AddressSection({ setValue, errors, trigger }: props) {
  const [provinceData, setProvinceData] = useState("");

  const { provinces } = useProvinces();

  function handleChangeProvince(event: ChangeEvent<HTMLSelectElement>) {
    const provinceSelected = event.target.value;
    setProvinceData(provinceSelected);
    setValue(`province`, event.target.options[event.target.selectedIndex].text);
    trigger("province");
  }

  return (
    <>
      <div className="mt-[25px]">
        <span className="clear-right mb-[20px]">
          <label
            className="block pb-[10px] font-quicksand text-[13px] font-semibold leading-[18px] tracking-[0.02em] text-primary"
            htmlFor="note"
          >
            Tỉnh/ Thành phố
          </label>
          <select
            className="relative h-auto w-full rounded-[3px] border border-solid border-input_border_color bg-form_color py-[8px] pl-[9px] pr-[28px] text-[13px] font-medium leading-[16px] tracking-[0.01em] text-primary outline-none"
            value={provinceData}
            onChange={handleChangeProvince}
          >
            <option value="" hidden disabled>
              Chọn tỉnh/ thành phố
            </option>
            {provinces &&
              provinces.map((province) => {
                return (
                  <option key={province.code} value={province.code}>
                    {province.name}
                  </option>
                );
              })}
          </select>
          {errors && errors.province?.message && (
            <span className="ml-[5px] mt-[5px] text-[13px] leading-[18px] text-red-500">
              {errors.province?.message}
            </span>
          )}
        </span>
      </div>

      <District
        provinceCode={provinceData}
        setValue={setValue}
        errors={errors}
        trigger={trigger}
      />
    </>
  );
}
