#!/bin/bash
# Wrapper script to run Next.js dev server without baseline-browser-mapping warnings

npm run dev:clean 2>&1 | grep -v "baseline-browser-mapping" | grep -v "To ensure accurate Baseline data"


