import BudgetPage from '../pageObjects/budget.page';

module.exports = function() {
  this.Then(/^The total inflow is "([^"]*)" \+ (\d+)$/, (variable, value) => {
    BudgetPage.getTotalInflow().should.equal(
      eval(variable) + parseFloat(value),
      'The actual total inflow does not match with the expected'
    );
  });

  this.Then(/^The total outflow is "([^"]*)" \+ (\d+)$/, (variable, value) => {
    BudgetPage.getTotalOutflow().should.equal(
      eval(variable) + parseFloat(value),
      'The actual total outflow does not match with the expected'
    );
  });

  this.Then(/^The working balance is (\d+)"$/, var1 => {
    BudgetPage.getWorkingBalance().should.equal(
      parseFloat(parseFloat(var1)),
      'The actual working balance does not match with the expected'
    );
  });

  this.Then(/^The working balance has increased in (\d+)$/, var1 => {
    BudgetPage.getWorkingBalance().should.equal(
      Z + parseFloat(var1),
      'The actual working balance does not match with the expected'
    );
  });

  this.Then(/^The working balance has decreased in (\d+)$/, var1 => {
    BudgetPage.getWorkingBalance().should.equal(
      Z - parseFloat(var1),
      'The actual working balance does not match with the expected'
    );
  });

  this.Then(/^The working balance has not changed$/, () => {
    BudgetPage.getWorkingBalance().should.equal(Z, 'The actual working balance has changed when it must not');
  });
};
