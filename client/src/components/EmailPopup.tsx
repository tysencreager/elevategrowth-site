import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Mail, CheckCircle } from "lucide-react";

const POPUP_STORAGE_KEY = "egs-popup-shown";
const POPUP_DELAY_MS = 15000; // 15 seconds - delayed to not impact PageSpeed metrics

export default function EmailPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if popup has already been shown
    const hasShown = localStorage.getItem(POPUP_STORAGE_KEY);
    if (hasShown) return;

    let hasTriggered = false;

    const showPopup = () => {
      if (!hasTriggered) {
        hasTriggered = true;
        setIsVisible(true);
      }
    };

    // Show popup after delay OR after user scrolls 50% of viewport
    const timer = setTimeout(showPopup, POPUP_DELAY_MS);

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 30) {
        showPopup();
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem(POPUP_STORAGE_KEY, "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          source: "popup"
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        localStorage.setItem(POPUP_STORAGE_KEY, "true");
        setTimeout(() => {
          setIsVisible(false);
        }, 2500);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in duration-300">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors rounded-full hover:bg-gray-100"
          aria-label="Close popup"
        >
          <X className="w-6 h-6" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-4">
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-2">
              You're In!
            </h2>
            <p className="font-serif text-gray-600">
              Thanks for subscribing. We'll be in touch with marketing insights and tips.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-semibold text-gray-900 mb-2">
                Stay Ahead of the Curve
              </h2>
              <p className="font-serif text-gray-600">
                Get exclusive marketing insights, tips, and strategies delivered straight to your inbox.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="font-serif"
              />

              {error && (
                <p className="text-red-500 text-sm font-serif">{error}</p>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full font-serif font-medium"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>

              <p className="text-xs text-gray-600 text-center font-serif">
                No spam, ever. Unsubscribe anytime.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
