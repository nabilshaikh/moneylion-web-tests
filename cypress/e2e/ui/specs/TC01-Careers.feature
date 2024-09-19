Feature: Careers page

  Scenario Outline: Able to access MoneyLion careers page successfully
    Given user visits '/' page on '<viewport>' device
    When user clicks on 'Careers' present on the page footer
    Then user should be redirected to the MoneyLion's 'careers' page successfully
    And user should be able to see 'New York City, Sioux Falls, Kuala Lumpur, Around the globe' blocks displayed next to 'Where we work' on '<viewport>'
  
  Examples:
      | viewport |
      | desktop  |
      | mobile   |

    