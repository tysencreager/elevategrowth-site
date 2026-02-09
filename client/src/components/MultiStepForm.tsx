import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Globe,
  Search,
  Share2,
  Megaphone,
  Layers,
  HelpCircle,
} from "lucide-react";

const BOOKING_URL = "https://calendar.app.google/vDHVT1u28utXTzLt5";

const SERVICE_OPTIONS = [
  { value: "website-design", label: "Website Design", icon: Globe },
  { value: "seo", label: "SEO", icon: Search },
  { value: "social-media", label: "Social Media", icon: Share2 },
  { value: "paid-ads", label: "Paid Ads", icon: Megaphone },
  { value: "full-stack-marketing", label: "Full-Stack Marketing", icon: Layers },
  { value: "not-sure", label: "Not Sure", icon: HelpCircle },
] as const;

const BUDGET_OPTIONS = [
  { value: "500-1k", label: "$500 – $1k" },
  { value: "1k-3k", label: "$1k – $3k" },
  { value: "3k-5k", label: "$3k – $5k" },
  { value: "5k+", label: "$5k+" },
] as const;

interface FormData {
  service: string;
  budget: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [formData, setFormData] = useState<FormData>({
    service: "",
    budget: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const stepContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to top of form on step change
  useEffect(() => {
    stepContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [step]);

  const goNext = () => {
    setDirection("forward");
    setStep((s) => Math.min(s + 1, 3));
  };

  const goBack = () => {
    setDirection("back");
    setStep((s) => Math.max(s - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/lead-qualify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setError(
        "Something went wrong. Please try emailing us directly at tysen@elevategrowth.solutions"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Thank-you state
  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="font-display text-2xl font-semibold text-gray-900 mb-2">
          Thanks! We'll be in touch within 24 hours.
        </h2>
        <p className="font-serif text-gray-600 mb-6">
          Want to skip the wait? Book a strategy call now and let's get started.
        </p>
        <Button asChild size="lg" className="font-serif font-medium gap-2">
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            <Calendar className="w-5 h-5" />
            Book Your Free Call
          </a>
        </Button>
      </div>
    );
  }

  const animationClass =
    direction === "forward"
      ? "animate-in fade-in slide-in-from-right-4 duration-300"
      : "animate-in fade-in slide-in-from-left-4 duration-300";

  return (
    <div ref={stepContainerRef}>
      {/* Progress bar */}
      <div className="mb-8" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={3} aria-label={`Step ${step} of 3`}>
        <div className="flex items-center justify-between mb-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-sans font-medium transition-colors duration-300 ${
                  s <= step
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {s < step ? <CheckCircle className="w-4 h-4" /> : s}
              </div>
              <span className="hidden sm:inline text-sm font-serif text-gray-600">
                {s === 1 && "Service"}
                {s === 2 && "Budget"}
                {s === 3 && "Details"}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((step - 1) / 2) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Service Selection */}
        {step === 1 && (
          <div key="step-1" className={animationClass}>
            <h3 className="font-display text-xl md:text-2xl font-semibold text-gray-900 mb-2">
              What service are you most interested in?
            </h3>
            <p className="font-serif text-gray-500 text-sm mb-6">
              Select the area where you need the most help.
            </p>

            <fieldset>
              <legend className="sr-only">Select a service</legend>
              <div className="grid grid-cols-2 gap-3">
                {SERVICE_OPTIONS.map(({ value, label, icon: Icon }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => {
                      setFormData((d) => ({ ...d, service: value }));
                      // Auto-advance after selection
                      setTimeout(goNext, 200);
                    }}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 text-center hover:border-primary/50 hover:bg-primary/5 ${
                      formData.service === value
                        ? "border-primary bg-primary/5 ring-1 ring-primary/20"
                        : "border-gray-200 bg-white"
                    }`}
                    aria-pressed={formData.service === value}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        formData.service === value ? "text-primary" : "text-gray-400"
                      }`}
                    />
                    <span
                      className={`text-sm font-serif font-medium ${
                        formData.service === value ? "text-primary" : "text-gray-700"
                      }`}
                    >
                      {label}
                    </span>
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-6 flex justify-end">
              <Button
                type="button"
                onClick={goNext}
                disabled={!formData.service}
                className="font-serif font-medium gap-2"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Budget Selection */}
        {step === 2 && (
          <div key="step-2" className={animationClass}>
            <h3 className="font-display text-xl md:text-2xl font-semibold text-gray-900 mb-2">
              What's your approximate monthly marketing budget?
            </h3>
            <p className="font-serif text-gray-500 text-sm mb-6">
              This helps us tailor a plan that fits your goals.
            </p>

            <fieldset>
              <legend className="sr-only">Select your budget range</legend>
              <div className="grid grid-cols-2 gap-3">
                {BUDGET_OPTIONS.map(({ value, label }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => {
                      setFormData((d) => ({ ...d, budget: value }));
                      setTimeout(goNext, 200);
                    }}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 text-center font-serif font-medium hover:border-primary/50 hover:bg-primary/5 ${
                      formData.budget === value
                        ? "border-primary bg-primary/5 ring-1 ring-primary/20 text-primary"
                        : "border-gray-200 bg-white text-gray-700"
                    }`}
                    aria-pressed={formData.budget === value}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-6 flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={goBack}
                className="font-serif font-medium gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
              <Button
                type="button"
                onClick={goNext}
                disabled={!formData.budget}
                className="font-serif font-medium gap-2"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Contact Details */}
        {step === 3 && (
          <div key="step-3" className={animationClass}>
            <h3 className="font-display text-xl md:text-2xl font-semibold text-gray-900 mb-2">
              Almost there — tell us about yourself.
            </h3>
            <p className="font-serif text-gray-500 text-sm mb-6">
              We'll use this to prepare a custom plan for your business.
            </p>

            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="msf-name" className="font-serif">
                    Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="msf-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
                    placeholder="Your name"
                    className="font-serif"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="msf-email" className="font-serif">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="msf-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
                    placeholder="your@email.com"
                    className="font-serif"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="msf-phone" className="font-serif">
                  Phone Number
                </Label>
                <Input
                  id="msf-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData((d) => ({ ...d, phone: e.target.value }))}
                  placeholder="(555) 123-4567"
                  className="font-serif"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="msf-message" className="font-serif">
                  Tell us about your business
                </Label>
                <Textarea
                  id="msf-message"
                  value={formData.message}
                  onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
                  placeholder="What are your goals? What challenges are you facing?"
                  rows={4}
                  className="font-serif resize-none"
                />
              </div>
            </div>

            {error && (
              <div
                className="mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg font-serif text-sm"
                role="alert"
              >
                {error}
              </div>
            )}

            <div className="mt-6 flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={goBack}
                className="font-serif font-medium gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting || !formData.name || !formData.email}
                className="font-serif font-medium gap-2"
              >
                {isSubmitting ? "Submitting..." : "Get My Custom Plan"}
                {!isSubmitting && <ArrowRight className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
