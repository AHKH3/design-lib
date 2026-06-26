import * as React from "react";
import { cn } from "../../lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const sizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[1400px]",
  full: "max-w-full",
};

/**
 * Container — Max-width content wrapper with responsive padding.
 * Use case: Any layout — base primitive for all page types
 */
export function Container({ as: Comp = "div", size = "lg", className, children, ...props }: ContainerProps) {
  return (
    <Comp className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizes[size], className)} {...props}>
      {children}
    </Comp>
  );
}
