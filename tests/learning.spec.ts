import { test, expect } from '@playwright/test';

test('Locators learning', async ({ page }) => {
    await page.goto('')
    const headingLocator = await page.getByRole('heading', { name: 'Playwright Locator', exact: false })
    console.log(await headingLocator.textContent())

    await page.getByTestId('username-input').fill('admin') // clears and appends it
    // await page.getByTestId('username-input').pressSequentially('1234') // appends the string
    await page.getByTestId('password-input').fill('admin123')

    await page.locator('#role').selectOption('devops')
    await page.getByRole('button', { name: 'Login' }).click()
})