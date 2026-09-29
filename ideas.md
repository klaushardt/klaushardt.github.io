# Visual direction — Echte Blicke

## Source of truth
Die vorhandene Website `https://echteblicke.de` bleibt die inhaltliche und gestalterische Referenz. Bewahrt werden der warme Cremehintergrund (beobachtet: `rgb(250, 246, 233)`), sehr dunkle Anthrazit-Typografie (`rgb(21, 23, 26)`), die lokal eingebundene Lora-Schrift und die Marke Echte Blicke mit Fotograf Philipp Klaushardt. Die Fotografien – nicht dekorative UI-Effekte – stehen im Mittelpunkt.

## Design-Dimensionen
- **Bewegung:** ruhiges, modernes Editorial-Portfolio.
- **Prinzipien:** warm, klar, großzügig und bildorientiert; verständliche Navigation für Paare, Hochzeitspaare und Familien; wenig visuelle Unruhe.
- **Farbe:** warmes Elfenbein/Creme, dunkle Tinte und zurückhaltende warme Neutraltöne. Keine gesättigten Akzente, die mit den Hauttönen der Originalfotos konkurrieren.
- **Layout:** Mobile First. Die Startseite eröffnet mit einem vollflächigen Foto-Hero in Bildschirmhöhe; kurze, kontrastreiche Texte und die Anfrage-Aktion liegen links unten auf dem Bild. Portfolio-Galerien ordnen Hoch- und Querformate in gleichmäßigen CSS-Spalten mit natürlichen Bildproportionen an. Die drei Portfolio-Kategorien behalten gleiches visuelles Gewicht.
- **Signatur:** großzügige Ränder, typografische Wortmarke „Echte Blicke“, ruhige Linien und unaufdringliche Anfrage-Links. Kein Augen- oder Linsen-Logo im Header oder als Website-Favicon.
- **Interaktion:** tastaturzugängliche Navigation, sichtbare Fokuszustände, Skip-Link und reduzierte Bewegung. Galerie-Links öffnen bei aktiviertem JavaScript eine native, tastaturbedienbare Lightbox; ohne JavaScript führt derselbe Link direkt zur Originalaufnahme.
- **Animation:** keine nötig; `prefers-reduced-motion` respektieren.
- **Typografie:** lokal bereitgestellte Lora als Editorial-Serifenschrift, ergänzt durch eine System-Sans-Serifenschrift für kleine UI-Labels. Lesbare Zeilenlängen und fließende Schriftgrößen.
- **Stimme:** Deutsch, persönlich, ruhig und inklusiv für Paare, Hochzeitsgesellschaften und Familien. Die Aussagen des Fotografen bleiben die Grundlage; keine erfundenen Testimonials oder Leistungen.
- **Wortmarke:** „Echte Blicke“ ausschließlich als Text im Header, ergänzt um „Fotografie · Philipp Klaushardt“. Im Website-Favicon bleibt höchstens ein einfaches typografisches „E“; kein Augenmotiv.
- **Markensignatur:** warmer Cremegrund, dunkle Serifentypografie und authentische, ungestellte Originalmomente.

## Bildregeln
Für Portfolio, Startseite, Über-mich- und weitere redaktionelle Fotografien werden ausschließlich vorhandene Aufnahmen von echteblicke.de verwendet. Keine generierten, Stock- oder Ersatzfotos. Originaldateien bleiben unverändert; Hugo darf beim Build responsive WebP-/AVIF-Ableitungen erzeugen.

## Umgesetzte Nutzeranpassungen
- **30.09.2026:** Auf der Startseite wird `2025-04-06_18.20.47-_PHI8626-klaushardt.com.jpg` als vollflächiges, responsives Hintergrundmotiv gezeigt. Überschrift, knapper Einführungstext und Anfrage-Link stehen links unten auf dem Bild; die Navigation liegt als kontrastreiche Overlay-Ebene darüber.
- **30.09.2026:** Die Preisseite zeigt je Kategorie ein redaktionelles Foto und eine gut lesbare, mobil umbrechende Tabelle. Hinweise auf die frühere Website sind von öffentlichen Seiten entfernt; Quellherkunft bleibt in internen Inventar- und Entwicklerdokumenten nachvollziehbar.
- **30.09.2026:** Portfolio-Galerien nutzen eine CSS-Multicolumn-Anordnung mit natürlichen Bildproportionen statt gleichmäßiger Grid-Zeilen. Ein Coverfoto wird nicht direkt darunter ein zweites Mal gezeigt.
- **30.09.2026:** Jedes Galeriefoto führt zur Originalaufnahme und öffnet mit JavaScript in einer nativen Dialog-Lightbox; Schließen per Escape, Tastaturfokus und Links zur Originaldatei ohne JavaScript bleiben verfügbar.
