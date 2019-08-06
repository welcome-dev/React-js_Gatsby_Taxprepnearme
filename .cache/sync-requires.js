const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-article-js": hot(preferDefault(require("D:\\Try\\taxprepnearme\\src\\templates\\article.js"))),
  "component---src-templates-category-js": hot(preferDefault(require("D:\\Try\\taxprepnearme\\src\\templates\\category.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\Try\\taxprepnearme\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\Try\\taxprepnearme\\src\\pages\\404.js"))),
  "component---src-pages-articles-js": hot(preferDefault(require("D:\\Try\\taxprepnearme\\src\\pages\\articles.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("D:\\Try\\taxprepnearme\\src\\pages\\contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\Try\\taxprepnearme\\src\\pages\\index.js"))),
  "component---src-pages-pricing-js": hot(preferDefault(require("D:\\Try\\taxprepnearme\\src\\pages\\pricing.js")))
}

