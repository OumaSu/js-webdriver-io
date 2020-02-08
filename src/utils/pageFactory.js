import samplePage from "../pages/samplePage";
import getStartedPage from "../pages/getStartedPage";
import mainPage from "../pages/mainPage";
import productTypePage from "../pages/productTypePage";
import annualIncomePage from "../pages/personalInfo/annualIncomePage";
import instrumentsPage from "../pages/personalInfo/instrumentsPage";
import investableAssetsPage from "../pages/personalInfo/investableAssetsPage";
import lossPage from "../pages/personalInfo/lossPage";
import moreImportantPage from "../pages/personalInfo/moreImportantPage";
import timeFramePage from "../pages/personalInfo/timeFramePage";
import uncertainReturnsPage from "../pages/personalInfo/uncertainReturnsPage";
import whatWouldYouDoPage from "../pages/personalInfo/whatWouldYouDoPage";
import withdrawPage from "../pages/personalInfo/withdrawPage";
import userInfoOnboardPage from "../pages/userInfoOnboardPage";
import reviewPage from "../pages/personalInfo/reviewPage";

export const getPage = type => {
  const pages = {
    samplePage: () => new samplePage(),
    getStartedPage: () => new getStartedPage(),
    mainPage: () => new mainPage(),
    annualIncomePage: () => new annualIncomePage(),
    instrumentsPage: () => new instrumentsPage(),
    investableAssetsPage: () => new investableAssetsPage(),
    lossPage: () => new lossPage(),
    moreImportantPage: () => new moreImportantPage(),
    timeFramePage: () => new timeFramePage(),
    uncertainReturnsPage: () => new uncertainReturnsPage(),
    whatWouldYouDoPage: () => new whatWouldYouDoPage(),
    withdrawPage: () => new withdrawPage(),
    productTypePage: () => new productTypePage(),
    userInfoOnboardPage: () => new userInfoOnboardPage(),
    reviewPage: () => new reviewPage()
  };

  return pages[type]();
};
