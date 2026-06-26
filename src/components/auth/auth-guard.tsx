"use client";

import * as React from "react";
import { redirect } from "next/navigation";
import { cn } from "../../lib/utils";

export interface AuthGuardProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
  fallback?: React.ReactNode;
  redirectTo?: string;
  loading?: boolean;
  loader?: React.ReactNode;
}

/**
 * AuthGuard — Wrapper that redirects unauthenticated users.
 * Use case: Protected routes, admin-only sections
 */
export function AuthGuard({
  isAuthenticated,
  children,
  fallback,
  redirectTo = "/login",
  loading,
  loader,
}: AuthGuardProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || loading) {
    return loader ? <>{loader}</> : null;
  }

  if (!isAuthenticated) {
    if (redirectTo) {
      redirect(redirectTo);
    }
    return fallback ? <>{fallback}</> : null;
  }

  return <>{children}</>;
}
