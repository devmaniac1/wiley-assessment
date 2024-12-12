import { expect, Page } from "@playwright/test";

export class LoginPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   *
   * @param email - string
   * @param password - string
   */
  async performLogin(email: string, password: string) {
    /**
     * Important before testing please provide your email and password for the test to continue
     */
    // Get the Email field ,password Field and continue button with the use of locators
    // Input as to mimic as human as this might not trigger verify human page

    const emailField = this.page.locator("#email-input");
    await emailField.pressSequentially(email, { delay: 100 });
    const continueButton = this.page.getByRole("button", { name: "Continue" });
    await continueButton.click();
    const passwordField = this.page.getByRole("textbox", { name: "password" });
    await passwordField.pressSequentially(password, { delay: 100 });
    await continueButton.click();

    // After a successful login the URL should be of the dashbord if the URL is wrong somthing is wrong in login
    await expect(this.page).toHaveURL(
      "https://wiley.scienceconnect.io/dashboard"
    );
  }
}
