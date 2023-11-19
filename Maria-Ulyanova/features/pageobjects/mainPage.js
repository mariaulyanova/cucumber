const Page = require('./page.js');

class MainPage extends Page {
    seeAllAppartments = 'apartments';
    seeAllCars = 'cars';
    seeAllTours = 'tours';
    contextInside = '#cars';
    firstAccommodation = 'div.apartment-item>a[href*="avenue-53"]:nth-child(1)';
    firstCar = 'div.col-sm-3>a[href*="vip-30"]';
    firstTour = 'div.tour-item>a[href*="stonehenge-34"]:nth-child(1)';
    boxInsideReservation = 'section.carContent';
    containerForAppartment = '#apartments';
    conteinerForCar = 'section#cars:nth-child(6)';
    containerForTours = 'section#cars:nth-child(8)';

    filmstripBlock = (index = 4) => `section#cars:nth-child(${index})`;
    seeAllButtons = button => `button>a[href*='${button}']`;
    pageNumber = number => `li a[href='https://irent.am/tours?page=${number}']`;
    contentOnThePage = content => `div.col-sm-3>a[href*=${content}]:nth-child(1)`;
    slickArrowAppartments = position => `#apartments~section:nth-child(4) i.icon-${position}`;
    slickArrowCars = position => `#cars:nth-child(6) i.icon-${position}`;
    slickArrowTours = position => `#cars:nth-child(8) i.icon-${position}`;

    async checkVisibility(index = 4) {
        await ($(this.filmstripBlock(index))).scrollIntoView({ block: "center", inline: "center" });
        expect($(this.filmstripBlock(index))).toBeDisplayed();
    };

    async clickButton(path) {
        await $(path).scrollIntoView();
        await $(path).waitForClickable();
        await $(path).click({ force: true });
    };

    async checkContextInside(button, item) {
        await this.clickButton(this.seeAllButtons(button));
        await ($(this.contextInside)).scrollIntoView();
        await expect($(this.contentOnThePage(item))).toBeDisplayed();
    };

    async checkContextInsideTours() {
        await this.clickButton(this.seeAllButtons(this.seeAllTours));
        await this.scrollAndClick(this.contextInside, this.pageNumber("6"));
        await expect($(this.contentOnThePage('nights-3'))).toBeDisplayed();
    };

    async verifyContext(button, firstElemt) {
        await this.clickButton(this.seeAllButtons(button));
        await ($(firstElemt)).click();
        await expect($(this.boxInsideReservation)).toBeDisplayed();
    };

    async clickOnElement(locator) {
        await $(locator).click();
    };
}


module.exports = new MainPage();