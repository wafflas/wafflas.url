# UI/UX Design Guidelines
## Creative Portfolio — Visual Identity & Design System

### 1. Design Direction

The website follows an experimental, minimalist, and editorial design direction, inspired by early-web aesthetics and contemporary creative portfolios.

The interface should feel distinctive and expressive while maintaining clarity, usability, and visual consistency.

**Core principles:**
- Minimal but expressive interface.
- Strong typographic identity.
- Generous negative space.
- Editorial and occasionally asymmetric layouts.
- Content and imagery as the primary visual focus.
- Subtle textures and restrained decoration.
- Experimental visuals balanced with intuitive navigation.

Avoid generic SaaS aesthetics, excessive rounded cards, gradients, glassmorphism, large shadows, and unnecessary interface decoration.

---

### 2. Color System

The visual identity uses a restrained, nearly monochromatic palette built around a warm off-white background and black typography.

| Color role | Hex value | Application |
|---|---|---|
| Primary Background | `#F6F4ED` | Main page background |
| Primary Foreground | `#000000` | Typography, navigation, icons |
| Primary Surface | `#FFFFFF` | Optional contrasting surfaces |
| Subtle Border | `#00000014` | Dividers, separators, hairlines |
| Secondary Text | `#666666` | Supporting content and metadata (recommended) |

**Color principles:**
- Warm off-white should dominate the interface.
- Black should provide strong visual contrast.
- Secondary information may use muted neutral tones.
- Colorful project imagery should stand out naturally against the neutral UI.
- Avoid unnecessary global accent colors.
- Interactive states can use opacity, underlines, subtle contrast changes, or motion rather than bright colors.

The palette should remain consistent across every page.

---

### 3. Typography System

Typography is one of the defining characteristics of the visual identity.

The system combines utilitarian monospace typography with bold contemporary sans-serif typography and occasional pixel-inspired details.

#### Font Families

**Primary — Geist Mono**
- Weight: 400
- Used for navigation, body text, descriptions, metadata, supporting labels, and links.
- Establishes the technical, editorial, and early-web personality.

**Secondary — Geist**
- Weight: 700
- Used for project titles, prominent headings, and content requiring stronger visual emphasis.
- Creates contrast against the monospace typography.

**Accent — Geist Pixel**
- Weight: 400
- Used selectively for small labels, dates, and decorative typography.
- Should not be overused or replace essential readable text.

**Fallbacks**
```css
--font-primary: "Geist Mono", ui-monospace, monospace;
--font-display: "Geist", Arial, sans-serif;
--font-accent: "Geist Pixel", monospace;
```

#### Typographic Scale

The following scale is a recommended production system inspired by the original design, rather than an exact reproduction of Figma sizes.

| Element | Desktop | Mobile | Font |
|---|---|---|---|
| Hero Statement | 40–48px | 22–28px | Geist Mono |
| Main Page Title | 48–64px | 36–44px | Geist Bold |
| Section Heading | 24–32px | 20–26px | Geist Bold |
| Project Title | 18–24px | 16–20px | Geist Bold |
| Navigation | 16–24px | 14–16px | Geist Mono |
| Body Text | 14–16px | 14–16px | Geist Mono |
| Metadata / Labels | 12–14px | 12px | Geist Mono / Pixel |

#### Typography Rules

- Maintain a clear distinction between expressive headings and functional text.
- Use bold sans-serif typography to create focal points.
- Use monospace typography consistently for supporting elements.
- Favor lowercase navigation and supporting labels where appropriate.
- Use tight letter-spacing for large display headings.
- Maintain comfortable line-height for paragraphs.
- Use fluid typography where appropriate.
- Avoid introducing additional font families without a clear purpose.

---

### 4. Backgrounds and Textures

The website uses a warm, paper-like visual surface.

**Base background:** `#F6F4ED`

A subtle digital grain or noise texture can be applied to the background to create an organic, tactile feeling.

**Texture principles:**
- Fine-grained, monochromatic noise.
- Low visual intensity.
- Consistent across the interface.
- Decorative rather than interactive.
- Never reduce text legibility.
- Avoid heavy animated noise effects.

Textures should add character without becoming visually distracting.

---

### 5. Layout and Spacing

The layout should follow an editorial approach rather than a conventional component-heavy website structure.

**Principles:**
- Use generous whitespace to emphasize content.
- Allow compositions to feel open and intentionally unbalanced.
- Combine grid-based alignment with asymmetric elements.
- Avoid excessive nesting and boxed containers.
- Let typography and imagery establish the layout.
- Use subtle separators instead of heavy cards.

#### Spacing System

Use a consistent spacing scale based on multiples of 4px.

```css
--space-xs: 8px;
--space-sm: 12px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
--space-3xl: 72px;
```

