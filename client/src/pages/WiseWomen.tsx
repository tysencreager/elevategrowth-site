import { useEffect, useState } from "react";

/**
 * Hidden conference landing page for WISE WOMEN Houston 2026 attendees.
 * Reached only by direct URL (QR codes on printed swag tags) — it is
 * noindexed, excluded from the sitemap, and nothing on the public site
 * links to it. Nearly 100% of traffic is mobile, so it is a single-goal,
 * single-scroll page with no site navigation.
 */

const interestOptions = [
  "New custom website",
  "SEO & growth retainer",
  "Both",
  "Not sure yet — help me figure it out",
];

const heading = "font-sans text-[#1B1E20]";
const body = "font-['Lora',_Georgia,_serif] text-[#1B1E20]";

const labelClass = "font-sans text-xs font-semibold tracking-[0.12em] uppercase text-[#266D82]";

const fieldClass =
  "w-full font-['Lora',_Georgia,_serif] text-base text-[#1B1E20] bg-white border border-[#3D95B4]/40 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3D95B4] focus:border-[#3D95B4] transition-colors appearance-none";

const buttonClass =
  "inline-block font-sans font-semibold text-base text-[#1B1E20] bg-[#4AC0D8] rounded-full px-8 py-4 text-center hover:bg-[#3D95B4] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B1E20] focus-visible:ring-offset-2";

const faqs = [
  {
    q: "Does the credit apply to any project?",
    a: "Any custom website build or any monthly growth retainer. It doesn't apply to one-off micro-tasks — this perk is for women ready to invest in the real thing.",
  },
  {
    q: "I claimed my credit — when does my project have to start?",
    a: "Claim by Oct 17; we'll scope your project around your timeline. Booked & busy means I get that fall is chaos.",
  },
  {
    q: "What if I'm not sure what I need?",
    a: "That's what the fit call is for. Pick “Not sure yet” on the form and come as you are.",
  },
  {
    q: "We met at the conference — can I just text you?",
    a: "Absolutely. But fill out the form first so your credit is officially on file. 😉",
  },
];

function LeadForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    businessName: "",
    currentWebsite: "",
    interest: interestOptions[0],
    notes: "",
    fax: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/wisewomen-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Form submission failed");

      // Conference-ROI tracking: only fires if the site's GA4 tag loaded.
      const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
      gtag?.("event", "wisewomen_lead_submit", {
        interest: formData.interest,
      });

      setIsSubmitted(true);
    } catch {
      setError(
        "Something went wrong. Email me directly at tysen@elevategrowth.solutions and I'll get your credit on file.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div
        className="bg-white border border-[#4AC0D8]/50 rounded-2xl p-8 text-center"
        role="status"
        data-testid="wisewomen-thanks"
      >
        <h3 className={`${heading} font-bold text-2xl mb-3`}>Got it!</h3>
        <p className={`${body} text-lg leading-relaxed`}>
          You'll hear from me — actual me, not a bot — within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-[#3D95B4]/30 rounded-2xl p-6 sm:p-8 flex flex-col gap-5"
      data-testid="form-wisewomen"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="ww-first-name" className={labelClass}>
            First name *
          </label>
          <input
            id="ww-first-name"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            value={formData.firstName}
            onChange={handleChange}
            className={fieldClass}
            data-testid="input-wisewomen-first-name"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="ww-last-name" className={labelClass}>
            Last name *
          </label>
          <input
            id="ww-last-name"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            value={formData.lastName}
            onChange={handleChange}
            className={fieldClass}
            data-testid="input-wisewomen-last-name"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="ww-email" className={labelClass}>
          Email *
        </label>
        <input
          id="ww-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={fieldClass}
          data-testid="input-wisewomen-email"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="ww-business" className={labelClass}>
          Business name *
        </label>
        <input
          id="ww-business"
          name="businessName"
          type="text"
          autoComplete="organization"
          required
          value={formData.businessName}
          onChange={handleChange}
          className={fieldClass}
          data-testid="input-wisewomen-business"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="ww-website" className={labelClass}>
          Your current website (if you have one)
        </label>
        <input
          id="ww-website"
          name="currentWebsite"
          type="text"
          inputMode="url"
          autoComplete="url"
          value={formData.currentWebsite}
          onChange={handleChange}
          className={fieldClass}
          data-testid="input-wisewomen-website"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="ww-interest" className={labelClass}>
          What are you most interested in?
        </label>
        <select
          id="ww-interest"
          name="interest"
          value={formData.interest}
          onChange={handleChange}
          className={fieldClass}
          data-testid="select-wisewomen-interest"
        >
          {interestOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="ww-notes" className={labelClass}>
          Anything you want me to know?
        </label>
        <textarea
          id="ww-notes"
          name="notes"
          rows={3}
          value={formData.notes}
          onChange={handleChange}
          className={`${fieldClass} resize-y`}
          data-testid="input-wisewomen-notes"
        />
      </div>
      {/* Honeypot: hidden from real visitors, bots fill it in. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="ww-fax">Fax</label>
        <input
          id="ww-fax"
          name="fax"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData.fax}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`${buttonClass} disabled:opacity-60`}
        data-testid="button-wisewomen-submit"
      >
        {isSubmitting ? "Sending…" : "Claim My Credit"}
      </button>
      <p className={`${body} text-sm text-center text-[#1B1E20]/70`}>
        You'll hear from me (actual me, not a bot) within one business day.
      </p>
      {error && (
        <p className={`${body} text-sm text-red-700`} role="alert">
          {error}
        </p>
      )}
    </form>
  );
}

export default function WiseWomen() {
  useEffect(() => {
    document.title = "Booked & Busy | Elevate Growth Solutions";
  }, []);

  return (
    <main className="min-h-screen bg-[#F4F7F8]">
      {/* HERO */}
      <header className="bg-[#1B1E20] px-5 pt-14 pb-12 sm:pt-20 sm:pb-16 text-center">
        <div className="max-w-xl mx-auto">
          <h1 className="font-sans font-extrabold text-4xl sm:text-5xl leading-tight text-white">
            Here's to being <span className="text-[#4AC0D8]">booked &amp; busy.</span>
          </h1>
          <p className="font-['Lora',_Georgia,_serif] text-lg leading-relaxed text-[#F4F7F8] mt-5">
            You grabbed the cup — now let's make sure your website is doing its part. As a WISE
            WOMEN attendee, you've got{" "}
            <strong className="font-semibold text-[#4AC0D8]">
              $300 toward a custom website build or growth retainer
            </strong>{" "}
            with Elevate Growth Solutions.
          </p>
          <a href="#claim" className={`${buttonClass} mt-7`} data-testid="button-wisewomen-hero">
            Claim My $300 Credit ↓
          </a>
        </div>
      </header>

      {/* THE WHY */}
      <section className="px-5 py-10 sm:py-14" aria-labelledby="why-heading">
        <div className="max-w-xl mx-auto">
          <h2 id="why-heading" className={`${heading} font-semibold text-2xl sm:text-3xl leading-snug`}>
            Your website should be your hardest-working employee.
          </h2>
          <p className={`${body} text-base leading-relaxed mt-4`}>
            It should answer questions while you're in meetings, book consults while you're at
            dinner, and show up on Google while you sleep. If your site isn't pulling its weight —
            if it's pretty but invisible, or found but forgettable — that's fixable. It's literally
            what I do.
          </p>
          <p className={`${body} text-base leading-relaxed mt-4`}>
            I'm Tysen Creager, founder of Elevate Growth Solutions. I build custom websites and run
            the SEO behind them for service-based businesses across the country — so the right
            people find you, trust you, and book you.
          </p>
        </div>
      </section>

      {/* THE PERK */}
      <section className="px-5 pb-10 sm:pb-14" aria-labelledby="perk-heading">
        <div className="max-w-xl mx-auto bg-[#266D82] rounded-2xl p-6 sm:p-8">
          <h2 id="perk-heading" className="font-sans font-semibold text-xl sm:text-2xl text-white">
            The conference perk, in plain English:
          </h2>
          <ul className="mt-4 flex flex-col gap-3">
            {[
              <>
                <strong className="font-semibold text-[#4AC0D8]">
                  $300 off a custom website build
                </strong>{" "}
                — designed, written, and built for how your clients actually buy
              </>,
              <>
                <strong className="font-semibold text-[#4AC0D8]">
                  or $300 off your first growth retainer
                </strong>{" "}
                — ongoing SEO + website care that compounds month over month
              </>,
              <>
                Claim by <strong className="font-semibold text-[#4AC0D8]">October 17, 2026</strong>{" "}
                — project can start later; just claim your spot by then
              </>,
              <>
                No pressure, no obligation — submitting the form gets you a custom quote and a real
                conversation, not a sales script
              </>,
            ].map((item, i) => (
              <li
                key={i}
                className="font-['Lora',_Georgia,_serif] text-base leading-relaxed text-[#F4F7F8] flex gap-3"
              >
                <span className="text-[#4AC0D8] flex-none" aria-hidden="true">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-5 pb-10 sm:pb-14" aria-labelledby="how-heading">
        <div className="max-w-xl mx-auto">
          <h2 id="how-heading" className="sr-only">
            How it works
          </h2>
          <ol className="flex flex-col gap-4">
            {[
              <>
                <strong className="font-semibold">Tell me about your business</strong> — the
                2-minute form below
              </>,
              <>
                <strong className="font-semibold">We hop on a quick fit call</strong> — 15 minutes,
                you and me, zero pitch-deck energy
              </>,
              <>
                <strong className="font-semibold">
                  You get a custom quote with your $300 credit already applied
                </strong>{" "}
                — take it or leave it, we're still conference friends
              </>,
            ].map((step, i) => (
              <li key={i} className={`${body} text-base leading-relaxed flex gap-4 items-baseline`}>
                <span
                  className="font-sans font-bold text-lg text-[#3D95B4] flex-none w-6"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FORM */}
      <section id="claim" className="px-5 pb-12 sm:pb-16 scroll-mt-6" aria-labelledby="form-heading">
        <div className="max-w-xl mx-auto">
          <h2
            id="form-heading"
            className={`${heading} font-semibold text-2xl sm:text-3xl text-center mb-6`}
          >
            Claim your $300 credit
          </h2>
          <LeadForm />
        </div>
      </section>

      {/* PROOF */}
      <section className="bg-white px-5 py-10 sm:py-14" aria-labelledby="proof-heading">
        <div className="max-w-xl mx-auto">
          <h2 id="proof-heading" className={`${heading} font-semibold text-xl sm:text-2xl`}>
            Women hire me to make their websites work as hard as they do.
          </h2>
          <div className="mt-5 flex flex-col gap-5">
            <figure className="border-l-4 border-[#4AC0D8] pl-4">
              <blockquote className={`${body} italic text-base leading-relaxed`}>
                "My business has skyrocketed since Tysen (Elevate Growth Solutions) created my
                website. It's seriously SO stunning and seamless. Hire her! You will not regret
                it."
              </blockquote>
              <figcaption className="font-sans text-sm font-semibold text-[#266D82] mt-2">
                — McKenzie M.
              </figcaption>
            </figure>
            <figure className="border-l-4 border-[#4AC0D8] pl-4">
              <blockquote className={`${body} italic text-base leading-relaxed`}>
                "I have loved working with Tysen, she's incredible! If you need help with
                marketing, she's your gal!"
              </blockquote>
              <figcaption className="font-sans text-sm font-semibold text-[#266D82] mt-2">
                — Cassidy G.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-10 sm:py-14" aria-labelledby="faq-heading">
        <div className="max-w-xl mx-auto">
          <h2 id="faq-heading" className="sr-only">
            Frequently asked questions
          </h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white border border-[#3D95B4]/30 rounded-xl px-5 py-4"
              >
                <summary className="font-sans font-semibold text-base text-[#1B1E20] cursor-pointer list-none flex justify-between items-center gap-3 [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span
                    className="text-[#266D82] flex-none transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className={`${body} text-base leading-relaxed mt-3`}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <footer className="bg-[#1B1E20] px-5 py-12 sm:py-16 text-center">
        <div className="max-w-xl mx-auto">
          <p className="font-['Lora',_Georgia,_serif] text-lg leading-relaxed text-[#F4F7F8]">
            It was so good to meet you in Houston. Whether we work together or not — dream bigger,
            and make sure your website keeps up.
          </p>
          <p className="font-sans font-semibold text-base text-[#4AC0D8] mt-4">— Tysen</p>
          <a href="#claim" className={`${buttonClass} mt-7`} data-testid="button-wisewomen-footer">
            Claim My $300 Credit
          </a>
        </div>
      </footer>
    </main>
  );
}
