# Playwright Testing Framework

This repository contains automated tests using the Playwright framework. The project follows the Page Object Model (POM) design pattern to organize test code and improve reusability. It includes implementations for login functionality, publication filtering, and search features.


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
   git clone [https://github.com/your-username/your-repo.git](https://github.com/devmaniac1/wiley-assessment.git)
   cd wiley-assessment

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


## 📝 Page Object Overview

### FilterPage

The FilterPage class provides methods to apply publication filters.

async applyPublicationFilters(publicationFilter: string, exactKeyword: boolean)

Parameters:
 - publicationFilter: The type of publication filter to apply (e.g., "Books", "Journals").
 - exactKeyword: A boolean indicating whether to match exact keywords.

### LoginPage

The LoginPage class automates the login process.

async performLogin(email: string, password: string)

Parameters:
 - email: User's email address.
 - password: User's password.

It verifies login success by asserting the URL of the dashboard.


### SearchPage

The SearchPage class provides methods for two types of search functionality:

Citation Search
async performCitationSearch(searchString: string)
Performs a search in the "Citation Search" tab using the provided input.

Advanced Search
async performAdvancedSearch(searchString: string)
Executes an advanced search using the provided input.
