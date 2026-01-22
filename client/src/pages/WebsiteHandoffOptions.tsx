import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { BokehEffect, FloatingOrbs, WaveDivider, GradientTransition } from "@/components/decorative";
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
        "$80/month includes hosting + 1 hour of monthly edits",
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
      highlight: "Additional setup fee applies. This gives you the \"Wix-like\" editing experience on the backend while maintaining code-based performance on the frontend."
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
      description: "With website builders, if you stop paying their subscription, your website disappears. You can't move a Wix site to a different host—you're locked in forever. With custom code, you own the actual files. If you don't like your hosting company, we can move the entire site to a new host in minutes."
    },
    {
      icon: TrendingUp,
      title: "Performance Equals Revenue",
      description: "Website builders are bloated with heavy code to make drag-and-drop features work. This slows down your site, and Google penalizes slow sites in search rankings. According to Google, 53% of mobile visitors leave a page that takes longer than 3 seconds to load. Our hand-coded sites typically load in under 1 second."
    },
    {
      icon: DollarSign,
      title: "No Platform Fees Eating Your Budget",
      description: "Wix, Squarespace, and Shopify charge $15-50/month forever just for the privilege of using their platform—on top of hosting costs. With a custom site, you're not paying a platform tax. Your $80/month hosting includes professional maintenance, not just access to a builder."
    },
    {
      icon: Wrench,
      title: "Pixel-Perfect Customization Without Limits",
      description: "Builders constrain you to their templates and grids. You've probably heard \"the tool won't let me put that button there.\" With custom code, if you can dream it, we can build it. Your brand looks exactly how it should—not like a generic template that 5,000 other businesses are using."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Website Handoff Options: What Happens After Your Site is Built | Elevate Growth Solutions"
        description="Wondering how to manage your custom website after it's built? Explore your options: ongoing support, headless CMS integration, or full code handover. Learn why custom code beats website builders."
        ogImage="https://i.postimg.cc/sDW2ZZpm/EGS-SOCIAL-SHARING-IMAGE.png"
      />
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-28 md:pt-36 lg:pt-44 pb-16 md:pb-24 bg-background overflow-hidden">
        <BokehEffect opacity={0.35} />
        <FloatingOrbs variant="light" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            One of the most common questions we get: "If you build my website from code, how do I edit it later?" Great question—and you have options.
          </motion.p>
        </div>

        <GradientTransition from="transparent" to="hsl(var(--muted) / 0.3)" height="80px" />
      </section>

      {/* The Common Concern Section */}
      <section className="relative py-16 md:py-24 bg-muted/30 overflow-hidden">
        <WaveDivider position="top" fillColor="hsl(var(--background))" />
        <BokehEffect opacity={0.25} />

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
                Many business owners hesitate to choose a custom-coded website because they're used to the drag-and-drop simplicity of Wix or Squarespace. It's a valid concern—you want to be able to update your site without calling a developer for every little change.
              </p>
              <p>
                Here's the thing: the limitations of custom code aren't flaws—they're trade-offs for dramatically better performance, security, and long-term value. And the good news? We've built solutions that give you the best of both worlds.
              </p>
              <p>
                Think of it this way: <strong>website builders are rented apartments, while custom code is a house you own.</strong> With an apartment, the landlord handles maintenance but you're stuck with their rules and rent forever. With a house, you have complete freedom and build equity over time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Handoff Options Section */}
      <section className="relative py-16 md:py-24 bg-background overflow-hidden">
        <FloatingOrbs variant="light" />

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
        <WaveDivider position="top" fillColor="hsl(var(--background))" />
        <BokehEffect opacity={0.25} />

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

      {/* Why Code Beats Builders Section */}
      <section className="relative py-16 md:py-24 bg-background overflow-hidden">
        <FloatingOrbs variant="light" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-foreground mb-4">
              Why Custom Code is Still the Better Investment
            </h2>
            <p className="font-serif text-lg text-muted-foreground max-w-3xl mx-auto">
              Yes, builders seem easier upfront. But here's why business owners who understand the full picture choose custom code.
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
        <WaveDivider position="top" fillColor="hsl(var(--background))" />
        <BokehEffect opacity={0.25} />

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
                Platforms like WordPress power over 40% of the web—which makes them the #1 target for hackers. According to Sucuri's Website Threat Research Report, WordPress accounts for over 90% of hacked CMS platforms. Most attacks exploit outdated plugins or weak admin passwords.
              </p>
              <p>
                Small business owners rarely have time to maintain the constant cycle of security updates. That's a ticking time bomb.
              </p>
              <p>
                A hand-coded static site has <strong>no database to hack</strong>, <strong>no admin login to brute-force</strong>, and <strong>no plugins to exploit</strong>. It's virtually impervious to the attacks that take down thousands of small business sites every year.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Real Question Section */}
      <section className="relative py-16 md:py-24 bg-background overflow-hidden">
        <FloatingOrbs variant="light" />

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
                Here's something we've noticed over years of building websites: most business owners think they'll edit their site constantly. In reality? They update it maybe once or twice a year—and when they do try to DIY with a builder, they often break the design or spend hours fighting the platform.
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
      <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden bg-gradient-to-br from-primary via-primary to-[hsl(191,60%,25%)]">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-[10%] w-32 h-32 bg-white/5 rounded-full blur-2xl"
          />
          <motion.div
            animate={{ y: [10, -10, 10], rotate: [5, -5, 5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-20 right-[15%] w-48 h-48 bg-white/5 rounded-full blur-3xl"
          />
        </div>

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
            Let's discuss which handoff option makes sense for your business. Custom websites start at $1,299, and hosting is just $80/month with professional support included.
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
            <Link href="/pricing">
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
                  View Pricing
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
