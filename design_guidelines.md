# Design Guidelines: Elevate Growth Solutions Website

## Design Approach
**Reference-Based Design** - Replicating the existing Squarespace site with exact brand consistency and professional marketing agency aesthetic. Drawing inspiration from modern agency sites like Squarespace templates, with clean layouts, strategic imagery, and sophisticated typography.

## Core Design Elements

### A. Color Palette

**Primary Colors (Teal Palette)**
- Primary Teal: `#266D82` (38 62% 33%) - Main brand color for headers, primary CTAs
- Medium Teal: `#3D95B4` (198 50% 47%) - Secondary elements, hover states
- Accent Teal: `#4AC0D8` (191 63% 58%) - Highlights, links, accents

**Neutrals**
- Pure Black: `#000000` (0 0% 0%) - Text, strong contrast
- Off-White: `#FDFDFD` (0 0% 99%) - Backgrounds, light sections

**Usage Strategy**
- Hero sections: Large imagery with text overlays in white/off-white
- CTAs: Primary teal (#266D82) backgrounds with white text
- Section backgrounds: Alternate between off-white and white
- Text: Black for body, teal for headings/emphasis

### B. Typography

**Font Families** (Google Fonts CDN)
- **Display/Headings**: 'Noto Serif', serif - Bold, commanding presence
- **Body/Subheadings**: 'Lora', serif - Elegant, readable
- **Accents/UI**: 'Montserrat', sans-serif - Clean, modern

**Type Scale**
- H1 (Hero): text-5xl md:text-6xl lg:text-7xl, font-bold, Noto Serif
- H2 (Section Headers): text-3xl md:text-4xl lg:text-5xl, font-bold, Noto Serif
- H3 (Service Titles): text-2xl md:text-3xl, font-semibold, Lora
- Body: text-base md:text-lg, Lora
- Buttons/Nav: text-sm md:text-base, font-medium, Montserrat

### C. Layout System

**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 md:py-24 lg:py-32
- Component spacing: gap-8 to gap-12
- Container max-width: max-w-7xl
- Content max-width: max-w-4xl for text-heavy sections

**Grid Structure**
- Services grid: grid-cols-1 md:grid-cols-2 gap-8
- Content sections: Single column centered layouts with max-w-4xl
- Image/text splits: 50/50 on desktop, stacked on mobile

### D. Component Library

**Navigation**
- Fixed/sticky header with logo (left) and navigation links (right)
- Transparent on hero with white text, solid background on scroll
- CTA button: Primary teal, rounded, Montserrat font
- Mobile: Hamburger menu with slide-in navigation

**Hero Section**
- Full-width background image with overlay (dark gradient for text readability)
- Centered text: Large headline (H1) + subheadline + CTA button
- Height: 80vh to 90vh for impact
- CTA: Mailto button with primary teal background, or outlined white button on image with blur backdrop

**Content Sections**
- Value Proposition: Large text blocks with generous whitespace, centered layout
- Image + Text: Alternating left/right layouts with rounded images
- Full-width sections with max-w-7xl container

**Testimonial Component**
- Quote text: text-xl md:text-2xl, Lora italic
- Author attribution: Montserrat, smaller size with title/company
- Background: Subtle teal tint or white card on colored background
- Optional: Customer image (circular, small)

**Service Cards**
- Title: H3, primary teal color
- Description: Body text, Lora
- Layout: Clean list format or cards with padding
- No icons needed - focus on typography and clarity

**CTA Sections**
- Large headline + descriptive text + mailto button
- Full-width background (teal or image with overlay)
- Centered layout, generous padding

**Footer**
- Simple, clean design
- Logo, tagline/description
- Quick links to pages
- Contact email (tysen@elevategrowth.solutions)
- Copyright notice
- Optional: Social media links

**Buttons**
- Primary: bg-[#266D82] text-white rounded-lg px-6 md:px-8 py-3 md:py-4
- Outline (on images): border-2 border-white text-white backdrop-blur-sm rounded-lg
- All use Montserrat font, font-medium
- No custom hover states needed - rely on default button behaviors

### E. Images

**Hero Image**
- Large, high-quality professional imagery (business/marketing context)
- Similar to original: workspace, professional settings, or abstract business visuals
- Dark overlay gradient for text readability

**Content Images**
- Professional photography matching original aesthetic
- Black and white or muted tones for sophistication
- Rounded corners (rounded-lg or rounded-xl)
- Proper aspect ratios: 3:2 or 4:3 for landscape images

**Image Placement**
- Hero: Full-width background
- Value prop section: Side image with text (like the woman with laptop from original)
- Final CTA section: Background image or split layout
- Services page: Optional header image

### F. Animations & Interactions

**Minimal Approach**
- Smooth scroll behavior
- Subtle fade-in on scroll for sections (use Intersection Observer)
- Navbar background transition on scroll
- No distracting animations - keep it professional

## Page-Specific Guidelines

### Home Page Structure
1. **Hero**: Full-width image, headline "Marketing that moves people and brands forward", CTA button
2. **Value Proposition**: Centered text block explaining the agency approach with supporting image
3. **Testimonial**: Featured quote from Cassidy with professional styling
4. **Final CTA**: "Let's build something that stands the test of time" with mailto button

### Services Page Structure
1. **Header**: Title "Marketing & E-Commerce Solutions That Work Together" + subtitle
2. **Hero Image**: Professional workspace/strategy session imagery
3. **Services List**: All 7 services with titles and descriptions in clean layout
4. **CTA**: Contact section with mailto button

## Accessibility & Polish

- Maintain AAA contrast ratios (teal on white, white on teal)
- Readable font sizes (minimum 16px base)
- Proper heading hierarchy
- Focus states for keyboard navigation
- Alt text for all images
- Semantic HTML structure

## Brand Consistency
- Use exact hex colors from brand kit
- Implement all three fonts as specified
- Integrate provided logo prominently
- Match professional, sophisticated tone of original site
- Maintain clean, spacious layouts with breathing room