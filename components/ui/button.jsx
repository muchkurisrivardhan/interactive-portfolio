"use client";

import React from "react";
import clsx from "clsx";

const baseStyles =
  "inline-flex items-center justify-center rounded-md border border-transparent text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60";

const variantStyles = {
  default: "bg-[#1f6feb] text-white hover:bg-[#1c5fd0] focus-visible:ring-[#2686ff]",
  outline:
    "bg-transparent border-[#1d2330] text-[#c9d1d9] hover:bg-[#1d2330]/60 focus-visible:ring-[#2686ff]",
  ghost: "bg-transparent text-[#c9d1d9] hover:bg-[#1d2330]/60 focus-visible:ring-[#2686ff]",
};

const sizeStyles = {
  md: "h-10 px-4 py-2",
  icon: "h-10 w-10",
};

const Button = React.forwardRef(function Button(
  { className, variant = "default", size = "md", asChild = false, children, ...props },
  ref
) {
  const classes = clsx(baseStyles, variantStyles[variant] ?? variantStyles.default, sizeStyles[size] ?? sizeStyles.md, className);

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props,
      className: clsx(classes, children.props.className),
      ref,
    });
  }

  return (
    <button ref={ref} className={classes} {...props}>
      {children}
    </button>
  );
});

export { Button };