Use these values as flexible tokens, not rigid positioning requirements.

#### Borders and Corners

- Default border width: `1px`
- Border color: `#00000014`
- Default corner radius: `0px`
- Image corner radius: `0–4px`

Prefer square edges and minimal borders.

---

### 6. Navigation and UI Elements

The navigation should be minimal, typographic, and intuitive.

**Navigation styling:**
- Geist Mono.
- Lowercase labels.
- Black foreground.
- Minimal visual decoration.
- Generous spacing between primary links.
- Small geometric separators when appropriate.

**Interaction styling:**
- Use understated hover transitions.
- Indicate links through underlines, arrows, or typographic changes.
- Maintain visible keyboard focus states.
- Avoid unnecessary filled buttons.
- Avoid pill-shaped navigation elements.

The brand mark should retain its modular, geometric character.

---

### 7. Imagery and Visual Content

Imagery should be treated as a major design element rather than secondary decoration.

**Visual principles:**
- Use large, high-quality project imagery.
- Allow projects to introduce their own visual identities.
- Preserve appropriate aspect ratios.
- Avoid forcing all images into identical containers.
- Support mixed-size editorial compositions.
- Minimize decorative frames around media.
- Allow imagery to create rhythm throughout the page.

Experimental artwork, ASCII compositions, pixel-based visuals, and other creative treatments can be used to reinforce the brand identity.

These effects should complement the content rather than interfere with functionality.

---

### 8. Project Presentation

Projects should be displayed through flexible, content-driven compositions.

A project presentation can include:
- Project title.
- Client or category.
- Year.
- Short description.
- Visual previews.
- Navigation to project details.
- Optional credits and recognition.

Use subtle horizontal rules, whitespace, and typography to distinguish projects.

Avoid generic card grids unless they meaningfully support the content.

Project detail pages should allow more expressive visual storytelling through image sequences, alternating layouts, and supporting text.

---

### 9. Responsive Design

The visual identity must translate naturally across different devices.

**Mobile**
- Stack complex content structures.
- Reduce typographic scale proportionally.
- Preserve adequate spacing and readable text.
- Support touch-friendly navigation.
- Allow intentional horizontal media scrolling.

**Tablet**
- Adapt multi-column layouts according to available space.
- Maintain clear content hierarchy.
- Preserve large imagery wherever practical.

**Desktop**
- Use larger typography and more expressive compositions.
- Introduce asymmetric layouts where appropriate.
- Take advantage of horizontal space without compromising readability.

Breakpoints should be determined by content behavior rather than exact Figma artboard dimensions.

---

### 10. Motion and Microinteractions

Motion should be subtle, intentional, and aligned with the experimental identity.

**Suggested uses:**
- Soft hover transitions.
- Underline animations.
- Image reveals.
- Scroll-based transitions.
- Page transitions.
- Experimental hero interactions.
- Lightweight gallery animations.

**Motion principles:**
- Avoid excessive animation.
- Keep interactions responsive.
- Maintain smooth and consistent timing.
- Respect `prefers-reduced-motion`.
- Do not hide essential content behind animations.

---

### 11. Accessibility and Usability

The creative direction must not compromise usability.

- Maintain accessible color contrast.
- Use semantic HTML and logical heading hierarchy.
- Ensure keyboard-accessible navigation.
- Provide visible focus indicators.
- Support browser zoom and responsive text sizing.
- Maintain appropriate touch target sizes.
- Provide meaningful image alternative text.
- Prevent accidental horizontal page overflow.
- Make essential content accessible without JavaScript-driven effects where practical.

---

### 12. Core Design Tokens

These tokens provide a reusable foundation for implementation.

```css
:root {
  /* Colors */
  --color-background: #F6F4ED;
  --color-foreground: #000000;
  --color-surface: #FFFFFF;
  --color-border: #00000014;
  --color-text-secondary: #666666;

  /* Typography */
  --font-primary: "Geist Mono", ui-monospace, monospace;
  --font-display: "Geist", Arial, sans-serif;
  --font-accent: "Geist Pixel", monospace;

  /* Spacing */
  --space-xs: 8px;
  --space-sm: 12px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 72px;

  /* Borders */
  --border-width: 1px;
  --radius-default: 0px;
  --radius-image: 4px;

  /* Motion */
  --transition-fast: 150ms ease;
  --transition-normal: 250ms ease;
  --transition-slow: 400ms ease;
}
```

---

### 13. Overall Experience

The website should feel like a thoughtfully designed creative environment rather than a standard portfolio template.

Its identity should emerge from the relationship between typography, whitespace, imagery, subtle texture, and restrained interaction.

**The objective is to preserve the original visual language while allowing flexibility in layout, content, components, and implementation.**

Use the design system as a consistent foundation, not as a collection of fixed Figma specifications.
