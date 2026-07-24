import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import StatBand from "@/components/StatBand";
import PracticeAreaSlideshow from "@/components/PracticeAreaSlideshow";
import TestimonialSpotlight from "@/components/TestimonialSpotlight";
import HeroPhoto from "@/components/HeroPhoto";
import Reveal from "@/components/Reveal";
import { practiceAreas, testimonials } from "@/lib/data";

const heroStats = [
  { value: "30+", label: "Години юридическа практика" },
  { value: "4", label: "Основни области на практика" },
  { value: "100%", label: "Индивидуален подход към всеки случай" },
];

export default function Home() {
  return (
    <>
      {/* Hero — dark split layout */}
      <section className="hero-parallax-scope relative overflow-hidden bg-navy-dark">
        <HeroPhoto src="/images/hero-photo.jpg" alt="" />
        <Container className="relative z-10 grid grid-cols-1 gap-16 py-24 sm:py-32 lg:grid-cols-[1fr_320px] lg:gap-12">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
              Адвокатска кантора във Варна
            </p>
            <h1 className="font-serif text-4xl font-semibold text-balance text-cream sm:text-5xl lg:text-6xl">
              <em className="italic text-gold-light">Ясен правен съвет</em>,
              когато е нужен най-много.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg">
              Облигационно, вещно, търговско и гражданско право. Индивидуален
              подход към всеки случай и честна комуникация на всеки етап.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/kontakti" variant="primary" className="!bg-cream !text-navy hover:!bg-cream-dark">
                Заявете консултация
              </Button>
              <Button href="/praktika" variant="outline-light">
                Разгледайте практиките
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-8 border-t border-cream/10 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
            {heroStats.map((stat) => (
              <div key={stat.label} className="border-b border-cream/10 pb-6 last:border-b-0 last:pb-0">
                <p className="font-serif text-4xl font-semibold text-gold-light">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-cream/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Intro — narrative section */}
      <section className="bg-cream py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              title="Човешко отношение в правото"
              accent="Човешко отношение"
              align="center"
              description="Смятам, че добрата правна защита започва с разбиране на човека зад делото — не само с познаване на закона."
            />
          </Reveal>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-[380px_1fr] lg:items-center lg:gap-20">
            <Reveal>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[380px] overflow-hidden lg:mx-0">
                <Image
                  src="/images/svilena-portrait.jpg"
                  alt="Свилена Николова"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={150} className="space-y-5 text-base leading-relaxed text-ink/75">
              <p>
                От години работя с клиенти във Варна по дела от облигационно,
                вещно, търговско и гражданско право. Всеки случай получава
                пълното ми внимание — без прехвърляне между сътрудници и без
                изчезване след първата среща.
              </p>
              <p>
                Вярвам, че клиентът трябва да разбира всяка стъпка от процеса.
                Затова обяснявам нещата на ясен език, отговарям бързо на
                въпроси и съм честна дори когато истината не е това, което
                клиентът иска да чуе.
              </p>
              <Link
                href="/za-nas"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-navy"
              >
                Научете повече за мен →
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Practice areas — two-column header + carousel */}
      <section className="bg-cream py-24 sm:py-32">
        <Container>
          <Reveal className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Практики
              </p>
              <h2 className="font-serif text-3xl font-semibold text-balance text-navy sm:text-4xl">
                В какво мога да Ви бъда{" "}
                <em className="italic text-gold">полезна</em>
              </h2>
              <div className="mt-8">
                <Button href="/praktika">Всички практики</Button>
              </div>
            </div>
            <p className="text-base leading-relaxed text-ink/70 sm:text-lg lg:pt-10">
              Четири основни области на гражданското право, обяснени на
              разбираем език — без излишен юридически жаргон.
            </p>
          </Reveal>

          <Reveal delay={150} className="mt-14">
            <PracticeAreaSlideshow areas={practiceAreas} />
          </Reveal>
        </Container>
      </section>

      {/* Testimonial spotlight — full-bleed */}
      <Reveal>
        <TestimonialSpotlight testimonials={testimonials} />
      </Reveal>

      <Reveal>
        <StatBand
          heading="Принципът е прост: винаги на страната на клиента."
          accent="винаги на страната на клиента."
          stats={[
            { value: "30+", label: "Години опит" },
            { value: "4", label: "Области на практика" },
            { value: "Варна", label: "Обслужван регион" },
          ]}
        />
      </Reveal>

      {/* Two-column narrative */}
      <section className="bg-cream py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              title="Локална практика, лично ангажирана"
              accent="лично ангажирана"
              align="center"
            />
          </Reveal>
          <Reveal delay={150} className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-2">
            <p className="text-base leading-relaxed text-ink/70">
              Кантората е базирана във Варна и работи предимно с клиенти от
              региона. Познаването на местния съд и практика е предимство,
              което личи в подготовката на всяко дело.
            </p>
            <p className="text-base leading-relaxed text-ink/70">
              Няма разпределяне между няколко адвокати по случая — работите
              директно с мен от началото до края на делото, без посредници и
              без загубена по пътя комуникация.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* CTA footer strip — navy */}
      <section className="bg-navy-dark py-20">
        <Container className="flex flex-col items-center gap-8 text-center">
          <Reveal className="flex flex-col items-center gap-8">
            <h2 className="font-serif text-3xl font-semibold text-balance text-cream sm:text-4xl">
              Готови ли сте да обсъдим Вашия случай?
            </h2>
            <Button href="/kontakti" variant="primary" className="!bg-cream !text-navy hover:!bg-cream-dark">
              Заявете безплатна консултация
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
