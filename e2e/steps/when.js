import BudgetPage from '../pageObjects/budget.page';

module.exports = function() {
  this.When(/^I add "([^"]*)" with description "([^"]*)" and value "([^"]*)"$/, (category, descr, value) => {
    BudgetPage.selectCategory(category);
    BudgetPage.getSelectedCategory().should.equal(category);
    BudgetPage.setDescription(descr);
    BudgetPage.setValue(value);
    BudgetPage.add.click();
  });
};
