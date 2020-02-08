import basePage from "../basePage";

const assert = require("assert");

export default class lossPage extends basePage {
  constructor() {
    super("https://rscwealth.com/onboarding/how-big-loss-can-you-sustain/");
    this.title = "InvestEngine";
  }

  selectLoss(type) {
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
