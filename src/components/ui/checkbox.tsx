"use client"

import * as React from "react"
import { Checkbox as CheckboxPrimitive } from "radix-ui"
import { CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"

type CheckboxProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>

function Checkbox({ className, ...props }: CheckboxProps): React.JSX.Element {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer relative flex w-checkbox h-checkbox shrink-0 items-center justify-center rounded-checbox border border-subtle bg-transparent transition-colors outline-none",
        "focus-visible:border-primary focus-visible:shadow-input-focus",
        "disabled:cursor-not-allowed disabled:opacity-40",
        "data-[state=checked]:border-success data-[state=checked]:bg-success",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-white [&>svg]:size-3">
        <CheckIcon strokeWidth={2.5} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
