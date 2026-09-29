# Visual direction — Echte Blicke

## Source of truth
The existing public site `https://echteblicke.de` is the ground-truth design reference. Preserve its restrained photography-first identity rather than rebranding it: the live site uses a warm cream background (observed `rgb(250, 246, 233)`), very dark charcoal text (`rgb(21, 23, 26)`), and Lora serif typography. Retain the German brand name Echte Blicke and the photographer name Philipp Klaushardt. The photographs—not decorative interface treatments—remain the main visual content.

## Design dimensions
- **Movement:** quiet editorial photography portfolio, modernized without departing from the source.
- **Principles:** calm, warm, spacious, image-led; clear navigation shared by couples, wedding clients, and families; consistent page rhythm; no visual clutter.
- **Color:** warm ivory/cream canvas, ink-charcoal text, muted warm neutrals for separators and subtle action accents. Avoid saturated accent colors that compete with skin tones and original photography.
- **Layout:** mobile-first, single-column reading flow on small screens; restrained maximum-width text; responsive, editorial gallery grid with varied image proportions on larger screens; equal visual weight for the three retained categories.
- **Signature elements:** generous margins, understated rules, typography-led wordmark, a subtle lens/eye mark used only as site branding, and clear low-pressure inquiry links.
- **Interaction:** keyboard accessible; simple focus-visible styles and skip link; reduced motion; gallery opens no required JS to read content. Use small, optional client-side behavior only where it adds real value.
- **Animation:** none required; honor `prefers-reduced-motion` and avoid motion that distracts from the images.
- **Typography:** local/self-hosted Lora for the editorial serif, with a system sans-serif fallback for small interface labels if the source fonts can be legally and technically bundled. Do not call Google Fonts at runtime. Keep readable line lengths and fluid responsive sizing.
- **Voice:** German, personal, calm, unforced, inclusive of couples, wedding parties, and families. Reuse the author's own copy; no invented testimonials or service claims.
- **Wordmark/logo:** use “Echte Blicke” as a typographic wordmark, with Philipp Klaushardt identified as photographer. The source has no separate graphic mark, so create only a small, distinct lens/eye-inspired vector project mark and favicon that fits the existing cream/charcoal identity; it is not a replacement for or addition to the photography.
- **Brand signature:** warm cream canvas + dark serif typography + authentic, unposed moments from the owner's existing photographs.

## Image constraints
Use only existing photographs from echteblicke.de for portfolio, homepage, about, and other editorial photographs. Do not generate, source, or substitute photographic content. Keep originals intact; Hugo may create derived responsive WebP/AVIF encodings during the build without changing the originals.
