import { page } from "../../src/utils/pageFactory";

describe("sample test", () => {
  it("test name", () => {
    page("googlePage")
      .open()
      .searchByText("qweqwedqwe");
  });
});
