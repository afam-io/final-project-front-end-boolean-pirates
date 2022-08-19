const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '648bmz',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
