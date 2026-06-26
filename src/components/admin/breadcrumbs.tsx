import * as React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "../../lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  showHome?: boolean;
}

/**
 * Breadcrumbs — Navigation breadcrumb trail with home icon.
 * Use case: Admin pages, documentation, multi-level navigation
 */
export function Breadcrumbs({ items, className, showHome = true }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center gap-1 text-sm text-muted-foreground", className)}>
      {showHome && (
        <>
          <Link href="/" className="hover:text-foreground transition-colors">
            <Home className="h-4 w-4" />
          </Link>
          <ChevronRight className="h-4 w-4" />
        </>
      )}
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <React.Fragment key={item.label}>
            {isLast ? (
              <span className="font-medium text-foreground">{item.label}</span>
            ) : item.href ? (
              <Link href={item.href} className="hover:text-foreground transition-colors">
                {item.label}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
            {!isLast && <ChevronRight className="h-4 w-4" />}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
