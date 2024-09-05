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

// const buttonVariants = cva(
//   "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
//   {
//     variants: {
//       variant: {
//         default: "bg-primary text-primary-foreground hover:bg-primary/90",
//         destructive:
//           "bg-destructive text-destructive-foreground hover:bg-destructive/90",
//         outline:
//           "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
//         secondary:
//           "bg-secondary text-secondary-foreground hover:bg-secondary/80",
//         ghost: "hover:bg-accent hover:text-accent-foreground",
//         link: "text-primary underline-offset-4 hover:underline",
//       },
//       size: {
//         default: "h-10 px-4 py-2",
//         sm: "h-9 rounded-md px-3",
//         lg: "h-11 rounded-md px-8",
//         icon: "h-10 w-10",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   },
// );

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
