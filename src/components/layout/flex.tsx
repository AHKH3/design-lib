import * as React from "react";
import { cn } from "../../lib/utils";

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  wrap?: boolean;
  direction?: "row" | "col" | "row-reverse" | "col-reverse";
}

const gapMap: Record<number, string> = {
  0: "gap-0", 1: "gap-1", 2: "gap-2", 3: "gap-3", 4: "gap-4",
  5: "gap-5", 6: "gap-6", 8: "gap-8", 10: "gap-10", 12: "gap-12",
};

const alignMap = {
  start: "items-start", center: "items-center", end: "items-end",
  stretch: "items-stretch", baseline: "items-baseline",
};

const justifyMap = {
  start: "justify-start", center: "justify-center", end: "justify-end",
  between: "justify-between", around: "justify-around", evenly: "justify-evenly",
};

const directionMap = {
  row: "flex-row", col: "flex-col",
  "row-reverse": "flex-row-reverse", "col-reverse": "flex-col-reverse",
};

/**
 * Flex — Inline flexbox layout primitive.
 * Use case: Toolbars, button groups, inline alignments
 */
export function Flex({
  gap = 0,
  align,
  justify,
  wrap,
  direction = "row",
  className,
  children,
  ...props
}: FlexProps) {
  return (
    <div
      className={cn(
        "flex",
        directionMap[direction],
        gapMap[gap],
        align && alignMap[align],
        justify && justifyMap[justify],
        wrap && "flex-wrap",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
