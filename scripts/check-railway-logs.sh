#!/usr/bin/env bash
# Poll Railway na een push, rapporteer success of failure.
set -u

TIMEOUT=${TIMEOUT:-300}
INTERVAL=${INTERVAL:-15}

if ! command -v railway >/dev/null 2>&1; then
  echo "railway CLI niet gevonden. Install: npm i -g @railway/cli"
  exit 127
fi

if [ -z "${RAILWAY_TOKEN:-}" ]; then
  echo "RAILWAY_TOKEN niet gezet in deze omgeving."
  exit 78
fi

elapsed=0
echo "Polling Railway voor laatste deploy (timeout ${TIMEOUT}s)..."

while [ $elapsed -lt $TIMEOUT ]; do
  status=$(railway status --json 2>/dev/null \
    | grep -oE '"status"[[:space:]]*:[[:space:]]*"[^"]+"' \
    | head -1 | sed -E 's/.*"([^"]+)"$/\1/')

  case "$status" in
    SUCCESS|DEPLOYED|RUNNING)
      echo "✅ Deploy geslaagd (status: $status)"
      exit 0
      ;;
    FAILED|CRASHED|REMOVED)
      echo "❌ Deploy gefaald (status: $status) — laatste logs:"
      echo "---"
      railway logs --tail 40 2>&1 || true
      exit 1
      ;;
    *)
      echo "  ... status: ${status:-onbekend} (${elapsed}s)"
      ;;
  esac

  sleep $INTERVAL
  elapsed=$((elapsed + INTERVAL))
done

echo "⚠️  Timeout na ${TIMEOUT}s. Check Railway dashboard handmatig."
exit 2
