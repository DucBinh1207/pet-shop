import { cva } from "class-variance-authority";
import { ComponentProps, useMemo } from "react";

type ButtonProps = ComponentProps<"button"> & {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "third";
};

const buttonVariants = cva(
  " inline-block outline-none font-bold text-center uppercase text-white border-solid border-[2px]  cursor-pointer rounded-[25px] tracking-wider",
  {
    variants: {
      size: {
        small: "px-[28px] py-[6px] text-[11px] leading-[14px]",
        medium: "px-[30px] py-[8px] text-[13px] leading-[16px]",
        large: "px-[32px] py-[10px] text-[15px] leading-[18px]",
      },
      variant: {
        primary: "bg-primary text-white border-primary",
        secondary: "bg-green-500 text-white",
        third: "bg-red-500 text-white",
      },
    },
    defaultVariants: {
      size: "medium",
      variant: "primary",
    },
  },
);

export default function Button({ size, variant, ...rest }: ButtonProps) {
  const className = useMemo(() => {
    return buttonVariants({ size, variant });
  }, [size, variant]);

  return (
    <button {...rest} className={className}>
      Button
    </button>
  );
}
