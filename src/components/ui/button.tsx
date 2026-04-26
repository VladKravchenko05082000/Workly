import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button cursor-pointer font-dm inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-transparent text-md whitespace-nowrap transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-primary/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white text-xl font-bold tracking-md shadow-accent-glow hover:shadow-accent-glow-lg",
        secondary:
          "bg-surface2 border-line text-base font-dm font-medium rounded-xl hover:bg-surface3",
        icon: "bg-transparent border-transparent text-faint hover:bg-surface2",
        "icon-danger":
          "bg-transparent border-transparent text-faint hover:bg-surface2 hover:text-danger",
        logout:
          "bg-transparent border-line text-base font-dm hover:border-danger hover:text-danger",
        fab: "bg-primary text-white rounded-pill shadow-accent-glow hover:shadow-accent-glow-lg size-[52px]",
        add: "bg-transparent border-dashed border-primary/25 text-soft font-dm hover:border-primary/40",
        paginationButton:
          "w-page-btn h-page-btn rounded-md border-transparent bg-surface text-faint hover:bg-surface2 data-[state=active]:bg-primary data-[state=active]:text-white",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-9 px-3 text-sm",
        lg: "h-11 p-3.5",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({
  className,
  variant = "primary",
  size = "default",
  asChild = false,
  ...props
}: ButtonProps): React.JSX.Element {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
