import basePage from "./basePage";

const assert = require("assert");

export default class userInfoOnboardPage extends basePage {
    constructor() {
        super("https://rscwealth.com/onboarding/");
        this.title = "InvestEngine";
    }

    fillAge(age) {
        browser.$("//*[@data-test-id='onboardingStepGetStartedInputAge']").setValue(age);
        return this;
    }

    fillAmount(amount) {
        browser.$("//*[@data-test-id='onboardingStepGetStartedInputInitialDeposit']").setValue(amount);
        return this;
    }

    сontinue() {
        browser.$("//*[@data-test-id='onboardingStepGetStartedSubmitButton']");
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
