const googlePage = require("../pages/googlePage");
const samplePage = require("../pages/samplePage");

module.exports.page = function (type) {
  const pages = {
    googlePage: function() { return new googlePage() },
    samplePage: () => { return new samplePage(); }
  };

  return pages[type]();
};