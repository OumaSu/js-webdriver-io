import basePage from "./basePage";

const assert = require("assert");

export default class samplePage extends basePage {
  constructor() {
    super("localhost");
    this.title = "samplePage";
  }

  isLoaded = () =>
    browser.waitUntil(() => {
      assert.equal(
        browser.getTitle(),
        this.title,
        `Load page ${typeof this} failed`
      );
    });
}
