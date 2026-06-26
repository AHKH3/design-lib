import * as React from "react";
import { cn } from "../../lib/utils";
import { StatCard } from "./stat-card";

export interface KPIMetric {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  trend?: { value: number; positive: boolean };
  variant?: "default" | "primary" | "success" | "warning" | "destructive";
}

export interface KPIGridProps {
  metrics: KPIMetric[];
  columns?: 2 | 3 | 4;
  loading?: boolean;
  className?: string;
}

const gridCols = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

/**
 * KPIGrid — Grid of StatCards for dashboard overview.
 * Use case: Admin dashboard, analytics overview
 */
export function KPIGrid({ metrics, columns = 4, loading, className }: KPIGridProps) {
  return (
    <div className={cn("grid gap-4", gridCols[columns], className)}>
      {metrics.map((metric, idx) => (
        <StatCard
          key={idx}
          title={metric.title}
          value={metric.value}
          description={metric.description}
          icon={metric.icon}
          trend={metric.trend}
          variant={metric.variant}
          loading={loading}
        />
      ))}
    </div>
  );
}
