# Echte Blicke — Website

Statische Portfolio-Website für Philipp Klaushardt, mit drei gleichwertigen Sparten: Paar-, Hochzeits- und Familienfotografie. Es werden ausschließlich vorhandene Fotografien von echteblicke.de verwendet. Die 20 Urban-Fotos bleiben ausgeschlossen. Das Importverzeichnis und die Quellzuordnung stehen in `data/source-photo-manifest.json`; die redaktionelle Übernahme steht in `content-inventory.md`.

## Warum Hugo?

Hugo erzeugt aus Markdown- und Frontmatter-Inhalten vollständiges statisches HTML. Das passt zu einem Fotoportfolio mit stabilen öffentlichen Seiten, vermeidet einen Laufzeitserver, braucht keinen JavaScript-Framework-Build für Besucher und kann Bildgrößen während des Builds erzeugen. Die Seiten bleiben gut durchsuchbar und sind mit GitHub Pages langfristig einfach zu versionieren.

## Lokal entwickeln

Installiere **Hugo Extended 0.167.0** oder eine neuere kompatible Version. Node.js wird zum Bauen der Website nicht benötigt.

```sh
hugo server --bind 127.0.0.1 --port 1313
```

Besuche anschließend `http://127.0.0.1:1313/`. Für einen Produktionsbuild:

```sh
hugo --minify --destination ./public
```

Hugo schreibt fertige statische Dateien nach `public/`; `public/` ist ein erzeugtes Build-Verzeichnis und wird nicht ins Git-Repository eingecheckt.

## GitHub Pages veröffentlichen

Der Workflow in `.github/workflows/pages.yml` baut und veröffentlicht Hugo Extended automatisch bei Pushes auf den Branch `main` (und kann manuell gestartet werden). In deinem GitHub-Repository unter **Settings → Pages** wählst du als Quelle **GitHub Actions**. `static/CNAME` enthält `echteblicke.de`; verknüpfe diese Domain im Repository und richte ihre DNS-Einträge nach der [GitHub-Pages-Dokumentation für eigene Domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) ein. An der DNS-Konfiguration wurde in diesem Projekt nichts geändert. Pushes zu `main` veröffentlichen erst, nachdem das Projekt in ein von dir kontrolliertes GitHub-Repository übertragen und GitHub Pages dort aktiviert ist.

CSS und JavaScript werden über Hugo mit inhaltsabhängigen Fingerprints ausgeliefert; responsive Galerieableitungen werden aus den versionierten Quellfotos erzeugt. GitHub Pages verwaltet die HTTP-Cache-Header selbst; der Workflow setzt keine nicht unterstützten eigenen Cache-Header.

## CMS einrichten und anmelden

Die Redaktionsoberfläche liegt unter `/admin/`. Sie verwendet lokal gebündeltes Decap CMS mit GitHub-Backend. **Vor dem ersten Login** müssen im Projekt zwei Einträge in `static/admin/config.yml` ersetzt werden: `REPLACE_WITH_OWNER/REPOSITORY` und `REPLACE_WITH_WORKER.workers.dev`.

Der statische Host kann das GitHub-OAuth-Callback nicht selbst ausführen. Dafür liegt der kleine, nur für die CMS-Anmeldung bestimmte Cloudflare Worker unter `oauth-worker/`.

1. Erstelle in GitHub unter **Settings → Developer settings → OAuth Apps** eine OAuth App. Als Homepage-URL verwendest du `https://echteblicke.de`; als Authorization callback URL exakt die Worker-URL mit `/callback`. Die CMS-Anmeldung benötigt den GitHub-Repository-Zugriff.
2. Installiere Wrangler lokal und melde dich bei Cloudflare an. Passe `oauth-worker/wrangler.toml` so an, dass `CALLBACK_URL` den tatsächlichen Worker-Host samt `/callback` enthält.
3. Hinterlege die OAuth-Werte als Worker-Secrets — niemals in Git oder in `static/admin/config.yml`:

   ```sh
   cd oauth-worker
   npx wrangler@4 secret put GITHUB_CLIENT_ID
   npx wrangler@4 secret put GITHUB_CLIENT_SECRET
   npx wrangler@4 deploy
   ```

4. Trage nach dem Deploy die Worker-Basisadresse in `static/admin/config.yml` ein (ohne `/auth`, zum Beispiel `https://mein-worker.<konto>.workers.dev`). Der Callback-Pfad `/callback` bleibt in der OAuth-App und in `wrangler.toml` gleich.
5. Ersetze `REPLACE_WITH_OWNER/REPOSITORY` durch den Namen deines GitHub-Repositories, committe die Konfiguration auf `main` und rufe `https://echteblicke.de/admin/` auf. Melde dich mit einem GitHub-Konto an, das Schreibzugriff auf das CMS-Repository hat.

