"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
  sticky?: boolean;
}

/**
 * Navbar — Top navigation bar for dashboards.
 * Use case: Admin panels, authenticated app layouts
 */
export function Navbar({ left, center, right, sticky = true, className, ...props }: NavbarProps) {
  return (
    <nav
      className={cn(
        "flex h-14 items-center justify-between border-b bg-background px-6",
        sticky && "sticky top-0 z-20",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-4">{left}</div>
      {center && <div className="flex items-center gap-2">{center}</div>}
      <div className="flex items-center gap-2">{right}</div>
    </nav>
  );
}
