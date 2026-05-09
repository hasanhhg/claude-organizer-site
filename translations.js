(function () {
  var T = {
    en: {
      nav:  { cta: "Add to Chrome" },
      hero: { badge: "Free Chrome Extension", h1: "Your Claude chats,<br><em>finally organized</em>", sub: "Hundreds of chats and zero order? Claude Organizer scans them all, builds a plan, and moves everything into projects in one click.", stars: "Loved by Claude power users", cta: "Add to Chrome — it’s free", note1: "No API key required", note2: "No account needed", note3: "Works in seconds" },
      stats: { v1: "Free", l1: "No subscription ever", l2: "Chat topics recognized", l3: "Built-in categories", l4: "Full organize run" },
      hiw:  { eyebrow: "How it works", title: "Three steps, one click", sub: "You see the full plan before anything moves. Nothing happens without your approval." },
      step1: { title: "Click Organize", desc: "The extension scans all your unorganized chats and builds a move plan using keyword matching and AI. Takes a few seconds." },
      step2: { title: "Review the plan", desc: "See exactly which chat goes where before anything moves. New projects are clearly marked. Unmatched chats are flagged separately." },
      step3: { title: "Click Apply", desc: "Everything moves in one batch. Empty projects are cleaned up automatically. Done." },
      feat:  { eyebrow: "Features", title: "Everything you need,<br>nothing you don’t", sub: "Simple and fast. No settings to configure, no API key to paste." },
      feat1: { title: "Instant keyword matching", desc: "A built-in multilingual wordlist matches most chats in milliseconds, with no network call and no delay." },
      feat2: { title: "AI for the hard ones", desc: "Ambiguous titles get categorized by a shared AI backend. No API key needed. It just works." },
      feat3: { title: "Preview before applying", desc: "See the full plan before a single chat moves. Cancel at any time with one click." },
      feat4: { title: "Manual mode", desc: "Assign specific chats by hand when auto-organize isn’t quite right for your workflow." },
      feat5: { title: "Multilingual", desc: "Keyword matching covers English, Dutch, French, German, Spanish, Polish, Russian and more." },
      feat6: { title: "Auto-cleanup", desc: "Empty projects are removed automatically after each organize run. Your sidebar stays tidy." },
      band:  { title: "Ready to clean up?", sub: "Free, no setup, takes about 10 seconds to install.", cta: "Add to Chrome" },
      topics: { eyebrow: "Wordlist", title: "Recognizes what you’re talking about", sub: "The built-in wordlist covers the most common chat topics across multiple languages.", sidebar: "built-in categories, plus AI covering everything else", meta: "Works across <strong>10+ languages</strong> and handles any topic your chats throw at it." },
      priv:  { eyebrow: "Privacy", title: "Your data stays yours", sub: "No accounts, no tracking, no data collection beyond what’s needed to organize your chats.", note: "Chat content never leaves your browser. For ambiguous titles, only the title text is sent to a shared AI service for categorization. No personal data, no history, no accounts.", link: "Full privacy policy" },
      pc1:   { title: "Stays in your browser", desc: "Your chats are read directly from Claude.ai using your active login session. No data is stored on any server." },
      pc2:   { title: "Only titles leave", desc: "When AI categorization is needed, only the <strong>chat title</strong> is sent. Never the conversation content." },
      pc3:   { title: "Zero analytics", desc: "No usage tracking, no telemetry, no crash reports. The extension has no backend of its own." },
      perms: { title: "Chrome permissions explained" },
      perm1: { desc: "Reads your open Claude.ai tab to detect chat titles. Only active while you use the extension." },
      perm2: { desc: "Saves your project names locally in your browser. Nothing is sent to any server." },
      perm3: { desc: "Runs the organizer logic on claude.ai to read the sidebar and move chats into projects." },
      test:  { eyebrow: "What users say", title: "Cleaning up chat chaos", q1: "“Finally, my Claude sidebar is not a complete disaster. Organized 67 chats in about 10 seconds. The preview step is key.”", q2: "“Works perfectly in French too. Was not expecting that. The keyword matching gets my chats right almost every time.”", q3: "“I was skeptical about no API key but the AI fallback genuinely works. Sorted 40 research chats into the right projects instantly.”", r1: "Software developer", r2: "Product manager", r3: "Researcher" },
      faq:   { eyebrow: "FAQ", title: "Common questions", q1: "Is it free?", a1: "Yes, completely free. No subscription, no premium tier, no hidden costs. Ever.", q2: "Do I need an API key?", a2: "No. The AI categorization runs on a shared backend at no cost to you. Just install the extension and click Organize.", q3: "Will it delete my chats or projects?", a3: "No chats are ever deleted. Projects that are left completely empty after organizing are removed to keep your sidebar clean, but every conversation stays intact in your chat history.", q4: "Does it work in languages other than English?", a4: "Yes. The keyword wordlist covers Dutch, French, German, Spanish, Italian, Polish, Russian, Arabic, Hindi and more. The AI fallback works in any language.", q5: "Do I need to be logged in to Claude.ai?", a5: "Yes. The extension uses your active Claude.ai browser session to read and move chats. Open claude.ai, log in, then click the extension icon.", q6: "Can I undo an organize run?", a6: "Not automatically, but you can move chats back manually in Claude.ai. That’s why the preview step exists: review the plan carefully before clicking Apply." },
      cta:   { title: "Clean up your chats today", sub: "Free, no setup, works in seconds.", note: "No account · No API key · No data collection" },
      footer: { store: "Chrome Web Store", contact: "Contact", privacy: "Privacy Policy", copy: "Not affiliated with Anthropic. Claude is a trademark of Anthropic, PBC." }
    },

    nl: {
      nav:  { cta: "Toevoegen aan Chrome" },
      hero: { badge: "Gratis Chrome-extensie", h1: "Jouw Claude-chats,<br><em>eindelijk georganiseerd</em>", sub: "Honderden chats en geen overzicht? Claude Organizer scant ze allemaal, maakt een plan en verplaatst alles naar projecten met een klik.", stars: "Geliefd bij Claude-gebruikers", cta: "Toevoegen aan Chrome — gratis", note1: "Geen API-sleutel nodig", note2: "Geen account nodig", note3: "Klaar in seconden" },
      stats: { v1: "Gratis", l1: "Nooit een abonnement", l2: "Chatonderwerpen herkend", l3: "Ingebouwde categorieën", l4: "Volledig organiseren" },
      hiw:  { eyebrow: "Hoe het werkt", title: "Drie stappen, één klik", sub: "Je ziet het volledige plan voordat er iets verplaatst wordt. Niets gebeurt zonder jouw goedkeuring." },
      step1: { title: "Klik op Organiseren", desc: "De extensie scant al je ongeorganiseerde chats en maakt een verplaatsplan met trefwoordherkenning en AI. Duurt een paar seconden." },
      step2: { title: "Bekijk het plan", desc: "Zie precies welke chat waarheen gaat voordat er iets verplaatst wordt. Nieuwe projecten zijn duidelijk gemarkeerd. Niet-herkende chats worden apart weergegeven." },
      step3: { title: "Klik op Toepassen", desc: "Alles verplaatst in één keer. Lege projecten worden automatisch opgeruimd. Klaar." },
      feat:  { eyebrow: "Functies", title: "Alles wat je nodig hebt,<br>niets wat je niet nodig hebt", sub: "Eenvoudig en snel. Geen instellingen, geen API-sleutel." },
      feat1: { title: "Directe trefwoordherkenning", desc: "Een ingebouwde meertalige woordenlijst herkent de meeste chats in milliseconden, zonder netwerkoproep of vertraging." },
      feat2: { title: "AI voor de lastige gevallen", desc: "Onduidelijke titels worden gecategoriseerd door een gedeelde AI-backend. Geen API-sleutel nodig. Het werkt gewoon." },
      feat3: { title: "Voorbeeld voor het toepassen", desc: "Zie het volledige plan voordat een chat verplaatst wordt. Annuleer op elk moment met één klik." },
      feat4: { title: "Handmatige modus", desc: "Wijs specifieke chats handmatig toe wanneer automatisch organiseren niet helemaal past bij je workflow." },
      feat5: { title: "Meertalig", desc: "Trefwoordherkenning ondersteunt Engels, Nederlands, Frans, Duits, Spaans, Pools, Russisch en meer." },
      feat6: { title: "Automatisch opruimen", desc: "Lege projecten worden na elke organisatieronde automatisch verwijderd. Je zijbalk blijft overzichtelijk." },
      band:  { title: "Klaar om op te ruimen?", sub: "Gratis, geen installatie, duurt ongeveer 10 seconden.", cta: "Toevoegen aan Chrome" },
      topics: { eyebrow: "Woordenlijst", title: "Herkent waar je het over hebt", sub: "De ingebouwde woordenlijst dekt de meest voorkomende chatonderwerpen in meerdere talen.", sidebar: "ingebouwde categorieën, plus AI voor alles daarna", meta: "Werkt in <strong>10+ talen</strong> en verwerkt elk onderwerp dat je chats bevatten." },
      priv:  { eyebrow: "Privacy", title: "Jouw data blijft van jou", sub: "Geen accounts, geen tracking, geen dataverzameling buiten wat nodig is om je chats te organiseren.", note: "Chatinhoud verlaat nooit je browser. Voor onduidelijke titels wordt alleen de titeltekst naar een gedeelde AI-dienst gestuurd voor categorisering. Geen persoonlijke data, geen geschiedenis, geen accounts.", link: "Volledig privacybeleid" },
      pc1:   { title: "Blijft in je browser", desc: "Je chats worden rechtstreeks gelezen van Claude.ai via je actieve inlogsessie. Geen data wordt opgeslagen op een server." },
      pc2:   { title: "Alleen titels vertrekken", desc: "Wanneer AI-categorisering nodig is, wordt alleen de <strong>chattitel</strong> verzonden. Nooit de gespreksinhoud." },
      pc3:   { title: "Nul analyses", desc: "Geen gebruiksregistratie, geen telemetrie, geen crashrapporten. De extensie heeft geen eigen backend." },
      perms: { title: "Chrome-rechten uitgelegd" },
      perm1: { desc: "Leest je open Claude.ai-tabblad om chattitels te detecteren. Alleen actief tijdens gebruik van de extensie." },
      perm2: { desc: "Slaat je projectnamen lokaal op in je browser. Niets wordt naar een server verzonden." },
      perm3: { desc: "Voert de organisatielogica uit op claude.ai om de zijbalk te lezen en chats naar projecten te verplaatsen." },
      test:  { eyebrow: "Wat gebruikers zeggen", title: "Chatchaos opruimen", q1: "“Eindelijk is mijn Claude-zijbalk geen complete chaos meer. 67 chats georganiseerd in ongeveer 10 seconden. De voorbeeldstap is cruciaal.”", q2: "“Werkt ook perfect in het Frans. Had ik niet verwacht. De trefwoordherkenning plaatst mijn chats bijna elke keer goed.”", q3: "“Ik was sceptisch over geen API-sleutel, maar de AI-fallback werkt echt. 40 onderzoekschats direct in de juiste projecten gesorteerd.”", r1: "Softwareontwikkelaar", r2: "Productmanager", r3: "Onderzoeker" },
      faq:   { eyebrow: "FAQ", title: "Veelgestelde vragen", q1: "Is het gratis?", a1: "Ja, volledig gratis. Geen abonnement, geen premium versie, geen verborgen kosten. Nooit.", q2: "Heb ik een API-sleutel nodig?", a2: "Nee. De AI-categorisering draait op een gedeelde backend zonder kosten voor jou. Installeer de extensie en klik op Organiseren.", q3: "Worden mijn chats of projecten verwijderd?", a3: "Geen enkele chat wordt verwijderd. Projecten die na het organiseren volledig leeg zijn, worden verwijderd om je zijbalk overzichtelijk te houden, maar elk gesprek blijft intact in je chatgeschiedenis.", q4: "Werkt het in andere talen dan Engels?", a4: "Ja. De trefwoordenlijst dekt Nederlands, Frans, Duits, Spaans, Italiaans, Pools, Russisch, Arabisch, Hindi en meer. De AI-fallback werkt in elke taal.", q5: "Moet ik ingelogd zijn op Claude.ai?", a5: "Ja. De extensie gebruikt je actieve Claude.ai-browsersessie om chats te lezen en te verplaatsen. Open claude.ai, log in en klik op het extensiepictogram.", q6: "Kan ik een organisatieronde ongedaan maken?", a6: "Niet automatisch, maar je kunt chats handmatig terugzetten in Claude.ai. Daarom bestaat de voorbeeldstap: bekijk het plan zorgvuldig voordat je op Toepassen klikt." },
      cta:   { title: "Ruim je chats vandaag op", sub: "Gratis, geen installatie, klaar in seconden.", note: "Geen account · Geen API-sleutel · Geen dataverzameling" },
      footer: { store: "Chrome Web Store", contact: "Contact", privacy: "Privacybeleid", copy: "Niet gelieerd aan Anthropic. Claude is een handelsmerk van Anthropic, PBC." }
    },

    fr: {
      nav:  { cta: "Ajouter à Chrome" },
      hero: { badge: "Extension Chrome gratuite", h1: "Vos chats Claude,<br><em>enfin organisés</em>", sub: "Des centaines de chats sans ordre? Claude Organizer les analyse, crée un plan et déplace tout dans des projets en un clic.", stars: "Adoré par les utilisateurs Claude", cta: "Ajouter à Chrome — gratuit", note1: "Aucune clé API requise", note2: "Aucun compte nécessaire", note3: "Prêt en quelques secondes" },
      stats: { v1: "Gratuit", l1: "Jamais d’abonnement", l2: "Sujets de chat reconnus", l3: "Catégories intégrées", l4: "Organisation complète" },
      hiw:  { eyebrow: "Comment ça marche", title: "Trois étapes, un clic", sub: "Vous voyez le plan complet avant que quoi que ce soit ne bouge. Rien ne se passe sans votre accord." },
      step1: { title: "Cliquez sur Organiser", desc: "L’extension analyse tous vos chats non organisés et crée un plan avec correspondance par mots-clés et IA. Quelques secondes suffisent." },
      step2: { title: "Vérifiez le plan", desc: "Voyez exactement quel chat va où avant tout déplacement. Les nouveaux projets sont clairement indiqués. Les chats non reconnus sont signalés séparément." },
      step3: { title: "Cliquez sur Appliquer", desc: "Tout se déplace en une fois. Les projets vides sont supprimés automatiquement. C’est fait." },
      feat:  { eyebrow: "Fonctionnalités", title: "Tout ce qu’il faut,<br>rien de superflu", sub: "Simple et rapide. Aucun réglage, aucune clé API à saisir." },
      feat1: { title: "Correspondance instantanée", desc: "Une liste de mots multilingue intégrée reconnaît la plupart des chats en millisecondes, sans appel réseau ni délai." },
      feat2: { title: "L’IA pour les cas difficiles", desc: "Les titres ambigus sont catégorisés par un backend IA partagé. Aucune clé API nécessaire. Ça fonctionne simplement." },
      feat3: { title: "Aperçu avant application", desc: "Voyez le plan complet avant qu’un seul chat ne bouge. Annulez à tout moment en un clic." },
      feat4: { title: "Mode manuel", desc: "Assignez des chats spécifiques à la main quand l’organisation automatique ne convient pas tout à fait." },
      feat5: { title: "Multilingue", desc: "La correspondance couvre l’anglais, le néerlandais, le français, l’allemand, l’espagnol, le polonais, le russe et plus encore." },
      feat6: { title: "Nettoyage automatique", desc: "Les projets vides sont supprimés automatiquement après chaque organisation. Votre barre latérale reste propre." },
      band:  { title: "Prêt à faire le ménage?", sub: "Gratuit, sans configuration, environ 10 secondes à installer.", cta: "Ajouter à Chrome" },
      topics: { eyebrow: "Liste de mots", title: "Reconnaît vos sujets de conversation", sub: "La liste de mots intégrée couvre les sujets de chat les plus courants dans plusieurs langues.", sidebar: "catégories intégrées, plus l’IA pour tout le reste", meta: "Fonctionne dans <strong>10+ langues</strong> et gère tous les sujets de vos chats." },
      priv:  { eyebrow: "Confidentialité", title: "Vos données vous appartiennent", sub: "Pas de comptes, pas de suivi, pas de collecte de données au-delà du nécessaire pour organiser vos chats.", note: "Le contenu des chats ne quitte jamais votre navigateur. Pour les titres ambigus, seul le texte du titre est envoyé à un service IA partagé. Aucune donnée personnelle, aucun historique, aucun compte.", link: "Politique de confidentialité complète" },
      pc1:   { title: "Reste dans votre navigateur", desc: "Vos chats sont lus directement depuis Claude.ai via votre session active. Aucune donnée n’est stockée sur un serveur." },
      pc2:   { title: "Seuls les titres partent", desc: "Quand la catégorisation IA est nécessaire, seul le <strong>titre du chat</strong> est envoyé. Jamais le contenu de la conversation." },
      pc3:   { title: "Zéro analytics", desc: "Pas de suivi d’utilisation, pas de télémétrie, pas de rapports d’erreurs. L’extension n’a pas de backend propre." },
      perms: { title: "Permissions Chrome expliquées" },
      perm1: { desc: "Lit votre onglet Claude.ai ouvert pour détecter les titres des chats. Actif uniquement pendant l’utilisation de l’extension." },
      perm2: { desc: "Enregistre vos noms de projets localement dans votre navigateur. Rien n’est envoyé à un serveur." },
      perm3: { desc: "Exécute la logique d’organisation sur claude.ai pour lire la barre latérale et déplacer les chats." },
      test:  { eyebrow: "Ce que disent les utilisateurs", title: "Mettre fin au chaos des chats", q1: "«Enfin, ma barre latérale Claude n’est plus un désastre complet. 67 chats organisés en environ 10 secondes. L’étape d’aperçu est essentielle.»", q2: "«Fonctionne parfaitement en français aussi. Je ne m’y attendais pas. La correspondance par mots-clés classe mes chats correctement presque à chaque fois.»", q3: "«J’étais sceptique quant à l’absence de clé API, mais le fallback IA fonctionne vraiment. 40 chats de recherche triés dans les bons projets instantanément.»", r1: "Développeur logiciel", r2: "Chef de produit", r3: "Chercheure" },
      faq:   { eyebrow: "FAQ", title: "Questions fréquentes", q1: "Est-ce gratuit?", a1: "Oui, entièrement gratuit. Pas d’abonnement, pas de version premium, pas de frais cachés. Jamais.", q2: "Ai-je besoin d’une clé API?", a2: "Non. La catégorisation IA fonctionne sur un backend partagé sans frais pour vous. Installez l’extension et cliquez sur Organiser.", q3: "Mes chats ou projets seront-ils supprimés?", a3: "Aucun chat n’est supprimé. Les projets entièrement vides après l’organisation sont supprimés pour garder votre barre latérale propre, mais chaque conversation reste dans votre historique.", q4: "Fonctionne-t-il dans d’autres langues que l’anglais?", a4: "Oui. La liste de mots couvre le néerlandais, le français, l’allemand, l’espagnol, l’italien, le polonais, le russe, l’arabe, le hindi et plus encore.", q5: "Dois-je être connecté à Claude.ai?", a5: "Oui. L’extension utilise votre session de navigateur Claude.ai active pour lire et déplacer les chats. Ouvrez claude.ai, connectez-vous, puis cliquez sur l’icône de l’extension.", q6: "Puis-je annuler une organisation?", a6: "Pas automatiquement, mais vous pouvez déplacer les chats manuellement dans Claude.ai. C’est pourquoi l’étape d’aperçu existe: vérifiez le plan soigneusement avant de cliquer sur Appliquer." },
      cta:   { title: "Organisez vos chats aujourd’hui", sub: "Gratuit, sans configuration, prêt en quelques secondes.", note: "Aucun compte · Aucune clé API · Aucune collecte de données" },
      footer: { store: "Chrome Web Store", contact: "Contact", privacy: "Politique de confidentialité", copy: "Non affilié à Anthropic. Claude est une marque déposée d’Anthropic, PBC." }
    },

    de: {
      nav:  { cta: "Zu Chrome hinzufügen" },
      hero: { badge: "Kostenlose Chrome-Erweiterung", h1: "Deine Claude-Chats,<br><em>endlich organisiert</em>", sub: "Hunderte Chats ohne Ordnung? Claude Organizer scannt alles, erstellt einen Plan und verschiebt alles in Projekte mit einem Klick.", stars: "Geliebt von Claude-Nutzern", cta: "Zu Chrome hinzufügen — kostenlos", note1: "Kein API-Schlüssel nötig", note2: "Kein Konto nötig", note3: "Fertig in Sekunden" },
      stats: { v1: "Kostenlos", l1: "Kein Abonnement jemals", l2: "Chat-Themen erkannt", l3: "Eingebaute Kategorien", l4: "Vollständige Organisation" },
      hiw:  { eyebrow: "So funktioniert es", title: "Drei Schritte, ein Klick", sub: "Du siehst den vollständigen Plan, bevor irgendetwas verschoben wird. Nichts passiert ohne deine Zustimmung." },
      step1: { title: "Klick auf Organisieren", desc: "Die Erweiterung scannt alle unorganisierten Chats und erstellt einen Verschiebeplan per Schlüsselwort-Erkennung und KI. Dauert einige Sekunden." },
      step2: { title: "Plan überprüfen", desc: "Sieh genau, welcher Chat wohin geht, bevor sich etwas bewegt. Neue Projekte sind klar gekennzeichnet. Nicht erkannte Chats werden separat markiert." },
      step3: { title: "Klick auf Anwenden", desc: "Alles wird auf einmal verschoben. Leere Projekte werden automatisch bereinigt. Fertig." },
      feat:  { eyebrow: "Funktionen", title: "Alles was du brauchst,<br>nichts was du nicht brauchst", sub: "Einfach und schnell. Keine Einstellungen, kein API-Schlüssel." },
      feat1: { title: "Sofortige Schlüsselwort-Erkennung", desc: "Eine eingebaute mehrsprachige Wortliste erkennt die meisten Chats in Millisekunden, ohne Netzwerkaufruf und ohne Verzögerung." },
      feat2: { title: "KI für schwierige Fälle", desc: "Mehrdeutige Titel werden von einem geteilten KI-Backend kategorisiert. Kein API-Schlüssel nötig. Funktioniert einfach." },
      feat3: { title: "Vorschau vor dem Anwenden", desc: "Sieh den vollständigen Plan, bevor ein Chat verschoben wird. Jederzeit mit einem Klick abbrechen." },
      feat4: { title: "Manueller Modus", desc: "Weise bestimmte Chats manuell zu, wenn die automatische Organisation nicht ganz passt." },
      feat5: { title: "Mehrsprachig", desc: "Schlüsselwort-Erkennung unterstützt Englisch, Niederländisch, Französisch, Deutsch, Spanisch, Polnisch, Russisch und mehr." },
      feat6: { title: "Automatische Bereinigung", desc: "Leere Projekte werden nach jeder Organisation automatisch entfernt. Deine Seitenleiste bleibt aufgeräumt." },
      band:  { title: "Bereit zum Aufräumen?", sub: "Kostenlos, keine Einrichtung, dauert ca. 10 Sekunden.", cta: "Zu Chrome hinzufügen" },
      topics: { eyebrow: "Wortliste", title: "Erkennt, worüber du sprichst", sub: "Die eingebaute Wortliste deckt die häufigsten Chat-Themen in mehreren Sprachen ab.", sidebar: "eingebaute Kategorien, plus KI für alles andere", meta: "Funktioniert in <strong>10+ Sprachen</strong> und verarbeitet jedes Thema in deinen Chats." },
      priv:  { eyebrow: "Datenschutz", title: "Deine Daten bleiben deine", sub: "Keine Konten, kein Tracking, keine Datenerfassung über das Nötige hinaus.", note: "Chat-Inhalte verlassen nie deinen Browser. Für mehrdeutige Titel wird nur der Titeltext an einen geteilten KI-Dienst gesendet. Keine persönlichen Daten, keine Historie, keine Konten.", link: "Vollständige Datenschutzerklärung" },
      pc1:   { title: "Bleibt in deinem Browser", desc: "Deine Chats werden direkt von Claude.ai über deine aktive Anmeldesitzung gelesen. Keine Daten werden auf einem Server gespeichert." },
      pc2:   { title: "Nur Titel verlassen den Browser", desc: "Wenn KI-Kategorisierung benötigt wird, wird nur der <strong>Chat-Titel</strong> gesendet. Nie der Gesprächsinhalt." },
      pc3:   { title: "Null Analysen", desc: "Kein Nutzungs-Tracking, keine Telemetrie, keine Absturzberichte. Die Erweiterung hat kein eigenes Backend." },
      perms: { title: "Chrome-Berechtigungen erklärt" },
      perm1: { desc: "Liest deinen geöffneten Claude.ai-Tab, um Chat-Titel zu erkennen. Nur aktiv, während du die Erweiterung verwendest." },
      perm2: { desc: "Speichert deine Projektnamen lokal in deinem Browser. Nichts wird an einen Server gesendet." },
      perm3: { desc: "Führt die Organisationslogik auf claude.ai aus, um die Seitenleiste zu lesen und Chats in Projekte zu verschieben." },
      test:  { eyebrow: "Was Nutzer sagen", title: "Chat-Chaos beseitigen", q1: "„Endlich ist meine Claude-Seitenleiste kein komplettes Chaos mehr. 67 Chats in etwa 10 Sekunden organisiert. Der Vorschaupunkt ist entscheidend.“", q2: "„Läuft auch auf Französisch perfekt. Das hatte ich nicht erwartet. Die Schlüsselwort-Erkennung ordnet meine Chats fast immer richtig ein.“", q3: "„Ich war skeptisch wegen des fehlenden API-Schlüssels, aber der KI-Fallback funktioniert wirklich. 40 Forschungs-Chats sofort in die richtigen Projekte sortiert.“", r1: "Softwareentwickler", r2: "Produktmanager", r3: "Forscherin" },
      faq:   { eyebrow: "FAQ", title: "Häufige Fragen", q1: "Ist es kostenlos?", a1: "Ja, vollständig kostenlos. Kein Abonnement, keine Premium-Version, keine versteckten Kosten. Nie.", q2: "Brauche ich einen API-Schlüssel?", a2: "Nein. Die KI-Kategorisierung läuft auf einem geteilten Backend ohne Kosten für dich. Installiere die Erweiterung und klicke auf Organisieren.", q3: "Werden meine Chats oder Projekte gelöscht?", a3: "Kein Chat wird jemals gelöscht. Komplett leere Projekte nach der Organisation werden entfernt, um die Seitenleiste übersichtlich zu halten, aber jedes Gespräch bleibt in deinem Chat-Verlauf erhalten.", q4: "Funktioniert es in anderen Sprachen als Englisch?", a4: "Ja. Die Wortliste deckt Niederländisch, Französisch, Deutsch, Spanisch, Italienisch, Polnisch, Russisch, Arabisch, Hindi und mehr ab.", q5: "Muss ich bei Claude.ai eingeloggt sein?", a5: "Ja. Die Erweiterung verwendet deine aktive Claude.ai-Browser-Sitzung, um Chats zu lesen und zu verschieben. Öffne claude.ai, melde dich an und klicke dann auf das Erweiterungssymbol.", q6: "Kann ich eine Organisation rükgängig machen?", a6: "Nicht automatisch, aber du kannst Chats manuell in Claude.ai zurückverschieben. Deshalb gibt es den Vorschaupunkt: Prüfe den Plan sorgfältig, bevor du auf Anwenden klickst." },
      cta:   { title: "Räum deine Chats heute auf", sub: "Kostenlos, keine Einrichtung, fertig in Sekunden.", note: "Kein Konto · Kein API-Schlüssel · Keine Datenerfassung" },
      footer: { store: "Chrome Web Store", contact: "Kontakt", privacy: "Datenschutzerklärung", copy: "Nicht mit Anthropic verbunden. Claude ist eine Marke von Anthropic, PBC." }
    },

    es: {
      nav:  { cta: "Añadir a Chrome" },
      hero: { badge: "Extensión de Chrome gratuita", h1: "Tus chats de Claude,<br><em>por fin organizados</em>", sub: "¿Cientos de chats sin orden? Claude Organizer los analiza, crea un plan y mueve todo a proyectos con un clic.", stars: "Amado por los usuarios de Claude", cta: "Añadir a Chrome — es gratis", note1: "Sin clave API", note2: "Sin cuenta requerida", note3: "Listo en segundos" },
      stats: { v1: "Gratis", l1: "Nunca una suscripción", l2: "Temas de chat reconocidos", l3: "Categorías integradas", l4: "Organización completa" },
      hiw:  { eyebrow: "Cómo funciona", title: "Tres pasos, un clic", sub: "Ves el plan completo antes de que se mueva nada. Nada ocurre sin tu aprobación." },
      step1: { title: "Haz clic en Organizar", desc: "La extensión escanea todos tus chats sin organizar y crea un plan usando coincidencia de palabras clave e IA. Tarda unos segundos." },
      step2: { title: "Revisa el plan", desc: "Ve exactamente qué chat va dónde antes de que se mueva nada. Los nuevos proyectos están claramente marcados. Los chats no reconocidos se señalan aparte." },
      step3: { title: "Haz clic en Aplicar", desc: "Todo se mueve de una vez. Los proyectos vacíos se eliminan automáticamente. Listo." },
      feat:  { eyebrow: "Funciones", title: "Todo lo que necesitas,<br>nada más", sub: "Simple y rápido. Sin ajustes que configurar, sin clave API que pegar." },
      feat1: { title: "Coincidencia instantánea", desc: "Una lista de palabras multilingüe integrada reconoce la mayoría de los chats en milisegundos, sin llamadas de red ni retrasos." },
      feat2: { title: "IA para los difíciles", desc: "Los títulos ambiguos son categorizados por un backend de IA compartido. No se necesita clave API. Simplemente funciona." },
      feat3: { title: "Vista previa antes de aplicar", desc: "Ve el plan completo antes de que se mueva un solo chat. Cancela en cualquier momento con un clic." },
      feat4: { title: "Modo manual", desc: "Asigna chats específicos a mano cuando la organización automática no se adapta del todo a tu flujo de trabajo." },
      feat5: { title: "Multilingüe", desc: "La coincidencia de palabras clave cubre inglés, neerlandés, francés, alemán, español, polaco, ruso y más." },
      feat6: { title: "Limpieza automática", desc: "Los proyectos vacíos se eliminan automáticamente después de cada organización. Tu barra lateral se mantiene ordenada." },
      band:  { title: "¿Listo para organizar?", sub: "Gratuito, sin configuración, tarda unos 10 segundos en instalar.", cta: "Añadir a Chrome" },
      topics: { eyebrow: "Lista de palabras", title: "Reconoce de qué hablas", sub: "La lista de palabras integrada cubre los temas de chat más comunes en varios idiomas.", sidebar: "categorías integradas, más IA para todo lo demás", meta: "Funciona en <strong>10+ idiomas</strong> y maneja cualquier tema de tus chats." },
      priv:  { eyebrow: "Privacidad", title: "Tus datos son tuyos", sub: "Sin cuentas, sin seguimiento, sin recolección de datos más allá de lo necesario para organizar tus chats.", note: "El contenido de los chats nunca sale de tu navegador. Para títulos ambiguos, solo el texto del título se envía a un servicio de IA compartido. Sin datos personales, sin historial, sin cuentas.", link: "Política de privacidad completa" },
      pc1:   { title: "Se queda en tu navegador", desc: "Tus chats se leen directamente desde Claude.ai usando tu sesión activa. No se almacenan datos en ningún servidor." },
      pc2:   { title: "Solo los títulos salen", desc: "Cuando se necesita categorización con IA, solo se envía el <strong>título del chat</strong>. Nunca el contenido de la conversación." },
      pc3:   { title: "Cero analíticas", desc: "Sin seguimiento de uso, sin telemetría, sin informes de errores. La extensión no tiene backend propio." },
      perms: { title: "Permisos de Chrome explicados" },
      perm1: { desc: "Lee tu pestaña abierta de Claude.ai para detectar títulos de chat. Solo activo mientras usas la extensión." },
      perm2: { desc: "Guarda los nombres de tus proyectos localmente en tu navegador. Nada se envía a ningún servidor." },
      perm3: { desc: "Ejecuta la lógica de organización en claude.ai para leer la barra lateral y mover chats a proyectos." },
      test:  { eyebrow: "Lo que dicen los usuarios", title: "Acabando con el caos de chats", q1: "«Por fin, mi barra lateral de Claude no es un desastre completo. 67 chats organizados en unos 10 segundos. El paso de vista previa es clave.»", q2: "«Funciona perfectamente en francés también. No me lo esperaba. La coincidencia de palabras clave clasifica mis chats bien casi siempre.»", q3: "«Era escéptico sobre lo de sin clave API, pero el fallback de IA funciona de verdad. 40 chats de investigación ordenados en los proyectos correctos instantáneamente.»", r1: "Desarrollador de software", r2: "Gestor de producto", r3: "Investigadora" },
      faq:   { eyebrow: "Preguntas frecuentes", title: "Preguntas comunes", q1: "¿Es gratuito?", a1: "Sí, completamente gratuito. Sin suscripción, sin nivel premium, sin costes ocultos. Nunca.", q2: "¿Necesito una clave API?", a2: "No. La categorización con IA funciona en un backend compartido sin coste para ti. Instala la extensión y haz clic en Organizar.", q3: "¿Borrará mis chats o proyectos?", a3: "No se elimina ningún chat. Los proyectos completamente vacíos tras la organización se eliminan para mantener tu barra lateral limpia, pero cada conversación permanece en tu historial.", q4: "¿Funciona en otros idiomas además del inglés?", a4: "Sí. La lista de palabras cubre neerlandés, francés, alemán, español, italiano, polaco, ruso, árabe, hindi y más.", q5: "¿Necesito estar conectado a Claude.ai?", a5: "Sí. La extensión usa tu sesión activa del navegador en Claude.ai para leer y mover chats. Abre claude.ai, inicia sesión y haz clic en el icono de la extensión.", q6: "¿Puedo deshacer una organización?", a6: "No automáticamente, pero puedes mover los chats de vuelta manualmente en Claude.ai. Por eso existe el paso de vista previa: revisa el plan con cuidado antes de hacer clic en Aplicar." },
      cta:   { title: "Organiza tus chats hoy", sub: "Gratis, sin configuración, listo en segundos.", note: "Sin cuenta · Sin clave API · Sin recolección de datos" },
      footer: { store: "Chrome Web Store", contact: "Contacto", privacy: "Política de privacidad", copy: "No afiliado con Anthropic. Claude es una marca registrada de Anthropic, PBC." }
    }
  };

  function resolve(obj, key) {
    return key.split('.').reduce(function(o, k) { return o && o[k]; }, obj);
  }

  function applyLang(lang) {
    var t = T[lang] || T.en;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var val = resolve(t, el.dataset.i18n);
      if (val !== undefined) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
      var val = resolve(t, el.dataset.i18nHtml);
      if (val !== undefined) el.innerHTML = val;
    });

    document.querySelectorAll('.lang-option').forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    var cur = document.querySelector('.lang-current');
    if (cur) cur.textContent = lang.toUpperCase();

    try { localStorage.setItem('co-lang', lang); } catch(e) {}
  }

  function getLang() {
    var params = new URLSearchParams(window.location.search);
    var p = params.get('lang');
    if (p && T[p]) return p;
    try { var s = localStorage.getItem('co-lang'); if (s && T[s]) return s; } catch(e) {}
    var nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return T[nav] ? nav : 'en';
  }

  // Wire up switcher
  var btn  = document.querySelector('.lang-btn');
  var menu = document.querySelector('.lang-menu');
  if (btn && menu) {
    btn.addEventListener('click', function(e) { e.stopPropagation(); menu.classList.toggle('open'); });
    document.addEventListener('click', function() { menu.classList.remove('open'); });
    document.querySelectorAll('.lang-option').forEach(function(opt) {
      opt.addEventListener('click', function() { applyLang(opt.dataset.lang); menu.classList.remove('open'); });
    });
  }

  applyLang(getLang());
})();
