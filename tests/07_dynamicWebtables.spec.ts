import { test, Locator, expect } from '@playwright/test'

test('Validate Dynamic webtables', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table: Locator = page.locator("table[id = 'taskTable'] > tbody")
    const row: Locator = table.locator('tr')

    let rowValues: Locator[] = await row.all();

    // console.log(await row.allInnerTexts());

    let col: string[] = await row.allInnerTexts();
    for (let i in col) {
        if (browser === 'Chrome') {
            console.log(`The ${browser} value is ${await row.nth(parseInt(i)).locator('td: has - text("%")').innerText()}`);
        }
    }



});