Feature: Saucecode Test

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then user should redirect to inventory
    
    Examples:
      | username      | password          | 
      | standard_user | secret_sauce      | 