#!/usr/bin/env node
// Verstuurt e-mail namens ArabDutch via de Resend API.
// Gebruik: node --env-file=.env.local scripts/send-email.mjs --to "iemand@voorbeeld.com" --subject "Onderwerp" --html "<p>Bericht</p>"
// Bijlagen: --attach "C:\pad\bestand1.pdf,C:\pad\bestand2.pdf" (komma-gescheiden, absolute paden)
//
// Vereist RESEND_API_KEY in .env.local (nooit committen — staat in .gitignore via *.local).
// Verstuurt NOOIT vanuit de browser/client: deze key mag niet in de Vite-bundel terechtkomen.
// Elke mail gaat automatisch ook (bcc) naar info@arabdutch.com als kopie, zodat er een record in de eigen mailbox staat.

import { readFileSync } from "node:fs";
import { basename } from "node:path";

const FROM = "ArabDutch <info@arabdutch.com>";
const RECORD_COPY = "info@arabdutch.com";

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    const key = argv[i];
    if (!key.startsWith("--")) continue;
    const name = key.slice(2);
    const value = argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[++i] : "";
    args[name] = value;
  }
  return args;
}

async function main() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY ontbreekt. Zet 'm in .env.local en run met: node --env-file=.env.local scripts/send-email.mjs ...");
    process.exit(1);
  }

  const args = parseArgs(process.argv.slice(2));
  const { to, subject, attach, "reply-to": replyTo } = args;
  const html = args.html ?? (args["html-file"] ? readFileSync(args["html-file"], "utf-8") : undefined);
  const text = args.text ?? (args["text-file"] ? readFileSync(args["text-file"], "utf-8") : undefined);

  if (!to || !subject || (!html && !text)) {
    console.error('Verplicht: --to, --subject, en --html/--html-file of --text/--text-file');
    console.error('Voorbeeld: node --env-file=.env.local scripts/send-email.mjs --to "test@voorbeeld.com" --subject "Test" --html "<p>Hallo</p>"');
    process.exit(1);
  }

  const attachments = (attach ? attach.split(",") : [])
    .map((p) => p.trim())
    .filter(Boolean)
    .map((filePath) => ({
      filename: basename(filePath),
      content: readFileSync(filePath).toString("base64"),
    }));

  const body = {
    from: FROM,
    to: [to],
    subject,
    ...(html ? { html } : {}),
    ...(text ? { text } : {}),
    ...(replyTo ? { reply_to: replyTo } : {}),
    ...(to.toLowerCase() !== RECORD_COPY ? { bcc: [RECORD_COPY] } : {}),
    ...(attachments.length ? { attachments } : {}),
  };

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  if (!res.ok) {
    console.error(`Versturen mislukt (${res.status}):`, data);
    process.exit(1);
  }

  console.log(`Verstuurd naar ${to} — Resend id: ${data.id}`);
}

main();
