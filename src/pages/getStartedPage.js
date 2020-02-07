import basePage from "./basePage";

const assert = require("assert");

export default class getStartedPage extends basePage {
    constructor() {
        super("https://rscwealth.com/?inv=c5f669dd0e1659a6723d294b60c15b62f9756133&eid=eWV0YW5vdGhlcmFwZUBnbWFpbC5jb20");
        this.title = "InvestEngine – intelligent online investment service";
    }

    getStartedBtn() {
        return browser.$('//header//span[@class="Button-Text" and text() ="Get started"]')
    }

    acceptCoockie() {
        // CookiesInfo-AcceptBtn Button Button_theme_simple-reverse-green
        browser.$("//*[contains(@class, 'CookiesInfo-AcceptBtn Button')]").click();
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
