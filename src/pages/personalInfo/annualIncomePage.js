import basePage from "../basePage";

const assert = require("assert");

export default class annualIncomePage extends basePage {
  constructor() {
    super("https://rscwealth.com/onboarding/annual-income/");
    this.title = "InvestEngine";
  }

  selectIncome(type) {
    browser.$(`//*[text() = "${type}"]`).click();
  }

  isLoaded() {
    browser.waitUntil(() => {
      assert.equal(
        browser.getTitle(),
        this.title,
        `Load page ${this.constructor.name} failed`
      );
    });
    return this;
  }
}
