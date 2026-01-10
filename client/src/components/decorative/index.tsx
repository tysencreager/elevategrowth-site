import { motion } from "framer-motion";

// ============================================
// DECORATIVE COMPONENTS
// Shared visual effects for consistent site-wide styling
// ============================================

// Bokeh/light spots background effect
export function BokehEffect({ className = "", opacity = 0.6 }: { className?: string; opacity?: number }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} style={{ opacity }}>
      {/* Large soft bokeh circles */}
      <div className="absolute top-[10%] left-[5%] w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
      <div className="absolute top-[15%] right-[15%] w-48 h-48 bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute top-[50%] left-[20%] w-24 h-24 bg-primary/25 rounded-full blur-xl" />
      <div className="absolute top-[60%] right-[8%] w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
      <div className="absolute top-[80%] left-[40%] w-36 h-36 bg-primary/15 rounded-full blur-2xl" />

      {/* Medium bokeh spots */}
      <div className="absolute top-[25%] left-[45%] w-20 h-20 bg-primary/20 rounded-full blur-xl" />
      <div className="absolute top-[35%] right-[30%] w-16 h-16 bg-primary/25 rounded-full blur-lg" />
      <div className="absolute top-[70%] left-[10%] w-28 h-28 bg-primary/15 rounded-full blur-2xl" />
      <div className="absolute top-[45%] right-[45%] w-14 h-14 bg-primary/20 rounded-full blur-lg" />

      {/* Small accent spots */}
      <div className="absolute top-[20%] left-[70%] w-10 h-10 bg-primary/30 rounded-full blur-md" />
      <div className="absolute top-[55%] left-[55%] w-8 h-8 bg-primary/25 rounded-full blur-md" />
      <div className="absolute top-[75%] right-[25%] w-12 h-12 bg-primary/20 rounded-full blur-lg" />
      <div className="absolute top-[40%] left-[8%] w-10 h-10 bg-primary/25 rounded-full blur-md" />
      <div className="absolute top-[85%] right-[60%] w-8 h-8 bg-primary/30 rounded-full blur-md" />
    </div>
  );
}

// Gradient fade transition between sections
export function GradientTransition({
  from = "transparent",
  to = "transparent",
  height = "120px",
  className = "",
  position = "bottom"
}: {
  from?: string;
  to?: string;
  height?: string;
  className?: string;
  position?: "top" | "bottom";
}) {
  return (
    <div
      className={`absolute left-0 right-0 pointer-events-none ${position === "top" ? "top-0" : "bottom-0"} ${className}`}
      style={{
        height,
        background: `linear-gradient(to ${position === "top" ? "top" : "bottom"}, ${from}, ${to})`
      }}
    />
  );
}

// Wave divider SVG component
export function WaveDivider({
  position = "bottom",
  fillColor = "var(--background)",
  className = ""
}: {
  position?: "top" | "bottom";
  fillColor?: string;
  className?: string;
}) {
  const isTop = position === "top";

  return (
    <div
      className={`absolute left-0 right-0 w-full overflow-hidden leading-none ${
        isTop ? 'top-0 rotate-180' : 'bottom-0'
      } ${className}`}
      style={{ height: '60px' }}
    >
      <svg
        className="relative block w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          fill={fillColor}
          opacity="0.25"
        />
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          fill={fillColor}
          opacity="0.5"
        />
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}

// Curved divider (gentler curve)
export function CurvedDivider({
  position = "bottom",
  fillColor = "var(--background)",
  className = ""
}: {
  position?: "top" | "bottom";
  fillColor?: string;
  className?: string;
}) {
  const isTop = position === "top";

  return (
    <div
      className={`absolute left-0 right-0 w-full overflow-hidden leading-none ${
        isTop ? 'top-0 rotate-180' : 'bottom-0'
      } ${className}`}
      style={{ height: '80px' }}
    >
      <svg
        className="relative block w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}

// Floating decorative orbs with animation
export function FloatingOrbs({ variant = "light" }: { variant?: "light" | "primary" }) {
  const floatingVariants = {
    animate: {
      y: [-15, 15, -15],
      x: [-5, 5, -5],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingVariants2 = {
    animate: {
      y: [10, -20, 10],
      x: [5, -5, 5],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingVariants3 = {
    animate: {
      y: [-20, 10, -20],
      x: [-8, 8, -8],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const baseColor = "bg-primary";
  const opacityLow = variant === "primary" ? "opacity-20" : "opacity-[0.08]";
  const opacityMed = variant === "primary" ? "opacity-25" : "opacity-[0.12]";
  const opacityHigh = variant === "primary" ? "opacity-30" : "opacity-[0.15]";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className={`absolute top-[10%] left-[5%] w-64 h-64 ${baseColor} ${opacityMed} rounded-full blur-3xl`}
      />
      <motion.div
        variants={floatingVariants2}
        animate="animate"
        className={`absolute top-[60%] right-[10%] w-96 h-96 ${baseColor} ${opacityLow} rounded-full blur-3xl`}
      />
      <motion.div
        variants={floatingVariants3}
        animate="animate"
        className={`absolute top-[30%] right-[20%] w-48 h-48 ${baseColor} ${opacityHigh} rounded-full blur-2xl`}
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className={`absolute bottom-[20%] left-[15%] w-72 h-72 ${baseColor} ${opacityLow} rounded-full blur-3xl`}
      />
    </div>
  );
}
