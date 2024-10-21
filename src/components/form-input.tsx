import { ComponentProps } from "react";
import Input from "./common/input";

type FormInputProps = ComponentProps<"input"> & {
  error?: string;
};

export default function FormInput({ error, ...rest }: FormInputProps) {
  return (
    <>
      <Input {...rest} />
      {error && (
        <span className="ml-[5px] mt-[5px] text-[13px] leading-[18px] text-red-500">
          {error}
        </span>
      )}
    </>
  );
}
