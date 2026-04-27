import * as React from "react"

import { cn } from "@/lib/utils"

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

function Input({ className, type, startIcon, endIcon, ...props }: InputProps): React.JSX.Element {
  return (
    <div className="relative w-full">
      {startIcon && (
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-subtle flex items-center">
          {startIcon}
        </span>
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(
          "h-11 w-full min-w-0 rounded-lg border border-line bg-surface2 py-2 text-md text-base placeholder:text-subtle transition-colors outline-none",
          "focus:border-primary focus:shadow-input-focus",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40",
          "aria-invalid:border-danger",
          startIcon ? "pl-9" : "pl-3",
          endIcon ? "pr-9" : "pr-3",
          className
        )}
        {...props}
      />
      {endIcon && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-subtle flex items-center">
          {endIcon}
        </span>
      )}
    </div>
  )
}

export { Input }
