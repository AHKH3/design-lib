import * as React from "react";
import { cn } from "../../lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  size?: "sm" | "md" | "lg" | "xl";
  withContainer?: boolean;
}

const sizes = {
  sm: "py-8 md:py-12",
  md: "py-12 md:py-16",
  lg: "py-16 md:py-20",
  xl: "py-20 md:py-28",
};

/**
 * Section — Page section with consistent vertical padding.
 * Use case: Any page — wraps content blocks with spacing
 */
export function Section({
  as: Comp = "section",
  size = "md",
  withContainer = true,
  className,
  children,
  ...props
}: SectionProps) {
  const content = (
    <Comp className={cn(sizes[size], className)} {...props}>
      {children}
    </Comp>
  );

  if (withContainer) {
    return <div className="container mx-auto px-4">{content}</div>;
  }

  return content;
}
