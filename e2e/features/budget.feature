Feature: Performing a budget

  As a user on the budgeting app
  I want to add incomes/outcomes
  to see the working balance

  Background:
    Given I am on the budget page

  Scenario: Verify that adding an income increase the working balance
    Given I have a total inflow equals to X
    And I have a total outflow equals to Y
    And I have a working balance equals to X-Y
    When I add "Income" with description "salary" and value "150"
    Then The total inflow is "X" + 150.00
    And The working balance has increased in 150.00

  Scenario: Verify that adding an outcome decrease the working balance
    Given I have a total inflow equals to X
    And I have a total outflow equals to Y
    And I have a working balance equals to X-Y
    When I add "School" with description "fee" and value "100"
    Then The total outflow is "Y" + 100.00
    And The working balance has decreased in 100.00

  Scenario: Verify that description is optional when adding an income
    Given I have a working balance equals to Z
    When I add "Income" with description "" and value "100"
    Then The working balance has increased in 100.00

  Scenario: Verify that description is optional when adding an outcome
    Given I have a working balance equals to Z
    When I add "School" with description "" and value "100"
    Then The working balance has decreased in 100.00

  Scenario: Verify that I can add a row with special characters in description field
    Given I have a working balance equals to Z
    When I add "Income" with description "#$%&/" and value "100"
    Then The working balance has increased in 100.00

  Scenario: Verify that adding an income with amount zero does not change the working balance
    Given I have a working balance equals to Z
    When I add "Income" with description "any" and value "0"
    Then The working balance has not changed

  @ShouldFail
  Scenario: Verify that adding an outcome with amount zero does not change the working balance
    Given I have a working balance equals to Z
    When I add "School" with description "institute" and value "0"
    Then The working balance has increased in 100.00
    # To make this test pass: Comment the previous step and uncomment the following:
    # Then The working balance has not changed

  @Pending
  Scenario: Verify that I can only add numbers in value field
    Given The Add button is disabled
    When I write "asdklj" in amount field
    Then The amount field keeps empty
    And The Add button is disabled

  @Pending
  Scenario: Verify that when I add a negative value as income it is converted to positive
    Given I have a total inflow equals to X
    And I have a total outflow equals to Y
    And I have a working balance equals to X-Y
    When I add an income with description "salary" and value -Z
    Then The total inflow is X+Z
    And The working balance is X+Z-Y

  @Pending
  Scenario: Verify that when I add a negative value as outcome it is kept as negative.
    Given I have a total inflow equals to X
    And I have a total outflow equals to Y
    And I have a working balance equals to X-Y
    When I add an outcome of category "Misc", description "Institute" and amount -Z
    Then The total outflow is Y+Z
    And The working balance is X-Y-Z

  @Pending
  Scenario: Verify that I can enter a number with two decimals of precision in value field
    Given I have a working balance equals to X
    When I add an income with description "Salary" and amount Y.ZZ
    Then The working balance is X+Y.ZZ
