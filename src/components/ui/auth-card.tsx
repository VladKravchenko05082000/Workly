import * as React from "react"

import { cn } from "@/lib/utils"

interface AuthCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

function AuthCard({ className, children, ...props }: AuthCardProps): React.JSX.Element {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-auth-page">
      <div
        data-slot="auth-card"
        className={cn(
          "relative bg-surface border border-line rounded-3xl w-auth-card p-10 shadow-auth-card",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  )
}

export { AuthCard }
