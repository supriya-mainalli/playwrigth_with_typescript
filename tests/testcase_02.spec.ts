import { expect, test } from '@playwright/test'

test('My first playwrite test', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    let title: string = await page.title();
    console.log(title)
    await expect(page).toHaveTitle(/Automation/);

});