Worker und OAuth-App werden nicht automatisch erstellt oder veröffentlicht; Konten und Secrets bleiben beim Websitebetreiber. Das CMS speichert seine Änderungen als Git-Commits im ausgewählten Repository.

## Texte, Portfolios und Bilder pflegen

Nach dem CMS-Login bearbeitest du die Startseite, Über mich, Preise & FAQ, Kontakt sowie Impressum und Datenschutz über die passenden Einträge in der Navigation. Unter **Portfolio-Kategorien** findest du die bisherigen drei Bereiche. Bilder lassen sich dort direkt hochladen, in der Galerie sortieren, entfernen und mit Alternativtext versehen. Der Kategorie-Index, die Startseite und die Navigation verwenden dieselben Seiten und die im CMS gepflegte Reihenfolge.

### Neues Bild oder Ersatzfoto

- Öffne die gewünschte Portfolio-Kategorie und füge im Galerie-Feld einen Eintrag hinzu oder ersetze den bisherigen Eintrag.
- Lade das Original über das Bildfeld hoch. Der Git-Pfad liegt unter `assets/images/portfolio/<slug>/`; die öffentliche Bildadresse beginnt mit `/images/portfolio/<slug>/`.
- Ordne einen sinnvollen Alternativtext zu und speichere/committe die Änderung. Hugo erzeugt beim Build kleinere responsive Bildableitungen; der ursprüngliche Upload bleibt im Repository versioniert.
- Für das Titelbild ersetzt du das Feld **Titelbild**, nicht versehentlich eine andere Galerie-Aufnahme. Wenn du ein Foto entfernst, verschwindet es aus der veröffentlichten Galerie; frühere Git-Commits können die alte Datei weiter enthalten.

### Neue Portfolio-Kategorie (ohne Code)

1. Öffne im CMS **Portfolio-Kategorien → New Portfolio-Kategorie**.
2. Wähle einen eindeutigen Titel und Rubriktext, trage Einleitung und Kurzbeschreibung ein und setze eine Reihenfolge (kleinere Zahl erscheint zuerst).
3. Lade ein Titelbild und mindestens ein Galerie-Foto hoch. Prüfe für jedes Foto den Alternativtext.
4. Optional kannst du über **Preise aus FAQ übernehmen** einen bestehenden Preisbereich anzeigen lassen; bei einer ganz neuen Sparte kannst du dieses Feld leer lassen.
5. Speichere und committe. Ohne abweichende URL erscheint eine neue Kategorie standardmäßig unter `/portfolio/<slug>/`; sie wird automatisch im Kategorieindex, der Startseite und der Navigation aufgeführt. Das CMS setzt den passenden Hugo-Seitentyp bereits beim Anlegen.

Die Portfolio- und FAQ-Daten bleiben normale Markdown-/YAML-Inhalte. Ändere für die drei bestehenden Kategorien nicht die aktuellen öffentlichen URL-Felder, wenn du ihre Links und Suchmaschinen-Einträge beibehalten möchtest.

## Kontaktformular und Rechtliches

Das Formular verwendet den bereits auf der bestehenden Website sichtbaren Formspree-Endpunkt `https://formspree.io/f/movbozro`. Der Formularversand wurde während der Implementierung nicht testweise abgesendet. Prüfe im Formspree-Konto die Empfängeradresse, Formularaktivierung, erlaubte Domain und aktuelle Aufbewahrungs-/Vertragsbedingungen, bevor du die neue Version bewirbst. Die Datenschutzerklärung nennt den Anbieter und verlinkt seine aktuelle Datenschutzrichtlinie; bitte gleiche sie zusätzlich mit deinen tatsächlichen Anbietervereinbarungen ab. Das Impressum übernimmt die öffentlich bereitgestellten Daten aus der Quelle.

## Projektstruktur

- `content/`: übernommene deutsche Seiten und editierbare Portfolio-/Preisdaten.
- `layouts/`: gemeinsame Templates, Galerie, Preis-/FAQ-, Kontakt- und Rechtsseiten.
- `assets/css/`, `assets/js/`, `static/fonts/`: Design, kleine progressive Interaktionen und lokal ausgelieferte Schrift.
- `assets/images/`: Original-Fotos; nicht für manuelle Bildkompression oder generierte Ableitungen ändern.
- `static/admin/`: Decap CMS und GitHub-Backend-Konfiguration.
- `oauth-worker/`: Cloudflare-Worker-Vorlage für den CMS-Login.
- `.github/workflows/pages.yml`: Hugo-Build und GitHub-Pages-Deployment.
- `static/manus-routes.json`: aktuelles Routenmanifest; neue Portfolio-Kategorien sind über `/portfolio/:slug/` abgedeckt.
- `content-inventory.md`, `data/source-photo-manifest.json`: Quellen- und Bildabgleich.
