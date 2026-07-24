import type { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { practiceAreas } from "@/lib/data";

export const metadata: Metadata = {
  title: "Практики | Адвокатска Кантора Свилена Николова",
  description:
    "Облигационно, вещно, търговско и гражданско право — правни услуги на адвокатска кантора Свилена Николова във Варна.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <section className="bg-navy">
        <Reveal>
          <Container className="py-24 text-center sm:py-32">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
              Практики
            </p>
            <h1 className="font-serif text-4xl font-semibold text-balance text-cream sm:text-5xl">
              Правни услуги, обяснени на{" "}
              <em className="italic text-gold-light">ясен език</em>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg">
              Четири основни направления на гражданското право — всяко със
              собствени особености и практически въпроси, които клиентите
              задават най-често.
            </p>
          </Container>
        </Reveal>
      </section>

      {practiceAreas.map((area, i) => {
        const isDark = i % 2 === 1;
        return (
          <section
            id={area.slug}
            key={area.slug}
            className={`scroll-mt-20 py-24 sm:py-28 ${isDark ? "bg-navy" : "bg-cream"}`}
          >
            <Container>
              <Reveal className="grid grid-cols-1 gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
                <span
                  className={`font-serif text-6xl leading-none ${
                    isDark ? "text-cream/15" : "text-navy/10"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="max-w-2xl">
                  <h2
                    className={`font-serif text-3xl font-semibold text-balance sm:text-4xl ${
                      isDark ? "text-cream" : "text-navy"
                    }`}
                  >
                    {area.title}
                  </h2>
                  <p
                    className={`mt-5 text-base leading-relaxed sm:text-lg ${
                      isDark ? "text-cream/75" : "text-ink/70"
                    }`}
                  >
                    {area.description}
                  </p>
                  <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {area.points.map((point) => (
                      <li
                        key={point}
                        className={`flex items-start gap-3 text-sm leading-relaxed ${
                          isDark ? "text-cream/80" : "text-ink/75"
                        }`}
                      >
                        <span className="mt-2 h-px w-4 shrink-0 bg-gold" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </Container>
          </section>
        );
      })}

      <section className="bg-navy-dark py-20">
        <Reveal>
          <Container className="flex flex-col items-center gap-8 text-center">
            <h2 className="font-serif text-3xl font-semibold text-balance text-cream sm:text-4xl">
              Не сте сигурни коя област засяга Вашия случай?
            </h2>
            <p className="max-w-xl text-cream/70">
              Опишете ситуацията накратко — ще Ви насоча към правилния подход.
            </p>
            <Button href="/kontakti" variant="primary" className="!bg-cream !text-navy hover:!bg-cream-dark">
              Заявете безплатна консултация
            </Button>
          </Container>
        </Reveal>
      </section>
    </>
  );
}
