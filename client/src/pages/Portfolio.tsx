import { useEffect } from "react";

export default function Portfolio() {
  useEffect(() => {
    window.location.href = "https://tysencreager.com/portfolio";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <p className="font-serif text-xl text-muted-foreground">
          Redirecting to portfolio...
        </p>
      </div>
    </div>
  );
}
