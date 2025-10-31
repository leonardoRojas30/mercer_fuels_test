# Mercer Fuels Website Design Guidelines

## Design Approach
**Reference-Based Approach** - Drawing inspiration from premium service industry leaders like Airbnb and local service businesses emphasizing trust and personal connection. The design balances 50+ years of family heritage with contemporary digital convenience, using yellow and navy as signature brand colors representing warmth, energy, and professional reliability.

## Color Palette

### Primary Colors
- **Deep Navy Blue**: 220 85% 25% - Primary brand color for trust and professionalism
- **Vibrant Yellow/Gold**: 45 95% 55% (chart-2) - Accent color for CTAs, highlights, trust badges, and warmth
- **Clean White**: 0 0% 98% - Primary backgrounds and card surfaces

### Supporting Colors
- **Light Gray**: 220 10% 92% - Section backgrounds and subtle dividers
- **Success Green**: 140 60% 45% - Confirmation states
- **Dark Text**: 220 25% 15% - Primary text color
- **Muted Text**: 220 15% 45% - Secondary text at 90% opacity

### Dark Mode
- **Dark Background**: 220 25% 8%
- **Card Background**: 220 20% 12%
- **Light Text**: 220 15% 90%

## Typography
- **Primary Font**: Inter (Google Fonts via CDN)
- **Hero Headings**: text-4xl to text-6xl, font-bold (700), with strategic keyword highlighting in yellow
- **Section Headings**: text-2xl to text-4xl, font-semibold (600)
- **Body Text**: text-base to text-lg, font-normal (400)
- **CTA Buttons**: text-base to text-lg, font-semibold (600)
- **Highlighted Keywords**: Yellow text color within headings for emphasis on "Local", "Family", "Cape Breton", "50+ Years"

## Layout System
**Tailwind Spacing Units**: 4, 6, 8, 12, 16, 20, 24 for consistent vertical rhythm and horizontal spacing across all components.

## Hero Section Design

### Structure
- **Full-width background image** with dark navy overlay (bg-navy-blue/70)
- **Yellow/gold gradient accent** subtly integrated at overlay edges
- **Two-column layout** (desktop): Content left (60%), white semi-transparent form card right (40%)
- **Single column** (mobile): Stacked with form below content

### Hero Content
- **Large bold heading** (text-5xl to text-6xl) with yellow-highlighted keywords
- **Subheading text** in white at 90% opacity (text-xl)
- **Trust badges** displayed prominently: "50+ Years", "Family Owned", "Local to Cape Breton"
- **Primary CTA** integrated within content area

### Hero Form Card
- **White semi-transparent background** (bg-white/90) with backdrop-blur-md
- **Rounded corners** (rounded-xl)
- **Subtle shadow** (shadow-xl)
- **Form title** in navy with yellow accent underline
- **"Talk to an Expert" scheduling form** with name, phone, preferred time fields
- **Yellow CTA button** at form bottom

## Component Library

### Cards & Containers
- **Service Cards**: White background, rounded-lg, shadow-md with shadow-lg on hover
- **Feature Cards**: Icon in yellow-tinted circle (bg-chart-2/10), navy headings, gray descriptive text
- **Testimonial Cards**: White cards with subtle border, customer name in bold, yellow star ratings
- **Transparent Overlay Cards**: bg-white/90 with backdrop-blur-md for content over images

### CTA Buttons
- **Primary CTAs**: bg-chart-2 (yellow), text-white, px-8 py-4, rounded-lg, font-semibold, shadow-lg
- **Secondary CTAs**: Navy background with white text, same sizing
- **Outline Buttons on Images**: variant="outline" with backdrop-blur-sm background, white border and text

### Trust & Highlight Elements
- **Yellow Badges**: Rounded pill shapes with bg-chart-2/20, yellow text for "Local", "Family Business"
- **Checkmark Lists**: Yellow checkmark icons (bg-chart-2/10 circles) with navy text benefits
- **Stat Counters**: Large bold numbers in navy, yellow accent underlines, gray descriptive text
- **Guarantee Banners**: Yellow background strips with white or navy text

### Navigation
- **Dual Path Navigation**: Clear separation for "New Customers" vs "Existing Customers"
- **Sticky Header**: White background with subtle shadow, navy logo, yellow accent on active states
- **Mobile Menu**: Full-screen overlay with yellow accent highlights

### Forms & Interactive Elements
- **Input Fields**: White background, gray borders, navy text, focus:ring-chart-2
- **JotForm Embeds**: Seamlessly styled to match design system
- **Calculator Tools**: White cards with yellow accent highlights and result displays

## Trust Signal Integration
- **Generational Heritage**: "3rd Generation" and "50+ Years" with yellow badge styling
- **Local Emphasis**: "Cape Breton" and "Local Family Business" prominently featured in yellow highlights
- **Review Display**: Star ratings in yellow, customer names in bold, testimonial text in gray
- **Guarantee Messaging**: "Never Run Out Promise" in yellow banner with checkmark icon

## Images

### Large Hero Image (Required)
Full-width professional photograph featuring Mercer Fuels delivery truck with team members in Cape Breton landscape (coastal or residential setting). Image should convey local family business warmth and professional service capability. Dark navy overlay (70% opacity) applied with subtle yellow gradient accents.

### Supporting Images
- **Service Section**: Modern oil delivery equipment and installation photos with yellow-accented card overlays
- **Team Section**: Todd Mercer and family members in casual professional settings
- **Community Context**: Cape Breton homes, local neighborhoods, winter preparedness scenes
- **Testimonial Backgrounds**: Subtle local imagery behind semi-transparent testimonial cards

### Image Placement
- Hero section background with two-column overlay content
- Service feature cards with small circular images in yellow-tinted backgrounds
- About/family business section with team photo and yellow highlighted timeline
- Background imagery for conversion sections with transparent card overlays

## Section Styling Patterns
- **Alternating Backgrounds**: White and light gray (220 10% 92%) sections
- **Content Containers**: max-w-7xl centered with px-4 to px-8 responsive padding
- **Vertical Spacing**: py-16 to py-24 for section padding
- **Yellow Accent Dividers**: Thin yellow horizontal rules (border-chart-2) between major sections

## Key Design Principles
1. **Yellow as Energy**: Use yellow strategically for CTAs, highlights, and trust signals to convey warmth and action
2. **Navy as Foundation**: Deep navy establishes professional credibility and reliability
3. **Keyword Highlighting**: Bold headings with selective yellow emphasis on key terms
4. **Transparency & Blur**: Semi-transparent cards with backdrop blur for modern, layered depth
5. **Trust-First Layout**: Every section reinforces 50+ years of family service with yellow-highlighted proof points
6. **Conversion Focus**: Clear yellow CTAs guide users to expert consultation scheduling
7. **Local Authority**: Yellow badges and highlights emphasize Cape Breton community connection

## Animations
Minimal and purposeful only:
- Smooth scroll to form sections
- Subtle scale on card hover (scale-105)
- Shadow depth increase on interactive elements
- No distracting motion effects