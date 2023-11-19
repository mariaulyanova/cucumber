const { Given, When, Then } = require('@wdio/cucumber-framework');
const Page = require('../pageobjects/page.js');
const productPage = require('../pageobjects/productPage.js');

const page = new Page();

Given(/^the user is on the "([^"]*)" website$/, async (path) => {
    await page.open();
});

When(/^the user clicks on the "([^"]*)" tab in the main navigation menu$/, async (reservationOption) => {
    if (reservationOption === "Accommodation") {
        await productPage.openReservationSectionForAccommodation();
    } else if (reservationOption === "Cars") {
        await productPage.openReservationPartForCars();
    } else if (reservationOption === "Tours") {
        await productPage.openReservationPartForTours();
    }
});

Then(/^the user should be taken to the respective reservation section$/, async () => {
    await productPage.expectedResult();
});

When(/^And the user click buttons Agree and Book$/, async () => {
    await productPage.agreeAndBook();
});

When(/^the user fill all information in reservation section$/, async () => {
    await productPage.filledReservationField();

});

Then(/^the user wait for error$/, async () => {
    await productPage.bookItem();
});
