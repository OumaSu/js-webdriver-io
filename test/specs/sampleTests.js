const pf = require("../../src/utils/pageFactory");

describe("sample test", function() {
  it("test name", function() {
    pf.page("googlePage").open().searchByText("qweqwedqwe");
  });
});
