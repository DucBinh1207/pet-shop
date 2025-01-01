import useWards from "@/hooks/address/useWards";
import { ChangeEvent, useEffect, useState } from "react";
import { FieldErrors, UseFormSetValue, UseFormTrigger } from "react-hook-form";

type props = {
  districtCode: string;
  setValue: UseFormSetValue<{
    province: string;
    district: string;
    ward: string;
    street?: string | undefined;
  }>;
  errors: FieldErrors<{
    province: string;
    district: string;
    ward: string;
    street?: string | undefined;
  }>;
  trigger: UseFormTrigger<{
    province: string;
    district: string;
    ward: string;
    street?: string | undefined;
  }>;
};

export default function Wards({
  districtCode,
  setValue,
  errors,
  trigger,
}: props) {
  const [wardData, setWardData] = useState("");

  const { district: districtSelected } = useWards(districtCode + "?depth=2");

  function handleChangeWard(event: ChangeEvent<HTMLSelectElement>) {
    const wardSelected = event.target.value;
    setWardData(wardSelected);
    setValue(`ward`, event.target.options[event.target.selectedIndex].text);
    trigger("ward");
  }

  useEffect(() => {
    setWardData("");
  }, [districtCode]);

  return (
    <>
      <div className="mt-[25px]">
        <span className="clear-right mb-[20px]">
          <label
            className="block pb-[10px] font-quicksand text-[13px] font-semibold leading-[18px] tracking-[0.02em] text-primary"
            htmlFor="note"
          >
            Xã/ Phường
          </label>

          <select
            className="relative h-auto w-full rounded-[3px] border border-solid border-input_border_color bg-form_color py-[8px] pl-[9px] pr-[28px] text-[13px] font-medium leading-[16px] tracking-[0.01em] text-primary outline-none"
            value={wardData}
            onChange={handleChangeWard}
          >
            <option value="" hidden disabled>
              Chọn xã/ phường
            </option>
            {districtSelected &&
              districtSelected.wards &&
              districtSelected.wards.map((ward) => {
                return <option key={ward.name}>{ward.name}</option>;
              })}
          </select>
          {errors && errors.ward?.message && (
            <span className="ml-[5px] mt-[5px] text-[13px] leading-[18px] text-red-500">
              {errors.ward?.message}
            </span>
          )}
        </span>
      </div>
    </>
  );
}
