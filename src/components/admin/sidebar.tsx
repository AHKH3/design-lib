"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../../lib/utils";

export interface SidebarItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  badge?: string | number;
  children?: SidebarItem[];
}

export interface SidebarProps {
  items: SidebarItem[];
  className?: string;
  collapsed?: boolean;
}

/**
 * Sidebar — Navigation sidebar with active state detection and badge support.
 * Use case: Admin panels, dashboard navigation
 */
export function Sidebar({ items, className, collapsed }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const renderItem = (item: SidebarItem, depth = 0) => {
    const active = isActive(item.href);

    return (
      <div key={item.href}>
        <Link
          href={item.href}
          className={cn(
            "group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
            active
              ? "bg-sidebar-accent text-sidebar-accent-foreground"
              : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            collapsed && "justify-center px-2"
          )}
          title={collapsed ? item.label : undefined}
        >
          {item.icon && (
            <span className="flex-shrink-0 h-5 w-5">{item.icon}</span>
          )}
          {!collapsed && (
            <>
              <span className="flex-1 truncate">{item.label}</span>
              {item.badge && (
                <span className="flex-shrink-0 rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold text-primary-foreground">
                  {item.badge}
                </span>
              )}
            </>
          )}
        </Link>
        {!collapsed && item.children && item.children.length > 0 && (
          <div className="ml-4 mt-1 space-y-1">
            {item.children.map((child) => renderItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className={cn("flex flex-col gap-1", className)}>
      {items.map((item) => renderItem(item))}
    </nav>
  );
}
