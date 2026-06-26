"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface LandingNavbarProps {
  logo?: React.ReactNode;
  links: NavLink[];
  cta?: { label: string; href: string };
  className?: string;
}

/**
 * LandingNavbar — Responsive navigation bar with mobile menu.
 * Use case: Landing pages, marketing sites, public-facing pages
 */
export function LandingNavbar({ logo, links, cta, className }: LandingNavbarProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <nav className={cn("sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", className)}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          {logo || (
            <Link href="/" className="text-xl font-bold">
              Logo
            </Link>
          )}
          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground",
                  pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {cta && (
            <Button className="hidden md:inline-flex" size="sm" asChild>
              <a href={cta.href}>{cta.label}</a>
            </Button>
          )}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-md p-2 md:hidden hover:bg-muted"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t md:hidden">
          <div className="container mx-auto space-y-1 px-4 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            {cta && (
              <Button className="mt-2 w-full" size="sm" asChild>
                <a href={cta.href} onClick={() => setMobileOpen(false)}>
                  {cta.label}
                </a>
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
