import React, { ElementType } from "react";

type Props = {
  icon: ElementType;
  className?: string;
  href: string;
  target?: string;
};

export const IconButton: React.FC<Props> = ({
  icon: Icon,
  className = "",
  href,
  target = "_blank",
  ...props
}: Props) => {
  return (
    <a
      className={`w-11 h-11 rounded-xl bg-surface border border-border-theme hover:border-accent/40 flex items-center justify-center text-muted hover:text-accent hover:bg-surface-hover transition-colors ${className}`}
      href={href}
      target={target}
      {...props}
    >
      <Icon className="w-5 h-5" />
    </a>
  );
};
