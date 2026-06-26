"use client";

import * as React from "react";
import { cn } from "../../lib/utils";
import { Input } from "../ui/input";
import { Search, X } from "lucide-react";

export interface SearchWithResultsProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onClear?: () => void;
  children?: React.ReactNode;
  className?: string;
}

/**
 * SearchWithResults — Search input with results container below.
 * Use case: Admin search, list filtering, command palettes
 */
export function SearchWithResults({
  value,
  onChange,
  placeholder = "Search...",
  onClear,
  children,
  className,
}: SearchWithResultsProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="pl-10 pr-10"
        />
        {value && (
          <button
            onClick={onClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      {children && (
        <div className="rounded-lg border bg-card">
          {children}
        </div>
      )}
    </div>
  );
}
