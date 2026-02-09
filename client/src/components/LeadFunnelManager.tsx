import { useState } from "react";
import LeadPopup from "@/components/LeadPopup";
import StickyCTABar from "@/components/StickyCTABar";
import FloatingBookCall from "@/components/FloatingBookCall";

/**
 * Coordinates the lead funnel components so they don't conflict:
 * - Popup and sticky bar never show simultaneously
 * - Floating button adjusts position based on sticky bar visibility
 */
export default function LeadFunnelManager() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <LeadPopup
        onOpen={() => setPopupOpen(true)}
        onClose={() => setPopupOpen(false)}
      />
      <StickyCTABar hidden={popupOpen} />
      <FloatingBookCall stickyBarVisible={!popupOpen} />
    </>
  );
}
