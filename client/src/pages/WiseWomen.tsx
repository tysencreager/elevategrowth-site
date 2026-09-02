import { useEffect, useState } from "react";
import { AnimateOnScroll, StaggerContainer, StaggerItem, fadeInUp, motion } from "@/components/ui/motion";
import tysenPhoto from "@assets/tysen_photo_800.webp";
// Same six sites as the homepage's Selected Works section.
import workJulian from "@assets/portfolio-juliandismute.webp";
import workBodyshop from "@assets/portfolio-bodyshopgym.webp";
import workEnergize from "@assets/portfolio-energizeyourvibe.webp";
import workDialin from "@assets/portfolio-dialinconstruction.webp";
import workKleenslate from "@assets/portfolio-kleenslate.webp";
import workLexlegal from "@assets/portfolio-lexlegal.webp";

/**
 * Hidden conference landing page for WISE WOMEN Houston 2026 attendees.
 * Reached only by direct URL (QR codes on printed swag tags). It is
 * noindexed, excluded from the sitemap, and nothing on the public site
 * links to it. Nearly 100% of traffic is mobile: single goal, no site
 * navigation, and the portfolio strip deliberately has no outbound links
 * so the only exit is the form (plus the main-site CTA at the very end).
 */

const interestOptions = [
  "New custom website",
  "SEO & growth retainer",
  "Both",
  "Not sure yet (help me figure it out)",
];

const body = "font-['Lora',_Georgia,_serif] text-[#1B1E20]";
const eyebrow = "font-sans text-[11px] font-semibold tracking-[0.3em] uppercase";

const buttonClass =
  "inline-block font-sans font-semibold text-base text-[#1B1E20] bg-[#4AC0D8] rounded-full px-8 py-4 text-center hover:bg-[#3D95B4] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B1E20] focus-visible:ring-offset-2";

function Stars({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`tracking-[0.15em] text-sm ${light ? "text-[#FFD666]" : "text-[#E8B923]"}`}
      aria-label="5 star Google review"
    >
      ★★★★★
    </span>
  );
}

const testimonials = [
  {
    quote:
      "Tysen and Elevate Growth Solutions were a God send! They did a complete new website for me and created everything I could have asked for, and more! … I'm in love with the design, colors, member portal and app to go with it all! 5 Stars and then some!!",
    author: "Jenn Davis",
    initials: "JD",
    avatarBg: "#266D82",
    google: true,
    tilt: "-rotate-1",
  },
  {
    quote:
      "Tysen is simply the best! Her work and professionalism is unmatched. … she truly listened to my needs and created a beautiful website that wholly encapsulates my business. I can't recommend her enough!",
    author: "Ali Valencia",
    initials: "AV",
    avatarBg: "#3D95B4",
    google: true,
    tilt: "rotate-1",
  },
  {
    quote:
      "My business has skyrocketed since Tysen (Elevate Growth Solutions) created my website. It's seriously SO stunning and seamless. Hire her! You will not regret it.",
    author: "McKenzie M.",
    initials: "MM",
    avatarBg: "#1B1E20",
    google: false,
    tilt: "-rotate-1",
  },
];

const works = [
  { name: "Julian Dismute", image: workJulian },
  { name: "The Body Shop Gym", image: workBodyshop },
  { name: "Energize Your Vibe", image: workEnergize },
  { name: "Dial-In Construction", image: workDialin },
  { name: "Kleen Slate", image: workKleenslate },
  { name: "Lex Legal", image: workLexlegal },
];

const tickerItems = [
  "booked & busy",
  "$300 attendee credit",
  "claim by Oct 17",
  "custom websites",
  "SEO that compounds",
  "WISE WOMEN Houston",
];

