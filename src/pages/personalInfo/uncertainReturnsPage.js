import basePage from "../basePage";

const assert = require("assert");

export default class uncertainReturnsPage extends basePage {
  constructor() {
    super("https://rscwealth.com/onboarding/guaranteed-vs-uncertain-returns/");
    this.title = "InvestEngine";
  }

  selectReturn(type) {
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
