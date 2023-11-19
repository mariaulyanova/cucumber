const Page = require('./page.js');

class ProductPage extends Page {
  navigationBar = 'div#myNavbar';
  accommodationDropDown = '#myNavbar > ul > li:nth-child(2) > a';
  carDropDown = '#myNavbar > ul > li:nth-child(3) > a';
  toursDropDownMenu = '#myNavbar > ul > li:nth-child(4) > a';
  accommodationInYerevan = 'a[href="https://irent.am/apartments/type/all/location/yerevan"]';
  carCheckClass = 'a[href*="economy"]';
  bookNowInaccommodation = 'div.apartment-info~a[href*="53"]';
  bookNowInCar = 'div.car-info a[href*="29"].book-btn';
  bookNowTour = 'div.tour-info~a[href*="stonehenge-34"]';
  checkInDate = 'input#check-in-time';
  checkOutDate = 'input#check-out-time';
  pickUpField = '#pick-up-location';
  dropOffField = '#drop-off-location';
  insertAdult = 'select#adults option[value="2"]';
  insertChild = 'select#children option[value="5"]';
  expectedPartOfPage = '.additional-info';
  pickUpFromYerevan = '#pick-up-location option[value="Yerevan Office"]';
  dropOffYerevanAirport = '#drop-off-location option[value="Yerevan Airport"]';
  dailyTours = 'a[href*="daily-tours"]';
  tourFieldForAdult = '#tour-adults';
  tourFieldForAdultWithData = '#tour-adults option[value="6"]';
  tourFieldForCholdrenWithData = '#tour-children option[value="10"]';
  agreeButton = 'div.terms-content input.check-box';
  bookButton = '#disableBtn';
  firstNameInputField = 'input[name="first_name"]';
  lastNameInputField = 'input[name="last_name"]';
  phoneInputField = 'input[name="phone"]';
  emailInputField = 'input[name="email"]';
  ageField = '#age';
  ageFieldWithData = '#age option[value="24"]';
  nationalityField = '#nationality';
  nationalityFieldWithDat = '#nationality option[value="Aruba"]';
  expectError = 'div.notfound-404';
  bookReservation = 'div.booking-btn button';

  async agreeAndBook() {
    await $(this.agreeButton).waitForDisplayed();
    await $(this.agreeButton).click();
    await $(this.bookButton).click();
  }

  async dropDownMenu(path, choosePosition) {
    await $(path).moveTo();
    await $(choosePosition).click();
  };

  async openReservationSectionForAccommodation() {

    await this.dropDownMenu(this.accommodationDropDown, this.accommodationInYerevan);
    await $(this.bookNowInaccommodation).click();
    await $(this.checkInDate).click();
    await $(this.checkOutDate).click();
    await $(this.insertAdult).click();
    await $(this.insertAdult).click();
    await $(this.insertChild).click();
  }

  async expectedResult() {
    const element = await $(this.expectedPartOfPage);
    await expect(element).toBeDisplayed();
  };

  async openReservationPartForCars() {
    await this.dropDownMenu(this.carDropDown, this.carCheckClass);
    await $(this.bookNowInCar).click();
    await $(this.pickUpField).click();
    await $(this.pickUpFromYerevan).click();
    await $(this.dropOffField).click();
    await $(this.dropOffYerevanAirport).click();
  };

  async openReservationPartForTours() {
    await this.dropDownMenu(this.toursDropDownMenu, this.dailyTours);
    await $(this.bookNowTour).click();
    await $(this.tourFieldForAdult).click();
    await $(this.tourFieldForAdultWithData).click();
    await $(this.tourFieldForCholdrenWithData).click();
  };

  async filledReservationField() {
    await $(this.firstNameInputField).waitForDisplayed();
    await $(this.firstNameInputField).setValue(testingData.data.firstName);
    await $(this.lastNameInputField).setValue(testingData.data.lastName);
    await $(this.phoneInputField).setValue(testingData.data.phoneNumber);
    await $(this.emailInputField).setValue(testingData.data.email);
    await $(this.ageField).click();
    await $(this.ageFieldWithData).click();
    await $(this.nationalityField).click();
    await $(this.nationalityFieldWithDat).click();
  };

  async bookItem() {
    await $(this.bookReservation).click();
    await expect(this.expectError).toBeDisplayed();
  }
}

module.exports = new ProductPage();
