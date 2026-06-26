"use client";

import * as React from "react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems?: number;
  pageSize?: number;
  onPageChange: (page: number) => void;
  onPageSizeChange?: (size: number) => void;
  pageSizeOptions?: number[];
  className?: string;
}

/**
 * Pagination — Full-featured pagination with page size selector.
 * Use case: Admin lists, data tables, search results
 */
export function Pagination({
  currentPage,
  totalPages,
  totalItems,
  pageSize = 10,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [10, 20, 50, 100],
  className,
}: PaginationProps) {
  const pages = React.useMemo(() => {
    const items: (number | "...")[] = [];
    const delta = 1;
    const rangeStart = Math.max(2, currentPage - delta);
    const rangeEnd = Math.min(totalPages - 1, currentPage + delta);

    items.push(1);
    if (rangeStart > 2) items.push("...");
    for (let i = rangeStart; i <= rangeEnd; i++) items.push(i);
    if (rangeEnd < totalPages - 1) items.push("...");
    if (totalPages > 1) items.push(totalPages);

    return items;
  }, [currentPage, totalPages]);

  return (
    <div className={cn("flex flex-col items-center gap-4 sm:flex-row sm:justify-between", className)}>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        {totalItems !== undefined && (
          <span>
            {totalItems} total
            {onPageSizeChange && (
              <>
                {" · "}
                <Select
                  value={String(pageSize)}
                  onValueChange={(v) => onPageSizeChange?.(Number(v))}
                >
                  <SelectTrigger className="h-8 w-16 border-0 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {pageSizeOptions.map((opt) => (
                      <SelectItem key={opt} value={String(opt)}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {" per page"}
              </>
            )}
          </span>
        )}
      </div>

      <div className="flex items-center gap-1">
        <Button
          variant="outline"
          size="icon-sm"
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
        >
          <ChevronsLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon-sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {pages.map((page, idx) =>
          page === "..." ? (
            <span key={`ellipsis-${idx}`} className="px-2 text-muted-foreground">
              ...
            </span>
          ) : (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="icon-sm"
              onClick={() => onPageChange(page)}
              className="min-w-[2rem]"
            >
              {page}
            </Button>
          )
        )}

        <Button
          variant="outline"
          size="icon-sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon-sm"
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          <ChevronsRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
