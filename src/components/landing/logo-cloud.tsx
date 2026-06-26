import * as React from "react";
import { cn } from "../../lib/utils";

export interface LogoCloudProps {
  title?: string;
  logos: { src: string; alt: string; href?: string }[];
  className?: string;
}

/**
 * LogoCloud — Row of company/client logos for social proof.
 * Use case: Landing pages, marketing sites, SaaS
 */
export function LogoCloud({ title = "Trusted by industry leaders", logos, className }: LogoCloudProps) {
  return (
    <section className={cn("py-16", className)}>
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-medium text-muted-foreground">
          {title}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-50">
          {logos.map((logo, idx) => (
            logo.href ? (
              <a key={idx} href={logo.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 grayscale hover:grayscale-0 transition-all"
                />
              </a>
            ) : (
              <img
                key={idx}
                src={logo.src}
                alt={logo.alt}
                className="h-8 grayscale"
              />
            )
          ))}
        </div>
      </div>
    </section>
  );
}
