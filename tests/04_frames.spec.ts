import { test, expect, Locator } from '@playwright/test'

test('Validate single frames', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/')
    const frame = page.frame({ url: 'https://ui.vision/demo/webtest/frames/' }) //return type is null or frame
    if (frame) {
        await frame.locator("input[name='text1']").fill('hi')
    }
    else {
        console.log('iframe not found');
    }

    const totalFrames: number = page.frames().length;
    expect(totalFrames).toBe(7);
});

test('Validate inner/child frames', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/')
    const frame3 = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3' })
    if (frame3) {
        await frame3.locator("input[name='mytext3']").fill('supriya');
    }
    else {
        console.log("frame not found");
    }
    if (frame3) {
        const childFrames = frame3.childFrames();
        const radioButton: Locator = childFrames[0].getByLabel('I am a human')
        await expect(radioButton).toBeVisible();
        await radioButton.check();
        await expect(radioButton).toBeChecked();
    }
});