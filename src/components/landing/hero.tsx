import * as React from "react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";

export interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image?: string;
  imageAlt?: string;
  variant?: "center" | "left" | "split";
  className?: string;
}

/**
 * Hero — Landing page hero section with multiple layout variants.
 * Use case: Landing pages, marketing sites, SaaS home pages
 */
export function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  image,
  imageAlt = "",
  variant = "center",
  className,
}: HeroProps) {
  const headingSize = variant === "split"
    ? "text-4xl sm:text-5xl lg:text-6xl"
    : "text-4xl sm:text-5xl lg:text-6xl";

  if (variant === "split") {
    return (
      <section className={cn("relative overflow-hidden py-20 lg:py-28", className)}>
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="max-w-xl">
              {subtitle && (
                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                  {subtitle}
                </p>
              )}
              <h1 className={cn("font-bold tracking-tight", headingSize)}>
                {title}
              </h1>
              {description && (
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  {description}
                </p>
              )}
              <div className="mt-8 flex flex-wrap gap-4">
                {primaryCta && (
                  <Button size="lg" asChild>
                    <a href={primaryCta.href}>{primaryCta.label}</a>
                  </Button>
                )}
                {secondaryCta && (
                  <Button variant="outline" size="lg" asChild>
                    <a href={secondaryCta.href}>{secondaryCta.label}</a>
                  </Button>
                )}
              </div>
            </div>
            {image && (
              <div className="relative">
                <img
                  src={image}
                  alt={imageAlt}
                  className="rounded-xl shadow-2xl"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={cn("relative overflow-hidden py-20 lg:py-32", className)}>
      <div className="container mx-auto px-4 text-center">
        {subtitle && (
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            {subtitle}
          </p>
        )}
        <h1 className={cn("mx-auto max-w-4xl font-bold tracking-tight", headingSize)}>
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {primaryCta && (
            <Button size="lg" asChild>
              <a href={primaryCta.href}>{primaryCta.label}</a>
            </Button>
          )}
          {secondaryCta && (
            <Button variant="outline" size="lg" asChild>
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
        </div>
        {image && (
          <div className="mt-16">
            <img
              src={image}
              alt={imageAlt}
              className="mx-auto rounded-xl shadow-2xl"
            />
          </div>
        )}
      </div>
    </section>
  );
}
