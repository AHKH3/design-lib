import * as React from "react";
import Link from "next/link";
import { cn } from "../../lib/utils";

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface FooterProps {
  columns?: FooterColumn[];
  logo?: React.ReactNode;
  description?: string;
  socialLinks?: { icon: React.ReactNode; href: string }[];
  copyright?: string;
  className?: string;
}

/**
 * Footer — Multi-column footer with links, social, and copyright.
 * Use case: Landing pages, marketing sites, public-facing pages
 */
export function Footer({
  columns,
  logo,
  description,
  socialLinks,
  copyright = `© ${new Date().getFullYear()} All rights reserved.`,
  className,
}: FooterProps) {
  return (
    <footer className={cn("border-t bg-background", className)}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            {logo || (
              <Link href="/" className="text-xl font-bold">
                Logo
              </Link>
            )}
            {description && (
              <p className="mt-4 text-sm text-muted-foreground max-w-xs">
                {description}
              </p>
            )}
            {socialLinks && (
              <div className="mt-6 flex gap-4">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            )}
          </div>

          {columns?.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          {copyright}
        </div>
      </div>
    </footer>
  );
}
