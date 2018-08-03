import Page from './page';

class BudgetPage extends Page {
  /**
   * define elements
   */

  get totalInflow() {
    return $('.components-Balance-style-balanceAmount');
  }

  get totalOutflow() {
    return $('.components-Balance-style-neg');
  }

  get workingBalance() {
    return $('div:nth-child(5) > div > div.components-Balance-style-balanceAmount.components-Balance-style-pos');
  }

  get category() {
    return $('[name="categoryId"]');
  }

  get description() {
    return $('[name="description"]');
  }

  get value() {
    return $('[name="value"]');
  }

  get add() {
    return $('button[type="submit"]');
  }

  /**
   * define or overwrite page methods
   */
  open() {
    super.open('/budget'); // this will append `budget` to the baseUrl to form complete URL
    browser.pause(1000);
  }

  /**
   * your page specific methods
   */
  setDescription(description) {
    this.description.setValue(description);
  }

  setValue(value) {
    this.value.setValue(value);
  }

  selectCategory(name) {
    this.category.selectByVisibleText(name);
  }

  getSelectedCategory() {
    return this.category.getText('option:checked');
  }

  getTotalInflow() {
    return parseFloat(
      this.totalInflow
        .getText()
        .replace(/\$/g, '')
        .replace(/,/g, '')
    );
  }

  getTotalOutflow() {
    return parseFloat(
      this.totalOutflow
        .getText()
        .replace(/\$/g, '')
        .replace(/,/g, '')
    );
  }
  getWorkingBalance() {
    return parseFloat(
      this.workingBalance
        .getText()
        .replace(/\$/g, '')
        .replace(/,/g, '')
    );
  }
}

export default new BudgetPage();
