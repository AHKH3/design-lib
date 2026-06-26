import * as React from "react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";

export interface CTASectionProps {
  title: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: "default" | "branded" | "simple";
  className?: string;
}

/**
 * CTASection — Call to action section, encourages conversions.
 * Use case: Landing pages, marketing sites, end-of-page conversion
 */
export function CTASection({
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = "default",
  className,
}: CTASectionProps) {
  return (
    <section
      className={cn(
        "py-20",
        variant === "branded" && "bg-primary text-primary-foreground",
        variant === "default" && "bg-muted/50",
        variant === "simple" && "border-t",
        className
      )}
    >
      <div
        className={cn(
          "container mx-auto px-4 text-center",
          variant === "simple" && "flex items-center justify-between max-w-5xl text-left"
        )}
      >
        <div className={variant === "simple" ? "flex-1" : "mx-auto max-w-2xl"}>
          <h2
            className={cn(
              "text-3xl font-bold tracking-tight sm:text-4xl",
              variant === "simple" && "text-2xl sm:text-3xl"
            )}
          >
            {title}
          </h2>
          {description && (
            <p
              className={cn(
                "mt-4 text-lg",
                variant === "branded" ? "text-primary-foreground/80" : "text-muted-foreground"
              )}
            >
              {description}
            </p>
          )}
          <div className={cn("mt-8 flex flex-wrap gap-4", variant !== "simple" && "justify-center")}>
            {primaryCta && (
              <Button
                size="lg"
                variant={variant === "branded" ? "secondary" : "default"}
                asChild
              >
                <a href={primaryCta.href}>{primaryCta.label}</a>
              </Button>
            )}
            {secondaryCta && (
              <Button
                size="lg"
                variant={variant === "branded" ? "outline" : "outline"}
                className={variant === "branded" ? "border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" : ""}
                asChild
              >
                <a href={secondaryCta.href}>{secondaryCta.label}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
