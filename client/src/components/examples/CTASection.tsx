import CTASection from '../CTASection'
import ctaImage from '@assets/stock_images/professional_busines_11b4652a.jpg'

export default function CTASectionExample() {
  return (
    <CTASection
      backgroundImage={ctaImage}
      title="Let's build something that stands the test of time."
      ctaText="Contact Us"
      ctaHref="mailto:tysen@elevategrowth.solutions"
    />
  )
}
