import { expect, Locator, test } from '@playwright/test'

test('Validate the flow for single select static dropdwons', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    // await page.locator('#country').selectOption('Canada') //by visibile text
    // await page.locator('#country').selectOption({ value: 'uk' }); // by value
    await page.locator('#country').selectOption({ label: 'India' }); // by label
    await page.locator('#country').selectOption({ index: 5 }); //by index


    //assert for total counts
    let toatalOptions: Locator = page.locator('#country>option');
    await expect(toatalOptions).toHaveCount(10);
    await page.waitForTimeout(5000)
    

    //check if option is present in dropdwon or not
    let innerText: string[] = (await toatalOptions.allInnerTexts()).map(text => text.trim());
    // console.log(innerText)
    expect(innerText).toContain('Germany');

    for (const option of innerText) {
        console.log(option)
    }
});

test.only('Validate Multi select dropdowns', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    let animalLocator: Locator = page.locator('#animals>option');
    // await page.locator('#animals').selectOption(['Cat', 'Dog']); // by values
    // await page.locator('#animals').selectOption([{ label: 'Cat' }, { label: 'Dog' }]); // by label

    await page.locator('#animals').selectOption([{ index: 0 }, { index: 5 }, { index: 3 }]);

    //chekc the length
    expect(animalLocator).toHaveCount(10);

    let innerAnimalText: string[] = (await animalLocator.allTextContents()).map(text => text.trim());
    for (const option of innerAnimalText) {
        console.log(option)
    }

    expect(innerAnimalText).toContain('Cheetah');

    // await page.waitForTimeout(5000)

    //check if the options are sorted

    let sortInnertextValues: string[] = [...innerAnimalText].sort();
    console.log(sortInnertextValues)
    console.log(innerAnimalText)

    expect(sortInnertextValues).toEqual(innerAnimalText)
})