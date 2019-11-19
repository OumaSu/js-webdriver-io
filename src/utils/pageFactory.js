import googlePage from "../pages/googlePage";
import samplePage from "../pages/samplePage";

const page = type => {
  const pages = {
    googlePage: () => googlePage(),
    samplePage: () => samplePage()
  };

  return pages[type]();
};

export { page };
