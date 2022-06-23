const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://wj-qa-automation-test.github.io/qa-test',
    viewportWidth: 1440,
    viewportHeight: 900
  },
});
