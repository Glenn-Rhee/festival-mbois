import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:cursor-pointer focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-white text-[#111B26] hover:bg-white/90",
        primary: "bg-[#D0547F] text-white hover:bg-[#b04068]",
        "primary-gradient":
          "bg-linear-to-tr from-[#AA55A8] via-[#E388CC] to-[#EA5EA7] text-white hover:opacity-90",
        outline:
          "border border-[#FFBBEC] bg-transparent text-[#FFBBEC] hover:bg-white/10",
        "primary-outline":
          "border border-[#D0547F] bg-transparent text-[#FFB6E8] hover:bg-[#D0547F]/10",
        secondary: "bg-white/10 text-white hover:bg-white/20",
        ghost: "hover:bg-white/10 text-white",
        link: "text-white underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-7 py-4.5",
        sm: "h-9 rounded-xl px-4",
        lg: "h-12 rounded-xl px-7 py-4.5",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // If asChild is needed later, we can use Radix Slot. For now, simple fallback.
    const Comp = asChild ? "span" : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
