import basePage from "./basePage";

const assert = require("assert");

export default class userInfoOnboardPage extends basePage {
  constructor() {
    super("https://rscwealth.com/onboarding/");
    this.title = "InvestEngine";
  }

  fillAge(age) {
    browser
      .$("//*[@data-test-id='onboardingStepGetStartedInputAge']")
      .setValue(age);
    return this;
  }

  fillAmount(amount) {
    browser
      .$("//*[@data-test-id='onboardingStepGetStartedInputInitialDeposit']")
      .setValue(amount);
    return this;
  }

  continueBtn() {
    return browser.$(
      "//*[@data-test-id='onboardingStepGetStartedSubmitButton']"
    );
  }

  сontinue() {
    this.continueBtn().click();
  }

  isLoaded() {
    browser.waitUntil(() => {
      assert.equal(
        continueBtn().isDisplayed(),
        true,
        `Load page ${this.constructor.name} failed`
      );
    });
    return this;
  }
}
