Feature: Checking Currency Changing on iRent.am Website

    Background: As a user I open web-site
        Given the user is on the "iRent.am" website

    Scenario: Verify Default Currency Display
        Then currency is set "USD" by default

    Scenario: Verify Currency Dropdown Visibility
        When the user locates the currency selector
        And clicks on the currency selector to open the currency dropdown
        Then the currency dropdown should be visible

    Scenario: Verify Currency Selection
        When the user clicks on the currency selector to open the currency dropdown
        And selects a different currency from the dropdown "AMD"
        Then currency is changed to "AMD"
