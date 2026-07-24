import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "outline-light";
  className?: string;
};

const variants = {
  primary:
    "bg-navy text-cream hover:bg-navy-light focus-visible:outline-navy",
  outline:
    "border border-navy text-navy hover:bg-navy hover:text-cream focus-visible:outline-navy",
  "outline-light":
    "border border-cream/40 text-cream hover:bg-cream hover:text-navy focus-visible:outline-cream",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider transition-[color,background-color,transform] duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
