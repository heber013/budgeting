import BudgetPage from '../pageObjects/budget.page';

const { Given } = require('cucumber');

Given('I am on the budget page', () => {
  BudgetPage.open();
});

Given('I have a total inflow equals to X', () => {
  global.X = BudgetPage.getTotalInflow();
});

Given('I have a total outflow equals to Y', () => {
  global.Y = BudgetPage.getTotalOutflow();
});

Given('I have a working balance equals to Z', () => {
  global.Z = BudgetPage.getWorkingBalance();
});

Given('I have a working balance equals to X-Y', () => {
  global.Z = BudgetPage.getWorkingBalance();
  expect(Z).to.be.equal(parseFloat((X - Y).toFixed(2)));
});
