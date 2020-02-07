import basePage from "./basePage";

const assert = require("assert");

export default class personalQuestionPage extends basePage {
  constructor() {
    super("/");
    this.title = "InvestEngine";
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
