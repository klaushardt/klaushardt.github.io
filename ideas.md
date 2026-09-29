# Visual direction — Echte Blicke

## Source of truth
Die vorhandene Website `https://echteblicke.de` bleibt die inhaltliche und gestalterische Referenz. Bewahrt werden der warme Cremehintergrund (beobachtet: `rgb(250, 246, 233)`), sehr dunkle Anthrazit-Typografie (`rgb(21, 23, 26)`), die lokal eingebundene Lora-Schrift und die Marke Echte Blicke mit Fotograf Philipp Klaushardt. Die Fotografien – nicht dekorative UI-Effekte – stehen im Mittelpunkt.

## Design-Dimensionen
- **Bewegung:** ruhiges, modernes Editorial-Portfolio.
- **Prinzipien:** warm, klar, großzügig und bildorientiert; verständliche Navigation für Paare, Hochzeitspaare und Familien; wenig visuelle Unruhe.
- **Farbe:** warmes Elfenbein/Creme, dunkle Tinte und zurückhaltende warme Neutraltöne. Keine gesättigten Akzente, die mit den Hauttönen der Originalfotos konkurrieren.
- **Layout:** Mobile First. Auf der Startseite steht eine kurze, zentrierte Textzeile oberhalb eines deutlich größeren, formatgetreu präsentierten Originalfotos. Portfolio-Galerien ordnen hochformatige und querformatige Bilder in gleichmäßigen CSS-Spalten masonry-artig ohne feste Kachelhöhen an. Die drei Portfolio-Kategorien behalten gleiches visuelles Gewicht.
- **Signatur:** großzügige Ränder, typografische Wortmarke „Echte Blicke“, ruhige Linien und unaufdringliche Anfrage-Links. Kein Augen- oder Linsen-Logo im Header oder als Website-Favicon.
- **Interaktion:** tastaturzugängliche Navigation, sichtbare Fokuszustände, Skip-Link und reduzierte Bewegung; Galerien benötigen kein JavaScript.
- **Animation:** keine nötig; `prefers-reduced-motion` respektieren.
- **Typografie:** lokal bereitgestellte Lora als Editorial-Serifenschrift, ergänzt durch eine System-Sans-Serifenschrift für kleine UI-Labels. Lesbare Zeilenlängen und fließende Schriftgrößen.
- **Stimme:** Deutsch, persönlich, ruhig und inklusiv für Paare, Hochzeitsgesellschaften und Familien. Die Aussagen des Fotografen bleiben die Grundlage; keine erfundenen Testimonials oder Leistungen.
- **Wortmarke:** „Echte Blicke“ ausschließlich als Text im Header, ergänzt um „Fotografie · Philipp Klaushardt“. Im Website-Favicon bleibt höchstens ein einfaches typografisches „E“; kein Augenmotiv.
- **Markensignatur:** warmer Cremegrund, dunkle Serifentypografie und authentische, ungestellte Originalmomente.

## Bildregeln
Für Portfolio, Startseite, Über-mich- und weitere redaktionelle Fotografien werden ausschließlich vorhandene Aufnahmen von echteblicke.de verwendet. Keine generierten, Stock- oder Ersatzfotos. Originaldateien bleiben unverändert; Hugo darf beim Build responsive WebP-/AVIF-Ableitungen erzeugen.

## Umsetzung dieser Designanpassung (30.09.2026)
- Die Startseite verwendet `2025-04-06_18.20.47-_PHI8626-klaushardt.com.jpg` als großes Hero-Foto. Die kurze Überschrift und ein knapper Einleitungssatz stehen darüber.
- Auf der Preisseite erhält jede der drei Kategorien genau ein redaktionelles Foto; die Leistungen werden in gut lesbaren, mobil umbrechenden Tabellen dargestellt.
- Die Portfolio-Galerien verwenden eine CSS-Multicolumn-Anordnung mit natürlichen Bildproportionen statt gleichmäßiger Grid-Zeilen.
- Sichtbare Hinweise auf den früheren Webauftritt werden aus den öffentlichen Seiten entfernt; Quellherkunft bleibt in den internen Inventar- und Entwicklerdokumenten nachvollziehbar.
