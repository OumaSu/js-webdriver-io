class basePage {
  constructor(url) {
    this.url = url;
  }

  open() { browser.navigateTo(this.url); }
  isLoaded() { browser.waitUntil(() => {}); }
}

module.exports = basePage;