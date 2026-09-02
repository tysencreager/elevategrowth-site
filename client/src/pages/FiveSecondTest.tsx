import { useEffect, useState } from "react";
import { Link } from "wouter";
import { AnimateOnScroll, motion } from "@/components/ui/motion";

/**
 * Hidden companion page for Tysen's 10-minute WISE WOMEN talk. The
 * audience types the URL from a slide (or scans a QR) on their phones in
 * the room. Noindexed, excluded from the sitemap; its only internal links
 * point to /wisewomen and the main site (outbound only, nothing links here).
 */

const body = "font-['Lora',_Georgia,_serif] text-[#1B1E20]";
const eyebrow = "font-sans text-[11px] font-semibold tracking-[0.3em] uppercase";

const buttonClass =
  "inline-block font-sans font-semibold text-base text-[#1B1E20] bg-[#4AC0D8] rounded-full px-8 py-4 text-center hover:bg-[#3D95B4] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B1E20] focus-visible:ring-offset-2";

interface QuizQuestion {
  title: string;
  detail: string;
  fix?: string;
}

const questions: QuizQuestion[] = [
  {
    title: "Can a stranger tell WHAT you do?",
    detail:
      "Not your tagline, your actual service. “Empowering transformation” fails. “Custom cakes for Houston weddings” passes.",
    fix: "Quick fix: put your plain-English answer in the biggest text on the page.",
  },
  {
    title: "Can they tell WHO it's for?",
    detail:
      "If everyone is your customer, no one feels like your customer. Your dream client should see herself in the first screen.",
    fix: "Quick fix: name your person. “For busy families,” “for women-owned firms,” “for contractors.”",
  },
  {
    title: "Do they know WHAT TO DO NEXT?",
    detail: "One obvious button. Book, call, get a quote. Pick one and make it unmissable.",
    fix: "Quick fix: one high-contrast button in the top section. Not three. One.",
  },
  {
    title: "The load test: did your site open in under 3 seconds on your phone?",
    detail:
      "If you had time to look around the room, that's a no. And half your visitors already left.",
  },
  {
    title: "The thumb test: can you reach your contact or book button with one thumb?",
    detail:
      "No pinching, no zooming. Your clients are on their phones. Your website should act like it.",
  },
];

const scoreResults = [
  {
    min: 5,
    label: "5 out of 5: Your website is pulling its weight.",
    detail: "Genuinely, well done. Now let's talk about whether Google can find it.",
  },
  {
    min: 3,
    label: "3 to 4: Close, but leaking.",
    detail:
      "You're losing a slice of every dollar you spend getting people to a page that doesn't convert them.",
  },
  {
    min: 0,
    label: "0 to 2: Your website is costing you clients.",
    detail:
      "The good news: this is the single highest-leverage fix in your business, and it's fixable fast.",
  },
];

