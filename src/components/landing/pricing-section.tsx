"use client";

import * as React from "react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  badge?: string;
}

export interface PricingSectionProps {
  title: string;
  subtitle?: string;
  tiers: PricingTier[];
  interval?: "monthly" | "yearly";
  onIntervalChange?: (interval: "monthly" | "yearly") => void;
  className?: string;
}

/**
 * PricingSection — Multi-tier pricing cards with feature list.
 * Use case: SaaS landing pages, subscription products
 */
export function PricingSection({
  title,
  subtitle,
  tiers,
  interval = "monthly",
  onIntervalChange,
  className,
}: PricingSectionProps) {
  return (
    <section className={cn("py-20", className)}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
          )}

          {onIntervalChange && (
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border p-1">
              <button
                onClick={() => onIntervalChange("monthly")}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  interval === "monthly" ? "bg-primary text-primary-foreground" : "hover:text-foreground"
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => onIntervalChange("yearly")}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  interval === "yearly" ? "bg-primary text-primary-foreground" : "hover:text-foreground"
                )}
              >
                Yearly
                <span className="ml-1 text-xs opacity-80">-20%</span>
              </button>
            </div>
          )}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={cn(
                "relative flex flex-col transition-all hover:shadow-lg",
                tier.highlighted && "border-primary shadow-lg scale-105"
              )}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="default">{tier.badge}</Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <h3 className="text-xl font-bold">{tier.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-sm text-muted-foreground">/{interval}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {tier.description}
                </p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <svg className="h-4 w-4 flex-shrink-0 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={tier.highlighted ? "default" : "outline"}
                  size="lg"
                >
                  {tier.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
