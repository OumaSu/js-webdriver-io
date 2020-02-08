import logger from "@wdio/logger";
const log = logger("personalInfoFactory");

export const randomInt = (min, max) => {
  return min + Math.floor((max - min) * Math.random());
};

export const getRandomSubarray = (arr, size) => {
  var shuffled = arr.slice(0),
    i = arr.length,
    temp,
    index;
  while (i--) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(0, size);
};

export const instrumentsArr = {
  "Never invested": 0,
  ETFs: 2,
  Bonds: 3,
  Shares: 6,
  "Hedge funds": 8,
  Futures: 10
};

export class personalInfo {
  age;
  investAmount;
  annualIncome;
  proportion;
  investmentHorizon;
  important;
  downturn;
  sustain;
  uncertainReturns;
  withdraw;
  instruments;
  ability;
  willingness;
  score;
}

export class personalInfoBuilder {
  personalInfo;

  constructor() {
    this.personalInfo = new personalInfo();
    this.personalInfo.ability = 0;
    this.personalInfo.willingness = 0;
  }

  setAge(age) {
    var score = 0;
    if (age >= 18 && age < 26) {
      score = 5;
    } else if (age >= 26 && age < 35) {
      score = 5;
    } else if (age >= 35 && age < 44) {
      score = 5;
    } else if (age >= 44 && age < 50) {
      score = 4;
    } else if (age >= 50 && age < 60) {
      score = 3;
    } else if (age >= 60 && age < 65) {
      score = 2;
    } else if (age >= 65) {
      score = 1;
    }
    log.info(`age score ${score}`);
    this.personalInfo.ability += score;
    this.personalInfo.age = age;
    return this;
  }

  setInvestAmount(amount) {
    this.personalInfo.investAmount = amount;
    return this;
  }

  setAnnualIncome(annualIncome) {
    var score = 0;
    if (annualIncome == "Below £25K") {
      score = 0;
    } else if (annualIncome == "£25K – £50K") {
      score = 3;
    } else if (annualIncome == "£50K – £100K") {
      score = 6;
    } else if (annualIncome == "£100K – £200K") {
      score = 8;
    } else if (annualIncome == "More than £200K") {
      score = 10;
    }
    log.info(`annualIncome score ${score}`);
    this.personalInfo.ability += score;
    this.personalInfo.annualIncome = annualIncome;
    return this;
  }

  setProportion(proportion) {
    var score = 0;
    if (proportion == "0% – 25%") {
      score = 10;
    } else if (proportion == "25% – 50%") {
      score = 8;
    } else if (proportion == "50% – 75%") {
      score = 5;
    } else if (proportion == "75% – 100%") {
      score = 0;
    }
    log.info(`proportion score ${score}`);
    this.personalInfo.ability += score;
    this.personalInfo.proportion = proportion;
    return this;
  }

  setInvestmentHorizon(investmentHorizon) {
    var score = 0;
    if (investmentHorizon == "Short term") {
      score = 0;
    } else if (investmentHorizon == "Medium term") {
      score = 5;
    } else if (investmentHorizon == "Long term") {
      score = 10;
    }
    log.info(`investmentHorizon score ${score}`);
    this.personalInfo.ability += score;
    this.personalInfo.investmentHorizon = investmentHorizon;
    return this;
  }

  setImportant(important) {
    var score = 0;
    if (important == "Minimising losses") {
      score = 0;
    } else if (important == "Maximising profit") {
      score = 10;
    } else if (important == "Both equally") {
      score = 5;
    }
    log.info(`important score ${score}`);
    this.personalInfo.willingness += score;
    this.personalInfo.important = important;
    return this;
  }

  setDownturn(downturn) {
    var score = 0;
    if (downturn == "Sell all") {
      score = 0;
    } else if (downturn == "Sell some") {
      score = 4;
    } else if (downturn == "Wait") {
      score = 8;
    } else if (downturn == "Buy more") {
      score = 10;
    }
    log.info(`downturn score ${score}`);
    this.personalInfo.willingness += score;
    this.personalInfo.downturn = downturn;
    return this;
  }

  setSustain(sustain) {
    var score = 0;
    if (sustain == "limited loss") {
      score = 0;
    } else if (sustain == "medium loss") {
      score = 8;
    } else if (sustain == "large loss") {
      score = 15;
    }
    log.info(`sustain score ${score}`);
    this.personalInfo.ability += score;
    this.personalInfo.sustain = sustain;
    return this;
  }

  setUncertainReturns(uncertainReturns) {
    var score = 0;
    if (uncertainReturns == "Strongly agree") {
      score = 0;
    } else if (uncertainReturns == "Agree") {
      score = 3;
    } else if (uncertainReturns == "Disagree") {
      score = 6;
    } else if (uncertainReturns == "Strongly Disagree") {
      score = 10;
    }
    log.info(`uncertainReturns score ${score}`);
    this.personalInfo.willingness += score;
    this.personalInfo.uncertainReturns = uncertainReturns;
    return this;
  }

  setWithdraw(withdraw) {
    var score = 0;
    if (withdraw == "No") {
      score = 10;
    } else if (withdraw == "25%") {
      score = 5;
    } else if (withdraw == "50%") {
      score = 2;
    } else if (withdraw == "More") {
      score = 0;
    }
    log.info(`withdraw score ${score}`);
    this.personalInfo.ability += score;
    this.personalInfo.withdraw = withdraw;
    return this;
  }

  setInstruments(instruments) {
    const getMaxOfArray = arr => {
      return Math.max.apply(null, arr);
    };

    this.personalInfo.ability += getMaxOfArray(Object.values(instruments));
    this.personalInfo.instruments = Object.keys(instruments);
    return this;
  }

  getInfo() {
    const ability = (this.personalInfo.ability * 100) / 700;
    const willingness = (this.personalInfo.willingness * 100) / 30;
    this.personalInfo.score = Math.round(Math.min(ability, willingness));
    log.info(JSON.stringify(this.personalInfo));
    return this.personalInfo;
  }
}
