import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "За нас | Адвокатска Кантора Свилена Николова",
  description:
    "Образование, юридическа правоспособност и професионален опит на адвокат Свилена Николова — Варна.",
};

const timeline = [
  {
    label: "Образование",
    title: "Магистър по право",
    body: "Юридически факултет, Варненски свободен университет „Черноризец Храбър“. Дипломна работа в областта на облигационното право.",
  },
  {
    label: "Правоспособност",
    title: "Адвокат, вписан в Адвокатска колегия – Варна",
    body: "Придобита юридическа правоспособност след успешно положен изпит пред Министерството на правосъдието и стаж като юрисконсулт.",
  },
  {
    label: "Опит",
    title: "Над 30 години юридическа практика",
    body: "Професионален път през търговско дружество, счетоводна кантора и самостоятелна адвокатска практика — с фокус върху граждански и търговски спорове.",
  },
];

const values = [
  {
    title: "Яснота",
    body: "Обяснявам всеки термин и всяка стъпка на разбираем език, преди да пристъпим напред.",
  },
  {
    title: "Достъпност",
    body: "Кратко време за отговор и директна комуникация — без посредници, без забавяне.",
  },
  {
    title: "Реализъм",
    body: "Честна оценка на шансовете по делото, дори когато тя не е тази, която клиентът иска да чуе.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy">
        <Reveal>
          <Container className="py-24 text-center sm:py-32">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
              За нас
            </p>
            <h1 className="font-serif text-4xl font-semibold text-balance text-cream sm:text-5xl">
              <em className="italic text-gold-light">Свилена</em> Николова
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg">
              Управляващ адвокат с практика във Варна, специализирана в
              гражданското, облигационното, вещното и търговското право.
            </p>
          </Container>
        </Reveal>
      </section>

      <section className="bg-cream py-24 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[380px_1fr]">
            <Reveal>
              <div className="mx-auto aspect-[4/5] w-full max-w-[380px] border border-navy/15 bg-navy/[0.03] lg:mx-0" />
            </Reveal>

            <Reveal delay={150}>
              <SectionHeading
                eyebrow="Професионален път"
                title="Задълбочена подготовка, приложена практически"
                accent="приложена практически"
                description="Всеки етап от професионалния ми път е насочен към едно и също — да разбирам не само закона, но и хората, които разчитат на него."
              />

              <div className="mt-12 space-y-10">
                {timeline.map((item) => (
                  <div key={item.title} className="grid grid-cols-1 gap-2 border-t border-navy/10 pt-6 sm:grid-cols-[140px_1fr] sm:gap-8">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                      {item.label}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-navy">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink/65">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-navy py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Подход"
              title="Три принципа, които следвам във всяко дело"
              accent="Три принципа"
              align="center"
              tone="light"
            />
          </Reveal>
          <Reveal delay={150} className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="border-t-2 border-gold pt-6 text-center">
                <h3 className="font-serif text-xl font-semibold text-cream">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">
                  {value.body}
                </p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="bg-cream py-20">
        <Reveal>
          <Container className="flex flex-col items-center gap-8 text-center">
            <h2 className="font-serif text-3xl font-semibold text-balance text-navy sm:text-4xl">
              Разкажете ми накратко за Вашия случай
            </h2>
            <Button href="/kontakti">Свържете се с нас</Button>
          </Container>
        </Reveal>
      </section>
    </>
  );
}
