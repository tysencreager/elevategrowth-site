import ServicesGrid from '../ServicesGrid'

export default function ServicesGridExample() {
  const services = [
    {
      title: "Full-Stack Marketing Management",
      description: "Strategy, scheduling, content creation, and analytics across platforms"
    },
    {
      title: "E-Commerce Optimization & Management",
      description: "Amazon, Walmart, and Target storefront optimization for independent sellers. We offer branding, listing audits, product photography, and full storefront management to elevate your online sales"
    },
    {
      title: "Branding & Creative Direction",
      description: "Visual identity, brand messaging, and storytelling that resonates"
    },
    {
      title: "Website Design & Optimization",
      description: "UX-focused builds with SEO in mind, built for growth, not just looks"
    }
  ];

  return <ServicesGrid services={services} />
}
