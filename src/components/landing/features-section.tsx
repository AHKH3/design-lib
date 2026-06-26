import * as React from "react";
import { cn } from "../../lib/utils";

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FeaturesSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  variant?: "grid" | "list" | "cards";
  className?: string;
}

const gridCols = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
};

/**
 * FeaturesSection — Showcase features/products with icons.
 * Use case: Landing pages, marketing, SaaS product pages
 */
export function FeaturesSection({
  title,
  subtitle,
  description,
  features,
  columns = 3,
  variant = "grid",
  className,
}: FeaturesSectionProps) {
  return (
    <section className={cn("py-20", className)}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          {subtitle && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              {subtitle}
            </p>
          )}
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-lg text-muted-foreground">{description}</p>
          )}
        </div>

        {variant === "grid" && (
          <div className={cn("mt-16 grid gap-8 sm:grid-cols-2", gridCols[columns])}>
            {features.map((feature, idx) => (
              <div key={idx} className="group">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        )}

        {variant === "cards" && (
          <div className={cn("mt-16 grid gap-6 sm:grid-cols-2", gridCols[columns])}>
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="rounded-xl border bg-card p-8 transition-all hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        )}

        {variant === "list" && (
          <div className="mt-16 space-y-12">
            {features.map((feature, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-1 text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
