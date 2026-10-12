STONE AGE JUNIOR DIGITAL – GITHUB PAGES TESTPAKET v0.3b
Stand: 12. Oktober 2026

WICHTIG – BITTE VOR DEM ÖFFENTLICHEN UPLOAD LESEN:
Dieses Testpaket enthält Originalscans der Spielmaterialien. GitHub Pages ist öffentlich zugänglich,
auch wenn der Quellcode in einem privaten Repo liegt. Vor der Veröffentlichung Rechte/Freigabe prüfen.
Die robots.txt-Datei und der noindex-Metatag sind KEIN Zugriffsschutz.
Ein öffentlicher Upload darf erst nach entsprechender Rechteprüfung erfolgen.

INHALT
index.html – Schüleransicht
admin.html – Lehrkraftanmeldung mit vorhandenen Supabase-Kontodaten
config.js – öffentliche URL und Publishable Key von Supabase, keine Service-Role-Schlüssel
online-*.js – Spiellogik / Kommunikation; style.css – Gestaltung; assets/ – Testbilder
.nojekyll – GitHub Pages ohne Jekyll-Verarbeitung

VORBEREITUNG
Die PostgreSQL-Tabellen und Funktionen saj_* wurden im vorhandenen Supabase-Projekt Meine Bibliothek angelegt.
Das Lehrkraftkonto ist freigeschaltet und anonyme Anmeldungen wurden aktiviert.
Kein weiteres SQL-Skript ausführen.

TECHNISCHER VERÖFFENTLICHUNGSABLAUF (ERST NACH RECHTEFREIGABE)
1. Auf GitHub ein neues Repository stone-age-junior-digital erstellen.
2. Den INHALT dieses Ordners in das Repository-ROOT hochladen (nicht den ZIP-Container selbst).
3. Settings > Pages > Build and deployment > Deploy from a branch > main > /(root) > Save.
4. Die von GitHub angezeigte HTTPS-URL öffnen. Schüler öffnen index.html (bzw. die Startseite),
   Lehrkraft öffnet admin.html.
5. Mit Lehrkraftkonto anmelden; eine Gruppe mit Kapazität 2 erzeugen; Codes kopieren.
6. Mit zwei separaten iPads/Browser-Sitzungen und zwei Spielnamen ausprobieren.

HINWEISE
- Das ist ausdrücklich eine TESTVERSION. Kein kompletter Zwei-Geräte-End-to-End-Test erfolgt.
- Die Schülerinnen und Schüler sollten Spitznamen statt Klarnamen verwenden.
- Erstmals testen, ob Schul-WLAN externes Supabase und jsDelivr zulässt.
- Public-only Rate-Limits/CAPTCHA prüfen, bevor Klassenlinks verteilt werden.
- Die Spielregeln (unterschiedliche Gruppengrößen und Sonderfälle) sind noch zu testen.
