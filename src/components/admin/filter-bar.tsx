"use client";

import * as React from "react";
import { cn } from "../../lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export interface FilterOption {
  label: string;
  value: string;
  options: { label: string; value: string }[];
}

export interface FilterBarProps {
  searchPlaceholder?: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  filters?: FilterOption[];
  onFilterChange?: (key: string, value: string) => void;
  filterValues?: Record<string, string>;
  onClear?: () => void;
  className?: string;
}

/**
 * FilterBar — Search + dropdown filters in a compact bar.
 * Use case: Admin list pages, data tables, searchable indexes
 */
export function FilterBar({
  searchPlaceholder = "Search...",
  searchValue = "",
  onSearchChange,
  filters = [],
  onFilterChange,
  filterValues = {},
  onClear,
  className,
}: FilterBarProps) {
  const hasActiveFilters = searchValue || Object.values(filterValues).some(Boolean);

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {onSearchChange && (
        <div className="w-full sm:w-64">
          <Input
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            leftIcon={
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            }
          />
        </div>
      )}

      {filters.map((filter) => (
        <div key={filter.value} className="w-full sm:w-44">
          <Select
            value={filterValues[filter.value] || ""}
            onValueChange={(value) => onFilterChange?.(filter.value, value)}
          >
            <SelectTrigger>
              <SelectValue placeholder={filter.label} />
            </SelectTrigger>
            <SelectContent>
              {filter.options.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ))}

      {hasActiveFilters && onClear && (
        <Button variant="ghost" size="sm" onClick={onClear}>
          Clear filters
        </Button>
      )}
    </div>
  );
}
