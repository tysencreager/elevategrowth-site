import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const needOptions = [
  "New website",
  "Website redesign",
  "SEO & marketing",
  "Not sure yet"
];

const labelClass =
  "font-sans text-[9px] tracking-[0.25em] uppercase text-muted-foreground";

const fieldClass =
  "w-full font-serif font-light text-[15px] text-foreground bg-white border border-border px-3.5 py-3 focus:outline-none focus:border-primary transition-colors appearance-none rounded-none";

export default function InquirySection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    need: needOptions[0],
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          service: formData.need,
          message: formData.message || "(no message provided)"
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error("Form submission failed");
      }
    } catch {
      setError("Something went wrong. Please email us directly at tysen@elevategrowth.solutions");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 md:py-24 bg-background" id="inquiry">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative border border-primary/30 bg-background p-9 md:p-14 grid grid-cols-1 md:grid-cols-[5fr_6fr] gap-10 md:gap-16 items-start overflow-visible"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="absolute -inset-px border border-[#4AC0D8]/35 pointer-events-none translate-x-3 translate-y-3"
            aria-hidden="true"
          />

          <div>
            <span className="block font-sans text-[10.5px] tracking-[0.35em] uppercase text-primary mb-3.5">
              Start a Project
            </span>
            <h2 className="font-display font-normal text-[clamp(26px,3vw,36px)] leading-[1.2] text-foreground mb-3.5">
              Tell us about <em className="italic text-primary">your project.</em>
            </h2>
            <p className="font-serif font-light text-[15px] text-muted-foreground max-w-[52ch]">
              Share a few details and we'll reply within one business day to schedule a 20-minute
              discovery call. No pressure, no obligation.
            </p>
            <ul className="mt-6 flex flex-col gap-3.5">
              {[
                "We review your goals and current site before we ever get on a call.",
                "On the call, you get honest direction, whether or not we work together.",
                "You receive a tailored proposal with a clear scope, timeline, and investment."
              ].map((step, i) => (
                <li key={i} className="flex gap-3.5 items-baseline font-serif font-light text-[14.5px] text-muted-foreground">
                  <span className="font-display italic text-[19px] text-[#3D95B4] w-6 flex-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {isSubmitted ? (
            <div className="relative z-10 flex flex-col items-center justify-center text-center gap-4 py-10">
              <CheckCircle className="w-14 h-14 text-primary" strokeWidth={1.2} />
              <h3 className="font-display font-normal text-2xl text-foreground">Thank you.</h3>
              <p className="font-serif font-light text-[15px] text-muted-foreground max-w-sm">
                Your inquiry is in. We'll be in touch within one business day to schedule your
                discovery call.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 gap-y-5" data-testid="form-inquiry">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="inq-name" className={labelClass}>
                  Name *
                </label>
                <input
                  id="inq-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={fieldClass}
                  data-testid="input-inquiry-name"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="inq-email" className={labelClass}>
                  Email *
                </label>
                <input
                  id="inq-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={fieldClass}
                  data-testid="input-inquiry-email"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="inq-company" className={labelClass}>
                  Company or current website
                </label>
                <input
                  id="inq-company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className={fieldClass}
                  data-testid="input-inquiry-company"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="inq-need" className={labelClass}>
                  What do you need?
                </label>
                <select
                  id="inq-need"
                  name="need"
                  value={formData.need}
                  onChange={handleChange}
                  className={fieldClass}
                  data-testid="select-inquiry-need"
                >
                  {needOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label htmlFor="inq-message" className={labelClass}>
                  Tell us about your business &amp; goals
                </label>
                <textarea
                  id="inq-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${fieldClass} resize-y min-h-[96px]`}
                  data-testid="input-inquiry-message"
                />
              </div>
              <div className="sm:col-span-2 flex items-center justify-between gap-4 flex-wrap">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase bg-primary text-primary-foreground px-9 py-4 hover:bg-foreground transition-colors disabled:opacity-60"
                  data-testid="button-inquiry-submit"
                >
                  {isSubmitting ? "Sending…" : "Send Inquiry"}
                </button>
                <span className="font-serif font-light text-[13px] text-muted-foreground">
                  Prefer email?{" "}
                  <a href="mailto:tysen@elevategrowth.solutions" className="text-primary hover:underline">
                    tysen@elevategrowth.solutions
                  </a>
                </span>
              </div>
              {error && (
                <p className="sm:col-span-2 font-serif text-sm text-destructive" role="alert">
                  {error}
                </p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
