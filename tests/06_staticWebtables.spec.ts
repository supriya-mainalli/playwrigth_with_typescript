import { test, Locator, expect } from '@playwright/test'

test('Validate static table and fecth row and col data', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table: Locator = page.locator("table[name='BookTable']");
    const rows: Locator = table.locator('tr');

    //read 2nd row and col data
    console.log('The data of 3rd row is ', await rows.nth(2).locator('td').allInnerTexts());

    //validate row counts
    const rowCount: number = await rows.count();
    expect(rowCount).toBe(7);
    const rowArray: Locator[] = await rows.all();

    for (let row of rowArray) {
        let textVal: string[] = await row.allInnerTexts();
        for (let rowValue of textVal) {
            let col = rowValue.split('\t');

            //print all the books by Mukesh
            let books: string = col[0];
            let author: string = col[1];
            if (author === "Mukesh") {
                console.log(`The books written by ${author} is ${books}`);
            }
        }
    }
});