function Quiz() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const done = step >= questions.length;

  const answer = (yes: boolean) => {
    if (yes) setScore((s) => s + 1);
    setStep((s) => s + 1);
  };

  const retake = () => {
    setStep(0);
    setScore(0);
  };

  if (done) {
    const result = scoreResults.find((r) => score >= r.min)!;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white border border-[#3D95B4]/30 rounded-2xl p-6 sm:p-8 text-center"
        role="status"
        data-testid="quiz-result"
      >
        <span className={`${eyebrow} text-[#3D95B4] block mb-3`}>Your score</span>
        <p
          className="font-display font-medium text-6xl text-[#266D82]"
          data-testid="quiz-score"
        >
          {score}
          <span className="text-2xl text-[#1B1E20]/50">/5</span>
        </p>
        <h3 className="font-sans font-bold text-lg text-[#1B1E20] mt-4">{result.label}</h3>
        <p className={`${body} text-base leading-relaxed mt-2`}>{result.detail}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
          <a href="#checklist" className={buttonClass} data-testid="button-quiz-checklist">
            Get the checklist ↓
          </a>
          <button
            type="button"
            onClick={retake}
            className="font-sans font-semibold text-base text-[#266D82] border border-[#266D82]/40 rounded-full px-8 py-4 hover:bg-[#266D82] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#266D82]"
            data-testid="button-quiz-retake"
          >
            Retake the test
          </button>
        </div>
      </motion.div>
    );
  }

  const q = questions[step];
  return (
    <div
      className="relative bg-white border border-[#3D95B4]/30 rounded-2xl p-6 sm:p-8"
      data-testid="quiz-card"
    >
      <div className="flex items-center justify-between mb-4">
        <span className={`${eyebrow} text-[#3D95B4]`}>
          Question {step + 1} of {questions.length}
        </span>
        <div className="flex gap-1.5" aria-hidden="true">
          {questions.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${i < step ? "bg-[#4AC0D8]" : i === step ? "bg-[#266D82]" : "bg-[#1B1E20]/15"}`}
            />
          ))}
        </div>
      </div>
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25 }}
      >
        <h3 className="font-sans font-bold text-lg text-[#266D82]" data-testid="quiz-question">
          {q.title}
        </h3>
        <p className={`${body} text-base leading-relaxed mt-2`}>{q.detail}</p>
        {q.fix && (
          <p className={`${body} italic text-sm leading-relaxed mt-2 text-[#1B1E20]/70`}>{q.fix}</p>
        )}
      </motion.div>
      <div className="grid grid-cols-2 gap-3 mt-6">
        <button
          type="button"
          onClick={() => answer(true)}
          className="font-sans font-semibold text-base text-[#1B1E20] bg-[#4AC0D8] rounded-full py-3.5 hover:bg-[#3D95B4] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B1E20]"
          data-testid="button-quiz-yes"
        >
          Yes
        </button>
        <button
          type="button"
          onClick={() => answer(false)}
          className="font-sans font-semibold text-base text-[#266D82] border border-[#266D82]/40 rounded-full py-3.5 hover:bg-[#266D82] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#266D82]"
          data-testid="button-quiz-no"
        >
          No
        </button>
      </div>
    </div>
  );
}

// Illustrative above-the-fold mockup (fictional business, styled in-page so
// nothing has to download). Callout chips map to the three core questions.
function AboveTheFoldExample() {
  const chip = (n: number) => (
    <span
      className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#266D82] text-white font-sans font-bold text-[11px] flex-none"
      aria-hidden="true"
    >
      {n}
    </span>
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,240px)_1fr] gap-6 items-center">
      {/* Phone frame */}
      <div className="mx-auto w-full max-w-[240px]">
        <div className="rounded-[2rem] border-[6px] border-[#1B1E20] bg-white overflow-hidden shadow-lg">
          <div className="bg-[#1B1E20] h-5 flex justify-center items-end pb-1" aria-hidden="true">
            <span className="w-14 h-1.5 bg-white/25 rounded-full" />
          </div>
          <div className="px-4 pt-3 pb-4 text-left">
            <div className="flex justify-between items-center">
              <span className="font-display italic text-[13px] text-[#1B1E20]">Sweet Layer</span>
              <span className="text-[#1B1E20]/40 text-xs" aria-hidden="true">
                ☰
              </span>
            </div>
            <p className="font-sans font-extrabold text-[19px] leading-snug text-[#1B1E20] mt-4">
              Custom cakes for Houston weddings
            </p>
            <p className="font-['Lora',_Georgia,_serif] text-[12px] leading-relaxed text-[#1B1E20]/70 mt-2">
              For couples who want a centerpiece as memorable as the day itself.
            </p>
            <span className="block w-full rounded-full bg-[#4AC0D8] text-center font-sans font-bold text-[13px] text-[#1B1E20] py-2.5 mt-4">
              Book a tasting
            </span>
            <div className="rounded-lg bg-[#F4F7F8] h-16 mt-4" aria-hidden="true" />
          </div>
        </div>
      </div>
      {/* Legend */}
      <ul className="flex flex-col gap-3">
        {[
          ["WHAT they do is the biggest text on the page.", 1],
          ["WHO it's for shows up in the very next line.", 2],
          ["WHAT TO DO NEXT is one unmissable, thumb-height button.", 3],
        ].map(([text, n]) => (
          <li key={n as number} className={`${body} text-base leading-relaxed flex gap-3 items-baseline`}>
            {chip(n as number)}
            <span>{text}</span>
          </li>
        ))}
        <li className={`${body} text-sm leading-relaxed text-[#1B1E20]/60 mt-1`}>
          (And the whole thing is light enough to load in under 3 seconds.)
        </li>
      </ul>
    </div>
  );
}

