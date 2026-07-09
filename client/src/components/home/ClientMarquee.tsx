const clientNames = [
  "Dressler Detours",
  "Julian Speaks Life",
  "Blaze Collective",
  "The Body Shop Gym",
  "Voyant Legal",
  "The Rigby Financial Group",
  "So Crystal Designs",
  "Lex Legal LLC",
  "TruPath Home Loans",
  "Dial-In Construction",
  "Ceron Building Solutions",
  "Chanel Scott Production House",
  "Solenne Services",
  "Mac & Meadow Co.",
  "J Penn Planning",
  "Gardner Energy",
  "The Cheministry Network",
  "Divine Money Mastery"
];

const rowA = clientNames.filter((_, i) => i % 2 === 0);
const rowB = clientNames.filter((_, i) => i % 2 === 1);

interface ClientMarqueeProps {
  label?: string;
}

function MarqueeRow({ names, reverse }: { names: string[]; reverse?: boolean }) {
  const list = (ariaHidden: boolean) => (
    <ul className="flex items-center" aria-hidden={ariaHidden}>
      {names.map((name, i) => (
        <li
          key={`${name}-${i}`}
          className={`flex items-center gap-10 whitespace-nowrap px-5 transition-colors hover:text-primary ${
            i % 2 === 0
              ? "font-display italic text-[21px] text-foreground/70"
              : "font-sans text-[12px] tracking-[0.3em] uppercase text-muted-foreground/70"
          }`}
        >
          {name}
          <span className="text-[#4AC0D8] not-italic tracking-normal" aria-hidden="true">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={`flex w-max hover:[animation-play-state:paused] motion-reduce:animate-none ${
        reverse ? "animate-marquee [animation-direction:reverse]" : "animate-marquee"
      }`}
    >
      {list(false)}
      {list(true)}
    </div>
  );
}

export default function ClientMarquee({ label = "Trusted by growing businesses" }: ClientMarqueeProps) {
  return (
    <div className="relative overflow-hidden border-y border-border bg-background" aria-label={label}>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 z-10 bg-gradient-to-r from-background to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 z-10 bg-gradient-to-l from-background to-transparent" aria-hidden="true" />

      <p className="text-center pt-6 pb-4 font-sans text-[9.5px] tracking-[0.35em] uppercase text-primary">
        {label}
      </p>
      <div className="flex flex-col gap-4 pb-7">
        <MarqueeRow names={rowA} />
        <MarqueeRow names={rowB} reverse />
      </div>
    </div>
  );
}
