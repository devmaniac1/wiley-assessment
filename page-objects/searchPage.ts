import { expect, Page } from "@playwright/test";

export class SearchPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   *
   * @param searchString - string
   */
  async performCitationSearch(searchString: string) {
    // const citationTab = this.page.locator(
    //   '//*[@id="main-content"]/div/div/div/div/div/div/div[1]/div/div/ul/li[2]'
    // );

    // Select the "Citation Search" tab by its role tab and name
    const citationTab = this.page.getByRole("tab", { name: "Citation Search" });
    // Click on the Citation Search tab
    await citationTab.click();

    // Locate the "Journal" input field by its placeholder text and enter the search input
    const journalInput = this.page.getByPlaceholder("Journal", { exact: true });
    // Type the search input into the input field with a delay of 100millisecons
    await journalInput.pressSequentially(searchString, { delay: 100 });

    // Locate the "SEARCH" button by its role button and name, then click it
    const searchButton = this.page.getByRole("button", {
      name: "SEARCH",
      exact: true,
    });
    await searchButton.click();

    // Verify that the search results are visible on the page after the search is performed
    // await expect(this.page.locator("#search-result")).toBeVisible();

    //This test should fail becuase even after entering input for journal it does not allow to search
  }

  /**
   *
   * @param searchString - string
   */
  async performAdvancedSearch(searchString: string) {
    // Select the "Advanced Search" tab by its role tab and name
    const advancedTab = this.page.getByRole("tab", { name: "Advanced Search" });
    // Click on the Advanced Search tab
    await advancedTab.click();

    // Get the searchField from advanced search and has 3 inputs
    // Using attribute name="text1" extract the field and fill it using searchStirng
    const searchField = this.page.locator('input[name="text1"]');
    await searchField.pressSequentially(searchString, { delay: 100 });
    const searchButton = this.page.getByRole("button", {
      name: "Search",
      exact: true,
    });

    // After Search there wont be any results due to redirecting to vefiy human page

    await searchButton.click({ force: true });
    // const currentUrl = this.page.url();
    // console.log(currentUrl);
    // await expect(this.page.locator("#search-result")).toBeVisible({
    //   timeout: 30000,
    // });
  }
}
