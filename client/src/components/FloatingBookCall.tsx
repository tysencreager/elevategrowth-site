import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const BOOKING_URL = "https://calendar.app.google/vDHVT1u28utXTzLt5";

interface FloatingBookCallProps {
  /** When true, add extra bottom spacing on mobile to avoid overlapping sticky bar */
  stickyBarVisible?: boolean;
}

export default function FloatingBookCall({ stickyBarVisible = false }: FloatingBookCallProps) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Let the pulse play for 3 seconds, then stop
    const timer = setTimeout(() => setHasAnimated(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // On mobile with sticky bar, push button above the bar (~60px)
  const mobileOffset = isMobile && stickyBarVisible ? "bottom-[72px]" : "bottom-6";

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed right-5 z-50 flex items-center gap-2 bg-[#266D82] text-white pl-4 pr-5 py-3 rounded-full shadow-lg hover:bg-[#1e5a6b] transition-all duration-300 hover:shadow-xl group ${mobileOffset} ${
        !hasAnimated ? "animate-pulse-subtle" : ""
      }`}
      aria-label="Book a call"
    >
      <Calendar className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
      <span className="font-sans font-medium text-sm whitespace-nowrap">Book a Call</span>

      {/* Inline keyframes for the initial pulse ring effect */}
      <style>{`
        @keyframes pulse-subtle {
          0%, 100% { box-shadow: 0 0 0 0 rgba(38, 109, 130, 0.5); }
          50% { box-shadow: 0 0 0 10px rgba(38, 109, 130, 0); }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 1.5s ease-in-out infinite;
        }
      `}</style>
    </a>
  );
}
