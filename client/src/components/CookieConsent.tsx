import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "egs-cookie-consent";
const GA_ID = "G-491QRPXXSH";

function applyConsent(choice: string) {
  if (choice === "declined") {
    // Disable Google Analytics collection
    (window as any)[`ga-disable-${GA_ID}`] = true;
    // Ask Microsoft Clarity to stop (no-op if unavailable)
    try {
      (window as any).clarity?.("consent", false);
    } catch {
      /* clarity not loaded */
    }
  } else {
    try {
      (window as any).clarity?.("consent");
    } catch {
      /* clarity not loaded */
    }
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      applyConsent(stored);
    } else {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const choose = (choice: "accepted" | "declined") => {
    localStorage.setItem(STORAGE_KEY, choice);
    applyConsent(choice);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-[100] bg-[#0E1D22] border border-white/10 p-6 shadow-2xl"
          role="dialog"
          aria-label="Cookie consent"
          data-testid="banner-cookie-consent"
        >
          <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#4AC0D8] mb-3">
            Cookies &amp; Privacy
          </p>
          <p className="font-serif font-light text-sm leading-relaxed text-white/70 mb-5">
            We use cookies to understand how visitors use our site and to improve your experience.
            You can accept or decline analytics cookies—declining won't change how the site works.{" "}
            <Link href="/privacy-policy" className="text-[#4AC0D8] hover:underline">
              Privacy Policy
            </Link>
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => choose("accepted")}
              className="font-sans text-[10px] font-medium tracking-[0.2em] uppercase bg-primary text-primary-foreground px-6 py-3 hover:bg-white hover:text-foreground transition-colors"
              data-testid="button-cookie-accept"
            >
              Accept
            </button>
            <button
              onClick={() => choose("declined")}
              className="font-sans text-[10px] font-medium tracking-[0.2em] uppercase border border-white/30 text-white/80 px-6 py-3 hover:border-white hover:text-white transition-colors"
              data-testid="button-cookie-decline"
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
