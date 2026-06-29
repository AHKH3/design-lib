"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "../../lib/utils";

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  /** Current progress value (0–100). */
  value?: number;
  /** Visual variant. */
  variant?: "default" | "success" | "warning";
  /** Show the percentage label inside or beside the bar. */
  showLabel?: boolean;
  /** Size preset. */
  size?: "sm" | "default" | "lg";
}

/**
 * Progress — Accessible progress bar built on Radix Progress primitive.
 * Use case: file uploads, multi-step forms, loading states, skill meters.
 */
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(
  (
    {
      className,
      value = 0,
      variant = "default",
      showLabel = false,
      size = "default",
      ...props
    },
    ref,
  ) => {
    const clampedValue = Math.min(100, Math.max(0, value));
    const indicatorColor = {
      default: "bg-primary",
      success: "bg-green-500",
      warning: "bg-yellow-500",
    }[variant];

    return (
      <div className={cn("flex items-center gap-2", className)}>
        <ProgressPrimitive.Root
          ref={ref}
          className={cn(
            "relative overflow-hidden rounded-full bg-secondary",
            size === "sm" && "h-1.5",
            size === "default" && "h-2.5",
            size === "lg" && "h-4",
          )}
          value={clampedValue}
          {...props}
        >
          <ProgressPrimitive.Indicator
            className={cn(
              "h-full w-full flex-1 rounded-full transition-all duration-300 ease-in-out",
              indicatorColor,
            )}
            style={{ transform: `translateX(-${100 - clampedValue}%)` }}
          />
        </ProgressPrimitive.Root>
        {showLabel && (
          <span className="min-w-[3ch] text-sm tabular-nums text-muted-foreground">
            {Math.round(clampedValue)}%
          </span>
        )}
      </div>
    );
  },
);
Progress.displayName = "Progress";

export { Progress };
