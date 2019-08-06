// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-article-js": () => import("D:\\Try\\taxprepnearme\\src\\templates\\article.js" /* webpackChunkName: "component---src-templates-article-js" */),
  "component---src-templates-category-js": () => import("D:\\Try\\taxprepnearme\\src\\templates\\category.js" /* webpackChunkName: "component---src-templates-category-js" */),
  "component---cache-dev-404-page-js": () => import("D:\\Try\\taxprepnearme\\.cache\\dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("D:\\Try\\taxprepnearme\\src\\pages\\404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-articles-js": () => import("D:\\Try\\taxprepnearme\\src\\pages\\articles.js" /* webpackChunkName: "component---src-pages-articles-js" */),
  "component---src-pages-contact-js": () => import("D:\\Try\\taxprepnearme\\src\\pages\\contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("D:\\Try\\taxprepnearme\\src\\pages\\index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-pricing-js": () => import("D:\\Try\\taxprepnearme\\src\\pages\\pricing.js" /* webpackChunkName: "component---src-pages-pricing-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "D:\\Try\\taxprepnearme\\.cache\\data.json")

