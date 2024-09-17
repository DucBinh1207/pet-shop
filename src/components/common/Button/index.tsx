"use client";

import { cva, VariantProps } from "class-variance-authority";
import React, { ComponentProps, forwardRef, ReactNode, useMemo } from "react";

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
      sm: "px-[28px] py-[6px] text-[11px] leading-[14px] font-bold tracking-wider",

      md: "px-[30px] py-[8px] text-[13px] leading-[16px] font-bold tracking-wider",

      lg: "px-[32px] py-[10px] text-[15px] leading-[18px] font-bold tracking-wider",

      cart: "p-[11px] text-[16px] leading-[1]",

      search: "px-[15px] py-[0px] text-[16px] leading-[0px] tracking-[0.025em]",
    },
    variant: {
      primary:
        "bg-white text-primary border-primary hover:bg-primary hover:text-white",

      secondary:
        "bg-primary text-white border-primary hover:bg-white hover:text-primary",

      Tertiary:
        "bg-white text-primary border-white hover:bg-primary hover:border-primary hover:text-white",

      Discovery:
        "bg-discover_color text-white border-discover_color hover:bg-white hover:text-discover_color",
    },
  },

  defaultVariants: {
    size: "md",
    variant: "primary",
  },
});

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size,
      variant,
      startIcon: startIconProp,
      endIcon: endIconProp,
      className,
      children: childrenProp,
      ...rest
    },
    ref,
  ) => {
    let btnClassName =
      "inline-block outline-none border-solid border-[2px] cursor-pointer rounded-[25px] text-center uppercase ";

    const classVariants = useMemo(() => {
      return buttonVariants({
        size,
        variant,
      });
    }, [size, variant]);

    (size || variant) && (btnClassName += ` ${classVariants}`);
    className && (btnClassName += ` ${className}`);
    const startIcon = startIconProp || "";
    const children = childrenProp || "";
    const endIcon = endIconProp || "";

    return (
      <button className={btnClassName} ref={ref} {...rest}>
        {startIcon}
        {children}
        {endIcon}
      </button>
    );
  },
);

Button.displayName = "Button";


export default Button;