function Ticker() {
  const row = (
    <div className="flex items-center gap-6 pr-6 flex-none" aria-hidden="true">
      {tickerItems.map((item) => (
        <span key={item} className="flex items-center gap-6 whitespace-nowrap">
          <span className="font-display italic text-lg text-[#1B1E20]">{item}</span>
          <span className="text-[#266D82]">✦</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="bg-[#4AC0D8] py-3 overflow-hidden" role="presentation">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {row}
        {row}
      </div>
    </div>
  );
}

const faqs = [
  {
    q: "Does the credit apply to any project?",
    a: "Any custom website build or any monthly growth retainer. It doesn't apply to one-off micro-tasks; this perk is for women ready to invest in the real thing.",
  },
  {
    q: "I claimed my credit. When does my project have to start?",
    a: "Claim by Oct 17; we'll scope your project around your timeline. Booked & busy means I get that fall is chaos.",
  },
  {
    q: "What if I'm not sure what I need?",
    a: "That's what the fit call is for. Pick “Not sure yet” on the form and come as you are.",
  },
  {
    q: "We met at the conference. Can I just text you?",
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

  const labelClass = "font-sans text-xs font-semibold tracking-[0.12em] uppercase text-[#266D82]";
  const fieldClass =
    "w-full font-['Lora',_Georgia,_serif] text-base text-[#1B1E20] bg-white border border-[#3D95B4]/40 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3D95B4] focus:border-[#3D95B4] transition-colors appearance-none";

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
        className="relative bg-white border border-[#4AC0D8]/50 rounded-2xl p-8 text-center"
        role="status"
        data-testid="wisewomen-thanks"
      >
        <div
          className="absolute -inset-px border border-[#4AC0D8]/40 rounded-2xl pointer-events-none translate-x-2 translate-y-2"
          aria-hidden="true"
        />
        <h3 className="font-display font-semibold text-2xl text-[#1B1E20] mb-3">Got it!</h3>
        <p className={`${body} text-lg leading-relaxed`}>
          You'll hear from me, actual me, not a bot, within one business day.
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        className="absolute -inset-px border border-[#4AC0D8]/40 rounded-2xl pointer-events-none translate-x-2 translate-y-2"
        aria-hidden="true"
      />
      <form
        onSubmit={handleSubmit}
        className="relative bg-white border border-[#3D95B4]/30 rounded-2xl p-6 sm:p-8 flex flex-col gap-5"
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
    </div>
  );
}

export default function WiseWomen() {
  useEffect(() => {
    document.title = "Booked & Busy | Elevate Growth Solutions";
  }, []);

  return (
    <main className="min-h-screen bg-[#F4F7F8] overflow-x-hidden">
      {/* HERO: full-bleed photography with a slow zoom and teal-charcoal scrim */}
      <header className="relative min-h-[88svh] flex items-center justify-center px-5 py-20 text-center overflow-hidden bg-[#1B1E20]">
        <img
          src="/hero_bw_768.webp"
          srcSet="/hero_bw_768.webp 768w, /hero_bw_1920.webp 1920w"
          sizes="100vw"
          alt=""
          {...({ fetchpriority: "high" } as React.ImgHTMLAttributes<HTMLImageElement>)}
          className="absolute inset-0 w-full h-full object-cover animate-kenburns motion-reduce:animate-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#1B1E20]/80 via-[#1B1E20]/60 to-[#266D82]/80"
          aria-hidden="true"
        />
        <motion.div
          className="relative max-w-xl mx-auto"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-[#1B1E20] bg-[#4AC0D8] rounded-full px-4 py-2 mb-6">
            WISE WOMEN · Houston 2026
          </span>
          <h1 className="font-display font-medium text-[2.8rem] sm:text-6xl leading-[1.08] text-white [text-wrap:balance]">
            Here's to being{" "}
            <em className="italic text-[#4AC0D8]">booked &amp; busy.</em>
          </h1>
          <p className="font-['Lora',_Georgia,_serif] text-lg leading-relaxed text-[#F4F7F8]/95 mt-6 max-w-md mx-auto">
            You grabbed the cup. Now let's make sure your website is doing its part. As a WISE
            WOMEN attendee, you've got{" "}
            <strong className="font-semibold text-[#4AC0D8]">
              $300 toward a custom website build or growth retainer
            </strong>{" "}
            with Elevate Growth Solutions.
          </p>
          <a href="#claim" className={`${buttonClass} mt-8`} data-testid="button-wisewomen-hero">
            Claim My $300 Credit ↓
          </a>
        </motion.div>
      </header>

      {/* TICKER */}
      <Ticker />

      {/* THE WHY: editorial split with photo card */}
      <section className="px-5 py-14 sm:py-20" aria-labelledby="why-heading">
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-[240px_1fr] gap-10 items-start">
          <AnimateOnScroll amount={0.2} className="mx-auto w-full max-w-[240px]">
            <div className="relative">
              <div
                className="absolute -inset-px border-2 border-[#4AC0D8] rounded-2xl translate-x-3 translate-y-3"
                aria-hidden="true"
              />
              <img
                src={tysenPhoto}
                alt="Tysen Creager, founder of Elevate Growth Solutions"
                width={400}
                height={500}
                loading="lazy"
                className="relative w-full aspect-[4/5] object-cover rounded-2xl"
              />
              <span className="absolute -bottom-4 -left-3 bg-white rounded-full shadow-md px-4 py-2 font-sans text-xs font-semibold text-[#1B1E20]">
                <span className="text-[#E8B923]">★★★★★</span> rated
              </span>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll amount={0.2}>
            <span className={`${eyebrow} text-[#3D95B4] block mb-3`}>The why</span>
            <h2
              id="why-heading"
              className="font-display font-medium text-3xl sm:text-4xl leading-snug text-[#1B1E20] [text-wrap:balance]"
            >
              Your website should be your{" "}
              <em className="italic text-[#266D82]">hardest-working employee.</em>
            </h2>
            <p className={`${body} text-base leading-relaxed mt-5`}>
              It should answer questions while you're in meetings, book consults while you're at
              dinner, and show up on Google while you sleep. If your site isn't pulling its
              weight, if it's pretty but invisible, or found but forgettable, that's fixable. It's
              literally what I do.
            </p>
            <p className={`${body} text-base leading-relaxed mt-4`}>
              I'm Tysen Creager, founder of Elevate Growth Solutions. I build custom websites and
              run the SEO behind them for service-based businesses across the country, so the
              right people find you, trust you, and book you.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* RECENT WORK: proof strip (deliberately unlinked, no exits before the form) */}
      <section className="py-12 sm:py-16 bg-white overflow-hidden" aria-labelledby="work-heading">
        <AnimateOnScroll amount={0.2} className="max-w-xl mx-auto px-5 mb-7">
          <span className={`${eyebrow} text-[#3D95B4] block mb-3`}>Recent builds</span>
          <h2
            id="work-heading"
            className="font-display font-medium text-2xl sm:text-3xl text-[#1B1E20]"
          >
            Real websites, <em className="italic text-[#266D82]">really working.</em>
          </h2>
        </AnimateOnScroll>
        <div
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-5 pb-4 [-webkit-overflow-scrolling:touch]"
          role="list"
          aria-label="Recent website builds"
        >
          {works.map((work, i) => (
            <figure
              key={work.name}
              role="listitem"
              className={`flex-none w-60 snap-start ${i % 2 ? "sm:translate-y-3" : ""}`}
            >
              <div className="rounded-xl overflow-hidden border border-[#3D95B4]/25 shadow-sm">
                <img
                  src={work.image}
                  alt={`Website built for ${work.name}`}
                  width={480}
                  height={360}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover object-top hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <figcaption className="font-sans text-xs font-semibold tracking-[0.1em] uppercase text-[#1B1E20]/60 mt-2">
                {work.name}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className={`${body} text-sm text-[#1B1E20]/60 px-5 max-w-xl mx-auto`}>
          Swipe for a few favorites. Yours could be next.
        </p>
      </section>

      {/* THE PERK */}
      <section className="px-5 py-12 sm:py-16" aria-labelledby="perk-heading">
        <AnimateOnScroll className="max-w-xl mx-auto" amount={0.15}>
          <div className="relative">
            <div
              className="absolute -inset-px border border-[#4AC0D8]/50 rounded-2xl pointer-events-none translate-x-2.5 translate-y-2.5"
              aria-hidden="true"
            />
            <div className="relative bg-[#266D82] rounded-2xl p-6 sm:p-8 overflow-hidden">
              <div
                className="absolute -top-10 -right-10 w-40 h-40 bg-[#4AC0D8]/20 rounded-full blur-2xl pointer-events-none"
                aria-hidden="true"
              />
              <h2 id="perk-heading" className="font-display font-medium text-2xl sm:text-3xl text-white">
                The conference perk, <em className="italic text-[#4AC0D8]">in plain English:</em>
              </h2>
              <ul className="mt-5 flex flex-col gap-3.5">
                {[
                  <>
                    <strong className="font-semibold text-[#4AC0D8]">
                      $300 off a custom website build
                    </strong>
                    : designed, written, and built for how your clients actually buy
                  </>,
                  <>
                    <strong className="font-semibold text-[#4AC0D8]">
                      or $300 off your first growth retainer
                    </strong>
                    : ongoing SEO + website care that compounds month over month
                  </>,
                  <>
                    Claim by <strong className="font-semibold text-[#4AC0D8]">October 17, 2026</strong>.
                    Project can start later; just claim your spot by then
                  </>,
                  <>
                    No pressure, no obligation. Submitting the form gets you a custom quote and a
                    real conversation, not a sales script
                  </>,
                ].map((item, i) => (
                  <li
                    key={i}
                    className="font-['Lora',_Georgia,_serif] text-base leading-relaxed text-[#F4F7F8] flex gap-3"
                  >
                    <span className="text-[#4AC0D8] flex-none" aria-hidden="true">
                      ✦
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-5 pb-12 sm:pb-16" aria-labelledby="how-heading">
        <StaggerContainer className="max-w-xl mx-auto">
          <h2 id="how-heading" className="sr-only">
            How it works
          </h2>
          <ol className="flex flex-col gap-5">
            {[
              <>
                <strong className="font-semibold">Tell me about your business</strong>: the
                2-minute form below
              </>,
              <>
                <strong className="font-semibold">We hop on a quick fit call</strong>: 15 minutes,
                you and me, zero pitch-deck energy
              </>,
              <>
                <strong className="font-semibold">
                  You get a custom quote with your $300 credit already applied.
                </strong>{" "}
                Take it or leave it, we're still conference friends
              </>,
            ].map((step, i) => (
              <StaggerItem key={i} variants={fadeInUp}>
                <li className={`${body} text-base leading-relaxed flex gap-4 items-baseline`}>
                  <span
                    className="font-display italic text-2xl text-[#3D95B4] flex-none w-8"
                    aria-hidden="true"
                  >
                    0{i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              </StaggerItem>
            ))}
          </ol>
        </StaggerContainer>
      </section>

      {/* FORM */}
      <section id="claim" className="px-5 pb-14 sm:pb-20 scroll-mt-6" aria-labelledby="form-heading">
        <AnimateOnScroll className="max-w-xl mx-auto" amount={0.1}>
          <h2
            id="form-heading"
            className="font-display font-medium text-3xl sm:text-4xl text-center text-[#1B1E20] mb-7"
          >
            Claim your <em className="italic text-[#266D82]">$300 credit</em>
          </h2>
          <LeadForm />
        </AnimateOnScroll>
      </section>

      {/* PROOF: testimonial cards */}
      <section className="bg-white px-5 py-14 sm:py-20 overflow-hidden" aria-labelledby="proof-heading">
        <div className="max-w-xl mx-auto">
          <AnimateOnScroll amount={0.2}>
            <span className={`${eyebrow} text-[#3D95B4] block mb-3`}>Kind words</span>
            <h2
              id="proof-heading"
              className="font-display font-medium text-2xl sm:text-3xl text-[#1B1E20] [text-wrap:balance]"
            >
              Women hire me to make their websites{" "}
              <em className="italic text-[#266D82]">work as hard as they do.</em>
            </h2>
          </AnimateOnScroll>
          <StaggerContainer className="mt-8 flex flex-col gap-6">
            {testimonials.map((t) => (
              <StaggerItem key={t.author} variants={fadeInUp}>
                <figure
                  className={`bg-[#F4F7F8] border border-[#3D95B4]/20 rounded-2xl p-6 shadow-[0_10px_30px_-12px_rgba(38,109,130,0.35)] ${t.tilt} hover:rotate-0 hover:-translate-y-1 transition-transform duration-300`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="w-11 h-11 rounded-full flex items-center justify-center font-sans font-bold text-sm text-white flex-none"
                      style={{ backgroundColor: t.avatarBg }}
                      aria-hidden="true"
                    >
                      {t.initials}
                    </span>
                    <div>
                      <figcaption className="font-sans text-sm font-bold text-[#1B1E20]">
                        {t.author}
                      </figcaption>
                      {t.google ? (
                        <div className="flex items-center gap-1.5">
                          <Stars />
                          <span className="font-sans text-[10px] uppercase tracking-[0.12em] text-[#1B1E20]/50">
                            Google review
                          </span>
                        </div>
                      ) : (
                        <Stars />
                      )}
                    </div>
                  </div>
                  <blockquote className={`${body} text-base leading-relaxed`}>
                    "{t.quote}"
                  </blockquote>
                </figure>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-12 sm:py-16" aria-labelledby="faq-heading">
        <AnimateOnScroll className="max-w-xl mx-auto" amount={0.1}>
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
        </AnimateOnScroll>
      </section>

      {/* FOOTER CTA */}
      <footer className="relative bg-[#1B1E20] px-5 py-14 sm:py-20 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#266D82]/40 rounded-full blur-3xl" />
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#4AC0D8]/15 rounded-full blur-3xl" />
        </div>
        <AnimateOnScroll className="relative max-w-xl mx-auto" amount={0.2}>
          <p className="font-['Lora',_Georgia,_serif] text-lg leading-relaxed text-[#F4F7F8]/90">
            It was so good to meet you in Houston. Whether we work together or not, dream bigger,
            and make sure your website keeps up.
          </p>
          <p className="font-display italic text-2xl text-[#4AC0D8] mt-5">Tysen</p>
          <a href="#claim" className={`${buttonClass} mt-8`} data-testid="button-wisewomen-footer">
            Claim My $300 Credit
          </a>
          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="font-['Lora',_Georgia,_serif] text-base text-[#F4F7F8]/70">
              Want to see what I'm about first? The portfolio, the services, the blog: it's all on
              the main site.
            </p>
            <a
              href="/"
              className="inline-block font-sans font-semibold text-sm tracking-[0.08em] uppercase text-[#4AC0D8] border border-[#4AC0D8]/60 rounded-full px-6 py-3 mt-4 hover:bg-[#4AC0D8] hover:text-[#1B1E20] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4AC0D8]"
              data-testid="link-wisewomen-main-site"
            >
              Explore Elevate Growth Solutions
            </a>
          </div>
        </AnimateOnScroll>
      </footer>
    </main>
  );
}
