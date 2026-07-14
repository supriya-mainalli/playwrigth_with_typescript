import { test, Locator, expect } from '@playwright/test'

test('Validate the dynamic dropdowns', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    //navigate to PIM
    await page.getByText('PIM').click();
    await page.waitForTimeout(5000);
    const totalDropdowns: Locator = page.locator("div[class='oxd-select-text-input']");
    await expect(totalDropdowns.first()).toBeVisible();
    const totalCount = await totalDropdowns.count();

    console.log('the count is ', totalCount);

    //select specific dropdown from the list of dropdowns
    await totalDropdowns.nth(2).click();


    const optionValues: Locator = await page.locator("div[class$='oxd-select-option'] span");
    await expect(optionValues.first()).toBeVisible();
    console.log(await optionValues.allInnerTexts());

    let optionLocators: Locator[] = await page.locator("div[class$='oxd-select-option'] span").all();
    for (let option of optionLocators) {
        if (await option.innerText() === 'devops') {
            await option.click();
            break
        }

    }
});