import Hero from '../Hero'
import heroImage from '@assets/stock_images/modern_marketing_and_a25f67ec.jpg'

export default function HeroExample() {
  return (
    <Hero
      backgroundImage={heroImage}
      title="Marketing that moves people and brands forward"
      subtitle="At Elevate Growth Solutions, we blend strategy with soul"
      ctaText="Learn More"
      ctaHref="#services"
    />
  )
}
