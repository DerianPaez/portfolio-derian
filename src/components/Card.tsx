import React, { ElementType } from "react";

type CardProps<T extends ElementType> = {
  as?: T;
  className?: string;
  hover?: boolean;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export const Card = <T extends ElementType = "div">({
  as,
  className = "",
  hover = false,
  children,
  ...props
}: CardProps<T>) => {
  const Component = as || "div";

  return (
    <Component
      className={`bg-surface border border-border-theme rounded-xl transition-all duration-300 group ${
        hover
          ? "hover:border-accent/40 hover:bg-linear-to-br from-accent/5 to-accent/5 transition-opacity group-hover:opacity-50"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
