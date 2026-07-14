import { test, expect, chromium } from '@playwright/test'

test('Browser context and Validate New tabs', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const Parentpage = await context.newPage();

    await Parentpage.goto('https://testautomationpractice.blogspot.com/')

    const [childPage] = await Promise.all([context.waitForEvent('page'), await Parentpage.locator("button:has-text('New Tab')").click()]);

    await childPage.waitForLoadState();

    //print title of each pages
    console.log(await Parentpage.title());
    console.log(await childPage.title());

    console.log('The total pages opened', context.pages().length);

});


test.only('Validate window popups', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://testautomationpractice.blogspot.com/')

    const [childPage] = await Promise.all([
        page.waitForEvent('popup'),
        await page.locator('#PopUp').click()
    ]);

    await childPage.waitForLoadState();

    //count total windows
    const totalPage = context.pages();
    console.log('Total windows', totalPage.length);

    console.log(`the title of first childwindows ${await totalPage[1].title()}`);
    console.log(`the second of first childwindows ${await totalPage[2].title()}`);

    for (let pageValue of totalPage) {
        if ((await pageValue.title()).includes('Fast and reliable')) {
            await pageValue.locator('.getStarted_Sjon').click();
            await pageValue.close();
        }
    }
});