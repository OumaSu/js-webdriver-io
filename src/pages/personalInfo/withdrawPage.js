import basePage from "../basePage";

const assert = require("assert");

export default class withdrawPage extends basePage {
  constructor() {
    super("https://rscwealth.com/onboarding/will-you-need-to-withdraw/");
    this.title = "InvestEngine";
  }

  selectWithdraw(type) {
    browser.$(`//*[contains(text(), "${type}")]`).click();
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
