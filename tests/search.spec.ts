import { test } from "@playwright/test";
import { SearchPage } from "../page-objects/searchPage";

test.describe("Search Functionality", () => {
  // Runs ech time before perfoming Citation search and advanced search
  test.beforeEach(async ({ page }) => {
    await page.goto("https://onlinelibrary.wiley.com/action/doSearch");
  });

  // creates a new search page instancew and calls the perform citation seacrch function
  test("Perform Citation Search", async ({ page }) => {
    const search = new SearchPage(page);
    await search.performCitationSearch("14. Quality Engineering Handbook");
  });

  // creates a new search page instancew and calls the perform advanced search function
  test("Perform Advanced Search", async ({ page }) => {
    const search = new SearchPage(page);
    await search.performAdvancedSearch("14. Quality Engineering Handbook");
  });
});
