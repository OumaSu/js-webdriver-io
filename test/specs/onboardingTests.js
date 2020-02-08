import { getPage } from "../../src/utils/pageFactory";
import {
  personalInfoBuilder,
  personalInfo
} from "../../src/utils/personalInfoFactory";

describe("Onboarding tests", () => {
  beforeEach(done => {
    getPage("getStartedPage")
      .open()
      .acceptCoockie()
      .getStartedBtn()
      .click();
  });

  it.only("Review personal account portfolio test", () => {
    var info = new personalInfoBuilder()
      .setAge(24)
      .setInvestAmount(30467)
      .setAnnualIncome("£25K – £50K")
      .setProportion("50% – 75%")
      .setInvestmentHorizon("Medium term")
      .setImportant("Maximising profit")
      .setDownturn("Sell some")
      .setSustain("medium loss")
      .setUncertainReturns("Agree")
      .setWithdraw("Up")
      .setInstruments({
        Shares: 6,
        "Hedge funds": 8,
        Futures: 10
      })
      .getInfo();
    getPage("productTypePage")
      .getStartedByType("personal")
      .click();
    getPage("userInfoOnboardPage")
      .fillAmount(info.investAmount)
      .fillAge(info.age)
      .сontinue();
    getPage("investableAssetsPage").selectPercent(info.proportion);
    getPage("annualIncomePage").selectIncome(info.annualIncome);
    getPage("timeFramePage").selectFrame(info.investmentHorizon);
    getPage("moreImportantPage").selectReason(info.important);
    getPage("whatWouldYouDoPage").selectPlan(info.downturn);
    getPage("lossPage").selectLoss(info.sustain);
    getPage("uncertainReturnsPage").selectReturn(info.uncertainReturns);
    getPage("withdrawPage").selectWithdraw(info.withdraw);
    getPage("instrumentsPage")
      .selectInstruments(info.instruments)
      .сontinue();
    getPage("reviewPage")
      .closeEmailModal()
      .switchToProjections();
    //здесь должна быть проверка процентов но по формулам получаются расхождения
    // ожидаем получение 6% бонд
    // фактически видим 11%
  });
  it("Review business account portfolio test", () => {
    getPage("productTypePage")
      .getStartedByType("business")
      .click();
    // для проверки бизнес портфолио нужно проделать похожие шаги и написать отдельную логику
    // технически тест подобен первому за исключением модели данных и одного-двух шагов с вопросами
  });
});
