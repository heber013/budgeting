import BudgetPage from '../pageObjects/budget.page';

module.exports = function() {
  this.Given(/^I am on the budget page$/, () => {
    BudgetPage.open();
  });

  this.Given(/^I have a total inflow equals to X$/, () => {
    global.X = BudgetPage.getTotalInflow();
  });

  this.Given(/^I have a total outflow equals to Y$/, () => {
    global.Y = BudgetPage.getTotalOutflow();
  });

  this.Given(/^I have a working balance equals to Z$/, () => {
    global.Z = BudgetPage.getWorkingBalance();
  });

  this.Given(/^I have a working balance equals to X-Y$/, () => {
    global.Z = BudgetPage.getWorkingBalance();
    expect(Z).to.be.equal(parseFloat((X - Y).toFixed(2)));
  });
};
