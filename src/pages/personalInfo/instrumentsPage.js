import basePage from "../basePage";

const assert = require("assert");

export default class instrumentsPage extends basePage {
  constructor() {
    super(
      "https://rscwealth.com/onboarding/which-instruments-you-invested-before/"
    );
    this.title = "InvestEngine";
  }

  selectInstruments(instruments) {
    instruments.forEach(instrument => {
      browser.$(`//*[contains(text(),"${instrument}")]`).click();
    });
    return this;
  }

  сontinue() {
    browser
      .$(
        "//*[@data-test-id='onboardingStepWhichInstrumentsYouInvestedSubmitButton']"
      )
      .click();
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
