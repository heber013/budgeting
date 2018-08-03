Feature: Performing a budget

  As a user on the budgeting app
  I want to see reports
  regarding inflow vs outflow and spending by category

  @Pending
  Scenario: Verify that report Inflow vs Outflow reflects the actual values correctly
    Given I have a total inflow equals to X
    And I have a total outflow equals to Y
    And X > Y
    When I select the option "Reports"
    And I select "Inflow vs Outflow"
    Then I see a bar representing the Inflow
    And I see a bar representing the Outflow
    And The bar that represents the Inflow is bigger than the one that represents the Outflow

  @Pending
  Scenario: Verify that Outflow bar is split with categories in different colors in Inflow vs Outflow chart
    Given I have the outcomes:
      | Groceries | Trader Joe's food | 60 |
      | Travel    | Gas               | 40 |
    When I select the option "Reports"
    And I select "Inflow vs Outflow"
    Then I see the outflow bar split by categories
    And Each category has a different color
    And The size of each category is proportional to the total Outflow:
      | Total     | 100 |
      | Groceries | 60% |
      | Travel    | 40% |

  @Pending
  Scenario: Verify that report Spending by category reflects the actual values correctly
    Given I have the outcomes:
      | Groceries | Trader Joe's food | 60 |
      | Travel    | Gas               | 40 |
    When I select the option "Reports"
    And I select "Spending by category"
    Then I see a graphic split by different outcomes categories
    And The size of each category is proportional to the total Outflow:
      | Total     | 100 |
      | Groceries | 60% |
      | Travel    | 40% |

  @Pending
  Scenario Outline: Verify that report Spending by category reflects the actual values correctly when adding a new outcome
    Given I have the outcomes:
      | Groceries | Trader Joe's food | 10 |
      | Travel    | Gas               | 20 |
    And I have an outcome of category "Travel" with value Y
    When I add an outcome of category <category>, description <description> and amount <value>
    And I select the option "Reports"
    And I select "Spending by category"
    Then I see a graphic split by different outcomes categories
    And The size of each category is proportional to the <total> Outflow with <percentages>
    Examples:
      | category  | description | value | total | percentages                       |
      | Groceries | McDonald's  | 70    | 100   | Groceries:80%;Travel:20%          |
      | Kids      | Medicament  | 70    | 100   | Groceries:10%;Travel:20%;Kids:70% |
