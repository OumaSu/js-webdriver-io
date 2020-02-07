import basePage from "./basePage";

const assert = require("assert");

export default class mainPage extends basePage {
  constructor() {
    super("https://rscwealth.com");
    this.title = "InvestEngine – intelligent online investment service";
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
