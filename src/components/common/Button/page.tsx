"use client";

import { cva, VariantProps } from "class-variance-authority";
import React, { ComponentProps, ReactNode, useMemo } from "react";

interface ButtonProps
  extends Pick<
      ComponentProps<"button">,
      "children" | "className" | "disabled" | "type" | "form" | "onClick"
    >,
    VariantProps<typeof buttonVariants> {
  startIcon?: ReactNode;

  endIcon?: ReactNode;

  isActive?: boolean;

  noBorder?: boolean;
}

const buttonVariants = cva("", {
  variants: {
    size: {
      small:
        "px-[28px] py-[6px] text-[11px] leading-[14px] font-bold tracking-wider",

      medium:
        "px-[30px] py-[8px] text-[13px] leading-[16px] font-bold tracking-wider",

      large:
        "px-[32px] py-[10px] text-[15px] leading-[18px] font-bold tracking-wider",
    },
    variant: {
      primary:
        "bg-primary text-white border-primary hover:bg-white hover:text-primary",

      secondary:
        "bg-white text-primary border-primary hover:bg-primary hover:text-white",

      third:
        "bg-white text-primary border-white hover:bg-primary hover:border-primary hover:text-white",
    },
  },

  defaultVariants: {
    size: "medium",
    variant: "primary",
  },
});

export default function Button({
  size,
  variant,
  startIcon,
  endIcon,
  className,
  children,
  ...rest
}: ButtonProps) {
  let btnClassName =
    "inline-block outline-none border-solid border-[2px] cursor-pointer rounded-[25px] text-center uppercase ";

  const classVariants = useMemo(() => {
    return buttonVariants({
      size: size ?? undefined,
      variant: variant ?? undefined,
    });
  }, [size, variant]);

  (size || variant) && (btnClassName += ` ${classVariants}`);
  className && (btnClassName += ` ${className}`);

  return (
    <button className={btnClassName} {...rest}>
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
}
