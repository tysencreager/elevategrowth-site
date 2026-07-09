interface ClientMarqueeProps {
  names: string[];
  label?: string;
}

export default function ClientMarquee({ names, label = "Trusted by growing businesses" }: ClientMarqueeProps) {
  const row = (ariaHidden: boolean) => (
    <ul className="flex items-center" aria-hidden={ariaHidden}>
      {names.map((name, i) => (
        <li
          key={`${name}-${i}`}
          className="flex items-center gap-11 whitespace-nowrap px-5 font-display italic text-[19px] text-muted-foreground/80"
        >
          {name}
          <span className="text-[#4AC0D8] not-italic" aria-hidden="true">
            ·
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="relative overflow-hidden border-y border-border bg-background py-5" aria-label={label}>
      <span className="absolute top-1/2 left-0 -translate-y-1/2 z-10 hidden sm:block bg-background border-r border-border px-6 py-2.5 font-sans text-[9.5px] tracking-[0.25em] uppercase text-primary whitespace-nowrap">
        {label}
      </span>
      <span className="block sm:hidden px-4 pb-3 font-sans text-[9.5px] tracking-[0.25em] uppercase text-primary">
        {label}
      </span>
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
