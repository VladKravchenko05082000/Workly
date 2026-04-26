import * as React from "react"

import { cn } from "@/lib/utils"

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

function Input({ className, type, ...props }: InputProps): React.JSX.Element {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-11 w-full min-w-0 rounded-lg border border-line bg-surface2 px-3 py-2 text-md text-base placeholder:text-subtle transition-colors outline-none",
        "focus:border-primary focus:shadow-input-focus",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40",
        "aria-invalid:border-danger",
        className
      )}
      {...props}
    />
  )
}

export { Input }
