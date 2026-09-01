import { useEffect } from "react";
import { Link } from "wouter";

/**
 * Hidden companion page for Tysen's 10-minute WISE WOMEN talk — the
 * audience types the URL from a slide (or scans a QR) on their phones in
 * the room. Noindexed, excluded from the sitemap, and its only internal
 * link points to /wisewomen; nothing on the public site links here.
 */

const heading = "font-sans text-[#1B1E20]";
const body = "font-['Lora',_Georgia,_serif] text-[#1B1E20]";

const buttonClass =
  "inline-block font-sans font-semibold text-base text-[#1B1E20] bg-[#4AC0D8] rounded-full px-8 py-4 text-center hover:bg-[#3D95B4] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B1E20] focus-visible:ring-offset-2";

const checks = [
  {
    title: "1. Can a stranger tell WHAT you do?",
    detail: (
      <>
        Not your tagline — your actual service. "Empowering transformation" fails. "Custom cakes
        for Houston weddings" passes.
      </>
    ),
    fix: "Quick fix: put your plain-English answer in the biggest text on the page.",
  },
  {
    title: "2. Can she tell WHO it's for?",
    detail: (
      <>
        If everyone is your customer, no one feels like your customer. Your dream client should see
        herself in the first screen.
      </>
    ),
    fix: "Quick fix: name your person — “for busy families,” “for women-owned firms,” “for contractors.”",
  },
  {
    title: "3. Does she know WHAT TO DO NEXT?",
    detail: (
      <>
        One obvious button. Book, call, get a quote — pick one and make it unmissable.
      </>
    ),
    fix: "Quick fix: one high-contrast button in the top section. Not three. One.",
  },
  {
    title: "Bonus check #1 — The load test.",
    detail: (
      <>
        Did your site open in under 3 seconds on your phone? If you had time to look around the
        room, that's a no — and half your visitors already left.
      </>
    ),
  },
  {
    title: "Bonus check #2 — The thumb test.",
    detail: (
      <>
        Can you reach your contact/book button with one thumb, without pinching or zooming? Your
        clients are on their phones. Your website should act like it.
      </>
    ),
  },
];

const scores = [
  {
    label: "5/5 — Your website is pulling its weight.",
    detail: "Genuinely — well done. Now let's talk about whether Google can find it.",
  },
  {
    label: "3–4 — Close, but leaking.",
    detail:
      "You're losing a slice of every dollar you spend getting people to a page that doesn't convert them.",
  },
  {
    label: "0–2 — Your website is costing you clients.",
    detail:
      "The good news: this is the single highest-leverage fix in your business, and it's fixable fast.",
  },
];

export default function FiveSecondTest() {
  useEffect(() => {
    document.title = "The 5-Second Test | Elevate Growth Solutions";
  }, []);

  return (
    <main className="min-h-screen bg-[#F4F7F8]">
      {/* HERO */}
      <header className="bg-[#266D82] px-5 pt-14 pb-12 sm:pt-20 sm:pb-16 text-center">
        <div className="max-w-xl mx-auto">
          <h1 className="font-sans font-extrabold text-4xl sm:text-5xl leading-tight text-white">
            The <span className="text-[#4AC0D8]">5-Second</span> Test
          </h1>
          <p className="font-['Lora',_Georgia,_serif] text-lg leading-relaxed text-[#F4F7F8] mt-5">
            A stranger just landed on your website. She'll decide whether to stay or leave before
            you finish reading this sentence. Here's the checklist we ran together in Houston —
            keep it, re-run it every quarter, and send it to a friend whose website needs the
            truth.
          </p>
        </div>
      </header>

      {/* THE TEST */}
      <section className="px-5 py-10 sm:py-14" aria-labelledby="test-heading">
        <div className="max-w-xl mx-auto">
          <h2 id="test-heading" className={`${heading} font-semibold text-xl sm:text-2xl leading-snug`}>
            Open your homepage on your phone. Set a 5-second timer. Then answer honestly:
          </h2>
          <ul className="mt-6 flex flex-col gap-4">
            {checks.map((check) => (
              <li
                key={check.title}
                className="bg-white border border-[#3D95B4]/30 rounded-xl p-5"
              >
                <h3 className="font-sans font-bold text-base text-[#266D82]">{check.title}</h3>
                <p className={`${body} text-base leading-relaxed mt-2`}>{check.detail}</p>
                {check.fix && (
                  <p className={`${body} italic text-sm leading-relaxed mt-2 text-[#1B1E20]/70`}>
                    {check.fix}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SCORING */}
      <section className="bg-white px-5 py-10 sm:py-14" aria-labelledby="scoring-heading">
        <div className="max-w-xl mx-auto">
          <h2 id="scoring-heading" className="sr-only">
            Your score
          </h2>
          <div className="flex flex-col gap-5">
            {scores.map((score) => (
              <div key={score.label} className="border-l-4 border-[#4AC0D8] pl-4">
                <h3 className="font-sans font-bold text-base text-[#1B1E20]">{score.label}</h3>
                <p className={`${body} text-base leading-relaxed mt-1`}>{score.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BLOCK */}
      <section className="bg-[#1B1E20] px-5 py-12 sm:py-16 text-center" aria-labelledby="cta-heading">
        <div className="max-w-xl mx-auto">
          <h2 id="cta-heading" className="font-sans font-bold text-2xl sm:text-3xl text-white">
            Scored lower than you'd like?
          </h2>
          <p className="font-['Lora',_Georgia,_serif] text-base leading-relaxed text-[#F4F7F8] mt-4">
            That's exactly what your conference perk is for. As a WISE WOMEN attendee, you have{" "}
            <strong className="font-semibold text-[#4AC0D8]">
              $300 toward a custom website build or growth retainer
            </strong>{" "}
            — claim it by October 17, 2026, and let's make your website your hardest-working
            employee.
          </p>
          <Link href="/wisewomen" className={`${buttonClass} mt-7`} data-testid="button-5secondtest-cta">
            Claim My $300 Credit
          </Link>
          <p className="font-['Lora',_Georgia,_serif] text-sm text-[#F4F7F8]/80 mt-4">
            Or just take the checklist and run — it's yours either way. That's the deal.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-5 py-8 text-center">
        <p className={`${body} text-sm text-[#1B1E20]/70`}>
          Made with love (and a timer) by Tysen Creager · Elevate Growth Solutions
          <br />
          elevategrowth.solutions
        </p>
      </footer>
    </main>
  );
}
