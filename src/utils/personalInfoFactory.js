import logger from '@wdio/logger'
const log = logger('personalInfoFactory');

export const randomInt = (min, max) => {
    return min + Math.floor((max - min) * Math.random());
}

export const instrumentsArr = {
    "Never invested / Don’t know": 0,
    "ETFs / Mutual funds": 2,
    "Bonds": 3,
    "Shares": 6,
    "Hedge funds / Private equity funds": 8,
    "Futures / Options": 10
};

export class personalInfo {
    age;
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
        this.personalInfo = new personalInfo;
        this.personalInfo.ability = 0;
        this.personalInfo.willingness = 0;
    }

    setAge(age) {
        var score = 0;
        if (age >= 18 && age < 26) {
            score = 5;
        }
        else if (age >= 26 && age < 35) {
            score = 5;
        }
        else if (age >= 35 && age < 44) {
            score = 5;
        }
        else if (age >= 44 && age < 50) {
            score = 4;
        }
        else if (age >= 50 && age < 60) {
            score = 3;
        }
        else if (age >= 60 && age < 65) {
            score = 2;
        }
        else if (age >= 65) {
            score = 1;
        }
        this.personalInfo.ability += score;
        this.personalInfo.age = age;
        return this;
    }

    setAnnualIncome(annualIncome) {
        var score = 0;
        if (annualIncome < 25000) {
            score = 0;
        }
        else if (annualIncome >= 25000 && annualIncome < 50000) {
            score = 3;
        }
        else if (annualIncome >= 50000 && annualIncome < 100000) {
            score = 6;
        }
        else if (annualIncome >= 100000 && annualIncome < 200000) {
            score = 8;
        }
        else if (annualIncome >= 200000) {
            score = 10;
        }

        this.personalInfo.ability += score;
        this.personalInfo.annualIncome = annualIncome;
        return this;
    }

    setProportion(proportion) {
        var score = 0;
        if (proportion >= 0 && proportion < 26) {
            score = 10;
        }
        else if (proportion >= 26 && proportion < 51) {
            score = 8;
        }
        else if (proportion >= 51 && proportion < 76) {
            score = 5;
        }
        else if (proportion >= 76 && proportion < 101) {
            score = 0;
        }

        this.personalInfo.ability += score;
        this.personalInfo.proportion = proportion;
        return this;
    }

    setInvestmentHorizon(investmentHorizon) {
        var score = 0;
        if (investmentHorizon == "short") {
            score = 0;
        }
        else if (investmentHorizon == "medium") {
            score = 5;
        }
        else if (investmentHorizon == "long") {
            score = 10;
        }

        this.personalInfo.ability += score;
        this.personalInfo.investmentHorizon = investmentHorizon;
        return this;
    }

    setImportant(important) {
        var score = 0;
        if (important == "Minimising losses") {
            score = 0;
        }
        else if (important == "Maximing profit") {
            score = 10;
        }
        else if (important == "Both equally") {
            score = 5;
        }

        this.personalInfo.willingness += score;
        this.personalInfo.important = important;
        return this;
    }

    setDownturn(downturn) {
        var score = 0;
        if (downturn == "Sell all your portfolio") {
            score = 0;
        }
        else if (downturn == "Sell some of your portfolio") {
            score = 4;
        }
        else if (downturn == "Wait") {
            score = 8;
        }
        else if (downturn == "Buy more") {
            score = 10;
        }

        this.personalInfo.willingness += score;
        this.personalInfo.downturn = downturn;
        return this;
    }

    setSustain(sustain) {
        var score = 0;
        if (sustain == "limited") {
            score = 0;
        }
        else if (sustain == "medium") {
            score = 8;
        }
        else if (sustain == "large") {
            score = 15;
        }

        this.personalInfo.ability += score;
        this.personalInfo.sustain = sustain;
        return this;
    }

    setUncertainReturns(uncertainReturns) {
        var score = 0;
        if (uncertainReturns == "Strongly agree") {
            score = 0;
        }
        else if (uncertainReturns == "Agree") {
            score = 3;
        }
        else if (uncertainReturns == "Disagree") {
            score = 6;
        }
        else if (uncertainReturns == "Strongly Disagree") {
            score = 10;
        }

        this.personalInfo.willingness += score;
        this.personalInfo.uncertainReturns = uncertainReturns;
        return this;
    }

    setWithdraw(withdraw) {
        var score = 0;
        if (withdraw == "No") {
            score = 10;
        }
        else if (withdraw == "Up to 25% of funds") {
            score = 5;
        }
        else if (withdraw == "Between 25% and 50% of funds") {
            score = 2;
        }
        else if (withdraw == "More than 50% of funds") {
            score = 0;
        }

        this.personalInfo.ability += score;
        this.personalInfo.withdraw = withdraw;
        return this;
    }

    setInstruments(instruments) {
        const getMaxOfArray = arr => {
            return Math.max.apply(null, arr);
        }

        this.personalInfo.ability += getMaxOfArray(Object.values(instruments));
        this.personalInfo.instruments = Object.keys(instruments);
        return this;
    }

    getInfo() {
        const ability = this.personalInfo.ability * 100 / 700;
        const willingness = this.personalInfo.willingness * 100 / 30;
        this.personalInfo.score = Math.round(Math.min(ability, willingness));
        log.info(JSON.stringify(this.personalInfo));
        return this.personalInfo;
    }
} 