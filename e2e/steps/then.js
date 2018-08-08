import BudgetPage from '../pageObjects/budget.page';

const { Then } = require('cucumber');

Then('The total inflow is {string} + {float}', (variable, value) => {
  BudgetPage.getTotalInflow().should.equal(
    eval(variable) + parseFloat(value),
    'The actual total inflow does not match with the expected'
  );
});

Then('The total outflow is {string} + {float}', (variable, value) => {
  BudgetPage.getTotalOutflow().should.equal(
    eval(variable) + parseFloat(value),
    'The actual total outflow does not match with the expected'
  );
});

Then('The working balance is {float}', var1 => {
  BudgetPage.getWorkingBalance().should.equal(
    parseFloat(parseFloat(var1)),
    'The actual working balance does not match with the expected'
  );
});

Then('The working balance has increased in {float}', var1 => {
  BudgetPage.getWorkingBalance().should.equal(
    Z + parseFloat(var1),
    'The actual working balance does not match with the expected'
  );
});

Then('The working balance has decreased in {float}', var1 => {
  BudgetPage.getWorkingBalance().should.equal(
    Z - parseFloat(var1),
    'The actual working balance does not match with the expected'
  );
});

Then('The working balance has not changed', () => {
  BudgetPage.getWorkingBalance().should.equal(Z, 'The actual working balance has changed when it must not');
});
