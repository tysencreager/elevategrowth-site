import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Credentials, { Award, GraduationCap, TrendingUp } from "@/components/Credentials";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import tysenPhoto from "@assets/Untitled design.png_1760212641967.jpg";

export default function BehindElevate() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const credentials = [
    {
      icon: GraduationCap,
      title: "Digital Marketing & E-Commerce Certification",
      description: "Certified expert in digital marketing strategy, e-commerce optimization, and online customer acquisition."
    },
    {
      icon: Award,
      title: "UX Design Certification",
      description: "Certified in user experience design, creating intuitive interfaces that drive engagement and conversions."
    },
    {
      icon: TrendingUp,
      title: "5+ Years Marketing Experience",
      description: "Proven track record helping small businesses scale into booming brands through strategic marketing."
    }
  ];

  const imageVariants = {
    hidden: { opacity: 0, x: -80, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.3
      }
    }
  };

  const taglineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.4
      }
    }
  };

  const roleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.5
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.6 + (i * 0.15)
      }
    })
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Behind Elevate - Meet Tysen Creager | Elevate Growth Solutions"
        description="Meet Tysen Creager, founder of Elevate Growth Solutions. Full-stack marketer with nearly a decade of experience in branding, digital marketing, SEO, and strategy. Certified in Digital Marketing and UX Design."
        ogTitle="Meet the Founder - Tysen Creager, Marketing Strategist"
        ogDescription="Nearly a decade of experience helping businesses grow through strategic marketing, branding, and digital solutions. Certified marketing expert with proven results."
      />
      <Navbar />

      <section ref={sectionRef} className="pt-24 md:pt-32 lg:pt-40 pb-8 md:pb-12 lg:pb-16 bg-background overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <motion.div
              className="md:w-2/5"
              variants={imageVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.div
                className="overflow-hidden rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <motion.img
                  src={tysenPhoto}
                  alt="Tysen Creager, Founder of Elevate Growth Solutions"
                  className="w-full h-auto rounded-lg"
                  data-testid="img-tysen-photo"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="md:w-3/5 space-y-6"
              variants={contentVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div>
                <motion.h2
                  className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-primary mb-4"
                  data-testid="text-meet-tysen"
                  variants={titleVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  Meet Tysen
                </motion.h2>
                <motion.p
                  className="font-serif text-xl md:text-2xl text-foreground"
                  data-testid="text-tysen-tagline"
                  variants={taglineVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  Full-Stack Marketer. Growth Strategist. Brand Builder.
                </motion.p>
                <motion.p
                  className="font-sans text-lg text-muted-foreground mt-2"
                  data-testid="text-tysen-role"
                  variants={roleVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  Founder of Elevate Growth Solutions
                </motion.p>
              </div>

              <div className="space-y-4">
                <motion.p
                  className="font-serif text-lg text-foreground leading-relaxed"
                  data-testid="text-bio-paragraph-1"
                  variants={paragraphVariants}
                  custom={0}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  Tysen Creager is the founder and driving force behind Elevate Growth Solutions. She has nearly a decade of experience in branding, digital marketing, SEO optimization, and client-centered strategy. Her diverse skillset helps businesses to grow with clarity, confidence, and purpose.
                </motion.p>

                <motion.p
                  className="font-serif text-lg text-foreground leading-relaxed"
                  data-testid="text-bio-paragraph-2"
                  variants={paragraphVariants}
                  custom={1}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  With certifications in Digital Marketing and UX design—She understands all facets of attaining marketing success. Tysen has rebranded companies, implemented many successful lead generation flows, and led full-scale marketing campaigns that deliver real results. Her work spans everything from design and content creation to website building and ad strategy; all guided by a deep understanding of how to move customers from first impression to loyal customer.
                </motion.p>

                <motion.p
                  className="font-serif text-lg text-foreground leading-relaxed"
                  data-testid="text-bio-paragraph-3"
                  variants={paragraphVariants}
                  custom={2}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  Her approach is down-to-earth, results-driven, and focused on making marketing feel less overwhelming and more aligned with your goals. She leads with vision, follows through with execution, and believes success starts with strategy and strong relationships.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Credentials credentials={credentials} />

      <Footer />
    </div>
  );
}
