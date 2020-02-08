import basePage from "../basePage";

const assert = require("assert");

export default class investableAssetsPage extends basePage {
  constructor() {
    super("https://rscwealth.com/onboarding/investable-assets/");
    this.title = "InvestEngine";
  }

  selectPercent(percent) {
    browser.$(`//*[text() = "${percent}"]`).click();
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
