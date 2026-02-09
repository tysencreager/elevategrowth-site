import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const BOOKING_URL = "https://calendar.app.google/vDHVT1u28utXTzLt5";

export default function FloatingBookCall() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Let the pulse play for 3 seconds, then stop
    const timer = setTimeout(() => setHasAnimated(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Hide entirely on mobile — the sticky CTA bar already covers booking there
  if (isMobile) return null;

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed right-5 bottom-6 z-50 flex items-center gap-2 bg-[#266D82] text-white pl-4 pr-5 py-3 rounded-full shadow-lg hover:bg-[#1e5a6b] transition-all duration-300 hover:shadow-xl group ${
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
