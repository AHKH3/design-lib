import * as React from "react";
import { cn } from "../../lib/utils";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  trend?: { value: number; positive: boolean };
  variant?: "default" | "primary" | "success" | "warning" | "destructive";
  loading?: boolean;
  className?: string;
  onClick?: () => void;
}

const variantStyles = {
  default: "bg-card",
  primary: "bg-primary/5 border-primary/20",
  success: "bg-success/5 border-success/20",
  warning: "bg-warning/5 border-warning/20",
  destructive: "bg-destructive/5 border-destructive/20",
};

const variantIconStyles = {
  default: "text-primary",
  primary: "text-primary",
  success: "text-success",
  warning: "text-warning",
  destructive: "text-destructive",
};

/**
 * StatCard — Display a single metric/stat with optional trend indicator.
 * Use case: Admin dashboards, KPI overview, analytics pages
 */
export function StatCard({
  title,
  value,
  description,
  icon,
  trend,
  variant = "default",
  loading = false,
  className,
  onClick,
}: StatCardProps) {
  if (loading) {
    return (
      <Card className={cn("p-6", className)}>
        <div className="space-y-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-8 w-16" />
          {description && <Skeleton className="h-3 w-32" />}
        </div>
      </Card>
    );
  }

  return (
    <Card
      className={cn(
        "cursor-pointer transition-all hover:shadow-md",
        variantStyles[variant],
        className
      )}
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold tracking-tight">{value}</p>
            {description && (
              <p className="text-xs text-muted-foreground">{description}</p>
            )}
          </div>
          {icon && (
            <div className={cn("rounded-lg p-2", variantIconStyles[variant])}>
              {icon}
            </div>
          )}
        </div>
        {trend && (
          <div className="mt-4 flex items-center gap-1 text-sm">
            <span
              className={cn(
                "font-medium",
                trend.positive ? "text-success" : "text-destructive"
              )}
            >
              {trend.positive ? "+" : ""}
              {trend.value}%
            </span>
            <span className="text-muted-foreground">vs last month</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
