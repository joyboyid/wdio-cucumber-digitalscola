@login
Feature: Saucecode Login

@TestLogin
  Scenario: As a user, I can log into the inventory

    Given I am on the login page
    When I login with <username> and <password>
    Then user should redirect to inventory
    
    Examples:
      | username      | password          | 
      | standard_user | secret_sauce      | 


Scenario: User adds an item to the cart
    # Given I am on inventory
    When I add the item "Sauce Labs Backpack" to the cart
    Then I should see the item in the cart

# @TestAdd
#   Scenario: As a user, I can add item

#     Given I am on the login page
#     When I login with <username> and <password>
#     and user should redirect to inventory
#     And I click on the Add to cart
#     Then user should redirect to cart
    
#     Examples:
#       | username      | password          | 
#       | standard_user | secret_sauce      |
