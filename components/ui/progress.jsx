import clsx from "clsx";

function Progress({ value = 0, className }) {
  return (
    <div className={clsx("h-2 w-full rounded-full bg-[#1d2330]", className)}>
      <div
        className="h-full rounded-full bg-[#2686ff] transition-[width]"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}

export { Progress };
