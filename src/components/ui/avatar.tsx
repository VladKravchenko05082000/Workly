"use client"

import * as React from "react"
import { Avatar as AvatarPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

type AvatarSize = "sm" | "md" | "lg" | "xl"

interface AvatarProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  size?: AvatarSize
}

type AvatarImageProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
type AvatarFallbackProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
type AvatarBadgeProps = React.HTMLAttributes<HTMLSpanElement>
type AvatarGroupProps = React.HTMLAttributes<HTMLDivElement>

function Avatar({ className, size = "md", ...props }: AvatarProps): React.JSX.Element {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(
        "group/avatar relative flex shrink-0 select-none rounded-pill overflow-hidden",
        "data-[size=sm]:w-avatar-sm data-[size=sm]:h-avatar-sm",
        "data-[size=md]:w-avatar-md data-[size=md]:h-avatar-md",
        "data-[size=lg]:w-avatar-lg data-[size=lg]:h-avatar-lg",
        "data-[size=xl]:w-avatar-xl data-[size=xl]:h-avatar-xl",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({ className, ...props }: AvatarImageProps): React.JSX.Element {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full object-cover", className)}
      {...props}
    />
  )
}

function AvatarFallback({ className, ...props }: AvatarFallbackProps): React.JSX.Element {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center",
        "bg-linear-to-br from-primary to-violet",
        "font-syne font-bold text-xs text-white leading-none tracking-wide",
        className
      )}
      {...props}
    />
  )
}

function AvatarBadge({ className, ...props }: AvatarBadgeProps): React.JSX.Element {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-pill bg-success ring-2 ring-canvas select-none",
        "group-data-[size=sm]/avatar:size-2",
        "group-data-[size=md]/avatar:size-2.5",
        "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
        "group-data-[size=xl]/avatar:size-3.5 group-data-[size=xl]/avatar:[&>svg]:size-2.5",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroup({ className, ...props }: AvatarGroupProps): React.JSX.Element {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-canvas",
        className
      )}
      {...props}
    />
  )
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  AvatarBadge,
}
