"use client";

import { FormEvent, useState } from "react";

const inputClasses =
  "w-full border border-navy/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-navy focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);
  const [consent, setConsent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const contact = (form.elements.namedItem("contact") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    if (!name || !contact || !message) {
      setError("Моля, попълнете всички задължителни полета.");
      return;
    }
    if (!consent) {
      setError("Моля, потвърдете съгласието си за обработка на лични данни.");
      return;
    }

    setError(null);
    setStatus("sent");
    form.reset();
    setConsent(false);
  }

  if (status === "sent") {
    return (
      <div className="border border-navy/10 bg-white p-8 text-center">
        <p className="font-serif text-xl text-navy">Съобщението е изпратено.</p>
        <p className="mt-3 text-sm leading-relaxed text-ink/65">
          Благодарим за запитването. Ще се свържем с Вас в най-кратък срок.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-xs font-semibold uppercase tracking-wider text-navy underline underline-offset-4"
        >
          Изпрати ново съобщение
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink/60">
          Име и фамилия
        </label>
        <input id="name" name="name" type="text" autoComplete="name" className={inputClasses} />
      </div>

      <div>
        <label htmlFor="contact" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink/60">
          Имейл или телефон
        </label>
        <input id="contact" name="contact" type="text" autoComplete="email" className={inputClasses} />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink/60">
          Съобщение
        </label>
        <textarea id="message" name="message" rows={5} className={inputClasses} />
      </div>

      <label className="flex items-start gap-3 text-sm text-ink/70">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-navy"
        />
        <span>
          Съгласен/а съм личните ми данни да бъдат обработени с цел обратна връзка по
          настоящото запитване, съгласно Политиката за поверителност.
        </span>
      </label>

      {error && <p className="text-sm text-red-700">{error}</p>}

      <button
        type="submit"
        className="w-full bg-navy px-6 py-4 text-sm font-semibold uppercase tracking-wider text-cream transition-colors hover:bg-navy-light sm:w-auto"
      >
        Изпрати запитване
      </button>
    </form>
  );
}
