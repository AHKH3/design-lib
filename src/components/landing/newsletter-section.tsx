"use client";

import * as React from "react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export interface NewsletterSectionProps {
  title: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  onSubmit?: (email: string) => void;
  className?: string;
}

/**
 * NewsletterSection — Email capture form for newsletters.
 * Use case: Landing pages, marketing, blogs
 */
export function NewsletterSection({
  title,
  description,
  placeholder = "Enter your email",
  buttonText = "Subscribe",
  onSubmit,
  className,
}: NewsletterSectionProps) {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onSubmit?.(email);
      setSubmitted(true);
    }
  };

  return (
    <section className={cn("py-20", className)}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-xl rounded-2xl border bg-card p-8 text-center shadow-sm sm:p-12">
          {submitted ? (
            <div>
              <svg className="mx-auto h-12 w-12 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-4 text-xl font-bold">You&apos;re subscribed!</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Thanks for joining. We&apos;ll be in touch.
              </p>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-bold">{title}</h3>
              {description && (
                <p className="mt-2 text-sm text-muted-foreground">{description}</p>
              )}
              <form onSubmit={handleSubmit} className="mt-6 flex gap-3">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder={placeholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit">{buttonText}</Button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
