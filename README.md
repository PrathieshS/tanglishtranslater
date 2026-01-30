# tanglishtranslater

This repository contains automated tests built using **Playwright** to validate  
**English (Tanglish) → Tamil transliteration** outputs.

The test suite covers **words, sentences, long paragraphs, numbers, symbols, and mixed-language inputs**.

---

## 🚀 Tech Stack
- Playwright
- Node.js
- TypeScript
- GitHub

---

## 📁 Project Structure
playwright-tamil-transliteration/
├── tamil-transliteration.spec.ts
├── playwright.config.ts
├── .gitignore
└── README.md


---

## 🧪 Test Coverage
The test cases validate:
- Simple words (e.g., `naan → நான்`)
- Conversational sentences
- Long paragraphs
- Mixed English & Tamil inputs
- Numbers and special characters (`@#$`, `1234`)
- Edge cases and invalid inputs

All tests are **data-driven** and easy to extend.

---

## 🛠 Prerequisites
- Node.js (v16 or later)
- npm
- Git

---

## 📦 Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/<your-username>/playwright-tamil-transliteration.git
cd playwright-tamil-transliteration
npm install
