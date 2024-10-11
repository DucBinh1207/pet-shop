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

const buttonVariants = cva(
  "inline-block outline-none border-solid border-[2px] cursor-pointer rounded-[25px] text-center uppercase hover_animate ",
  {
    variants: {
      size: {
        xsm: "px-[25px] py-[15px]",

        sm: "px-[28px] py-[6px] text-[11px] leading-[14px] font-bold tracking-wider",

        md: "px-[30px] py-[8px] text-[13px] leading-[16px] font-bold tracking-wider",

        lg: "px-[34px] py-[15.5px] text-[12px] leading-[15px] font-bold tracking-[0.03em]",

        circle_xsm: "p-[3px] text-[7px] leading-[1]",

        circle_sm: "p-[7px] text-[11px] leading-[1]",

        circle_md: "p-[11px] text-[16px] leading-[1]",

        circle_lg: "p-[12px]",

        circle_xlg: "p-[15px] text-[21px] leading-[1]",

        circle_xxl: "p-[33px]",

        none: "p-0",
      },
      variant: {
        primary:
          "bg-white text-primary border-primary hover:bg-primary hover:text-white",

        secondary:
          "bg-primary text-white border-primary hover:bg-white hover:text-primary",

        tertiary:
          "bg-white text-primary border-white hover:bg-primary hover:border-primary hover:text-white",

        discovery:
          "bg-dark_orange_color text-white border-dark_orange_color hover:bg-white hover:text-dark_orange_color",

        none: "bg-transparent border-transparent text-black hover:opacity-[0.85]",

        icon: "text-primary hover:text-secondary border-none",
      },
    },

    defaultVariants: {
      size: "md",
      variant: "primary",
    },
  },
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size,
      variant,
      children,
      startIcon: startIconProp,
      endIcon: endIconProp,
      className: classProps,
      onClick: onClickProps,
      ...rest
    },
    ref,
  ) => {
    const classVariants = useMemo(() => {
      return buttonVariants({
        size,
        variant,
      });
    }, [size, variant]);

    let className = classVariants;

    // If classProps exists add it to className
    if (classProps) {
      className += " " + classProps;
    }

    const startIcon = startIconProp && <span> {startIconProp} </span>;
    const endIcon = endIconProp && <span> {endIconProp} </span>;
    const onClick = onClickProps && onClickProps;

    return (
      <button className={className} ref={ref} {...rest} onClick={onClick}>
        {startIcon}
        {children}
        {endIcon}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
