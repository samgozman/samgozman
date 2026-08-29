#!/usr/bin/env bash
# Regenerate the Recurred marketing screenshots from a fresh App Store batch.
#
# Site assets under public/img/recurred/{iphone,ipad}/ are named after their
# source PNG basename, so a refresh is just: re-encode each file below.
# Dimensions and quality match the originals (iPhone 750x1630, iPad 1800x1350,
# webp q80). Pass the batch root as $1 or override SRC below.
#
# Usage: scripts/refresh-recurred-screenshots.sh [batch-generated-dir]
set -euo pipefail

SRC="${1:-$HOME/Projects/recurred-ios/appstore/screenshots/generated}"
DEST="$(cd "$(dirname "$0")/.." && pwd)/public/img/recurred"

command -v cwebp >/dev/null || { echo "cwebp not found (brew install webp)"; exit 1; }

# Files the site actually uses. Add a line here when the landing page adds one.
# Mac shots already carry their own window chrome, so they need no bezel.
iphone=(home add-subscription import-describe-input analytics-calendar subscription-detail analytics-trends optimizer-summary)
ipad=(home analytics-calendar)
mac=(home analytics)

for name in "${iphone[@]}"; do
  cwebp -quiet -q 80 -resize 750 1630 "$SRC/iphone-17-pro-max/$name.png" -o "$DEST/iphone/$name.webp"
  echo "iphone/$name.webp"
done
for name in "${ipad[@]}"; do
  cwebp -quiet -q 80 -resize 1800 1350 "$SRC/ipad-pro-13/$name.png" -o "$DEST/ipad/$name.webp"
  echo "ipad/$name.webp"
done
for name in "${mac[@]}"; do
  cwebp -quiet -q 80 -resize 1600 1043 "$SRC/mac-native/mac-$name.png" -o "$DEST/mac/$name.webp"
  echo "mac/$name.webp"
done
echo "Done."
