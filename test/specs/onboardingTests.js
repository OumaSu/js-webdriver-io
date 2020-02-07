import { getPage } from "../../src/utils/pageFactory";
import { personalInfoBuilder } from "../../src/utils/personalInfoFactory";

describe("Onboarding tests", () => {
  beforeEach((done) => {
    getPage("getStartedPage").open().acceptCoockie().getStartedBtn().click();
  });

  it.only("Review personal account portfolio test", () => {
    var personal = new personalInfoBuilder().getInfo();
    getPage("productTypePage").getStartedByType("personal").click();
  });
  it("Review business account portfolio test", () => {
    getPage("productTypePage").getStartedByType("business").click();
    //
  });
});
