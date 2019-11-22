import googlePage from "../pages/googlePage";
import samplePage from "../pages/samplePage";

export const page = type => {
  const pages = {
    googlePage: () => new googlePage(),
    samplePage: () => new samplePage()
  };

  return pages[type]();
};
