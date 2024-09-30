"use client";

import { cva } from "class-variance-authority";
import { ComponentProps, useMemo } from "react";

type InputProps = ComponentProps<"input"> & {
  inputSize?: "small" | "medium" | "large" | "quantity";
  variant?: "primary" | "secondary" | "third" | "quantity";
  trimOnBlur?: boolean;
};

const inputVariants = cva(
  "font-medium border-solid border rounded-[3px] tracking-[0.01em] h-auto",
  {
    variants: {
      inputSize: {
        small: "px-[10px] py-[8px] text-[11px] leading-[14px]",
        medium: "px-[12px] py-[9px] text-[13px] leading-[16px]",
        large: "px-[14px] py-[10px] text-[15px] leading-[18px]",
        quantity: "w-[50px]",
      },
      variant: {
        primary: "text-primary border-input_border_color bg-background_color ",
        secondary: "bg-green-500 text-white",
        third: "bg-red-500 text-white",
        quantity:
          "text-center text-[18px] font-medium leading-[1] tracking-[0.015em] text-primary bg-white border-none outline-none appearance-none",
      },
    },
    compoundVariants: [
      // Biến thể cho trạng thái focus
      {
        variant: "primary",
        class: "focus:outline-none focus:border-primary",
      },
      {
        variant: "secondary",
        class: "focus:bg-green-600 focus:border-green-600",
      },
      {
        variant: "third",
        class: "focus:bg-red-600 focus:border-red-600",
      },
    ],
    defaultVariants: {
      inputSize: "medium",
      variant: "primary",
    },
  },
);

export default function Input({
  inputSize,
  variant,
  trimOnBlur,
  onChange: onChangeProp,
  onBlur: onBlurProp,
  ...rest
}: InputProps) {
  const className = useMemo(() => {
    return inputVariants({ inputSize, variant });
  }, [inputSize, variant]);

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    if (trimOnBlur) {
      const trimmedValue = event.target.value.trim();
      onChangeProp?.({
        ...event,
        target: {
          ...event.target,
          value: trimmedValue,
        },
      });
      onBlurProp?.(event);
    }
  };

  return <input {...rest} className={className} onBlur={handleBlur} />;
}
