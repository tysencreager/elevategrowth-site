import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { HandshakeIcon, Settings, Code2, Shield, TrendingUp, DollarSign, ArrowRight, CheckCircle, Users, Wrench } from "lucide-react";

export default function WebsiteHandoffOptions() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay
      }
    })
  };

  const handoffOptions = [
    {
      title: "The \"Peace of Mind\" Retainer",
      subtitle: "Best Value",
      icon: Users,
      description: "You run your business; we run your website. No worries about breaking the layout, resizing images, or messing up the mobile view. Just email us the change, and it's done.",
      features: [
        "$200/month includes hosting + 1 hour of monthly edits",
        "Uptime monitoring and security updates",
        "Priority support when you need changes",
        "Professional handling of all updates",
        "No risk of breaking your site's design"
      ],
      highlight: "Most clients choose this option because they rarely need to edit their site, but when they do, they want it done right."
    },
    {
      title: "The \"Hybrid\" Approach",
      subtitle: "Self-Service with Guardrails",
      icon: Settings,
      description: "Want to edit text and images yourself without touching code? We can integrate a headless CMS that gives you a simple admin portal while keeping all the performance benefits of custom code.",
      features: [
        "User-friendly dashboard for content changes",
        "Edit blog posts, swap photos, update text",
        "No coding knowledge required",
        "Design stays protected from accidental changes",
        "Options include Sanity, Contentful, or Decap CMS"
      ],
      highlight: "Additional setup fee applies. This gives you a simple, builder-style editing experience on the backend while keeping fast, optimized performance on the frontend."
    },
    {
      title: "The \"Full Key\" Handover",
      subtitle: "Complete Ownership",
      icon: Code2,
      description: "You own this code 100%. You can hire any developer in the future to manage it, or use an in-house IT team. Your website is portable and yours forever.",
      features: [
        "Full access to all source code files",
        "Repository access (GitHub, GitLab, etc.)",
        "Documentation for future developers",
        "No lock-in to any platform or agency",
        "Complete freedom to host anywhere"
      ],
      highlight: "Important: You'll need a code editor (like VS Code) and technical knowledge to make changes, or you can hire any developer to help."
    }
  ];

  const codeAdvantages = [
    {
      icon: Shield,
      title: "You Own the Asset, You Don't Rent It",
      description: "Whatever platform we use, we make sure your website is an asset you control—not something you're locked into. With a custom-coded site you own the files outright; on WordPress or another platform we set you up so you can move hosts or take your content with you whenever you want. No getting trapped."
    },
    {
      icon: TrendingUp,
      title: "Performance Equals Revenue",
      description: "Speed is money. Google penalizes slow sites in search rankings, and according to Google, 53% of mobile visitors leave a page that takes longer than 3 seconds to load. We optimize every site we build—often loading in under 1 second—no matter the platform."
    },
    {
      icon: DollarSign,
      title: "Predictable Costs, No Surprises",
      description: "We help you keep ongoing costs predictable. Whether you're on a fully custom build or a platform like WordPress or Squarespace, your $200/month plan covers hosting and professional maintenance—not just access to a tool—so there are no surprise fees eating your budget."
    },
    {
      icon: Wrench,
      title: "Customization Without Limits",
      description: "If you can dream it, we can build it. With custom code there are no template limits at all; on a builder, we push the platform far beyond its defaults so your brand looks exactly how it should—distinct and tailored to you, not interchangeable with everyone else's."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Website Handoff Options | Elevate Growth Solutions"
        description="What happens after your site is built? Explore your options: ongoing support, CMS integration, or full handover—on custom code, WordPress, or any builder."
        ogImage="https://www.elevategrowth.solutions/egs-social-sharing.png"
      />
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-28 md:pt-36 lg:pt-44 pb-16 md:pb-24 bg-muted border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-8"
            variants={fadeInUp}
            custom={0}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            <HandshakeIcon className="w-10 h-10 text-primary" />
          </motion.div>

          <motion.h1
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight"
            variants={fadeInUp}
            custom={0.1}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            What Happens After Your Website is Built?
          </motion.h1>

          <motion.p
            className="font-serif text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
            custom={0.2}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            One of the most common questions we get: "If you build my website from code, how do I keep it updated?" Great question—and you have options, whatever platform we build on.
          </motion.p>
        </div>
      </section>

      {/* The Common Concern Section */}
      <section className="relative py-16 md:py-24 bg-muted/30 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-foreground mb-6">
              The "But I Can't Edit It" Concern
            </h2>
            <div className="space-y-4 font-serif text-lg text-muted-foreground leading-relaxed">
              <p>
                Some business owners worry about choosing a custom-coded website because they're used to the drag-and-drop simplicity of Wix or Squarespace. It's a valid concern—you want to update your site without calling a developer for every little change. And if that flexibility matters most to you, we're happy to build on a platform you can edit yourself.
              </p>
              <p>
                Here's the thing: the trade-offs of custom code come with dramatically better performance, security, and long-term value. And the good news? Whichever route you choose, we've built solutions that give you the best of both worlds.
              </p>
              <p>
                Think of it this way: <strong>a custom-coded site is like a house you own outright, while a builder subscription is more like renting.</strong> Both can be a great fit—it comes down to how much control versus convenience you want. Whatever you choose, we'll build and maintain it for you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Handoff Options Section */}
      <section className="relative py-16 md:py-24 bg-background overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-foreground mb-4">
              Your Three Options After Handoff
            </h2>
            <p className="font-serif text-lg text-muted-foreground max-w-3xl mx-auto">
              When your website is complete, you choose the level of involvement that works for your business.
            </p>
          </motion.div>

          <div className="grid gap-8">
            {handoffOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                className="bg-white border-2 border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-colors"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl">
                        <option.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-2xl text-foreground">
                          {option.title}
                        </h3>
                        <span className="inline-block mt-1 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                          {option.subtitle}
                        </span>
                      </div>
                    </div>
                    <p className="font-serif text-lg text-muted-foreground mb-6">
                      {option.description}
                    </p>
                    <p className="font-serif text-base text-primary/80 italic">
                      {option.highlight}
                    </p>
                  </div>
                  <div className="lg:w-80 lg:border-l lg:border-primary/10 lg:pl-8">
                    <h4 className="font-display font-medium text-sm uppercase tracking-wide text-muted-foreground mb-4">
                      What's Included
                    </h4>
                    <ul className="space-y-3">
                      {option.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 font-serif text-foreground">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Self-Service Options */}
      <section className="relative py-16 md:py-24 bg-muted/30 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-foreground mb-6">
              Other Self-Service Options
            </h2>
            <div className="space-y-6 font-serif text-lg text-muted-foreground leading-relaxed">
              <p>
                Beyond our three main options, there are additional paths if you want to manage updates independently:
              </p>

              <div className="bg-white rounded-xl p-6 border border-primary/10">
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                  Hire a Freelance Developer as Needed
                </h3>
                <p>
                  Platforms like Upwork and Fiverr make small edits affordable. Expect to pay $20-100 for minor changes. Because your code is clean and well-documented, any competent developer can work with it.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-primary/10">
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                  Git-Based CMS Options
                </h3>
                <p>
                  Free, open-source options like Decap CMS (formerly Netlify CMS) can add a simple editing interface to static sites. These are ideal for blogs or content-heavy pages where you need frequent updates.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="relative py-16 md:py-24 bg-background overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-foreground mb-4">
              What You Get When We Build & Maintain Your Site
            </h2>
            <p className="font-serif text-lg text-muted-foreground max-w-3xl mx-auto">
              Whether we build on custom code or a platform you can manage yourself, here's what you can count on when you work with us.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {codeAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                className="bg-white border border-primary/10 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                    <advantage.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-foreground">
                    {advantage.title}
                  </h3>
                </div>
                <p className="font-serif text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Advantage Section */}
      <section className="relative py-16 md:py-24 bg-muted/30 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display font-semibold text-3xl md:text-4xl text-foreground">
                Security by Design
              </h2>
            </div>
            <div className="space-y-4 font-serif text-lg text-muted-foreground leading-relaxed">
              <p>
                Most sites that get hacked are running outdated software, vulnerable plugins, or weak admin passwords—and the platforms that power much of the web are the biggest targets simply because they're everywhere.
              </p>
              <p>
                Most business owners rarely have time to maintain the constant cycle of security updates. That's a ticking time bomb.
              </p>
              <p>
                When security is critical, a custom-coded static site has <strong>no database to hack</strong>, <strong>no admin login to brute-force</strong>, and <strong>no plugins to exploit</strong>. And if you're on WordPress or another platform, we harden it, keep it patched, and monitor it—so your site stays protected either way.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Real Question Section */}
      <section className="relative py-16 md:py-24 bg-background overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-foreground mb-6">
              The Real Question: How Often Do You Actually Edit Your Website?
            </h2>
            <div className="space-y-4 font-serif text-lg text-muted-foreground leading-relaxed">
              <p>
                Here's something we've noticed over years of building websites: most business owners think they'll edit their site constantly. In reality? They update it maybe once or twice a year—and when they DIY those edits themselves, they often break the design or spend hours on a small change.
              </p>
              <p>
                The "Peace of Mind" retainer exists because most clients discover they'd rather just email us the change and have it done professionally in 24-48 hours. Your time is better spent running your business.
              </p>
              <p>
                But if you're someone who genuinely needs frequent content updates—a blogger, a restaurant updating menus weekly, an events company—the headless CMS option gives you that flexibility without sacrificing performance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden bg-primary">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl text-white mb-6 leading-tight"
          >
            Ready to Build a Website You Actually Own?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Let's discuss which handoff option makes sense for your business. Custom websites start at $1,599, and hosting is just $200/month with professional support included.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="https://calendar.app.google/yv9h833QYphwvfmJ7" target="_blank" rel="noopener noreferrer">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="font-sans font-semibold text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-xl shadow-black/20 group"
                >
                  Schedule a Discovery Call
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </a>
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="font-sans font-semibold text-lg px-8 py-6 bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white/50"
                >
                  Contact Us
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
