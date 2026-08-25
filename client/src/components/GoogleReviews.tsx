import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const googleReviews = [
  {
    quote: "I cannot say enough good things about Tysen. She created my website for Mac and Meadow Tallow, and it turned out more beautiful than I ever imagined it could be. Her vision is truly something special. She put so much thought, detail, and care into every part of the site, and it shows. Working with Tysen was beyond amazing from start to finish, and I'm so grateful for her. Honestly, she played a huge role in getting my business off the ground. If you're looking for someone with incredible vision, professionalism, and heart to help you with your website, SEO, marketing, socials etc., Tysen is IT.",
    author: "McKenzie",
    timeAgo: "4 weeks ago",
  },
  {
    quote: "Tysen is simply the best! Her work and professionalism is unmatched. I was completely overwhelmed with the website building process and she made it entirely seamless for me. Her communication was precise, and she truly listened to my needs and created a beautiful website that wholly encapsulates my business. I can't recommend her enough!",
    author: "Ali Valencia",
    timeAgo: "2 weeks ago",
  },
  {
    quote: "Tysen with Elevate Growth Solutions has been great to work with. She built me a website that I like and it was very affordable. She has been very helpful and knowledgeable. I'd recommend Elevate Growth Solutions.",
    author: "Dilyn Walker",
    timeAgo: "4 weeks ago",
  },
];

function GoogleLogo({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default function GoogleReviews({ className = "py-16 md:py-24 bg-muted" }: { className?: string }) {
  return (
    <section className={`${className} overflow-hidden`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {/* Google branding header */}
          <div className="inline-flex items-center gap-2 mb-4">
            <GoogleLogo className="w-6 h-6" />
            <span className="font-sans font-semibold text-lg text-foreground">Google Reviews</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="font-sans font-bold text-2xl text-foreground">5.0</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FBBC05] text-[#FBBC05]" />
              ))}
            </div>
          </div>
          <p className="font-sans text-sm text-muted-foreground">Based on Google Reviews</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {googleReviews.map((review, index) => (
            <motion.div
              key={review.author}
              className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Google-style header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#E8710A] flex items-center justify-center">
                  <span className="font-sans font-medium text-white text-base">
                    {review.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-sans font-medium text-foreground text-sm leading-tight">{review.author}</p>
                </div>
              </div>
              {/* Stars + time */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                </div>
                <span className="font-sans text-xs text-muted-foreground">{review.timeAgo}</span>
              </div>
              {/* Review text */}
              <p className="font-sans text-foreground leading-relaxed text-sm flex-1">
                {review.quote}
              </p>
              {/* Google attribution */}
              <div className="flex items-center gap-1.5 mt-4 pt-3 border-t border-gray-100">
                <GoogleLogo className="w-4 h-4" />
                <span className="font-sans text-xs text-muted-foreground">Posted on Google</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Button size="lg" className="gap-2 font-serif font-medium text-base px-8 py-6" asChild>
            <a href="https://share.google/rxaaY7ZQVM2KJOR2l" target="_blank" rel="noopener noreferrer">
              See All Reviews on Google <ExternalLink size={14} />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
