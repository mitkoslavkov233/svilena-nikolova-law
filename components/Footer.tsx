import Link from "next/link";
import { contactInfo, navLinks, practiceAreas } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-cream">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-serif text-lg font-semibold tracking-tight text-cream">
              Свилена Николова
            </h3>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
              Индивидуален подход и ясна комуникация на всеки етап от делото —
              облигационно, вещно, търговско и гражданско право във Варна.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              Навигация
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              Практики
            </h3>
            <ul className="mt-5 space-y-3">
              {practiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/praktika#${area.slug}`}
                    className="text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              Контакти
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              <li>{contactInfo.address}</li>
              <li>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="hover:text-cream">
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-cream">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Адвокатска Кантора Свилена Николова. Всички
            права запазени.
          </p>
          <p>Съдържанието на този сайт не представлява правен съвет.</p>
        </div>
      </div>
    </footer>
  );
}
