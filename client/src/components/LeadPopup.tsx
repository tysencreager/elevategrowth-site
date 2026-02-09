import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, ClipboardCheck, CheckCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const COOKIE_NAME = "egs-lead-popup-dismissed";
const COOKIE_DAYS = 7;
const SCROLL_THRESHOLD = 60; // percentage

/** Set a cookie with an expiry in days */
function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
}

/** Read a cookie by name */
function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

interface LeadPopupProps {
  /** Called when the popup opens — used to coordinate with sticky bar */
  onOpen?: () => void;
  /** Called when the popup closes */
  onClose?: () => void;
}

export default function LeadPopup({ onOpen, onClose }: LeadPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const isMobile = useIsMobile();
  const hasTriggered = useRef(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const dismiss = useCallback(() => {
    setIsVisible(false);
    setCookie(COOKIE_NAME, "1", COOKIE_DAYS);
    onClose?.();
    // Restore focus to previously focused element
    previousFocusRef.current?.focus();
  }, [onClose]);

  const showPopup = useCallback(() => {
    if (hasTriggered.current) return;
    hasTriggered.current = true;
    previousFocusRef.current = document.activeElement as HTMLElement;
    setIsVisible(true);
    onOpen?.();
  }, [onOpen]);

  // Focus trap and keyboard handling
  useEffect(() => {
    if (!isVisible) return;

    // Focus the close button when modal opens
    requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dismiss();
        return;
      }
      // Focus trap
      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll while modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isVisible, dismiss]);

  // Scroll trigger + exit-intent trigger
  useEffect(() => {
    if (getCookie(COOKIE_NAME)) return;

    // Scroll trigger (works on both mobile and desktop)
    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > SCROLL_THRESHOLD) {
        showPopup();
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Exit-intent trigger (desktop only — mouseleave from viewport top)
    let exitHandler: ((e: MouseEvent) => void) | null = null;
    if (!isMobile) {
      exitHandler = (e: MouseEvent) => {
        if (e.clientY <= 0) {
          showPopup();
          document.removeEventListener("mouseout", exitHandler!);
        }
      };
      document.addEventListener("mouseout", exitHandler);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (exitHandler) document.removeEventListener("mouseout", exitHandler);
    };
  }, [isMobile, showPopup]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "lead_popup_checklist" }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setCookie(COOKIE_NAME, "1", COOKIE_DAYS);
        setTimeout(dismiss, 3000);
      } else {
        throw new Error("Subscription failed");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Free Marketing Audit Checklist"
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in-95 duration-300"
      >
        {/* Close button */}
        <button
          ref={closeButtonRef}
          onClick={dismiss}
          className="absolute top-4 right-4 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors rounded-full hover:bg-gray-100"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-4">
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-2">
              It's on the way!
            </h2>
            <p className="font-serif text-gray-600">
              Check your inbox — your free Marketing Audit Checklist will arrive shortly.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClipboardCheck className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                Free Marketing Audit Checklist
              </h2>
              <p className="font-serif text-gray-600 leading-relaxed">
                Find out exactly what's holding your business back online — in 5 minutes.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="lead-popup-email" className="sr-only">
                  Email address
                </label>
                <Input
                  id="lead-popup-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="font-serif text-base py-3"
                  aria-describedby="lead-popup-privacy"
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm font-serif" role="alert">
                  {error}
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full font-serif font-medium text-base py-3"
              >
                {isSubmitting ? "Sending..." : "Send Me the Checklist"}
              </Button>

              <p
                id="lead-popup-privacy"
                className="text-xs text-gray-500 text-center font-serif"
              >
                No spam, ever. Unsubscribe anytime.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
