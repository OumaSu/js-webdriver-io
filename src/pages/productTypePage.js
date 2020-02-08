import basePage from "./basePage";

const assert = require("assert");

export default class productTypePage extends basePage {
  constructor() {
    super("https://rscwealth.com/product-type/");
    this.title = "InvestEngine";
  }

  getStartedByType(type) {
    const types = {
      personal: () => "Personal Account",
      business: () => "Business Account",
      isa: () => "ISA"
    };
    return browser.$(`//div[text() = "${types[type]()}"]`);
  }

  isLoaded() {
    browser.waitUntil(() => {
      assert.equal(
        browser.getTitle(),
        this.title,
        `Load page ${this.constructor.name} failed,`
      );
    });
    return this;
  }
}
