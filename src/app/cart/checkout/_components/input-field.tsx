import Input from "@/components/common/input";
import { ComponentProps, forwardRef } from "react";

type InputFieldProps = ComponentProps<"input"> & {
  id: string;
  placeholder: string;
  label: string;
  error?: string;
};

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ id, placeholder, label, error, ...rest }, ref) => {
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
            inputSize="medium_full_width"
            ref={ref}
            id={id}
            placeholder={placeholder}
            {...rest}
          />
          {error && (
            <span className="ml-[5px] mt-[5px] text-[13px] leading-[18px] text-red-500">
              {error}
            </span>
          )}
        </span>
      </div>
    );
  },
);
InputField.displayName = "InputField";
export default InputField;
