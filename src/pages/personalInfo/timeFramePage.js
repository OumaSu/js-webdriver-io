import basePage from "../basePage";

const assert = require("assert");

export default class timeFramePage extends basePage {
  constructor() {
    super("https://rscwealth.com/onboarding/time-frame/");
    this.title = "InvestEngine";
  }

  selectFrame(frame) {
    browser.$(`//*[text() = "${frame}"]`).click();
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
