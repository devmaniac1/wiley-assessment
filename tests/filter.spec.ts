import test from "@playwright/test";
import { FilterPage } from "../page-objects/filterPage";

test.describe("Filter Functionality", () => {
  // This function run before each tests inside this group
  test.beforeEach(async ({ page }) => {
    await page.goto(
      "https://onlinelibrary.wiley.com/action/doSearch?AllField=Ethical"
    );
  });

  test("Apply Filter", async ({ page }) => {
    const filter = new FilterPage(page);

    // Possible filters are Books Journals Reference Works
    // After clicking on the radio it redifect to verify human page could be tested on a development environment

    // await filter.applyPublicationFilters("Reference works", false);
    await filter.applyPublicationFilters("Journals", false);
    // await filter.applyPublicationFilters("Books", true);
  });
});
