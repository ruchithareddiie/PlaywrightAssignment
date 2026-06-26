# Hyland Playwright Assignment

## Objective
Automate the Hyland Careers website using Playwright.

## Steps Automated
- Open Hyland website
- Navigate to Careers
- Click Join Our Team
- Search for "playwright"
- Open the first matching job
- Extract and print the Job ID

## Tech Stack
- Playwright
- TypeScript
- Node.js
- VS Code

## Run the Project

npm install

npx playwright test tests/hyland.spec.ts --project=chromium --headed
