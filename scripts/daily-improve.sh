#!/usr/bin/env bash
# ============================================================================
# Design Lib — Daily Improvement Script
# Runs every day to maintain and improve the library
# ============================================================================

set -euo pipefail

LIB_DIR="$(cd "$(dirname "$0")/.." && pwd)"
LOG_FILE="$LIB_DIR/.daily-improve.log"

echo "=== Daily Improvement $(date -Iseconds) ===" | tee -a "$LOG_FILE"

# 1. Pull latest changes
cd "$LIB_DIR" || { echo "ERROR: $LIB_DIR not found" | tee -a "$LOG_FILE"; exit 1; }
git pull origin main 2>&1 | tee -a "$LOG_FILE"

# 2. Install any new dependencies
npm install 2>&1 | tee -a "$LOG_FILE"

# 3. Run type checking
npm run typecheck 2>&1 | tee -a "$LOG_FILE" || echo "WARNING: typecheck failed" | tee -a "$LOG_FILE"

# 4. Build to verify everything compiles
npm run build 2>&1 | tee -a "$LOG_FILE" || echo "WARNING: build failed" | tee -a "$LOG_FILE"

# 5. Count components per category
echo "" | tee -a "$LOG_FILE"
echo "=== Component Count ===" | tee -a "$LOG_FILE"

ui_count=$(find src/components/ui -name '*.tsx' | wc -l)
admin_count=$(find src/components/admin -name '*.tsx' | wc -l)
landing_count=$(find src/components/landing -name '*.tsx' | wc -l)
auth_count=$(find src/components/auth -name '*.tsx' | wc -l)
forms_count=$(find src/components/forms -name '*.tsx' | wc -l)
layout_count=$(find src/components/layout -name '*.tsx' | wc -l)
patterns_count=$(find src/components/patterns -name '*.tsx' | wc -l)
total=$((ui_count + admin_count + landing_count + auth_count + forms_count + layout_count + patterns_count))

echo "UI:       $ui_count" | tee -a "$LOG_FILE"
echo "Admin:    $admin_count" | tee -a "$LOG_FILE"
echo "Landing:  $landing_count" | tee -a "$LOG_FILE"
echo "Auth:     $auth_count" | tee -a "$LOG_FILE"
echo "Forms:    $forms_count" | tee -a "$LOG_FILE"
echo "Layout:   $layout_count" | tee -a "$LOG_FILE"
echo "Patterns: $patterns_count" | tee -a "$LOG_FILE"
echo "Total:    $total" | tee -a "$LOG_FILE"

# 6. Audit security
npm audit --production 2>&1 | tail -5 | tee -a "$LOG_FILE" || true

# 7. Push any auto-fixes
if [[ -n $(git status --porcelain) ]]; then
  git add -A
  git commit -m "chore: daily auto-improve $(date -Iseconds)" || true
  git push origin main 2>&1 | tee -a "$LOG_FILE"
  echo "Auto-fix committed and pushed" | tee -a "$LOG_FILE"
else
  echo "No changes needed" | tee -a "$LOG_FILE"
fi

echo "=== Done $(date -Iseconds) ===" | tee -a "$LOG_FILE"
echo ""
