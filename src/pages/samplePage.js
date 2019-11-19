const basePage = require("./basePage");
const assert = require("assert");

 class samplePage extends basePage {
  constructor() {
    super("localhost");
    this.title = "samplePage";
  }

  isLoaded() {
    browser.waitUntil(() => {
      assert.equal(
        browser.getTitle(),
        this.title,
        `Load page ${typeof this} failed`
      );
    });
  }
}

module.exports= samplePage;
