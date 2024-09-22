Feature: Careers page

This feature validates the careers page functionality, 
ensuring users can view job listings, company's mission, culture, benefits, and location presence.

  Scenario Outline: Able to access MoneyLion careers page successfully
    Given user visits '/' page on '<viewport>' device
    When user clicks on 'Careers' present on the page footer
    Then user should be redirected to the MoneyLion's 'careers' page successfully
    And user should be able to see 'New York City, Sioux Falls, Kuala Lumpur, Around the globe' blocks displayed next to 'Where we work'
  
  Examples:
      | viewport |
      | desktop  |
      | mobile   |
