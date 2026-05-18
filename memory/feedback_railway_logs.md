# Railway-logs werkwijze

Na **elke `git push` die Claude zelf doet** in deze repo, automatisch:

1. Wacht ~10 seconden zodat Railway de webhook ontvangt
2. Draai `./scripts/check-railway-logs.sh`
3. Toon de gebruiker het resultaat:
   - ✅ Geslaagd → korte bevestiging
   - ❌ Gefaald → laatste 40 logregels + één-zin diagnose

Polling: max 5 minuten, interval 15 seconden. Bij timeout: meld het en verwijs naar het Railway dashboard.

## Lokaal (VS Code op laptop)

Op de laptop draait dit via een git hook in `.git/hooks/post-push`. Die hook reist **niet** mee met de repo — hij staat alleen op de laptop.

## Web / mobiel (cloud-sessies)

Hier is er geen post-push hook. Claude draait `scripts/check-railway-logs.sh` zelf, direct na een push.
