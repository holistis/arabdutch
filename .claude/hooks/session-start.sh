#!/usr/bin/env bash
# Wordt automatisch gedraaid bij elke sessie-start (zie .claude/settings.json).
set -u
cd "${CLAUDE_PROJECT_DIR:-$(pwd)}"
if [ -f memory/work_log.md ]; then
  echo "=== memory/work_log.md — laatste entry ==="
  awk 'BEGIN{c=0} /^## /{c++; if(c==2) exit} c==1' memory/work_log.md
  echo "=========================================="
fi
if [ -f CLAUDE.md ]; then
  echo "Project-werkafspraken: zie CLAUDE.md (gelezen automatisch)."
fi
