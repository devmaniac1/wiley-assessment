import { test, expect } from "@playwright/test";

test("Browser testing", async ({ page, browserName }) => {
  // Run on Chromium to have a look if the main h1 is painted into the DOM
  if (browserName === "chromium") {
    await page.goto("https://onlinelibrary.wiley.com/");
    await expect(page.locator("h1")).toHaveText("Wiley Online Library");
  }

  // Run on Firefox to have a look if the main h1 is painted into the DOM
  if (browserName === "firefox") {
    await page.goto("https://onlinelibrary.wiley.com/");
    await expect(page.locator("h1")).toHaveText("Wiley Online Library");
  }
});
