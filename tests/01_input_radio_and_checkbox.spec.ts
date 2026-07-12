import { expect, Locator, test } from '@playwright/test'

test('Input box testcases', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")

    await expect(page).toHaveURL(/testautomationpractice/); //validate url
    await expect(page).toHaveTitle(/Automation/);
    let emailAddress: Locator = page.getByLabel('Email Address:')
    await emailAddress.fill('test123@gmail.com');
    let expectedValue: string = await emailAddress.inputValue();
    console.log('The enetered value is', expectedValue)
    expect(emailAddress).toBeVisible();
    expect(emailAddress).toBeEnabled();
    await page.waitForTimeout(5000);
});

test("Validate radio buttons", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    let radioButtons: Locator = page.getByLabel("Standard");
    await expect(radioButtons).toBeVisible();
    await expect(radioButtons).not.toBeChecked();
    await radioButtons.check();
    await expect(radioButtons).toBeChecked();
    await page.waitForTimeout(5000)
});

test.only("Validate the checkboxes", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    // check only Sunday checkbox
    let sundayCheckbox: Locator = page.getByLabel('Sunday')
    await expect(sundayCheckbox).toBeVisible();
    await expect(sundayCheckbox).toBeEnabled();
    await expect(sundayCheckbox).not.toBeChecked();
    await sundayCheckbox.check();
    // await page.waitForTimeout(5000);

    let weekdays: string[] = ['sunday', 'monday', 'tuesday', 'wednesday']
    console.log(weekdays.slice(-3)); //picks from last 3

    for (let i in weekdays) {
        let locatorPlaceholder: Locator = page.getByLabel(weekdays[i]);
        if (await locatorPlaceholder.isChecked()) {
            await locatorPlaceholder.uncheck()
        }
        else {
            await locatorPlaceholder.check()
        }
    }

    await page.waitForTimeout(3000)

});
