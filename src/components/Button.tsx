import React, { ElementType } from "react";

type ButtonProps<T extends ElementType> = {
  as?: T;
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export const Button = <T extends ElementType = "button">({
  as,
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps<T>) => {
  const Component = as || "button";

  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm sm:text-base font-bold transition-colors cursor-pointer";

  const variants = {
    primary: "bg-accent text-background hover:bg-accent/80",
    secondary:
      "bg-surface border border-border-theme text-foreground hover:border-accent/40 hover:bg-linear-to-br from-accent/5 to-accent/5 transition-opacity group-hover:opacity-50",
  };

  return (
    <Component
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
