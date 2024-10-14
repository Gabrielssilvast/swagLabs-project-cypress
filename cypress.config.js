const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {},
  },
  env: {
    baseUrl: "https://www.saucedemo.com",
  },
});
