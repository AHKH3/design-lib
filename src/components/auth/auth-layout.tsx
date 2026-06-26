import * as React from "react";
import { cn } from "../../lib/utils";

export interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  footer?: React.ReactNode;
  className?: string;
}

/**
 * AuthLayout — Centered card layout for auth pages.
 * Use case: Login, register, password reset pages
 */
export function AuthLayout({ children, title, subtitle, footer, className }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4 py-12">
      <div className={cn("w-full max-w-md space-y-6", className)}>
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          {subtitle && (
            <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>

        <div className="rounded-xl border bg-card p-6 shadow-sm">
          {children}
        </div>

        {footer && (
          <p className="text-center text-sm text-muted-foreground">
            {footer}
          </p>
        )}
      </div>
    </div>
  );
}