function Checklist() {
  const [checked, setChecked] = useState<boolean[]>(() => questions.map(() => false));
  const [copied, setCopied] = useState(false);

  const toggle = (i: number) =>
    setChecked((prev) => prev.map((c, j) => (j === i ? !c : c)));

  const share = async () => {
    const url = "https://elevategrowth.solutions/5secondtest";
    const nav = navigator as Navigator & { share?: (data: { title: string; url: string }) => Promise<void> };
    try {
      if (nav.share) {
        await nav.share({ title: "The 5-Second Website Test", url });
        return;
      }
    } catch {
      // fall through to clipboard (for example, if the user dismissed the sheet)
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // clipboard unavailable; nothing else to do
    }
  };

  return (
    <div id="print-checklist">
      <ul className="flex flex-col gap-3">
        {questions.map((q, i) => (
          <li key={q.title}>
            <label className="flex gap-3.5 items-start bg-white border border-[#3D95B4]/30 rounded-xl p-4 cursor-pointer">
              <input
                type="checkbox"
                checked={checked[i]}
                onChange={() => toggle(i)}
                className="mt-1 w-5 h-5 accent-[#266D82] flex-none"
                data-testid={`checkbox-checklist-${i}`}
              />
              <span>
                <span className="font-sans font-bold text-base text-[#266D82] block">
                  {q.title}
                </span>
                <span className={`${body} text-sm leading-relaxed block mt-1`}>{q.detail}</span>
                {q.fix && (
                  <span className={`${body} italic text-sm leading-relaxed block mt-1 text-[#1B1E20]/70`}>
                    {q.fix}
                  </span>
                )}
              </span>
            </label>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-3 mt-5 print:hidden">
        <button
          type="button"
          onClick={share}
          className="font-sans font-semibold text-sm text-[#1B1E20] bg-[#4AC0D8] rounded-full px-6 py-3 hover:bg-[#3D95B4] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B1E20]"
          data-testid="button-checklist-share"
        >
          {copied ? "Link copied!" : "Share the checklist"}
        </button>
        <button
          type="button"
          onClick={() => window.print()}
          className="font-sans font-semibold text-sm text-[#266D82] border border-[#266D82]/40 rounded-full px-6 py-3 hover:bg-[#266D82] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#266D82]"
          data-testid="button-checklist-print"
        >
          Print it
        </button>
      </div>
    </div>
  );
}

export default function FiveSecondTest() {
  useEffect(() => {
    document.title = "The 5-Second Test | Elevate Growth Solutions";
  }, []);

  return (
    <main className="min-h-screen bg-[#F4F7F8] overflow-x-hidden">
      {/* Printing keeps only the checklist section, so it fits one sheet. */}
      <style>{`@media print {
        .print-hide { display: none !important; }
        #checklist { padding: 0 !important; }
        body { background: white !important; }
      }`}</style>

      {/* HERO */}
      <header className="print-hide relative bg-[#266D82] px-5 pt-16 pb-14 sm:pt-24 sm:pb-20 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#4AC0D8]/25 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-16 w-72 h-72 bg-[#1B1E20]/30 rounded-full blur-3xl" />
        </div>
        <motion.div
          className="relative max-w-xl mx-auto"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={`${eyebrow} text-[#4AC0D8] block mb-5`}>From Tysen's talk</span>
          <h1 className="font-display font-medium text-[2.6rem] sm:text-6xl leading-[1.1] text-white">
            The <em className="italic text-[#4AC0D8]">5-Second</em> Test
          </h1>
          <p className="font-['Lora',_Georgia,_serif] text-lg leading-relaxed text-[#F4F7F8]/90 mt-6">
            A stranger just landed on your website. They'll decide whether to stay or leave before
            you finish reading this sentence. Here's the ultimate website checklist: keep it,
            re-run it every quarter, and send it to a friend who might need it too!
          </p>
        </motion.div>
      </header>

      {/* QUIZ */}
      <section className="print-hide px-5 py-12 sm:py-16" aria-labelledby="quiz-heading">
        <div className="max-w-xl mx-auto">
          <AnimateOnScroll amount={0.2}>
            <span className={`${eyebrow} text-[#3D95B4] block mb-3`}>Take the test</span>
            <h2
              id="quiz-heading"
              className="font-display font-medium text-2xl sm:text-3xl leading-snug text-[#1B1E20] [text-wrap:balance]"
            >
              Open your homepage on your phone. Set a 5-second timer.{" "}
              <em className="italic text-[#266D82]">Then answer honestly:</em>
            </h2>
          </AnimateOnScroll>
          <div className="mt-6">
            <Quiz />
          </div>
        </div>
      </section>

      {/* WHAT GOOD LOOKS LIKE */}
      <section className="print-hide bg-white px-5 py-12 sm:py-16" aria-labelledby="example-heading">
        <AnimateOnScroll className="max-w-xl mx-auto" amount={0.15}>
          <span className={`${eyebrow} text-[#3D95B4] block mb-3`}>What good looks like</span>
          <h2
            id="example-heading"
            className="font-display font-medium text-2xl sm:text-3xl text-[#1B1E20] [text-wrap:balance] mb-6"
          >
            An above-the-fold that{" "}
            <em className="italic text-[#266D82]">grabs and keeps attention</em>
          </h2>
          <AboveTheFoldExample />
        </AnimateOnScroll>
      </section>

      {/* CHECKLIST */}
      <section id="checklist" className="px-5 py-12 sm:py-16 scroll-mt-6" aria-labelledby="checklist-heading">
        <div className="max-w-xl mx-auto">
          <AnimateOnScroll amount={0.1}>
            <span className={`${eyebrow} text-[#3D95B4] block mb-3 print:hidden`}>Keep it forever</span>
            <h2
              id="checklist-heading"
              className="font-display font-medium text-2xl sm:text-3xl text-[#1B1E20] mb-6"
            >
              The 5-Second <em className="italic text-[#266D82]">website checklist</em>
            </h2>
            <Checklist />
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA BLOCK */}
      <section
        className="print-hide relative bg-[#1B1E20] px-5 py-14 sm:py-20 text-center overflow-hidden"
        aria-labelledby="cta-heading"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#266D82]/40 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-[#4AC0D8]/15 rounded-full blur-3xl" />
        </div>
        <AnimateOnScroll className="relative max-w-xl mx-auto" amount={0.2}>
          <h2 id="cta-heading" className="font-display font-medium text-3xl sm:text-4xl text-white">
            Scored lower than <em className="italic text-[#4AC0D8]">you'd like?</em>
          </h2>
          <p className="font-['Lora',_Georgia,_serif] text-base leading-relaxed text-[#F4F7F8]/90 mt-5">
            That's exactly what your conference perk is for. As a WISE WOMEN attendee, you have{" "}
            <strong className="font-semibold text-[#4AC0D8]">
              $300 toward a custom website build or growth retainer
            </strong>
            . Claim it by October 17, 2026, and let's make your website your hardest-working
            employee.
          </p>
          <Link href="/wisewomen" className={`${buttonClass} mt-7`} data-testid="button-5secondtest-cta">
            Claim My $300 Credit
          </Link>
          <p className="font-['Lora',_Georgia,_serif] text-sm text-[#F4F7F8]/70 mt-4">
            Or just take the checklist and run. It's yours either way. That's the deal.
          </p>
          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="font-['Lora',_Georgia,_serif] text-base text-[#F4F7F8]/70">
              Curious what a website like this could look like for your business?
            </p>
            <a
              href="/"
              className="inline-block font-sans font-semibold text-sm tracking-[0.08em] uppercase text-[#4AC0D8] border border-[#4AC0D8]/60 rounded-full px-6 py-3 mt-4 hover:bg-[#4AC0D8] hover:text-[#1B1E20] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4AC0D8]"
              data-testid="link-5secondtest-main-site"
            >
              Explore Elevate Growth Solutions
            </a>
          </div>
        </AnimateOnScroll>
      </section>

      {/* FOOTER */}
      <footer className="print-hide px-5 py-8 text-center">
        <p className={`${body} text-sm text-[#1B1E20]/70`}>
          Made with love (and a timer) by Tysen Creager · Elevate Growth Solutions
          <br />
          elevategrowth.solutions
        </p>
      </footer>
    </main>
  );
}
