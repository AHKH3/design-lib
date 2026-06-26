"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface AdminLayoutProps {
  sidebar: React.ReactNode;
  header?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

/**
 * AdminLayout — Full admin dashboard layout with sidebar + header + main content area.
 * Use case: Admin panels, dashboards, back-office tools
 */
export function AdminLayout({ sidebar, header, children, className }: AdminLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

  return (
    <div className={cn("flex min-h-screen bg-background", className)}>
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-30 flex flex-col border-r bg-sidebar transition-all duration-300",
          sidebarCollapsed ? "w-16" : "w-64"
        )}
      >
        <div className="flex h-14 items-center justify-between border-b px-4">
          {!sidebarCollapsed && (
            <span className="text-lg font-bold text-sidebar-foreground">Logo</span>
          )}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="rounded-md p-1.5 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={sidebarCollapsed ? "M13 5l7 7-7 7M5 5l7 7-7 7" : "M11 19l-7-7 7-7m8 14l-7-7 7-7"}
              />
            </svg>
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto p-2">
          {sidebar}
        </nav>
      </aside>

      <div className={cn("flex flex-1 flex-col transition-all duration-300", sidebarCollapsed ? "ml-16" : "ml-64")}>
        {header && (
          <header className="sticky top-0 z-20 flex h-14 items-center gap-4 border-b bg-background px-6">
            {header}
          </header>
        )}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
