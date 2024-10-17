# 🛠️ SauceDemo Automation Testing with WebDriverIO 🚀

This repository is dedicated to testing the [SauceDemo](https://www.saucedemo.com) e-commerce website using **WebDriverIO** with JavaScript. It covers key scenarios like login validation, adding products to the cart, and verifying product details.

## 📋 Table of Contents
- [Prerequisites](#prerequisites)
- [Setup & Installation](#setup--installation)
- [Running Tests](#running-tests)
- [Test Structure](#test-structure)
- [Allure Reporting](#allure-reporting)
- [Screenshots](#screenshots)

---

## ✅ Prerequisites

Before you begin, ensure you have:
- **Node.js** (v14 or higher)
- **NPM** (or **Yarn**)
- **WebDriverIO**
- **Allure** (for generating reports)

---

## 🚀 Setup & Installation

Clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/mehediemon007/SauceDemoAutomation.git
cd SauceDemoAutomation
npm install
```

## ▶️ Running Tests

Run the test suite with:

```bash
npm run wdio
npm run cartAndVerify
```

## 🏗️ Test Structure

This project follows the Page Object Model (POM) design pattern.

Page Objects: Found in the test/pageobjects/.

Test Specs: Defined in test/specs/.

Sample Test Features:
 -  Login Test: Validates login functionality using various credentials.
 -  Add to Cart Test: Tests the addition of products to the cart and ensures the product name and price match.


## 📊 Allure Reporting

To generate and view detailed reports:

```bash
npm run report
```

## 📸 Screenshots

Here's a sample report generated by Allure:


The report shows detailed information about the test runs, including passed, failed, and skipped tests.

![Allure Report](https://github.com/mehediemon007/SauceDemoAutomation/blob/master/report.png)

## 🎉 Happy Testing!

Automate with confidence and ensure quality across the board with WebDriverIO! 🚀
