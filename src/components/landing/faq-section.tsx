"use client";

import * as React from "react";
import { cn } from "../../lib/utils";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  title: string;
  subtitle?: string;
  items: FAQItem[];
  className?: string;
}

/**
 * FAQSection — Expandable FAQ accordion.
 * Use case: Landing pages, SaaS, product info pages
 */
export function FAQSection({ title, subtitle, items, className }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

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
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y rounded-xl border">
          {items.map((item, idx) => (
            <div key={idx} className="group">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-muted/50"
              >
                <span className="text-base font-medium">{item.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-200",
                    openIndex === idx && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-200",
                  openIndex === idx ? "max-h-96" : "max-h-0"
                )}
              >
                <p className="px-6 pb-4 text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
