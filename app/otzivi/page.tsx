import type { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import TestimonialCard from "@/components/TestimonialCard";
import Reveal from "@/components/Reveal";
import { testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Отзиви | Адвокатска Кантора Свилена Николова",
  description: "Какво споделят клиенти на адвокатска кантора Свилена Николова.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-navy">
        <Reveal>
          <Container className="py-24 text-center sm:py-32">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
              Отзиви
            </p>
            <h1 className="font-serif text-4xl font-semibold text-balance text-cream sm:text-5xl">
              <em className="italic text-gold-light">Доверие</em>, изградено на
              всеки случай
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg">
              Имената на клиентите са запазени поверителни. Публикуват се само с
              изричното им съгласие.
            </p>
          </Container>
        </Reveal>
      </section>

      <section className="bg-cream py-24 sm:py-32">
        <Container>
          <Reveal>
            <Carousel>
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  data-carousel-item
                  className="w-[85vw] shrink-0 snap-start sm:w-96"
                >
                  <TestimonialCard testimonial={t} />
                </div>
              ))}
            </Carousel>
          </Reveal>
        </Container>
      </section>

      <section className="bg-navy-dark py-20">
        <Reveal>
          <Container className="flex flex-col items-center gap-8 text-center">
            <h2 className="font-serif text-3xl font-semibold text-balance text-cream sm:text-4xl">
              Готови ли сте да споделите Вашия случай?
            </h2>
            <Button href="/kontakti" variant="primary" className="!bg-cream !text-navy hover:!bg-cream-dark">
              Заявете безплатна консултация
            </Button>
          </Container>
        </Reveal>
      </section>
    </>
  );
}
