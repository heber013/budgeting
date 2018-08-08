import BudgetPage from '../pageObjects/budget.page';

const { When } = require('cucumber');

When('I add {string} with description {string} and value {string}', (category, descr, value) => {
  BudgetPage.selectCategory(category);
  BudgetPage.getSelectedCategory().should.equal(category);
  BudgetPage.setDescription(descr);
  BudgetPage.setValue(value);
  BudgetPage.add.click();
});
