import basePage from "../basePage";

const assert = require("assert");

export default class reviewPage extends basePage {
  constructor() {
    super("https://rscwealth.com/onboarding/review-portfolio/");
    this.title = "InvestEngine";
  }

  closeEmailModal() {
    browser.$(
      "//*[@data-test-id='onboardingStepReviewGoalEmailModal']//*[contains(@class, 'Modal-Close')]"
    );
    return this;
  }

  switchToProjections() {
    browser.$("//*[@data-test-id='onboardingStepReviewGoalProjectionsLink']");
    return this;
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
