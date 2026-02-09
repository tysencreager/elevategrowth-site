import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const SESSION_KEY = "egs-sticky-bar-dismissed";
const BOOKING_URL = "https://calendar.app.google/vDHVT1u28utXTzLt5";

interface StickyCTABarProps {
  /** When true, the bar hides to avoid conflict with the popup modal */
  hidden?: boolean;
}

export default function StickyCTABar({ hidden = false }: StickyCTABarProps) {
  const [isDismissed, setIsDismissed] = useState(true); // start hidden until we check
  const isMobile = useIsMobile();

  useEffect(() => {
    const dismissed = sessionStorage.getItem(SESSION_KEY);
    setIsDismissed(!!dismissed);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem(SESSION_KEY, "1");
  };

  if (isDismissed || hidden) return null;

  return (
    <div
      className={`fixed z-40 left-0 right-0 animate-in ${
        isMobile ? "bottom-0 slide-in-from-bottom" : "top-20 slide-in-from-top"
      } duration-500`}
      role="complementary"
      aria-label="Book a free strategy call"
    >
      <div className="bg-[#266D82] text-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <p className="font-serif text-sm md:text-base flex-1 min-w-0">
            Ready to grow? Let's talk strategy — it's free.
          </p>

          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              asChild
              size="sm"
              className="bg-white text-[#266D82] hover:bg-gray-100 font-serif font-medium text-sm whitespace-nowrap"
            >
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Your Free Call
              </a>
            </Button>

            <button
              onClick={handleDismiss}
              className="p-1.5 min-w-[36px] min-h-[36px] flex items-center justify-center text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
