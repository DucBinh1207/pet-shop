import useDistricts from "@/hooks/address/useDistricts";
import { ChangeEvent, useEffect, useState } from "react";
import Wards from "./ward";
import { FieldErrors, UseFormSetValue, UseFormTrigger } from "react-hook-form";

type props = {
  provinceCode: string;
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

export default function District({
  provinceCode,
  setValue,
  errors,
  trigger,
}: props) {
  const [districtData, setDistrictData] = useState("");

  const { province: provinceSelected } = useDistricts(
    provinceCode + "?depth=2",
  );

  function handleChangeProvince(event: ChangeEvent<HTMLSelectElement>) {
    const provinceSelected = event.target.value;
    setDistrictData(provinceSelected);
    setValue(`district`, event.target.options[event.target.selectedIndex].text);
    trigger("district");
  }

  useEffect(() => {
    setDistrictData("");
  }, [provinceCode]);

  return (
    <>
      <div className="mt-[25px]">
        <span className="clear-right mb-[20px]">
          <label
            className="block pb-[10px] font-quicksand text-[13px] font-semibold leading-[18px] tracking-[0.02em] text-primary"
            htmlFor="note"
          >
            Quận/ Huyện
          </label>

          <select
            className="relative h-auto w-full rounded-[3px] border border-solid border-input_border_color bg-form_color py-[8px] pl-[9px] pr-[28px] text-[13px] font-medium leading-[16px] tracking-[0.01em] text-primary outline-none"
            value={districtData}
            onChange={handleChangeProvince}
          >
            <option value="" hidden disabled>
              Chọn quận/ huyện
            </option>
            {provinceSelected &&
              provinceSelected.districts &&
              provinceSelected.districts.map((district) => {
                return (
                  <option key={district.code} value={district.code}>
                    {district.name}
                  </option>
                );
              })}
          </select>

          {errors && errors.district?.message && (
            <span className="ml-[5px] mt-[5px] text-[13px] leading-[18px] text-red-500">
              {errors.district?.message}
            </span>
          )}
        </span>
      </div>

      <Wards
        districtCode={districtData}
        setValue={setValue}
        errors={errors}
        trigger={trigger}
      />
    </>
  );
}
