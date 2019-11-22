import basePage from "./basePage";

const assert = require("assert");

export default class googlePage extends basePage {
  constructor() {
    super("https://www.google.com/");
    this.title = "Google";
  }

  open() {
    browser.navigateTo(this.url);
    assert.ok(this.isLoaded());
    return this;
  }

  searchBtn() {
    return browser
      .$$('//*[@value="Поиск в Google"]')
      .filter(i => i.isDisplayed());
  }

  searchInpt() {
    return browser.$('//*[@title="Поиск" and @aria-label="Найти"]');
  }

  searchByText(request) {
    const _input = this.searchInpt();
    _input.click();
    _input.setValue(request);
    this.searchBtn().click();
  }

  isLoaded() {
    return browser.waitUntil(() => {
      assert.equal(
        browser.getTitle(),
        this.title,
        `Load page ${typeof this} failed`
      );
    });
  }
}
