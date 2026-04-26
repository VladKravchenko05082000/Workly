import * as React from "react"

import { cn } from "@/lib/utils"

type CardProps = React.HTMLAttributes<HTMLDivElement>
type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>
type CardTitleProps = React.HTMLAttributes<HTMLDivElement>
type CardDescriptionProps = React.HTMLAttributes<HTMLDivElement>
type CardActionProps = React.HTMLAttributes<HTMLDivElement>
type CardContentProps = React.HTMLAttributes<HTMLDivElement>
type CardFooterProps = React.HTMLAttributes<HTMLDivElement>
type TodoItemProps = React.HTMLAttributes<HTMLDivElement>
type TodoColumnProps = React.HTMLAttributes<HTMLDivElement>

/* ── Note Card ───────────────────────────────────────────────── */

function Card({ className, ...props }: CardProps): React.JSX.Element {
  return (
    <div
      data-slot="card"
      className={cn(
        "flex flex-col gap-3 rounded-2xl border border-line bg-surface p-4",
        "transition-all duration-200 hover:-translate-y-px hover:border-l-primary",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: CardHeaderProps): React.JSX.Element {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-1", className)}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: CardTitleProps): React.JSX.Element {
  return (
    <div
      data-slot="card-title"
      className={cn("text-md font-medium text-base leading-snug", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: CardDescriptionProps): React.JSX.Element {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-subtle", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: CardActionProps): React.JSX.Element {
  return (
    <div
      data-slot="card-action"
      className={cn("ml-auto shrink-0", className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: CardContentProps): React.JSX.Element {
  return (
    <div
      data-slot="card-content"
      className={cn("text-sm text-faint", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: CardFooterProps): React.JSX.Element {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center gap-2 border-t border-line pt-3 text-xs text-subtle", className)}
      {...props}
    />
  )
}

/* ── Todo Item Card ──────────────────────────────────────────── */

function TodoItem({ className, ...props }: TodoItemProps): React.JSX.Element {
  return (
    <div
      data-slot="todo-item"
      className={cn(
        "rounded-lg border border-line bg-surface2 p-3",
        "transition-colors duration-200 hover:border-primary/30",
        className
      )}
      {...props}
    />
  )
}

/* ── Todo Column ─────────────────────────────────────────────── */

function TodoColumn({ className, ...props }: TodoColumnProps): React.JSX.Element {
  return (
    <div
      data-slot="todo-column"
      className={cn(
        "flex w-todo-col flex-col gap-2 rounded-2xl border border-line bg-surface p-3",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  TodoItem,
  TodoColumn,
}
