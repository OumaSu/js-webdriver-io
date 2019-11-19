import basePage from "./basePage";

const assert = require("assert");

export default class googlePage extends basePage {
  constructor() {
    super("https://www.google.com/");
    this.title = "Google";
  }

  searchBtn = () =>
    browser.$$('//*[@value="Поиск в Google"]').filter(i => i.isDisplayed());
  searchInpt = () => browser.$('//*[@title="Поиск" and @aria-label="Найти"]');

  searchByText = request => {
    const _input = this.searchInpt();
    _input.click();
    _input.setValue(request);
    this.searchBtn().click();
  };

  isLoaded = () =>
    browser.waitUntil(() => {
      assert.equal(
        browser.getTitle(),
        this.title,
        `Load page ${typeof this} failed`
      );
    });
}
