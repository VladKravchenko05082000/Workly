import { cn } from "@/lib/utils";

interface IconWrapperProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  children: React.ReactNode;
}

export default function IconWrapper({
  size = 24,
  className,
  children,
  ...props
}: IconWrapperProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      {...props}
    >
      {children}
    </svg>
  );
}
