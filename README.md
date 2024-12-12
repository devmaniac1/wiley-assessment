# Playwright Testing Framework

This repository contains automated tests using the Playwright framework. The project follows the Page Object Model (POM) design pattern to organize test code and improve reusability. It includes implementations for login functionality, publication filtering, and search features.

## 📂 Project Structure

### Key Components

1. **FilterPage**: Handles publication filter functionalities.
2. **LoginPage**: Automates login processes.
3. **SearchPage**: Supports citation and advanced search operations.

## 🛠️ Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Playwright](https://playwright.dev/) installed

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo

2. Install dependencies:
   ```bash
   npm install

3. Install Playwright browsers:
   ```bash
   npx playwright install

## 🔨 Usage

Running Tests

1. To run all tests:
   ```bash
   npx playwright test

2. To run tests for a specific page:
   ```bash
   npx playwright test tests/filterPage.test.ts

3. To view test results in a report:
   ```bash
   npx playwright show-report



