import ValueProp from '../ValueProp'
import valueImage from '@assets/stock_images/professional_busines_e0d6a108.jpg'

export default function ValuePropExample() {
  return (
    <ValueProp
      image={valueImage}
      imageAlt="Professional working on laptop"
      title="At Elevate Growth Solutions, we blend strategy with soul, helping businesses grow with intention, clarity, and impact."
      description="Whether you're launching something new, optimizing your e-commerce storefront, or ready to scale with confidence, we offer full-stack marketing services that meet you where you are and take you where you want to go."
    />
  )
}
