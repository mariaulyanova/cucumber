const { Given, When, Then } = require('@wdio/cucumber-framework');
const Page = require('../pageobjects/page.js');
const currency = require('../pageobjects/currency.js');
const { expect } = require('chai')

const page = new Page();

Then(/^currency is set "([^"]*)" by default$/, async (cur) => {
    await currency.currencyByDefault(cur);
});

When(/^the user locates the currency selector$/, async () => {
    await currency.dropDownMenu();
});

When(/^clicks on the currency selector to open the currency dropdown$/, async () => {
    await $(currency.currencyDropDownMenu).click();
});

Then(/^the currency dropdown should be visible$/, async () => {
    const isDropdownVisible = await $(currency.currencyDropDownMenu).isDisplayed();
    expect(isDropdownVisible, 'the currency dropdown should be visible').to.be.true;
});

When(/^the user clicks on the currency selector to open the currency dropdown$/, async () => {
    await $(currency.currencyDropDownMenu).click();
});

When(/^selects a different currency from the dropdown "([^"]*)"$/, async (newCurrency) => {
    await $(currency.currentCurrency(newCurrency)).click();
});

Then(/^currency is changed to "([^"]*)"$/, async (cur) => {
    await $(currency.currencyDropDownMenu).moveTo();
    const element = await $('a[href*="https://irent.am/exchange/"][class="dropdown-toggle"]').getText();

    expect(element).to.equal(cur)
});
