# ArabDutch — Werkafspraken voor Claude

## Werklogboek — bij start en einde van elke sessie
Bij start: lees memory/work_log.md.
Bij einde: schrijf bovenaan een nieuw blokje:
```
## YYYY-MM-DD HH:MM — door <laptop|web|mobiel>-Claude
- Wat gedaan / Waarom / TODO
```

## Railway deploys
Na elke `git push origin main`:
1. Poll build logs: `until railway logs --build --lines 5 2>&1 | grep -q "Healthcheck\|ERROR\|FAILED"; do sleep 15; done`
2. Check runtime: `railway logs --lines 10`
3. Healthcheck OK → meld "Deploy OK"
4. Error → fix direct, push opnieuw

## Algemeen
- Commits gaan direct naar main (Railway deployt automatisch)
- Nooit user vragen om Railway logs te sturen
- Geen approve-prompts (bypassPermissions actief)
