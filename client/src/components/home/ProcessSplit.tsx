import { motion } from "framer-motion";

interface Step {
  title: string;
  description: string;
}

interface ProcessSplitProps {
  image: string;
  imageAlt: string;
  steps: Step[];
}

export default function ProcessSplit({ image, imageAlt, steps }: ProcessSplitProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2" id="process">
      <div className="relative min-h-[340px] md:min-h-[560px] overflow-hidden flex items-center justify-center text-center p-14">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(150deg, rgba(38,109,130,.55), rgba(19,34,38,.42))"
          }}
          aria-hidden="true"
        />
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display font-normal text-[clamp(30px,3.4vw,44px)] text-white mb-3">
            How we <em className="italic">work.</em>
          </h2>
          <p className="font-sans text-[10.5px] tracking-[0.3em] uppercase text-white/75">
            A simple, proven approach
          </p>
        </motion.div>
      </div>

      <div className="bg-muted px-6 py-12 md:px-[7%] md:py-16 flex flex-col justify-center gap-9">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            className="flex gap-5 items-start"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-display italic text-[30px] leading-tight text-[#3D95B4] w-11 flex-none">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display font-medium text-xl text-foreground mb-1.5">{step.title}</h3>
              <p className="font-serif font-light text-[14.5px] leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
