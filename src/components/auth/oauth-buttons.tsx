"use client";

import * as React from "react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";

export interface OAuthButtonsProps {
  providers: { name: string; icon?: React.ReactNode; onClick?: () => void }[];
  note?: string;
  className?: string;
}

/**
 * OAuthButtons — Row of OAuth/social login buttons.
 * Use case: Auth pages, login/register with Google, GitHub, etc.
 */
export function OAuthButtons({ providers, note, className }: OAuthButtonsProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground">
            {note || "Or continue with"}
          </span>
        </div>
      </div>
      <div className="grid gap-2">
        {providers.map((provider) => (
          <Button
            key={provider.name}
            variant="outline"
            className="w-full"
            onClick={provider.onClick}
          >
            {provider.icon}
            {provider.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
