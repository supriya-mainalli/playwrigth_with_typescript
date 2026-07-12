import { expect, Locator, test } from '@playwright/test'

test('My first playwrite test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    let title: string = await page.title();
    console.log(title)
    await expect(page).toHaveTitle(/Testing/);

    await expect(page.getByRole("link", { name: "Automation Testing Practice" })).toBeVisible();

    await expect(page.getByPlaceholder("Search products...")).toBeVisible();

    await expect(page.getByAltText("logo image")).toBeVisible();

    await expect(page.getByTitle('Home page link')).toBeVisible();

    let profileName: Locator = page.getByTestId('profile-name');
    await expect(profileName).toHaveText('John Doe');

    let profileEmail: Locator = page.getByTestId('profile-email');
    await expect(profileEmail).toHaveText(/john.doe/);
 
});