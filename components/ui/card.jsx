import clsx from "clsx";

const baseCard = "rounded-xl border border-[#1d2330] bg-[#12151a] shadow-lg";

function Card({ className, ...props }) {
  return <div className={clsx(baseCard, className)} {...props} />;
}

function CardHeader({ className, ...props }) {
  return <div className={clsx("px-4 pt-4 pb-2", className)} {...props} />;
}

function CardTitle({ className, ...props }) {
  return <h3 className={clsx("text-lg font-semibold", className)} {...props} />;
}

function CardContent({ className, ...props }) {
  return <div className={clsx("px-4 pb-4 text-sm", className)} {...props} />;
}

function CardFooter({ className, ...props }) {
  return <div className={clsx("px-4 pb-4 pt-2", className)} {...props} />;
}

export { Card, CardHeader, CardTitle, CardContent, CardFooter };
