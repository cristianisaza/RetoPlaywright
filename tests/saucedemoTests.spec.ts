import {test,expect} from '@playwright/test'

test('successful order', async ({ page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill("standard_user");
    await page.locator('#password').fill("secret_sauce");
    await page.locator('#login-button').click();  

    //fin login
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await expect(page.locator('#remove-sauce-labs-backpack')).toHaveText('Remove');
    await page.locator('#add-to-cart-sauce-labs-onesie').click();
    await expect(page.locator('#remove-sauce-labs-onesie')).toHaveText('Remove');
    await page.locator('#add-to-cart-sauce-labs-bike-light').click();
    await expect(page.locator('#remove-sauce-labs-bike-light')).toHaveText('Remove');
    await page.locator('a').filter({ hasText: '3' }).click();
    //fin carrito de compras
    await page.locator('#checkout').click();
    await page.locator('#first-name').fill("fake name");
    await page.locator('[data-test="lastName"]').fill('fake last name');
    await page.locator('[data-test="postalCode"]').fill('52658');
    await page.locator('#continue').click();
    await page.locator('#finish').click();
    await expect(page.getByRole('heading')).toHaveText('Thank you for your order!');
})

test('User locked log in', async ({ page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill("locked_out_user");
    await page.locator('#password').fill("secret_sauce");
    await page.locator('#login-button').click();
    await expect (page.locator('[data-test="error"]'))
    .toHaveText('Epic sadface: Sorry, this user has been locked out.')

})

test.only('User invalid', async ({ page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill("invalid_user");
    await page.locator('#password').fill("secret_sauce");
    await page.locator('#login-button').click();
    await expect (page.locator('[data-test="error"]'))
    .toHaveText('Epic sadface: Username and password do not match any user in this service')
})

