import {test,expect} from '@playwright/test'

test('open the web page', async ({ page}) => {
    await page.goto('https://demos.devexpress.com/rwa/dxhotels/Default.aspx');
    await page.getByRole('textbox',{name:'Location' }).fill("Hamburg, Germany");
    await page.getByRole ('textbox',{name: 'Check in'}).fill("4 Jul 2023");
    await page.getByRole('textbox', {name:'Check out'}).fill("6 Jul 2023");
    await page.getByRole('textbox', {name:'Rooms'}).fill("2");
    await page.getByRole('textbox', {name:'Adults'}).fill("3");
    await page.getByRole('textbox', {name:'Children'}).fill("2");
    await page.locator('span').filter({ hasText: 'SEARCH' }).click();
    await page.waitForEvent('load');
    await page.waitForTimeout (3000);
    await page.locator('#MainContentPlaceHolder_FilterFormLayout_OurRatingCheckBoxList_RB0_I_D').click();
    await page.locator('#MainContentPlaceHolder_FilterFormLayout_OurRatingCheckBoxList_RB1_I_D').click();    
    await page.getByText('SEARCH SEARCH').click();
    await page.locator('#MainContentPlaceHolder_FilterFormLayout_NightlyRateTrackBar_MD').click();
    await page.getByLabel('Nightly Rate:').press('ArrowRight');
    await page.getByLabel('Nightly Rate:').press('ArrowRight');

    
    
    await page.waitForTimeout (3000);
    await page.locator('#MainContentPlaceHolder_FilterFormLayout_ApplyFilterButton').click();
    await page.waitForEvent('load');
    await page.waitForTimeout(5000);
//https://github.com/Tallyb/cucumber-playwright
//https://serenity-js.org/handbook/test-runners/playwright-test/


})