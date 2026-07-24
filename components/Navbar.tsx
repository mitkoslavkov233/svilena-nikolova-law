"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          solid
            ? "border-navy/10 bg-cream/95 backdrop-blur"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3 sm:px-8 lg:px-12">
          <Link
            href="/"
            className={`font-serif text-lg font-semibold tracking-tight transition-colors duration-300 ${
              solid ? "text-navy" : "text-cream"
            }`}
          >
            Свилена Николова
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium uppercase tracking-wide transition-colors duration-300 ${
                    solid
                      ? active
                        ? "text-navy"
                        : "text-ink/60 hover:text-navy"
                      : active
                        ? "text-gold-light"
                        : "text-cream/75 hover:text-cream"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/kontakti"
            className={`hidden px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 lg:inline-flex ${
              solid
                ? "bg-navy text-cream hover:bg-navy-light"
                : "bg-cream text-navy ring-1 ring-cream/40 hover:bg-cream-dark"
            }`}
          >
            Безплатна консултация
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label={open ? "Затвори менюто" : "Отвори менюто"}
            aria-expanded={open}
          >
            <span
              className={`block h-px w-6 transition-transform duration-300 ${
                solid ? "bg-navy" : "bg-cream"
              } ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-6 transition-transform duration-300 ${
                solid ? "bg-navy" : "bg-cream"
              } ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-x-0 top-[65px] bottom-0 z-40 flex flex-col bg-navy px-6 pt-10 transition-transform duration-300 ease-in-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`border-b border-cream/10 py-4 font-serif text-2xl ${
                  active ? "text-gold-light" : "text-cream"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/kontakti"
          onClick={() => setOpen(false)}
          className="mt-8 inline-flex items-center justify-center bg-cream px-6 py-4 text-xs font-semibold uppercase tracking-wider text-navy"
        >
          Безплатна консултация
        </Link>
      </div>
    </>
  );
}
