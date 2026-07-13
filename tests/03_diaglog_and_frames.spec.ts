import { test, expect, Locator } from '@playwright/test'

test('Validate the Simple alert', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page).toHaveTitle(/Automation/);
    page.on('dialog', dialog => {
        console.log('The dialog type is', dialog.type());
        let message: string = dialog.message();
        expect(message).toContain('I am an alert box!')
        dialog.accept()
    });
    await page.locator('#alertBtn').click();
});

test('Validate the Confirm alert', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog', dialog => {
        let messageType: string = dialog.type();
        console.log('The dialog type is', messageType);
        expect(messageType).toBe('confirm')
        let message1: string = dialog.message();
        expect(message1).toContain('Press a button!')
        dialog.dismiss()
    });
    await page.locator('#confirmBtn').click();
});


test.only('Validate prompt dialog', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog', dialog => {
        let dialogType2: string = dialog.type();
        expect(dialogType2).toBe('prompt');
        const message2: string = dialog.message();
        expect(message2).toContain('Please enter your name:');

        const defaultValueDialog: string = dialog.defaultValue();
        expect(defaultValueDialog).toContain('Harry Potter');
        dialog.accept('Supriya');
    });
    await page.locator('#promptBtn').click();

});