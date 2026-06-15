#!/usr/bin/env bash
# Usage: ./deploy.sh <client-slug>
# Example: ./deploy.sh ingrid-beauty-hair
#
# Requires: bun, wrangler authenticated (npx wrangler whoami)
# The client folder must have wrangler.jsonc with routes.custom_domain = true
# pointing to <slug>.sobeauty.business — this is set automatically when
# a new client site is created from the brief.

set -e

CLIENT="${1:-}"
if [[ -z "$CLIENT" ]]; then
  echo "Usage: $0 <client-slug>"
  echo "Available clients:"
  ls -d */ 2>/dev/null | grep -v -E '^(node_modules|\.)'
  exit 1
fi

DIR="$(dirname "$0")/$CLIENT"
if [[ ! -d "$DIR" ]]; then
  echo "Error: '$DIR' not found."
  exit 1
fi

echo "▶ Building and deploying: $CLIENT"
cd "$DIR"

echo "  Installing dependencies..."
bun install --frozen-lockfile

echo "  Building..."
bun run build

echo "  Deploying to Cloudflare Workers..."
npx wrangler deploy

echo ""
echo "✅  $CLIENT deployed!"
echo "   URL: https://$(node -e "const c=require('./wrangler.jsonc');console.log(c.routes?.[0]?.pattern?.replace('/*','') ?? c.name+'.workers.dev')" 2>/dev/null || echo "$CLIENT.sobeauty.business")"
