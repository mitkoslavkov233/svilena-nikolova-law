import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { contactInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Контакти | Адвокатска Кантора Свилена Николова",
  description:
    "Свържете се с адвокатска кантора Свилена Николова във Варна — адрес, работно време и форма за запитване.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy">
        <Reveal>
          <Container className="py-24 text-center sm:py-32">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
              Контакти
            </p>
            <h1 className="font-serif text-4xl font-semibold text-balance text-cream sm:text-5xl">
              Да обсъдим Вашия случай
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg">
              Изпратете кратко описание на ситуацията — ще се свържем с Вас, за
              да уговорим консултация.
            </p>
          </Container>
        </Reveal>
      </section>

      <section className="bg-cream py-24 sm:py-32">
        <Container>
          <Reveal className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-navy">
                Изпратете запитване
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                Полетата, отбелязани по-долу, са задължителни. Данните Ви ще
                бъдат използвани единствено за връзка с Вас по това запитване.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-navy">
                  Данни за контакт
                </h2>
                <dl className="mt-6 space-y-4 text-sm">
                  <div className="flex gap-3">
                    <dt className="w-24 shrink-0 font-semibold uppercase tracking-wider text-ink/45">
                      Адрес
                    </dt>
                    <dd className="text-ink/75">{contactInfo.address}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-24 shrink-0 font-semibold uppercase tracking-wider text-ink/45">
                      Телефон
                    </dt>
                    <dd className="text-ink/75">
                      <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="hover:text-navy">
                        {contactInfo.phone}
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-24 shrink-0 font-semibold uppercase tracking-wider text-ink/45">
                      Имейл
                    </dt>
                    <dd className="text-ink/75">
                      <a href={`mailto:${contactInfo.email}`} className="hover:text-navy">
                        {contactInfo.email}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Работно време
                </h3>
                <dl className="mt-4 space-y-2 border-t border-navy/10 pt-4 text-sm">
                  {contactInfo.hours.map((h) => (
                    <div key={h.day} className="flex justify-between gap-4">
                      <dt className="text-ink/60">{h.day}</dt>
                      <dd className="font-medium text-ink/85">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
