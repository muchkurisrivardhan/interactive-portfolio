import React from "react";
import clsx from "clsx";

const Input = React.forwardRef(function Input({ className, ...props }, ref) {
  return (
    <input
      ref={ref}
      className={clsx(
        "w-full rounded-md border border-[#1d2330] bg-[#0f1113] px-3 py-2 text-sm text-[#c9d1d9] placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2686ff]",
        className
      )}
      {...props}
    />
  );
});

export { Input };
