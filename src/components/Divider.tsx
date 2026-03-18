import React from "react";

export const Divider = ({ title }: { title: string }) => (
  <div className="flex items-center justify-center my-16 sm:my-24 relative w-full">
    <div className="absolute inset-x-0 h-px bg-border-theme"></div>
    <span className="relative bg-background px-4 sm:px-6 text-xs md:text-sm font-bold tracking-[0.2em] text-accent uppercase">
      {title}
    </span>
  </div>
);
