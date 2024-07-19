module.exports = {
  globDirectory: "dist/",
  globPatterns: ["**/*.{js,html,png,ico,json,jpg}"],
  swDest: "dist/sw.js",
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
};
