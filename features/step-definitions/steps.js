// const assert = require('assert');
import assert from 'assert';
import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals';

import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';
import CartPage from '../pageobjects/cart.page.js';
import Page from '../pageobjects/page.js';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(`user should redirect to inventory`, async () => {
    // [Then] Describes the expected outcome or result of the scenario.
    return await InventoryPage.validateOnPage()
});

When('I add the item {string} to the cart', async (itemName) => {
    const itemSelector = `//*[contains(text(),"${itemName}")]/ancestor::div[@class="inventory_item"]//button`;
    await $(itemSelector).click();
  });
  
Then('I should see the item in the cart', async () => {
    await $('.shopping_cart_link').click();
    const cartItem = await $('.inventory_item_name').getText();
    assert.strictEqual(cartItem, 'Sauce Labs Backpack');
  });
  
