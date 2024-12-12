import { test } from "@playwright/test";
import { LoginPage } from "../page-objects/loginPage";

test.describe("Login Functionality", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://wiley.scienceconnect.io/login");
  });

  // This test verifies the login functionality.
  // To make this test work, replace the empty strings inside the `performLogin` function with your email and password as two parameters.
  // Example: await login.performLogin("your_email@example.com", "your_password");
  test("Perform Login", async ({ page }) => {
    const login = new LoginPage(page);
    await login.performLogin("", "");
  });
});
