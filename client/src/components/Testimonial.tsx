interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

export default function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-accent/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <blockquote className="space-y-6">
          <p className="font-serif italic text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed" data-testid="text-testimonial-quote">
            "{quote}"
          </p>
          <footer className="font-sans">
            <cite className="not-italic">
              <p className="text-lg md:text-xl text-muted-foreground" data-testid="text-testimonial-author">
                - {author}, {role}
              </p>
            </cite>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
