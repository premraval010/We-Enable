import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 focus-visible:outline-2 disabled:pointer-events-none disabled:opacity-60 whitespace-nowrap",
  {
    variants: {
      variant: {
        // Ink pill that turns Coral on hover.
        primary: "bg-ink text-paper hover:bg-coral hover:text-ink",
        // Ink outline pill that fills Ink on hover.
        secondary:
          "border-[1.5px] border-ink text-ink hover:bg-ink hover:text-paper",
        // On dark backgrounds: Paper pill → Coral on hover.
        "primary-dark": "bg-paper text-ink hover:bg-coral hover:text-ink",
        "secondary-dark":
          "border-[1.5px] border-paper text-paper hover:bg-paper hover:text-ink",
        ghost: "text-ink hover:bg-surface",
        link: "text-teal-text underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-10 px-5 text-sm",
        md: "h-12 px-7 text-[15px]",
        lg: "h-14 px-9 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { buttonVariants };
