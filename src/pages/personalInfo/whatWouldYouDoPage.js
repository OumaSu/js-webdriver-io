import basePage from "../basePage";

const assert = require("assert");

export default class whatWouldYouDoPage extends basePage {
  constructor() {
    super("https://rscwealth.com/onboarding/what-would-you-do/");
    this.title = "InvestEngine";
  }

  selectPlan(type) {
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
