# Content- und Foto-Inventar – Echte Blicke

Stand: 29.09.2026. Grundlage sind die öffentlichen Quellseiten, ihr HTML und die dort referenzierten Originaldateien. Die Website verwendet **keine KI-generierten, Stock- oder Fremdfotos**. Die Bilder im Portfolio sind vorhandene Fotografien von echteblicke.de.

## Quellseiten

- Startseite/Galerien: [echteblicke.de](https://echteblicke.de/)
- Portfolio: [echteblicke.de/portfolio/](https://echteblicke.de/portfolio/)
- Über mich: [echteblicke.de/me/](https://echteblicke.de/me/)
- Preise & FAQ: [echteblicke.de/faq/](https://echteblicke.de/faq/)
- Kontakt: [echteblicke.de/kontakt/](https://echteblicke.de/kontakt/)
- Impressum: [echteblicke.de/impressum/](https://echteblicke.de/impressum/)
- Datenschutz: [echteblicke.de/datenschutz/](https://echteblicke.de/datenschutz/)
- Quelle der bestehenden Autor-Weiterleitung: [echteblicke.de/author/philipp/](https://echteblicke.de/author/philipp/)

## Fotoübernahme

- Die Homepage enthält 98 Galerie-Bilddatensätze. Übernommen wurden die drei gewünschten Kategorien: **Paare (33), Hochzeit (34) und Familie (11)** — zusammen **78 Galerie-Fotos**. Die 20 Fotos der Urban-Kategorie sind bewusst ausgeschlossen; es gibt keine Urban-Seite, kein Urban-Menü und keinen Urban-CMS-Eintrag.
- Zusätzlich wurden die auf den bestehenden Text-/Anfrageseiten verwendeten Aufnahmen übernommen: acht FAQ-/Preisbilder sowie das Autorenporträt. Das Kontaktmotiv kommt bereits in der Quellgalerie vor. Insgesamt verzeichnet das Importmanifest 88 Quellverwendungen und 87 eindeutige lokale Dateipfade; alle als heruntergeladen geführten Dateien sind vorhanden. Die Originaldateien zusammen belegen etwa 16,1 MB.
- Unbeschnittene Originale liegen in `assets/images/`. Hugo erzeugt daraus erst beim Build optimierte responsive Ableitungen. Die ursprünglichen Dateien werden weder überschrieben noch durch generierte Varianten ersetzt.
- Vollständiger Quell- und Zielabgleich inklusive Source-URL, Kategorie, Dateipfad, Status und Urban-Ausschluss: [`data/source-photo-manifest.json`](data/source-photo-manifest.json).
- Das Original-HTML hatte bei den Galerie-Fotos leere Bild-Alternativtexte. Die Migration setzt deshalb zurückhaltende kategoriebezogene Alternativtexte, ohne nicht belegte Szenendetails zu erfinden. Wenn genauere Beschreibungen gewünscht sind, kann der Betreiber sie im CMS ergänzen.

## Übernommene Inhalte

- Die Biografie, Fotografiephilosophie und das vorhandene Porträt stammen von `/me/`.
- Der Tarifblock enthält die vorhandenen Preise: Paarshooting **400 €**, Familienfotografie **500 €**, Hochzeiten **540 € / 780 € / 1.040 € / 1.300 € / 1.560 €** für die 3-/6-/8-/10-/12-Stunden-Pakete; zusätzliche Begleitung **150 € je Stunde**.
- Alle fünf vorhandenen FAQ-Themen (Posen, Kleidung, Wetter, Bildanzahl, Ort) sind enthalten. Rechtschreibung und punktuelle Grammatik wurden dort leicht redigiert, wo die Quellseite klare Fehler enthielt; Angebote, Preise und Leistungsumfang wurden nicht ergänzt.
- **Offener Quellwiderspruch zur Bildanzahl bei Hochzeiten:** Der Pakettext nennt „mindestens 60 Bilder pro Stunde“, während die FAQ „oft eher 50 bis 60 pro Stunde“ angibt. Beide originalen Aussagen bleiben sichtbar; Philipp sollte entscheiden, welche Angabe künftig gilt.
- Der öffentliche Fotografen-/Betreibername ist Philipp Klaushardt. Für die Website ist auf Nutzerangabe das Instagram-Profil `@echteblicke` als einfacher Profil-Link vorgesehen; es gibt keinen eingebetteten Feed.

## Kontaktformular und Kontaktdaten

Das Formular verwendet den bereits auf der Quellseite sichtbaren Formspree-Endpunkt `https://formspree.io/f/movbozro`. Er wurde nicht testweise abgesendet. Vor Veröffentlichung auf einer neuen Domain sollte der Betreiber die Formspree-Formulareinstellungen, Benachrichtigungsadresse, Kontingent und erlaubte Domains kontrollieren.

Verifizierte Quellfeldnamen und Regeln:

- `Name` ist optional; `Email` ist erforderlich.
- `Interesse` unterscheidet `Paarshooting`, `Familienfotos`, `Hochzeit` und `Eigenes Projekt`.
- Paar-Zusatzfelder: `Paar_Wunschort`, `Paar_Zeitraum`; Familie: `Familie_Personen`, `Familie_Alter`; Hochzeit: `Hochzeitsdatum`, `Hochzeitslocation`.
- Nachricht: `Nachricht`. Die Auswahl zur Herkunft verwendet die optionalen Mehrfachfelder `Quelle[]` mit `Instagram`, `Empfehlung`, `Google` und `Sonstiges`. Dazu gehören `Instagram` (Profilname) und `Quelle_Sonstiges_Details`.
- Das erforderliche Kontrollkästchen hat den Feldnamen `Datenschutz`. Das ursprüngliche Honeypot-Feld heißt `Website`.
- Telefon: **0156 78871879**. Kontakt: `kontakt@echteblicke.de`; Datenschutz: `datenschutz@echteblicke.de`; Impressum: `impressum@echteblicke.de`.

## Impressum und Datenschutz

Das Impressum übernimmt den Bestandshalter **Philipp Klaushardt**, Kalkweg 110, 47055 Duisburg; Umsatzsteuer-Identifikationsnummer **DE322115991**; Telefon und E-Mail; sowie die bestehende Erklärung zur Verbraucherstreitbeilegung.

Die alte Datenschutzerklärung nannte Netcup, Google Fonts, eingebettete Instagram-Funktionen und Google reCAPTCHA. Die neue Variante beschreibt stattdessen die ausgewählte GitHub-Pages-Auslieferung, das Formspree-Formular, den nur für den Betreiber gedachten Decap/GitHub-Redaktionsbereich und externe Profil-/WhatsApp-Links. Der öffentliche Auftritt lädt Lora lokal und fügt keine Analyse- oder Social-Widgets ein. **Vor Veröffentlichung bitte prüfen:** tatsächliche GitHub-Pages- und Formspree-Vertrags-/Kontoeinstellungen, Aufbewahrungsfristen und etwaige Drittlandübermittlungen; Website-Rechtstexte stellen keine Rechtsberatung dar.

## Routen- und CMS-Entscheidung

- Bestehende Seitenpfade bleiben `/me/`, `/faq/`, `/kontakt/`, `/impressum/`, `/datenschutz/`; der verifizierte Autorenpfad `/author/philipp/` leitet auf die Startseite weiter.
- `/portfolio/` ist ein Kategorie-Index; die drei bestehenden Kategorie-Seiten liegen unter `/paarfotografie/`, `/hochzeitsfotografie/` und `/familienfotografie/`. Dieser Index wurde statt einer Weiterleitung eingerichtet, damit CMS-erstellte Kategorien einen konsistenten Überblick erhalten. Neue Kategorien werden standardmäßig unter `/portfolio/<slug>/` angelegt.
- Decap CMS verwaltet Seitentexte und Portfolios. Im Bereich „Kategorien“ kann Philipp Galerien und Beschreibungen bearbeiten, die Anzeigereihenfolge ändern oder eine Kategorie ohne Code anlegen. Ein GitHub-OAuth-Proxy ist zusätzlich erforderlich; seine Konten und Geheimnisse müssen vom Betreiber eingerichtet werden.

## Brand und Bildverarbeitung

Die visuelle Richtung nutzt die bestehenden Farben, die lokal gebündelte Open-Source-Schrift Lora und eine neu erstellte, einfache grafische Favicon-/Projektmarke. Diese Markengrafik ist **kein Foto**; sämtliche redaktionellen und Portfolio-Bilder stammen weiterhin aus den vorhandenen Echte-Blicke-Dateien. Die Bildkomponente liefert responsive Größen und einen Original-Fallback; die Quellbilder bleiben unangetastet.


## Fehlende, platzierte oder generierte Fotos

- **Fehlende Originalfotos:** keine — alle 87 lokalen Originaldateipfade im Importmanifest sind vorhanden.
- **Platzhalterfotos:** keine.
- **Generierte/Stock-/Fremdfotos:** keine. Ausschließlich die vorhandenen Fotografien von echteblicke.de sind eingebunden. Das neue SVG-Favicon und das Projekt-Icon sind grafische Markenzeichen und keine redaktionellen oder Portfoliofotos.
