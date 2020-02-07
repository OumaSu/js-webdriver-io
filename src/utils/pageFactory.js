import samplePage from "../pages/samplePage";
import getStartedPage from "../pages/getStartedPage";
import mainPage from "../pages/mainPage";
import productTypePage from "../pages/productTypePage";

export const getPage = type => {
  const pages = {
    samplePage: () => new samplePage(),
    getStartedPage: () => new getStartedPage(),
    mainPage: () => new mainPage(),
    productTypePage: () => new productTypePage()
  };

  return pages[type]();
};
