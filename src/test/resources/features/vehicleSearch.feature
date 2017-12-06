@test
Feature: Searching for vehicle with Given Registration Number

    Scenario Outline: search and assert vehicle details
        Given I read all the registration number from the "regNumbers.csv" file
        And I am on DVLA search page
        When I click on start button
        And I enter "<registration>" number
        And I click on continue button
        Then I verify the Make "<make>" of the vehicle
        And I verify the Colour "<colour>" of the vehicle
        Examples:
            | registration | make     | colour |
            | EF59 OJN     | Nissan   | Black  |
            | FE61 BVX     | VAUXHALL | White  |
            | LN12 SVC     | JAGUAR   | Black  |
            | EX15 ZUC     | AUDI     | White  |
