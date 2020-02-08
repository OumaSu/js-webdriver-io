import basePage from "../basePage";

const assert = require("assert");

export default class moreImportantPage extends basePage {
  constructor() {
    super("https://rscwealth.com/onboarding/what-is-more-important/");
    this.title = "InvestEngine";
  }

  selectReason(reason) {
    browser.$(`//*[text() = "${reason}"]`).click();
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
