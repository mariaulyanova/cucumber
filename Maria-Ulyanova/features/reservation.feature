Feature: Reservation functionality on iRent.am website

  Background: As a user I open web-site
    Given the user is on the "iRent.am" website

  Scenario: Verify Navigation to Reservation Section for Accommodation
    When the user clicks on the "Accommodation" tab in the main navigation menu
    Then the user should be taken to the respective reservation section

  Scenario: Verify Navigation to Reservation Section for Cars
    When the user clicks on the "Cars" tab in the main navigation menu
    Then the user should be taken to the respective reservation section

  Scenario: Verify Navigation to Reservation Section for Tours
    When the user clicks on the "Tours" tab in the main navigation menu
    Then the user should be taken to the respective reservation section

  Scenario: Verify Providing Reservation Details
    When the user clicks on the "Accommodation" tab in the main navigation menu
    And the user click buttons Agree and Book
    And the user fill all information in reservation section
    Then the user wait for error

  Scenario: Verify Providing Reservation Details
    When the user clicks on the "Cars" tab in the main navigation menu
    And the user click buttons Agree and Book
    And the user fill all information in reservation section
    Then the user wait for error

  Scenario: Verify Providing Reservation Details
    When the user clicks on the "Tours" tab in the main navigation menu
    And the user click buttons Agree and Book
    And the user fill all information in reservation section
    Then the user wait for error
