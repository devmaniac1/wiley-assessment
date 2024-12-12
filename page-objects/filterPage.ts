import { Page } from "@playwright/test";

export class FilterPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   *
   * @param publicationFilter - string "Books", "Journals", "Reference works"
   * @param exactKeyword - boolean true, false
   */
  async applyPublicationFilters(
    publicationFilter: string,
    exactKeyword: boolean
  ) {
    // Locate the radio button with the publicationFilter parameter
    // set the match by exact keyword to true or false
    const radioButton = this.page.getByRole("radio", {
      name: publicationFilter,
      exact: exactKeyword,
    });
    // const booksRadio = this.page.getByRole("radio", {
    //   name: "Books",
    //   exact: true,
    // });
    // const refWorksRadio = this.page.getByRole("radio", {
    //   name: "Reference Works",
    // });

    // Check the selected radio button and force to check the radio button
    // Some website does not allow to check the radio or checkboxes because of some attributes
    await radioButton.check({ force: true, timeout: 10000 });
    // await this.page.waitForTimeout(5000);
  }
}
