# 🌐 E2E Web Automation Framework using Cypress (nopCommerce)

A professional End-to-End (E2E) Web Automation Testing Framework built using **Cypress** and **JavaScript**. This project automates critical user journeys on the **nopCommerce** platform, adhering to industry best practices and clean architecture design patterns.

---

## 🛠️ Tech Stack & Tools

* **Automation Tool:** Cypress (v12.x+)
* **Language:** JavaScript (ES6+)
* **Design Pattern:** Page Object Model (POM)
* **Test Runner:** Cypress Test Runner (Headed/Headless)

---

## ✨ Framework Key Features

* **Page Object Model (POM):** UI elements and action methods are completely isolated from test scripts, ensuring high maintainability and reusability.
* **Comprehensive E2E Flows:** Covers critical business scenarios including User Registration, Login, Product Search, and the complete Checkout/Purchase workflow.
* **Cypress Native Waiting:** Leverages Cypress's built-in intelligent waiting mechanisms, drastically reducing flaky tests compared to traditional frameworks.
* **Custom Configurations:** Centralized baseline configurations handled smoothly via `cypress.config.js`.
* **Automated Visuals:** Built-in capturing of screenshots and videos upon test failures for seamless debugging.

---

## 📁 Project Structure

```text
cypress/
├── e2e/
│   └── nopCommerceTests/    # Test execution files (Specs)
└── pageObjects/            # Page Object classes (Locators & Actions)
